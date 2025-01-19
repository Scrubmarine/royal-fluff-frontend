document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navBar = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle the navigation menu
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
        navBar.classList.toggle('open');
    });

    // Close the menu and scroll to the target section when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior

            const targetId = link.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close the menu
            navBar.classList.remove('open');
            burgerMenu.classList.remove('open');
        });
    });
});