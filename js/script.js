const menuToggle = document.querySelector('.menu-toggle');
const lista = document.querySelector('.menu_header');

function alternarMenu() {
    lista.classList.toggle('active');
}


menuToggle.addEventListener('click', alternarMenu);