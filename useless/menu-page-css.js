    function loadMobileCSS() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '../css/menu-page-js-mobile.css';
        document.head.appendChild(link);
      }
    }
	// 페이지 로드 시 즉시 실행
    loadMobileCSS();
	
    // 창 크기 변경 시 다시 확인하여 적용
    window.addEventListener('resize', loadDeviceCSS);