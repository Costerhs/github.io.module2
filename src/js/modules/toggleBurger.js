function toggleBurger() {
    let bgMenu = document.querySelector('.burger');
    let openMenu = document.querySelector('.header__door');
    let closeMenu = document.querySelector('.burger__close');

    function toggleClassMenu(element) {
        element?.addEventListener('click', function () {
            bgMenu?.classList.toggle('burger--notActive');
        })
    }

    toggleClassMenu(openMenu);
    toggleClassMenu(closeMenu);
}

export default toggleBurger;