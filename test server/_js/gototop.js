/* gototop.js 수정 제안 */
var mybutton = document.getElementById("gototop");

function scrollFunction() {
    // 크로스 브라우징을 위한 안전한 스크롤 위치 확인
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    
    // 버튼이 존재하는지 확인 후 스타일 변경
    if (mybutton) {
        if (scrollTop > 400) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    // 부드럽게 상단으로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 1. 기존 window.onscroll = ... 방식을 아래처럼 변경 (충돌 방지)
window.addEventListener('scroll', scrollFunction);
window.addEventListener('resize', scrollFunction);

// 2. span 클릭 이벤트 (기존 기능 유지하되, 더 안전하게 작성)
document.addEventListener('click', function(e) {
    // 클릭된 요소가 .main-playlist 내부의 span이거나 그 자식 요소인 경우
    var clickedSpan = e.target.closest('.main-playlist span');
    
    if (clickedSpan) {
        e.preventDefault(); // 혹시 모를 기본 동작(링크 이동 등) 방지
        topFunction();
    }
});

// 버튼 자체 클릭 이벤트도 JS에서 처리하는 것을 권장 (HTML의 onclick 제거 가능)
if (mybutton) {
    mybutton.addEventListener('click', topFunction);
}