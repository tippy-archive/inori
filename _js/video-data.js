async function loadContentByFilename() {
	try {
		const fullPath = window.location.pathname;
		const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
		const pageKey = fileName.split('.')[0];

		const response = await fetch('_data.json');
		const data = await response.json();

		const listData = data[pageKey];
		if (!listData) {
			console.error("매칭되는 데이터가 없습니다.");
			return;
		}

		const container = document.querySelector('.main-playlist');
		container.innerHTML = listData.map(item => `
            <span data-title="${item.t}" 
                  data-subtitle="${item.s}" 
                  data-iframe-url="${item.v}">
                <ul class="playlist-main">
                    <li class="playlist-img"><img src="${item.i}"/></li>
                    <li class="playlist-title">${item.l}</li>
                </ul>
            </span>
        `).join('');

	} catch (error) {
		console.error("로딩 실패:", error);
	}
}

window.addEventListener('DOMContentLoaded', () => {
	loadContentByFilename();
	setupPlaylistClickHandler();
});

function setupPlaylistClickHandler() {
	const container = document.querySelector('.main-playlist');
	let selectedItem = null;

	container.addEventListener('click', function(e) {
		const clickedItem = e.target.closest('.playlist-main');

		if (clickedItem) {
			if (selectedItem && selectedItem !== clickedItem) {
				selectedItem.classList.remove('selected');
			}
			clickedItem.classList.add('selected');
			selectedItem = clickedItem;
		}
	});
}