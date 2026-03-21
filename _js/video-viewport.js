const VideoMain = document.getElementById('video-main');
const MainVideoTitle = document.getElementById('main-video-title');
const MainVideoSubtitle = document.getElementById('main-video-subtitle');
const PlaylistContainer = document.querySelector('.main-playlist');

/* =========================================================
   1. edit.js 수정 없이 60초 자동 정지 기능 무력화하기
   ========================================================= */
// edit.js에서 생성한 인터벌 ID를 가져와 안전한 곳에 보관합니다.
let myRotationInterval = window.rotationInterval;

// 원래의 전역 변수를 null로 만듭니다. 
// 이렇게 하면 60초 뒤 edit.js의 setTimeout이 실행되어 clearInterval()을 호출할 때 
// 실제 타이머가 아닌 null을 지우게 되므로, 이미지가 멈추지 않고 계속 돌아가게 됩니다.
window.rotationInterval = null; 

/* =========================================================
   2. 초기 HTML 텍스트 상태 저장 (원상복구용)
   ========================================================= */
const defaultTitle = MainVideoTitle.innerHTML; 
const defaultSubtitle = MainVideoSubtitle.innerHTML;

let currentIframe;
let activeSpan = null;

PlaylistContainer.addEventListener('click', (event) => {
    const span = event.target.closest('span');
    if (!span || !span.dataset.iframeUrl) return;

    /* =========================================================
       3. 같은 span을 다시 클릭했을 때 (원상복구 & 이미지 재생)
       ========================================================= */
    if (activeSpan === span) {
        // iframe 제거
        if (currentIframe) {
            VideoMain.removeChild(currentIframe);
            currentIframe = null;
        }
        
        // 이미지 로딩 다시 시작 (edit.js의 전역 함수와 딜레이 변수 재활용)
        if (!myRotationInterval && typeof window.rotateimage === 'function') {
            myRotationInterval = setInterval(window.rotateimage, window.delay || 6000);
        }

        // 텍스트를 HTML 초기 상태 그대로 복구
        MainVideoTitle.innerHTML = defaultTitle;
        MainVideoSubtitle.innerHTML = defaultSubtitle;

        // 클릭된 상태(hover 방지) 해제
        span.classList.remove('is-active');
        activeSpan = null;
        return; 
    }

    /* =========================================================
       4. 새로운 span을 클릭했을 때 (iframe 재생 & 이미지 정지)
       ========================================================= */
    
    // 이미지 로딩 중지
    if (myRotationInterval) {
        clearInterval(myRotationInterval);
        myRotationInterval = null;
    }

    const iframeUrl = span.dataset.iframeUrl;
    const title = span.dataset.title;
    const subtitle = span.dataset.subtitle;

    // 기존 iframe 제거
    if (currentIframe) {
        VideoMain.removeChild(currentIframe);
        currentIframe = null;
    }

    // 기존에 활성화된 span 상태 해제
    if (activeSpan) {
        activeSpan.classList.remove('is-active');
    }

    // 새 iframe 생성 및 추가
    if (iframeUrl) {
        const newIframe = document.createElement('iframe');
        newIframe.src = iframeUrl;
        newIframe.id = 'google-iframe';
        newIframe.allowFullscreen = true;
        newIframe.setAttribute('allow', 'fullscreen');
        newIframe.setAttribute('allowfullscreen', 'true');

        VideoMain.classList.add('video-main');
        VideoMain.appendChild(newIframe);
        currentIframe = newIframe;
    }

    MainVideoTitle.textContent = title || "";
    MainVideoSubtitle.textContent = subtitle || "";

    // 현재 클릭한 span 활성화
    span.classList.add('is-active');
    activeSpan = span;
});

/* =========================================================
   5. CSS 파일 수정 없이 JS에서 직접 hover 방지 스타일 추가
   ========================================================= */
const style = document.createElement('style');
style.innerHTML = `
    span.is-active {
        /* 선택된 span은 마우스를 올려도(hover) 상태가 변하지 않도록 고정 */
        pointer-events: none; /* 클릭 후 hover 이벤트를 무시하게 설정 */
    }
    /* 포인터 이벤트가 none이 되면 다시 클릭해서 닫을 수 없으므로, 
       자식 요소가 클릭을 대신 받도록 설정 */
    span.is-active * {
        pointer-events: auto; 
    }
`;
document.head.appendChild(style);