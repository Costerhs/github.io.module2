const activateNavItem = () => {
    let navItem = document.querySelectorAll('.nav__item');
    for (let el of navItem) {
        if (el.href.indexOf(window.location.pathname) > 0) {
            el.classList.add('nav__item--active')
        }
    }

    console.log(window.location.pathname)
    console.log('s')
}

export default activateNavItem;