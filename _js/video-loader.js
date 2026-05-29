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

        container.innerHTML = listData
            .filter(item => item.t && item.s)
            .map(item => {

                const videoFullUrl = `https://drive.google.com/file/d/${item.v}`;
                const imageFullUrl = `https://lh3.googleusercontent.com/pw/AP1Gcz${item.i}`;

                return `
                    <span data-title="${item.t}" 
                          data-subtitle="${item.s}" 
                          data-iframe-url="${videoFullUrl}">
                        <ul class="playlist-main">
                            <li class="playlist-img"><img src="${imageFullUrl}"/></li>
                            <li class="playlist-title">${item.l}</li>
                       </ul>
                    </span>
                `;
            }).join('');

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

    container.addEventListener('click', function (e) {
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

function setupPlaylistClickHandler() {
    const container = document.querySelector('.main-playlist');
    let selectedItem = null;

    container.addEventListener('click', function (e) {
        const clickedSpan = e.target.closest('span');

        if (clickedSpan) {
            const clickedItem = clickedSpan.querySelector('.playlist-main');

            if (selectedItem === clickedItem) {
                selectedItem.classList.remove('selected');
                selectedItem = null;

                if (typeof startFading === 'function') startFading();
            } else {
                if (selectedItem && selectedItem !== clickedItem) {
                    selectedItem.classList.remove('selected');
                }
                clickedItem.classList.add('selected');
                selectedItem = clickedItem;

                if (typeof stopFading === 'function') stopFading();
            }
        }
    });
}