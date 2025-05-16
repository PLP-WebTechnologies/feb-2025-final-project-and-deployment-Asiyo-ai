document.addEventListener('DOMContentLoaded', function () {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            // Add menu toggle functionality after navbar is loaded
            const menuToggle = document.getElementById('menu-toggle');
            const menu = document.getElementById('menu');
            if (menuToggle && menu) {
                menuToggle.onclick = function () {
                    menu.classList.toggle('active');
                };
            }
        });
});
