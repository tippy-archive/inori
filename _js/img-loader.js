let delay = 6000;
let curindex = 0;
let currentActiveImageId = 'image1';
let randomimages = [];
let rotationInterval;
let isFading = false;
let preloadImage = new Image();

async function initBackgroundImages() {
    try {
        const fullPath = window.location.pathname;
        const fileName = fullPath.substring(fullPath.lastIndexOf('/') + 1);
        const pageKey = fileName.split('.')[0];

        const response = await fetch('_data.json');
        const data = await response.json();
        const listData = data[pageKey];

        if (!listData) {
            console.error("매칭되는 이미지 데이터가 없습니다.");
            return;
        }

        const imgSuffix = window.innerWidth < 480 ? '' : '=w1920';

        const uniqueImages = new Set(listData.map(item => 
            `https://lh3.googleusercontent.com/pw/AP1Gcz${item.i}${imgSuffix}`
        ));
        randomimages = Array.from(uniqueImages);

        if (randomimages.length > 0) {
            let initialImageIndex = Math.floor(Math.random() * randomimages.length);
            document.getElementById('image1').src = randomimages[initialImageIndex];
            document.getElementById('image1').classList.add('active');
            curindex = initialImageIndex;

            startFading();
        }
    } catch (error) {
        console.error("배경 이미지 로딩 실패:", error);
    }
}

function rotateimage() {
    if (!isFading) return;

    let oldImageElement = document.getElementById(currentActiveImageId);
    let newImageId = (currentActiveImageId === 'image1') ? 'image2' : 'image1';
    let newImageElement = document.getElementById(newImageId);

    let tempindex = Math.floor(Math.random() * randomimages.length);
    curindex = (curindex === tempindex) ? (curindex + 1) % randomimages.length : tempindex;

    preloadImage.src = randomimages[curindex];

    preloadImage.onload = function () {
        if (!isFading) return;

        newImageElement.src = preloadImage.src;
        oldImageElement.classList.remove('active');
        newImageElement.classList.add('active');

        currentActiveImageId = newImageId;
    };

    preloadImage.onerror = function () {
        console.error("Failed to load image: " + randomimages[curindex]);
    };
}

function startFading() {
    if (!isFading && randomimages.length > 1) {
        isFading = true;
        rotationInterval = setInterval(rotateimage, delay);
    }
}

function stopFading() {
    isFading = false;
    clearInterval(rotationInterval);
    preloadImage.src = "";
}

window.addEventListener('DOMContentLoaded', initBackgroundImages);