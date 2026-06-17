(function () {
    var KEY = 'portfolio-dark-mode';

    function applyMode(dark) {
        document.documentElement.classList.toggle('dark-mode', dark);
        var btn = document.getElementById('btn-dark-mode');
        if (btn) btn.textContent = dark ? '☀' : '☾';
    }

    applyMode(localStorage.getItem(KEY) === 'dark');

    function init() {
        var btn = document.getElementById('btn-dark-mode');
        if (btn) {
            btn.addEventListener('click', function () {
                var isDark = document.documentElement.classList.contains('dark-mode');
                applyMode(!isDark);
                localStorage.setItem(KEY, !isDark ? 'dark' : 'light');
            });
        }

        var burger = document.getElementById('burger');
        var navLinks = document.getElementById('navLinks');
        if (burger && navLinks) {
            burger.addEventListener('click', function () {
                navLinks.classList.toggle('open');
            });
            navLinks.querySelectorAll('a').forEach(function (a) {
                a.addEventListener('click', function () {
                    navLinks.classList.remove('open');
                });
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
