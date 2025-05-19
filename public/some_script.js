document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".main_navigation a");

    for (let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];
    
        if (item.pathname === document.location.pathname) {
            item.classList.add("active"); 
        }
    }

    topbar.show();

    (function () {
        let loadTime = performance.now(); 
        let footer = document.querySelector("footer");
        footer.textContent = `Время загрузки страницы: ${loadTime.toFixed(3)} миллисекунд`;
    })();

    setTimeout(function() {
        topbar.hide();
        console.log("HIDE")
    }, 3000); 
});
