const activateNavItem = () => {
    let navItem = document.querySelectorAll('.nav__item');
    for (let el of navItem) {
        if (el.href == window.location.href) {
            el.classList.add('nav__item--active');
        } else if (window.location.pathname == '/') {
            document.querySelector('.nav__konsult').classList.add('nav__item--active')
        } else if (window.location.href.indexOf('/trainDesc.html') != -1) {
            document.querySelector('.nav__train').classList.add('nav__item--active');
        }
    }
}

export default activateNavItem;
