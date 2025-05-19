let db;

function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('ShoppingDB', 1);

        request.onupgradeneeded = function(event) {
            const db = event.target.result;
            
            if (!db.objectStoreNames.contains('selectedDishes')) {
                db.createObjectStore('selectedDishes');
            }
            if (!db.objectStoreNames.contains('shoppingList')) {
                db.createObjectStore('shoppingList');
            }
            if (!db.objectStoreNames.contains('shoppingState')) {
                db.createObjectStore('shoppingState');
            }
        };

        request.onsuccess = function(event) {
            db = event.target.result;
            resolve(db);
        };

        request.onerror = function(event) {
            reject('Ошибка при подключении к IndexedDB');
        };
    });
}

function setItem(key, value) {
    openDatabase().then(db => {
        const transaction = db.transaction(key, 'readwrite');
        const store = transaction.objectStore(key);
        store.put(value, 'data');

        transaction.onerror = function() {
            console.error('Ошибка при записи в IndexedDB');
        };
    }).catch(error => {
        console.error(error);
    });
}

function getItem(key) {
    return new Promise((resolve, reject) => {
        openDatabase().then(db => {
            const transaction = db.transaction(key, 'readonly');
            const store = transaction.objectStore(key);
            const getRequest = store.get('data');

            getRequest.onsuccess = function() {
                resolve(getRequest.result);
            };

            getRequest.onerror = function() {
                reject('Ошибка при извлечении данных');
            };
        }).catch(error => {
            reject('Ошибка при подключении к базе данных');
        });
    });
}

document.getElementById("shopping_list_Form").addEventListener("submit", function(event) {
    event.preventDefault();

    const selectedDishes = Array.from(document.querySelectorAll('input[name="dishes"]:checked')).map(input => input.value);

    setItem("selectedDishes", selectedDishes);

    if (selectedDishes.length === 0) {
      alert("Вы забыли выбрать блюдо :(");
      return;
    }

    const recipes = {
      "Салат Оливье": ["Картофель", "Морковь", "Горошек", "Колбаса", "Яйца", "Майонез"],
      "Борщ": ["Свекла", "Капуста", "Картофель", "Морковь", "Мясо", "Лук"],
      "Паста Карбонара": ["Спагетти", "Бекон", "Яйца", "Пармезан", "Сливки"],
      "Куриное филе с овощами": ["Куриное филе", "Перец болгарский", "Брокколи", "Морковь", "Сметана"]
    };

    let shoppingList = new Set();
    selectedDishes.forEach(dish => {
      recipes[dish].forEach(ingredient => shoppingList.add(ingredient));
    });

    setItem("shoppingList", Array.from(shoppingList));

    displayShoppingList(Array.from(shoppingList));
    toggleClearButton(Array.from(shoppingList));

    toastr.success("Список покупок успешно создан!", "Успех", {
        "positionClass": "toast-top-right", 
        "timeOut": 3000
    });
});

function displayShoppingList(ingredients) {
    const container = document.getElementById("generatedList");
    container.innerHTML = '';

    if (ingredients.length > 0){
        const listTitle = document.createElement("h3");
        listTitle.innerText = "Список покупок:";
        container.appendChild(listTitle);
    }    

    const list = document.createElement("ul");

    getItem("shoppingState").then(savedShoppingState => {
        if (!savedShoppingState) {
            savedShoppingState = {};
        }

        ingredients.forEach((ingredient, index) => {
            const listItem = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            const uniqueIndex = `ingredient-${index}`;
            checkbox.id = uniqueIndex;

            if (savedShoppingState[ingredient]) {
                checkbox.checked = true;
                listItem.style.textDecoration = "line-through"; 
            }

            checkbox.addEventListener("change", function() {
                listItem.style.textDecoration = this.checked ? "line-through" : "none";

                savedShoppingState[ingredient] = this.checked;
                setItem("shoppingState", savedShoppingState);
            });

            const label = document.createElement("label");
            label.setAttribute("for", uniqueIndex);
            label.textContent = " " + ingredient;

            listItem.appendChild(checkbox);      
            list.appendChild(listItem);
            listItem.appendChild(label);
        });

        container.appendChild(list);
    }).catch(error => {
        console.error(error);
    });
}

function toggleClearButton(ingredients) {
    const container = document.getElementById("generatedList");

    if (ingredients && ingredients.length > 0) {
        if (!document.getElementById("clearShoppingListButton")) {
            const clearButton = document.createElement("button");
            clearButton.id = "clearShoppingListButton";
            clearButton.innerText = "Очистить список покупок";
            clearButton.addEventListener("click", function() {
                setItem("shoppingList", []);
                setItem("shoppingState", {});
                displayShoppingList([]); 
                toggleClearButton([]);
                toastr.warning("Список покупок очищен.", "Очистка");
            });
            container.appendChild(clearButton);  
        }
    } else {
        const clearButton = document.getElementById("clearShoppingListButton");
        if (clearButton) {
            clearButton.remove();  
        }
    }
}

window.addEventListener("load", function() {
    getItem("selectedDishes").then(savedDishes => {
        if (savedDishes && savedDishes.length > 0) {
            savedDishes.forEach(dish => {
                const checkbox = document.querySelector(`input[name="dishes"][value="${dish}"]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
    }).catch(error => {
        console.error(error);
    });

    getItem("shoppingList").then(savedShoppingList => {
        if (savedShoppingList && savedShoppingList.length > 0) {
            displayShoppingList(savedShoppingList);
            toggleClearButton(savedShoppingList);
        }
    }).catch(error => {
        console.error(error);
    });
});
