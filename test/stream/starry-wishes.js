var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczO81sT8o24tlVUh0QI4RDJTRlA3RcFX96eg1gpssTjcLxAF_q-HaUdMqSeLBbEcRlXFzrp2VoP0P5zZOI_Jm4NVTa4chfr7YoC723jhDbMOVvZf_UH_m1x_G9gErs9XeEMfaXkF2dKF-VreCCtNTJoM=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMio1qakqRa441UqSs8CCTQcIQYz3JdyVwp8uNjWHpHudNCBFimeMcaIgoWatSyxfZl0vSj6w6q0GGrXDtb56VSMyc9mxVQrxpUn1AYzyChmdquvUdqlkvA6V7B7G0W-jVYTvvAl7AYN3BGogaH_b3U=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMNLXJSFaeZwJ2PssGuiK4jtDqdQJFhRGAS1FvaWP_h56b6uJywbhtAQDd1xCDQMXTPoGc45viov8qF13DTb4tzn1bNZY3T1d7kK9UQHnodGYfacYGYBL___uj5bvgxTvYqDCZESCQR3kmOHZ9W7SQh=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOcOcjrCvTwJeme4gSlI_21WrJD9JA7lyFsWk9TAY2sZ4tZIH_LLt9gQP47aVwmVXC3a7bz0q8oKvHo_xhSTPxf0dPYg1qhR_ME9jxz55Nxh0n9yEwQIYqaHdaITG-SEb3g_10elwrM23Xt8eibgLpi=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczP-Dvex8S9Cbf_LSYKFoDSd-aHFmImogitb5B4fzsuPjxGeTdL6EFOhmsGChQnV_Bw0WtchqeX-KVpGWgGI2yyfwt-3oJH_PgLCSSf_j0zFvEY7vw8EfZ8DQe37F23NXJmleE7pl0sTvEcPnr6tlJNX=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOtgqXe1hcXT1yBzakSsE6OISewqUgir4jOUkXCROPelup3wJX8faaWVLZKg5UNTWaEwlOelVxGIuj9GqLUcy1kTgzII253X3oOcqBTF2rhodn5rtsexFtv8aPRtOphrARYYdEc_bPnVP2_W8_-j1yc=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOD3Rq2HKcJ_2I2ZvZI0tj5N0xx7329eA2km56sW0Rg35epcJbxRvhXFEFR06DbJrTqzA-VQcT6dbvrOUVVhA-RUZCjBbFeUoxszBmcXYurhB6SkWCWLx1YmCgl7I3VHE2gjWrIosAzFBzZTbFoDqGV=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczO7NJqiNe9GB1nGHwtwje13yScWm0o78j-z1Z9m6715vLO4S59HusPZX88bX05mQTZ0Yae3FY5pTXNdAIM0IQWzHI6b7m5ehDMqS7nGkEgbwIUOEqxrTErwbeGWVr1Q8sDhSYua21OdxuHsWeVUvTOC=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczO6mmqsYGiolxH62uTVUMPQ9PoyxL8xF9Mk6r-fvoSejIZiBFbGc9I9R5-PncFCc3u7aA4T5c9324NRQNksjK7QiUqg80PXdZo9Ee2suK4YmwLmFZNccbmKpjL2Gejazsp09e5lrwpQ2RuOfqcldj8R=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNqpqwhuTT2q-SB4V0Ilo1V36CKt1Jj2jH45a6Qr3az355_S9uGG3_twO91oXs1QBMj5JGC5-vyElYbuKrP8NyPpWmvgJgcPavN6SeThAcPWaIkY_x2bLZAkZnRp0r493NcLoclDgThGxW1REd3zQfM=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczOXgnFiGbasmYoeFg5X6dRUopq2WGOia5PhCLWq0Vaj-1K7MZElTjUEuFvxrtBPkaceFRSJi9jWoTPzQkNrffJETTmtcwC55t8cYacCdOcOm3doXEi85fH4JtRPx-bKBRq-8DiUbnlfm67beEu9na28=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMg1e_kJ96_1fiAB6USyJi7DUk11Av9Xnw8UrMq_7EaqKpSX3KOoN1R24Bmh3emQy6RBYQRg2iTtQkWMAWZjmQWDVsTvh4wUBRJIKlaHrZ_sCO2-OEIzpu3dvqGVaksRzz5dhbbsuhmM7G9-hoxx4v8=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOwriT8h6HdnMF7DWT-deVT73MyPpcm4c5L8ry7xLLNCiUftGQVc_tIPfrn3PK2O4ANVlypCJ4nBU6Wv9aaW7QVSB6l8diCYP5Xz6ajUirnWhjn1BfiZrdL9CR9B9juSB5bgUSLfovV0oAik0Pyut1B=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPdsY-2E9BxW19_LWgZnjzH2GFcZIv71GOhBLrhH4Qj_uQgXwcPloPdzkyQ1JNPWXmFcsAbyTuuMj1PCWR3R0yNnvc_lnXryYgIZycW7NI_EISlf8zanefMczEFhO3fvhw6wRmCGSlb7_-l-_qndjDI=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPMconKhsRCAHaKPphgz1TlpkxZpmh9QYEtYypypsMxY9VaYpTRCHuG1wF1Weau07dqLeBdEmJJ11kgV4ZXLk9ZMZxdOL-Vpy_e0ooAkRv-_jHKBG--Sdr5SFXVVo0ubsQ8uJuuK_lCHpv8iVaiBnxp=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczMIHuxd-lUQcoK7i_yB-crLno5AVtNwSHuI62OsqJIWwpwwaGqUelGzR9yBitaTQHUGlV7EqTllI80a3Swc1QYKcoFBm6HY8thrMyvJGnJQ8JavN9jOBL5bpgKiHdqOxE1dFatQIl1JvFPgjm_x5SZM=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczN7uOvYKrF1qhLTusiXZMTn_FqFUS3nvvy885GlN3bhXJyQMSk8eH-654L8at_ZcxCsIifueKZe-iGCuTX0B80nrtOWEUscKY3R5Iyr3c9JdJrvKBZmee5ZkMr3SkhtGX1eGo_Oq0wuc0mRsVm3EN86=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczN700XkSilA-Ua4kp4tfVZiV5JxDc5Z0JYiOsBmK0c3KTW5ONsPDsSQOtblNewxoP3aoDWMJhlZQy1CRqfQAtDWjfg5x9vwDKNxCa7dk4pg7vXXlIrCp-23LJs_DAIgRe-XARYM5atx32YSAO0MUfZt=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczPXwe0tFx26pzogQ9YHXdIdhP0K1wkL5cE_u29ehjo53fKkO-1HRJQm0Il21XMqReap4wVczlQPhAlkvsbGttt3demciswfvbeiteH_BntS_kCgmSyKJcdOuxztiyxGDH-IppIBmaR4De_iVVvgY_qq=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczOF4zL6jTQlOJL7MToysta5xlgABdfMvWveto-Xk4HvEABdrTc-oPbvXYX0QiQaiqOF9Hh1leGeq21pCAkJKMVC1yGSCU_7kKKtKI0vr_6lLMpVBpwpt3uPgmWi6doFzPIbF2eeFOUrkh3G5ZJFncqv=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczN0QY9qpFirxEIZZ6JdaO7DVvJZE6F7PNRoTHggwCuVCYEuV7mjTkGOMjJusCoq9iN98QYjt6Yi0tbv_PreMyFJ02yGXB5YTaYSQedP8AAOPZ03tR8c2BTn0wTC6HUelBoBY91d1PDz2R9m7cdfoJ9G=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczPkU5QPObM9__TUaqoUcPZjiODmFiDWfv-18BHVMYEopfCleL4W1a99TPT92nvRZWQE8S3MTrENMpsYNwA-SVdvqtIwroccxfn_-_wlBgDAeRo6dzVQhphWmMX6Pyi-mnij0VHxlhpbmyu3m7Kkt2dm=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNU74BIr-SMCod0kW5hfgghkPteykdEYvUzFWGG4AM1nhIlqeeau-tLgNrK53RKZtSL61UHH_TPmAsKwbXwfgMZqADq__ylHFKLI2keKNSjutPl2-orNGhRsHdXczCjkpQbnFMshu2byD6yBs_8RET6=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczNuoBjLdir8xrIe_X7jpzhp5o6WL0XweyW403UUtEDD2yP3eDAk4dnO8KMjOZ95CD6ZEgQPRFwREm2WwI_nS56qoJDiR_bdJnXb_YIuUre8augLoZLYvS04ZsE4xAzgRSxgauPMYO8fwuR40t2tLsyq=w1920-h1080"

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