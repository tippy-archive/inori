var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNGSATvzqglBKjyjU0jrUNgCzXSPlOCw0TLUpMbFt3sb0r9wcdSVf94QlkIFbV1v4sl36t_lOpfSZ8mI62jT8hXLw_uMaGY2WKL3AxNNfW_AmSnnSPtQPlISdOj9dRvWkksJfvV_N5CThUvhTh5JU0a=1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNRbfJj1GXy8NHWk4Vy9p8n1GqfHEnzgoNI4oRu_Fib8o6FrghQdQUz3TFlULN_1fmO6DLjUg6Ua-lYmV8bHMC89AWEwNIZnwOey-HJuMbKOUDtNbtzCEo499C9ZxwtxsEceiqmz4vFJHBh2lqtEV8h=1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPmZNe89gOCdA3nuHnmvQlmcLjBXk_FPu6yBcpwtF41p1TStcFFubVTz2uGIEoNRZtu-weH8bgvn8sAWqbE5RDT6Bj0Ddz9X9cfY5LU-HFILloNhAKjjXr_IIrWhNTLuF8Vzuy840kFkiu8oanJ9Nib=1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOktQaXDZqt30VYnTHOpXL-XdRvNJuRFBE9ci-eiRocClnCjMlKZZwuTd8z6FEA9cgxFoDCzcjtrfkaZLNEdO5EcsAIzfxZVX2mXk_01oBp1V2xZONlTTjNDM9AjAVQHAgk4m_Df9xrI4Fr9Hsh5EKh=1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMfyyPBA_mBSG5q-ApJhozIsvB4O5BbT6KU2tZy2dMUDppfl3riZWdeWa4nZnj0sqTS6m9VOMqdjJ4kf5pu37lUFtZcIXRKtnSObmYY3fD5gSDGEHJgNzt6aIfndBpM3YtlDEde08vhJHgqlKuUv0Rd=1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPbrUqucDhvCPXAdz64m7Ux7Dx201JesxraDAJ9YBMFpWclYjAvEjaSDiS5IGtdNt9LSy0s7Ax9tFd5zcigUlnuCoryMNjuSsietlYM9udrKHNnPHuL3jrEwvxrOqUDung_0_5zajYX-487ISrRM2Dl=1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPGRKBBcfEJ6nQnA9tlHlklBGC6g976bw2Zsn_FbGrcQSFoL3aJpkbMpfiqSxsG_DToFfNdwhf9fkWxYsJzph0jhxb3X0TVgwF7dd6T5n3XzQYl6f_CK2TfrNI7Jg6y4GZcbLKdxl-K2xqitDYfmDU6=1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOcsig9DflRsleUbPLasd1YX6JfmxZuCLyZZRoLtZ0ciNrh9rttoWD7GlAjUU4REr8gOsAMWj25EDYMrnEkYA-_6EhObO5CiIXvpETdyCNNANIE-TZnZlg-gzq6KnBXIdr7En7bWvhtIf9VdArF325Q=1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNwxsfMqtUntTfZ-_szPI2yX-aj4tssTV52O_mEn64gWD3HOAgKDTAYkn1pLor7q3a5ppvLp9VlnjpwrdomtLbgXEPtPhrRJKj2UFM1_8o98ja2UP8-x-SD8tIyiG_tdBYvirlZ-7Qt4eZT04YvuUlv=1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMgpTRrQzAeXQ3m8LVeUXo3vJxz62WFCYhNnwCjcR-nf8Vr5zMSBUJ7qH6G_ZTiUiodZo4uo85yZ5cUa3RPZcUvsVvF6GQQ6lcFbyBQgKRFkCw7QT4la_eLwByhgRkK4CFgDut_twc-sndiyiNuNPJL=1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczNqqbrAUeJeh4UIA4TRMO2rW8RX5REjAfMtXrvMTRWbD-spXZc565FG_9lImOyDQm2JqZ0epZ2ZTzs9r1U_BZfU_WntM0FJUMWcSIFbTZXRVp3UhuhaLgcL-usk4Sj0JwSn174dWAKQOClm1mKv6lsa=1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOqnTi4Cg2jBQ4wrBJ32Ssga7HPbTSd_zlJpl7NOQvld0JtJFroasbb0VU3nhSqh_C8_v-5W_Mp812WXNirGGNhSIaDIZMeakBeJttMlnLUbf-M3QQcKHEUsqqqndnrvxSt5s-bUixti-GNqtN5qEsn=1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPiPry-eq-KNAUJbTAiBm7yv0aQu2vBOgCr3GPhR8KS4y05kRz7k456RUol-aaFaL-9ClPKua-p3a-C8s_bC-jNnSTLvZgyQUT_8XCb51Swg1gnB8azvsJLABTaLir9Ie9YYwtNjSwwBmN343gGmNF5=1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPEKLEpyrd6Cso5O_fbZHgt0SlTQlIsb4Qb0OI_DCgXQ-fgOIhR1zBmaw-mmYChTwTqrEJ-7snnlLOmtncgGOG-AhjwP_jN9iqmx1HM3bra2aNRE07hiNOPAfCFachHoj7eGrFyHiS3TKU_otxsGCjy=1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNmGFUxYn0UpGe6w8No2SXsi2ocbFUZ-Sh7q4sMRLq_9ydBlaZgP_BeZhUd414nFjtydMzQVpilg6eVpQGia9_DA8lqXv-7ZZfvUeMjT2dzId6w5eCYXzTUAQF4aaWauYD2Zv4gPk6NQC35PXUwewUq=1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPpIkoQeU8ox-nC_Qey93QFlC_pPXuXrghgFXWM8_dLbAYHtJpMYfzvi0YxMBBhLWrlVAzrFLIdT9Voqjt1SEqyCoC4wN6IKcxhzBwfsCsfohUtaaaWBhjKFh6ulwa6MvaO1lnGbotciq2-zkxiBGwN=1920-h1080"

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