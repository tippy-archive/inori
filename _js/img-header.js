const headerJsonFiles = [
    'live_tour/_data.json'
];

const allowedHeaderCategories = ['travel-record']; 

const HEADER_IMAGE_BASE_URL = 'https://lh3.googleusercontent.com/pw/AP1Gcz';

async function loadHeaderImageFromJSON() {
    try {
        const fetchPromises = headerJsonFiles.map(file =>
            fetch(file).then(res => res.json())
        );

        const results = await Promise.all(fetchPromises);

        const headerImages = results.flatMap(data =>
            Object.entries(data).flatMap(([categoryName, categoryArray]) => {
                
                const isAllAllowed = allowedHeaderCategories.length === 0;
                const isFilteredAllowed = allowedHeaderCategories.includes(categoryName);

                if (!isAllAllowed && !isFilteredAllowed) return [];

                return categoryArray
                    .map(item => item.i ? `${HEADER_IMAGE_BASE_URL}${item.i}=w1920` : null)
                    .filter(url => url);
            })
        );

        if (headerImages.length > 0) {
            setRandomHeaderImage(headerImages);
        }

    } catch (error) {
        console.error("JSON 로드 오류:", error);
    }
}

function setRandomHeaderImage(imagesArray) {
    const randomImageUrl = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    const header = document.querySelector('.header');

    if (header) {
        const img = new Image();
        img.src = randomImageUrl;
        img.onload = () => {
            header.style.backgroundImage = `url(${randomImageUrl})`;
        };
    }
}

loadHeaderImageFromJSON();