const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links-cont');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuIcon.textContent = 'close';
    } else {
        menuIcon.textContent = 'menu';
    }
});