const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.menu-link');
const closeMenu = document.querySelector('.close-menu');

hamburgerMenu.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    closeMenu.classList.toggle('visible'); // Toggle visibility of close menu
});

closeMenu.addEventListener('click', () => {
    menuLinks.classList.remove('active');
    closeMenu.classList.remove('visible'); // Hide close menu
});