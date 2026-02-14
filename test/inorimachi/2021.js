var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczP1mKqYafAqHZtSHBTlN1bJ-AUSSRPvJdHi2RCIi0jlYfPRNj-Z-mhxHj4weOqCDLU6IeQdFOWJ9L2pA9O-ZD552vVa-zvG1t9SJpuBnlON_FeiVT54vic_7uE2PdEiffzrlBYNzHRQ7RdsE6k_Ylbs=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPHFoAuJRrx-s8GjrW01j8GNULuHvLotj7oQFUODmdsvDbv_aUIe-R4y9meOme4HDkB33M7K-J0tlz5P0RlIsx2_BK7jSZZmTpIaRRjT4QBrbBRDF_V5xckPfsm7UQSc7bucPi2Gd3VVhj0D9sk6l0s=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNZWUZzEVhNafhVolrz_SGpYKKxpRfg4oW2U_MHMmXFQWC86VrYLmidxpeu-iZUiGcnsIFzrjQGGSChZ5q-SBLQhuqoOF6bTbN_7MyYq78PHmFGAIZgz0ilekjdnME4ht5La-TGAyjsjhhreo2MNbO9=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMtnweFs3HmwiJ4Van5KQoDMlMCKYoUpZGuBHNMKhuu96JENeAkq2CAvqmyNETq-nge-2E9nItlDFYep6WrUTPvwQ0GGn0ZuiBUAYJkQXbCPO0XLVTFwUdJMOyY-JC-i35xaFpWPkqTWwu4HYn8oPuI=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMP1gH5FnQrsfcwt3iYK2WQI9gA_kpRj7DqNwYY9XYd68E-TOqdTYFitIg3TWqdDISqiaFitKVbKtRt1T9msfczoL87f7xNqp5eocwvmYAAV-NEvRSMP4f4lBghnv0zVK7mtb9UnrWYdq_sdJHb-qWs=w1920-h1080"

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