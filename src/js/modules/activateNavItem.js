const activateNavItem = () => {
    let navItem = document.querySelectorAll('.nav__item');
    for (let el of navItem) {
        if (el.href.indexOf(window.location.pathname.split('/')[1]) > 0) {
            el.classList.add('nav__item--active');
        } else if (window.location.pathname.length <= 1) {
            document.querySelector('.nav__konsult').classList.add('nav__item--active')
        }
    }
}

export default activateNavItem;