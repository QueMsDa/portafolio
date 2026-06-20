(function () {
    var KEY = 'portfolio-dark-mode';

    function applyMode(dark) {
        document.documentElement.classList.toggle('dark-mode', dark);
        var btn = document.getElementById('btn-dark-mode');
        if (btn) btn.textContent = dark ? '☀' : '☾';
    }

    applyMode(localStorage.getItem(KEY) === 'dark');

    function initDarkToggle() {
        var btn = document.getElementById('btn-dark-mode');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var isDark = document.documentElement.classList.contains('dark-mode');
            applyMode(!isDark);
            localStorage.setItem(KEY, !isDark ? 'dark' : 'light');
        });
    }

    function initHamburger() {
        var burger = document.getElementById('burger');
        var navLinks = document.getElementById('navLinks');
        if (!burger || !navLinks) return;

        function closeMenu() {
            navLinks.classList.remove('open');
            burger.classList.remove('is-open');
        }

        burger.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = navLinks.classList.toggle('open');
            burger.classList.toggle('is-open', isOpen);
        });

        navLinks.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', closeMenu);
        });

        document.addEventListener('click', function (e) {
            if (navLinks.classList.contains('open') &&
                !navLinks.contains(e.target) &&
                !burger.contains(e.target)) {
                closeMenu();
            }
        });
    }

    function initUnitTabs() {
        var bubbles = document.querySelectorAll('.unit-bubble');
        if (!bubbles.length) return;

        bubbles.forEach(function (bubble) {
            bubble.addEventListener('click', function () {
                var target = bubble.getAttribute('data-unit');
                var isActive = bubble.classList.contains('active');

                document.querySelectorAll('.unit-bubble').forEach(function (b) {
                    b.classList.remove('active');
                });
                document.querySelectorAll('.unit-section').forEach(function (s) {
                    s.classList.remove('active');
                });

                if (!isActive) {
                    bubble.classList.add('active');
                    var section = document.getElementById(target);
                    if (section) {
                        section.classList.add('active');
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });
    }

    function init() {
        initDarkToggle();
        initHamburger();
        initUnitTabs();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
