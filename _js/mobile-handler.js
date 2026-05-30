(function () {
    const imageUrls = [
        'https://lh3.googleusercontent.com/pw/AP1GczMW6W6uDB1hFLUcjfvcD-ds17onwN80Io7HUiIDbnQmOYMqcMYf_UZoNGCSGiGwWBIjnKKe8OONwFk8BN8efR31G2vVdplezXXFY1Q0_RP8qnPAqceRRa3GXplMscGnhwxNUprvp5CMwL-pyBksWa8t',
        'https://lh3.googleusercontent.com/pw/AP1GczPy-tm8ABGVEMbnGVFjvW6QPdW_bu8vbWQQwlVOqA_FZ4UYjQUaWQU0CZOvzpX1l5STrjQxZwvxB1Z-TgKKIOL0m2YkmGI5O4YRP-4XX2vkJP5QV-4aLtZzBJA4S2rT66xs9mh8DdjP_alW1xFYs82P',
        'https://lh3.googleusercontent.com/pw/AP1GczMx3U2Kbl4pCpL1kL90XD4Q4Mk5eSe-ns2MwWtJT9Go3dsC2PeolkTdbJuQTt0N41XY4s5QjepgTDKPgyXFwor0Yz99boqQgFM39UyE5hfLwbKfvjFdfpRR3t7qW125_V4K8DEBWwcMTOP5Mdkw-svy'
    ];

    if (window.innerWidth > 480) return;

    const loader = document.createElement('div');
    loader.id = 'mobile-loader';
    loader.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: #fff; z-index: 9999; display: flex; flex-direction: column;
        align-items: center; justify-content: center; transition: opacity 0.5s ease;
    `;

    const loaderImage = document.createElement('img');
        loaderImage.id = 'loader-image';
        loaderImage.style.cssText = `
            width: 80vw;
            aspect-ratio: 2 / 3;
            border-radius: 12px;
            margin-bottom: 20px;
            object-fit: cover;
            box-shadow: 0 2px 10px rgba(0,0,0,0.8);
        `;

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    loaderImage.src = imageUrls[randomIndex];

    const loaderText = document.createElement('div');
    loaderText.id = 'loader-text';
    loaderText.style.cssText = `font-size: 24px; color: #6EC0FF; font-weight: bold;`;
    loaderText.innerText = 'Loading';

    loader.appendChild(loaderImage);
    loader.appendChild(loaderText);

    document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(loader);
    });

    let dotCount = 0;
    const dotInterval = setInterval(function () {
        const textElement = document.getElementById('loader-text');
        if (textElement) {
            dotCount = (dotCount + 1) % 4;
            textElement.innerText = 'Loading' + '.'.repeat(dotCount);
        }
    }, 300);

    window.addEventListener('load', function () {
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