var delay = 6000;
var stopAfter = 600 * 1000;
var curindex = 0;
var currentActiveImageId = 'image1';
var rotationInterval = null;
var isRotationStoppedCompletely = false;

var randomimages = [];

const jsonFiles = [
    'live-tour/_data.json',
    'archive/_data.json'
];

async function loadImagesFromJSON() {
    try {
        const fetchPromises = jsonFiles.map(file =>
            fetch(file).then(res => {
                if (!res.ok) throw new Error(`파일 로드 실패: ${file}`);
                return res.json();
            })
        );

        const results = await Promise.all(fetchPromises);

        const allowedCategories = ['travel-record']; 

        randomimages = results.flatMap(data =>
            Object.entries(data).flatMap(([categoryName, categoryArray]) => {
                
                const isAllAllowed = allowedCategories.length === 0;
                const isFilteredAllowed = allowedCategories.includes(categoryName);

                if (!isAllAllowed && !isFilteredAllowed) {
                    return [];
                }

                return categoryArray
                    .map(item => item.i ? `https://lh3.googleusercontent.com/pw/AP1Gcz${item.i}` : null)
                    .filter(url => url);
            })
        );

        const logTarget = allowedCategories.length === 0 ? "전체" : allowedCategories.join(', ');
        console.log(`${logTarget} 카테고리 이미지 로드 완료:`, randomimages.length, "개");

        checkWidthAndRun();
        window.addEventListener('resize', checkWidthAndRun);

    } catch (error) {
        console.error("JSON 로드 중 오류 발생:", error);
    }
}

function checkWidthAndRun() {
    if (randomimages.length === 0) return;

    var windowWidth = window.innerWidth;

    if (windowWidth >= 1600 && !isRotationStoppedCompletely) {
        if (!rotationInterval) {
            var img1 = document.getElementById('image1');

            if (!img1.getAttribute('src')) {
                var initialImageIndex = Math.floor(Math.random() * randomimages.length);
                curindex = initialImageIndex;

                img1.onload = function () {
                    img1.classList.add('active');
                };

                img1.src = randomimages[initialImageIndex];
            }

            rotationInterval = setInterval(rotateimage, delay);
        }
    } else {
        stopRotation();
    }
}

function rotateimage() {
    if (window.innerWidth < 1600) {
        stopRotation();
        return;
    }

    var oldImageElement = document.getElementById(currentActiveImageId);
    var newImageId = (currentActiveImageId === 'image1') ? 'image2' : 'image1';
    var newImageElement = document.getElementById(newImageId);

    var tempindex = Math.floor(Math.random() * randomimages.length);
    if (curindex === tempindex && randomimages.length > 1) {
        curindex = (curindex + 1) % randomimages.length;
    } else {
        curindex = tempindex;
    }

    newImageElement.onload = function () {
        oldImageElement.classList.remove('active');
        newImageElement.classList.add('active');
        currentActiveImageId = newImageId;
    };

    newImageElement.onerror = function () {
        console.error("Failed to load image: " + randomimages[curindex]);
    };

    newImageElement.src = randomimages[curindex];
}

function stopRotation() {
    if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
    }
}

loadImagesFromJSON();

setTimeout(function () {
    isRotationStoppedCompletely = true;
    stopRotation();
    console.log("Image rotation stopped after " + stopAfter / 1000 + " seconds.");
}, stopAfter);