if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.onbeforeunload = function() {
    localStorage.setItem('lastScrollPos', window.scrollY);
};

window.onload = function() {
    const lastPos = localStorage.getItem('lastScrollPos');

    window.scrollTo(0, 0);

    if (lastPos) {
        setTimeout(function() {
            window.scrollTo({
                top: parseInt(lastPos),
                behavior: 'smooth'
            });
            localStorage.removeItem('lastScrollPos');
        }, 10);
    }
};