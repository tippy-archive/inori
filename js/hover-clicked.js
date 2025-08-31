const items = document.querySelectorAll('.playlist-main');
let selectedItem = null; // 현재 선택된 항목을 저장하는 변수

items.forEach(item => {
    item.addEventListener('click', function() {
        if (selectedItem && selectedItem !== this) {
            // 이전에 선택된 항목이 있고, 현재 클릭된 항목과 다른 경우
            selectedItem.classList.remove('selected'); // 이전 항목의 클래스 제거
        }
        this.classList.add('selected'); // 현재 항목에 클래스 추가
        selectedItem = this; // 현재 항목을 선택된 항목으로 저장
    });
});