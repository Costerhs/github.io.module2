const activateNavItem = () => {
    let navItem = document.querySelectorAll('.nav__item');
    for (let el of navItem) {
        if (el.href.indexOf(window.location.pathname.split('/')[1]) > 0) {
            el.classList.add('nav__item--active');
        } else if (window.location.pathname.length <= 1) {
            document.querySelector('.nav__konsult').classList.add('nav__item--active')
        } else if (window.location.pathname === '/trainDesc.html') {
            document.querySelector('.nav__train').classList.add('nav__item--active');
            console.log('as')
        }
        console.log(window.location.pathname)
    }
}

export default activateNavItem;