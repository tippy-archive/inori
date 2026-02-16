const VideoMain = document.getElementById('video-main');
const MainVideoTitle = document.getElementById('main-video-title');
const MainVideoSubtitle = document.getElementById('main-video-subtitle');
const PlaylistContainer = document.querySelector('.main-playlist');
let currentIframe;

PlaylistContainer.addEventListener('click', (event) => {
	const span = event.target.closest('span');

	if (!span || !span.dataset.iframeUrl) return;

	const iframeUrl = span.dataset.iframeUrl;
	const title = span.dataset.title;
	const subtitle = span.dataset.subtitle;

	if (currentIframe) {
		VideoMain.removeChild(currentIframe);
		currentIframe = null;
	}

	if (iframeUrl) {
		const newIframe = document.createElement('iframe');
		newIframe.src = iframeUrl;
		newIframe.id = 'google-iframe';
		newIframe.allowFullscreen = true;
		newIframe.setAttribute('allow', 'fullscreen');

		VideoMain.classList.add('video-main');
		VideoMain.appendChild(newIframe);
		currentIframe = newIframe;
	}

	MainVideoTitle.textContent = title || "";
	MainVideoSubtitle.textContent = subtitle || "";
});