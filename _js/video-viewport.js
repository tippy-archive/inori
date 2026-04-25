window.addEventListener('load', () => {
    const VideoMain = document.getElementById('video-main');
    const MainVideoTitle = document.getElementById('main-video-title');
    const MainVideoSubtitle = document.getElementById('main-video-subtitle');
    const PlaylistContainer = document.querySelector('.main-playlist');

    if (!VideoMain || !PlaylistContainer) return;

    
    const defaultTitle = MainVideoTitle.innerHTML;
    const defaultSubtitle = MainVideoSubtitle.innerHTML;
    let currentIframe = null;
    let activeSpan = null;

    PlaylistContainer.addEventListener('click', (event) => {
        const span = event.target.closest('span');
        if (!span) return;

        const playlistMain = span.querySelector('.playlist-main');

        const dataSource = span.dataset.iframeUrl ? span : playlistMain;
        if (!dataSource) return;

        const { iframeUrl, title, subtitle } = dataSource.dataset;

        if (activeSpan === span) {
            if (currentIframe) {
                VideoMain.removeChild(currentIframe);
                currentIframe = null;
            }

            if (!window.rotationInterval && typeof window.rotateimage === 'function') {
                window.rotationInterval = setInterval(window.rotateimage, window.delay || 6000);
            }

            MainVideoTitle.innerHTML = defaultTitle;
            MainVideoSubtitle.innerHTML = defaultSubtitle;
            span.classList.remove('selected');
            if (playlistMain) playlistMain.classList.remove('selected');
            
            activeSpan = null;
            return;
        }

        if (window.rotationInterval) {
            clearInterval(window.rotationInterval);
            window.rotationInterval = null;
        }

        if (activeSpan) {
            activeSpan.classList.remove('selected');
            const oldInner = activeSpan.querySelector('.playlist-main');
            if (oldInner) oldInner.classList.remove('selected');
        }

        if (currentIframe) {
            VideoMain.removeChild(currentIframe);
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

        span.classList.add('selected');
        if (playlistMain) playlistMain.classList.add('selected');
        activeSpan = span;
    });
});