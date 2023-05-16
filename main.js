const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Toggle es para gestionar el estado
menuEmail.addEventListener('click', toggleDesktopMenu);

// Se usa toggle para ver si tiene o no tiene el evento y classlist para acceder
// al listado de clases de desktop-menu
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}