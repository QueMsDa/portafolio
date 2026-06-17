(function () {
    var KEY = 'portfolio-dark-mode';

    function applyMode(dark) {
        document.documentElement.classList.toggle('dark-mode', dark);
        var btn = document.getElementById('btn-dark-mode');
        if (btn) btn.textContent = dark ? '☀️' : '🌙';
    }

    applyMode(localStorage.getItem(KEY) === 'dark');

    function wireButton() {
        var btn = document.getElementById('btn-dark-mode');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var isDark = document.documentElement.classList.contains('dark-mode');
            applyMode(!isDark);
            localStorage.setItem(KEY, !isDark ? 'dark' : 'light');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', wireButton);
    } else {
        wireButton();
    }
})();
