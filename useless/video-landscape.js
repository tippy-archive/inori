document.addEventListener('DOMContentLoaded', () => {
    const videoIframe = document.getElementById('google-iframe');

     // 전체 화면 변경 이벤트 리스너 추가
    // 'fullscreenchange'는 대부분의 현대 브라우저에서 사용됩니다.
    // 'webkitfullscreenchange'는 Safari (iOS) 호환성을 위해 추가합니다.
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

    function handleFullscreenChange() {
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

        if (fullscreenElement === videoIframe) {
            // 비디오 iframe이 전체 화면 모드로 진입했을 때
            console.log('Video entered fullscreen.');
            try {
                // 화면을 가로 모드로 잠그려고 시도
                // 이 API는 보안상의 이유로 사용자 상호작용이나 특정 컨텍스트에서만 작동합니다.
                if (screen.orientation && screen.orientation.lock) {
                    screen.orientation.lock('landscape')
                        .then(() => {
                            console.log('Screen orientation locked to landscape.');
                        })
                        .catch((error) => {
                            console.warn('Failed to lock screen orientation to landscape:', error);
                            // 사용자에게 메시지를 표시하는 대신 콘솔에 경고를 남깁니다.
                            // 강제로 팝업을 띄우지 않습니다.
                        });
                } else {
                    console.warn('Screen Orientation API not supported or lock method not available.');
                }
            } catch (e) {
                console.error('Error attempting to lock screen orientation:', e);
            }
        } else {
            // 비디오 iframe이 전체 화면 모드에서 벗어났을 때
            console.log('Video exited fullscreen.');
            try {
                // 잠금 해제 시도
                if (screen.orientation && screen.orientation.unlock) {
                    screen.orientation.unlock();
                    console.log('Screen orientation unlocked.');
                }
            } catch (e) {
                console.error('Error attempting to unlock screen orientation:', e);
            }
        }
    }
});