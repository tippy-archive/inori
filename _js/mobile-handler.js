(function() {
    const imageUrls = [
        'https://lh3.googleusercontent.com/pw/AP1GczNyDS5rKAU2TuJGTGe9L2Rk4XMrQKNW2vhMFnIgwwN3QAdwPY3nU2HQXCpK-i5kyqoNmDE7VE_2MAltlqqPFzH7WVNbIi8F6cAlU3mITnVDQAEYfnnLlxfFBbASdRG88sTt8Fi9aVXUSuGWnpoYs_c8=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczN98ijUtH7k4nn6tqN_xqSmSfUGnqzkrU1TrVKGTZXQf4AeNFTtWoh2JNmpzpqCmEYKF73IP3u8JJCKIRTRgPpMIGdXZoW4I3HuXRHQbqa47S995Rz1sqd35R7DH3F_xX5ErLJ-6FsPTj1Dpo4nOSlR=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczPbKbdOKBVLKAO8vg8kF8pYIs71abAerR2oy2bo1sDe1gvXpLD3xaM_9aQnqwIEJXeUdGjSSj-49cEZAWpIFMaSoS8BKOr0Aah7S_V-k6GniTp7B5r3Oftfn5mmQ1ykGRv-pSaOgjREkzejW0Y3j62M=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczOC7hcxdZ30R8YOVzu7k7tm3kvQ7SxyyKAtFGVpkAKEXAIczhiQCyjsu3mzEJymxQFJBc7fYmyYxdhO_CSG9Tstgh2r9fGHNns3j9GHSt6gLOcWYT-7oXckmgeHFDKf7xwlcUKxkePrNJ7VO4mN5Bm4=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczOmkU77pKA3zpkvGQCL5vNfU2cmX8SL0ZtyT7UhfaEeJXGVYSO3WP1Ge6gESX8AJAPbTKG2MCrRVoxdN2dU-DyPfcoYB3G_UO_BSPng0Jmx4J84hQNlo8Zo4Bh7enxSyuwb8QJQEW5vz07ZnFNSXt5t=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczNQos9IDXJDPV9lw6pb8yivCi-3ijK9U4ZrnTMMxrnruY9yszPC-froITVlNzvp-mFqc7psVEwnCe7K6DDn84Z2enbhZmPb0basL9AWQegzWG_EkI3tTiJYz8FfbyggJIR1nr2_-3VTPUxsneTBD8Tz=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczOHEJxJA24WpB48gZoR1YwhdcEYaGyHRUEehIZZaPJA07XHhKKwH22DmlhCUkxwRw-Y7HZ3LpgKV5e2GzVFZ1gFjZu6wRoFV180UdG7MCDtPDeG45nQ0cCy1VCqqYk0mbA3D2MrGqiIjNBWu69FnsTK=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczPai5oazu_pO6bTcFwLTZ4Eb1bKhlWRGg1BHgTN0bOMUQhBplT-ViLPTPttdrfUa66FWf69AoEQljaA0FaCQrhHst_rHVmv0J13HzpY1IBEnKZsjBqeQLNKkyVnS0Gap-K07fV6zlfW5Vg6G10vq26r=w800',
        'https://lh3.googleusercontent.com/pw/AP1GczOxR9mQfUeqKUxTLkyu5us0GlYf4yiIOcJEF_dPyA4Chyr9OHYuRM5LmDnOFTYEWNp6_t7s6jQaS0L46E3kjG7GgSvGZOAJKALhE53XKk9BrHaiKN1u8279GGZaqvAkqxGHa1nC6ynSv10cD2FqhBfk=w800'
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
        border-radius: 12px;
        margin-bottom: 20px;
        object-fit: cover;
        box-shadow: 0 4px 10px rgba(0,0,0,0.4);
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