// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    hamburgerBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animación del botón a X
        hamburgerBtn.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.hamburger')) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
});