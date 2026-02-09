var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://i.ytimg.com/vi/aLTnGfbbvUI/hqdefault.jpg"
randomimages[1] = "https://i.ytimg.com/vi/VPKMFOcBNx8/hqdefault.jpg"
randomimages[2] = "https://i.ytimg.com/vi/X-KCMshLwVc/hq720.jpg"
randomimages[3] = "https://i.ytimg.com/vi/sYXWEjR9c5Q/hqdefault.jpg"
randomimages[4] = "https://i.ytimg.com/vi/8mPGOIozMLI/hqdefault.jpg"
randomimages[5] = "https://i.ytimg.com/vi/qDUaOYerHkw/hqdefault.jpg"
randomimages[6] = "https://i.ytimg.com/vi/QPlNUk2ULqk/hqdefault.jpg"
randomimages[7] = "https://i.ytimg.com/vi/CzOFrsl64Cs/hq720.jpg"
randomimages[8] = "https://i.ytimg.com/vi/-eb--xDPbI0/hq720.jpg"
randomimages[9] = "https://i.ytimg.com/vi/M-2IDEnjCCY/hq720.jpg"
randomimages[10] = "https://i.ytimg.com/vi/tBlWdhbCQkI/hq720.jpg"
randomimages[11] = "https://i.ytimg.com/vi/aIHTWsBVI6g/hq720.jpg"
randomimages[12] = "https://i.ytimg.com/vi/zMzbzxt1ez4/hq720.jpg"
randomimages[13] = "https://i.ytimg.com/vi/9EJBqkELc0w/hq720.jpg"
randomimages[14] = "https://i.ytimg.com/vi/wfADX5owWpA/hq720.jpg"
randomimages[15] = "https://i.ytimg.com/vi/Mg0F0wHbmdQ/hq720.jpg"
randomimages[16] = "https://i.ytimg.com/vi/J2jyJn8R66c/hq720.jpg"
randomimages[17] = "https://i.ytimg.com/vi/4hIQEfXqSPA/hq720.jpg"
randomimages[18] = "https://i.ytimg.com/vi/rUlRtcC-9RY/hq720.jpg"
randomimages[19] = "https://i.ytimg.com/vi/kagwjHXy9KI/hq720.jpg"
randomimages[20] = "https://i.ytimg.com/vi/0Y0jFT8JpR8/hq720.jpg"
randomimages[21] = "https://i.ytimg.com/vi/ZODzNoIcues/hq720.jpg"
randomimages[22] = "https://i.ytimg.com/vi/Uvft4TeIp84/hq720.jpg"
randomimages[23] = "https://i.ytimg.com/vi/lUMswOjpHww&/hq720.jpg"
randomimages[24] = "https://i.ytimg.com/vi/JLi-1PPM20I/hq720.jpg"
randomimages[25] = "https://i.ytimg.com/vi/FpSdqLTllJ0/hq720.jpg"
randomimages[26] = "https://i.ytimg.com/vi/KcMitUPDfvk/hq720.jpg"
randomimages[27] = "https://i.ytimg.com/vi/JHb8gxytcOo/hq720.jpg"
randomimages[28] = "https://i.ytimg.com/vi/0l1nCfctdho/hq720.jpg"
randomimages[29] = "https://i.ytimg.com/vi/TtRvjHJWsak/hq720.jpg"
randomimages[30] = "https://i.ytimg.com/vi/G1y5hDNeDlI/hq720.jpg"
randomimages[31] = "https://i.ytimg.com/vi/dpT-QcvBNvY/hq720.jpg"
randomimages[32] = "https://i.ytimg.com/vi/7KBZY4OmKu0/hq720.jpg"
randomimages[33] = "https://i.ytimg.com/vi/lvascj4nNno/hq720.jpg"
randomimages[34] = "https://i.ytimg.com/vi/5TnVsDS64eM/hq720.jpg"
randomimages[35] = "https://i.ytimg.com/vi/WvEMSBS8LS8/hq720.jpg"
randomimages[36] = "https://i.ytimg.com/vi/O2nqGQvBv4Q/hq720.jpg"

var initialImageIndex = Math.floor(Math.random() * randomimages.length);
document.getElementById('image1').src = randomimages[initialImageIndex];
document.getElementById('image1').classList.add('active');
curindex = initialImageIndex;

function rotateimage() {
  var oldImageElement = document.getElementById(currentActiveImageId);
  var newImageId = (currentActiveImageId === 'image1') ? 'image2' : 'image1';
  var newImageElement = document.getElementById(newImageId);

  var tempindex = Math.floor(Math.random() * randomimages.length);

  if (curindex === tempindex) {
    curindex = (curindex + 1) % randomimages.length;
  } else {
    curindex = tempindex;
  }

  newImageElement.src = randomimages[curindex];

  newImageElement.onload = function() {
    oldImageElement.classList.remove('active');
    newImageElement.classList.add('active');

    currentActiveImageId = newImageId;
  };
  
  newImageElement.onerror = function() {
    console.error("Failed to load image: " + randomimages[curindex]);
  };
}

var rotationInterval = setInterval(rotateimage, delay);

setTimeout(function() {
  clearInterval(rotationInterval);
  console.log("Image rotation stopped after " + stopAfter / 1000 + " seconds.");
}, stopAfter);