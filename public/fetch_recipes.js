document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.querySelector('.preloader');
    const tableBody = document.querySelector('#recipe-table tbody');
    const errorContainer = document.querySelector('.error-message');
    const rowTemplate = document.querySelector('#recipe-row-template').content; 

    function getRandomFilter() {
        return Math.random() > 0.5 ? 'gt' : 'lt';
    }

    function fetchRecipes() {
        const filter = getRandomFilter();
        preloader.style.display = 'block';

        let filterValue = filter === 'gt' ? 100 : 200;
        const url = `https://dummyjson.com/recipes?filter=${filter}&id=${filterValue}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                return response.json();
            })
            .then(data => {
                const recipes = data.recipes;
                tableBody.innerHTML = '';

                recipes.forEach(recipe => {
                    const row = rowTemplate.cloneNode(true);

                    row.querySelector('.recipe-name').textContent = recipe.name;
                    row.querySelector('.ingredients-count').textContent = recipe.ingredients.length;
                    row.querySelector('.cook-time').textContent = `${recipe.cookTimeMinutes} минут`;
                    row.querySelector('.calories').textContent = `${recipe.caloriesPerServing} ккал`;
                    row.querySelector('.cuisine').textContent = recipe.cuisine;
                    row.querySelector('.rating').textContent = recipe.rating;

                    tableBody.appendChild(row);
                });

                preloader.style.display = 'none'; 
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
                preloader.style.display = 'none'; 

                errorContainer.textContent = '⚠ Что-то пошло не так. Попробуйте позже.';
                errorContainer.style.display = 'block';
            });
    }

    fetchRecipes(); 
});