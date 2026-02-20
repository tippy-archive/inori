(function() {
    const currentScript = document.currentScript;
    const parentContainer = currentScript.parentElement;
    const jsonUrl = '_data/stream.json';

    window.dataLoader = window.dataLoader.then(async () => {
        try {
            const response = await fetch(jsonUrl);
            const data = await response.json();

            window.globalData.push(...data);

            parentContainer.innerHTML = data
                .map(item => `
                    <a href="${item.u}">
                        <ul class="list-select playlist-main">
                            <li class="list-img"><img src="${item.i}"/></li>
                            <li class="list-title"><p>${item.t}</p></li>
                        </ul>
                    </a>
                `).join('');

        } catch (error) {
            console.error(`${jsonUrl} 로드 실패:`, error);
        }
    });
})();