const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const headerCatalog = document.querySelector('.header__catalog');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        headerCatalog.classList.toggle('_active');
    });
}