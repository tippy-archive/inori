window.addEventListener('load', () => {
    const VideoMain = document.getElementById('video-main');
    const MainVideoTitle = document.getElementById('main-video-title');
    const MainVideoSubtitle = document.getElementById('main-video-subtitle');
    const PlaylistContainer = document.querySelector('.main-playlist');

    if (!VideoMain || !PlaylistContainer) return;

    let myRotationInterval = window.rotationInterval;

    window.rotationInterval = null; 

    const defaultTitle = MainVideoTitle.innerHTML;
    const defaultSubtitle = MainVideoSubtitle.innerHTML;
    let currentIframe;
    let activeSpan = null;

    PlaylistContainer.addEventListener('click', (event) => {
        const span = event.target.closest('span');
        if (!span || !span.dataset.iframeUrl) return;

        if (activeSpan === span) {
            if (currentIframe) {
                VideoMain.removeChild(currentIframe);
                currentIframe = null;
            }

            if (!myRotationInterval && typeof window.rotateimage === 'function') {
                myRotationInterval = setInterval(window.rotateimage, window.delay || 6000);
            }

            MainVideoTitle.innerHTML = defaultTitle;
            MainVideoSubtitle.innerHTML = defaultSubtitle;
            span.classList.remove('is-active');
            activeSpan = null;
            return;
        }

        if (myRotationInterval) {
            clearInterval(myRotationInterval);
            myRotationInterval = null;
        }

        const { iframeUrl, title, subtitle } = span.dataset;

        if (currentIframe) {
            VideoMain.removeChild(currentIframe);
        }

        if (activeSpan) {
            activeSpan.classList.remove('is-active');
        }

        if (iframeUrl) {
            const newIframe = document.createElement('iframe');
            newIframe.src = iframeUrl;
            newIframe.id = 'google-iframe';
            newIframe.allowFullscreen = true;
            VideoMain.classList.add('video-main');
            VideoMain.appendChild(newIframe);
            currentIframe = newIframe;
        }

        MainVideoTitle.textContent = title || "";
        MainVideoSubtitle.textContent = subtitle || "";
        span.classList.add('is-active');
        activeSpan = span;
    });

    const style = document.createElement('style');
    style.innerHTML = `
        span.is-active { pointer-events: none; opacity: 0.8; }
        span.is-active * { pointer-events: auto; }
    `;
    document.head.appendChild(style);
});