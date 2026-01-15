document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav');
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // --- Menú Móvil ---
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            // Alternar la clase 'active' definida en CSS para mostrar/ocultar menú
            nav.classList.toggle('active');
        });

        // Cerrar menú automáticamente al hacer clic en un enlace
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }

    // --- Modo Oscuro ---
    if (themeToggleBtn) {
        const icon = themeToggleBtn.querySelector('i');

        // 1. Cargar preferencia guardada del usuario (si existe)
        if (localStorage.getItem('theme') === 'dark') {
            body.classList.add('dark-mode');
            if(icon) icon.classList.replace('fa-moon', 'fa-sun');
        }

        // 2. Evento al hacer clic
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const isDark = body.classList.contains('dark-mode');

            // Cambiar icono (Luna <-> Sol)
            if(icon) icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');

            // Guardar preferencia en el navegador
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});