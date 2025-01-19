document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navBar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');

    // Toggle the navigation menu
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        navBar.classList.toggle('open');
    });

    // Close the menu and scroll to the target section when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const offset = header.offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
            const scrollPosition = elementPosition - offset;

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });


            navBar.classList.remove('open');
            burgerMenu.classList.remove('open');
        });
    });
});