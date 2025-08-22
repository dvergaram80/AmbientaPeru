// Menú hamburguesa
// Menú hamburguesa - Versión mejorada
document.addEventListener('DOMContentLoaded', function() {
    // Esperar a que todo el DOM esté listo
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    
    // Verificar que los elementos existen
    if (!hamburgerBtn || !navMenu) {
        console.error('No se encontraron los elementos del menú responsive');
        return;
    }
    
    hamburgerBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Evitar que se cierre inmediatamente
        navMenu.classList.toggle('active');
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
    
    // Cerrar menú al redimensionar (opcional)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        }
    });
});