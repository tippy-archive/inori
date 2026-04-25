(function() {
    if (window.innerWidth > 480) return;

    const loader = document.createElement('div');
    loader.id = 'mobile-loader';
    loader.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: #fff; z-index: 9999; display: flex; flex-direction: column;
        align-items: center; justify-content: center; transition: opacity 0.5s ease;
    `;

    const loaderText = document.createElement('div');
    loaderText.id = 'loader-text';
    loaderText.style.cssText = `font-size: 24px; color: #6EC0FF; font-weight: bold;`;
    loaderText.innerText = 'Loading';
    
    loader.appendChild(loaderText);

    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(loader);
    });

    let dotCount = 0;
    const dotInterval = setInterval(function() {
        const textElement = document.getElementById('loader-text');
        if (textElement) {
            dotCount = (dotCount + 1) % 4;
            textElement.innerText = 'Loading' + '.'.repeat(dotCount);
        }
    }, 300);

    window.addEventListener('load', function() {
        const loader = document.getElementById('mobile-loader');
        if (!loader) return;

        const minDisplayTime = 500;

        Promise.all([
            window.dataLoader || Promise.resolve(),
            new Promise(resolve => setTimeout(resolve, minDisplayTime))
        ]).then(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                clearInterval(dotInterval);
            }, 500);
        });
    });
})();