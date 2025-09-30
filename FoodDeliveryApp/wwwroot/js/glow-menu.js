// Glow Menu JavaScript
(function () {
    'use strict';

    // Initialize the glow menu
    function initGlowMenu() {
        const menuLinks = document.querySelectorAll('.glow-menu-link');

        // Set active state based on current page
        const currentPath = window.location.pathname.toLowerCase();

        menuLinks.forEach(link => {
            const href = link.getAttribute('href');

            // Check if this link matches the current page
            if (href && currentPath.includes(href.toLowerCase()) && href !== '#') {
                link.classList.add('active');
            }

            // Handle click events
            link.addEventListener('click', function (e) {
                // Don't prevent default for actual navigation
                // Just update active states
                menuLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Theme toggle functionality (optional)
    function setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        if (!themeToggle) return;

        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');

        themeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-theme');
            const newTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            initGlowMenu();
            setupThemeToggle();
        });
    } else {
        initGlowMenu();
        setupThemeToggle();
    }
})();