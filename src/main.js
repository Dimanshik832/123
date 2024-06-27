document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const parentItem = item.parentElement;
            toggleMenuItem(parentItem);
        });
    });

    function toggleMenuItem(menuItem) {
        const allMenus = document.querySelectorAll('.menu-item');
        allMenus.forEach(menu => {
            if (menu !== menuItem && !menu.contains(menuItem)) {
                menu.classList.remove('active');
            }
        });

        menuItem.classList.toggle('active');
    }
});
