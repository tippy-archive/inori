(function() {
    const listContainers = document.querySelectorAll('.main-list[data-json]');
    
    window.globalData = window.globalData || [];
    window.dataLoader = window.dataLoader || Promise.resolve();

    listContainers.forEach(container => {
        const jsonUrl = container.getAttribute('data-json');

        window.dataLoader = window.dataLoader.then(async () => {
            try {
                const response = await fetch(jsonUrl);
                const data = await response.json();

                window.globalData.push(...data);

                container.innerHTML = data
                    .map(item => `
                        <a href="${item.u}">
                            <ul class="list-select playlist-main">
                                <li class="list-img"><img src="${item.i}" alt="${item.t}"/></li>
                                <li class="list-title"><p>${item.t}</p></li>
                            </ul>
                        </a>
                    `).join('');

            } catch (error) {
                console.error(`${jsonUrl} 로드 실패:`, error);
                container.innerHTML = '<p>데이터를 불러오는 데 실패했습니다.</p>';
            }
        });
    });
})();