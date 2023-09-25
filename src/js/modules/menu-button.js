const burger = document.querySelector('.nav-menu');
const menu = document.querySelector('.nav__list');
const body = document.body;

const aduptiveMenu = burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('no-scroll');
})


export default aduptiveMenu;