window.globalData = window.globalData || [];

(async function() {
    const currentScript = document.currentScript;
    const parentContainer = currentScript.parentElement;

    try {
        const response = await fetch('_data/live.json');
        const data = await response.json();

        window.globalData.push(...data);

        parentContainer.innerHTML = data.map(item => `
            <a href="${item.u}">
                <ul class="list-select playlist-main">
                    <li class="list-img"><img src="${item.i}"/></li>
                    <li class="list-title"><p>${item.t}</p></li>
                </ul>
            </a>
        `).join('');

    } catch (error) {
        console.error("데이터 로드 실패:", error);
    }
})();