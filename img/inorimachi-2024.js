var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNGXQ08vqAamvKcNxWOSZZ3a-r58teanw8iQ_exEeUFdEQeRW5zkZL-PY-HoU-niwRMKMPZu6XUFudVWTJjRgqdMmOVx8zrRQ6CsJJl1Y0HeZbXC-9NpqF1uAq_Y7-GQPLs2j0AlzdOYpY8DkIqJnnh=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMrgcIgD1xfU2KPk1JKncvw4IKkX2q0CMYf_9ENrn-YIaJQukHer2kxZMlgQeD5wiRMfNdd8sH_ZT7NRqnlKJ6pZ2bLflWcIvHfQr0l5uC805wS4eCbJSA2MXnjd1JsBUCQ5uk6AC6-f5pVoLW6H1-Z=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPi7OkiTd-Sq7YpLu3THZVStc066M4jnihT4f-palbgne62hQvozjvf5IXXJBEXg2tbfETtUfAhc6Vtvg4CHdwc0Nw3xsZqPoLRx7bsECjafIz1ZqBBzfQkGQnab_EL7kEgtlCHOi62QJ48UIW9M3t7=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPiYZEQnJjZ21eWb9PVCQo56q2Xk_FBrq4Z5GI03ElVlAmBzyC8ySIveq51AmhT7_ZamjD0rktPp4VQ2CmJH3eNhKrJf4co7NeQEkNfn4C2xdUvi0uCY4fnQJ6lxha6RCO48wpGBehkMbJoQ7AIZpKz=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczNQhRnWkrtNVAQwX6YZxOCPBTmdixtT_5fxHrSUDijVM9rAZcUgUVe5ee603TGj87Ldl0C8VpfDEmVFJLrBQGkidpS6hOCecBGeDZYM009n8pZ_q60QYb3eKVtVE5BzeNmq_sDodZmTeh3w-_8agzP2=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPaq-OAObZC9S0dOXoND3btX-9-z9lo-pYrSRKbrHehHX8g7lNB6FsPZjZWMQnqhLX4YCcbhigISNi43Vv0T-7RJ4sn4pJM4DVOomH8zulJywePXv4Bzmwp-jOUlyFMmhvudl2qD-bJsWaak5dR1Lnd=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNTVpPv4CW8gKG9M-k06UMNGso4irRHtHNTqZ-qj5q9uCvsaV_Nf8xxqsZI7JE5tfA487f3RzyLy7UX1Ew8WzhvB73T2j59Lr6Yym8RvzNqsML-Zpz34_42SsV-l_LdOqwz31Yr23ADD9pzqkivglzA=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczP1-BpXd5jpT987b52iCpdf9rXhifnb76ZhTbNLBUvEthclBLQqpvwEtNQrTJp7Qnf9vDy2_FndDi69qwdB4Vd863MNaXWV-wldTNplrjJ9KCy8vlIkcRRHKfrVo24tQhe2HJERG2kXA8LQD_SVocv1=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNOyqIRA4QhUvaIADY5ncmp2K3yZlUOgQyqt-pkr5u22VBxSjmbqG0yAsY09Y3aY1gZEmjVn3J_YwxzQ6ayXELQ8GjS_24tMygyzb1rtCuMchUquRKQAQcUG6FEJw-i8YqK-arrT3QAhYuu4t5oY9Wy=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNJsNX4nz4agPB_xzwUFEyevDoIqZTuEOfKDpbNGuXx3iqfKvi92mK3l4zsHvFf01JxHy8F8CoiAfYDptXhcIpZdqJ2MLh5VQcoxU4FVLi4zXH_7fLcYgbuilOLzrDKVQcNXcBopEhid9kxwrxsXCyD=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMcH219OlnXJMZz8NRvdBcaPDJuWeGDm85TG-3st1XAXc-CnmdmnJ8NPtA2DHieVIjUOBkqE6_xS4Zfq0z-SFIyZrtLTV5QkN4RzGPIdt7y8kuKEr5wL1PV6hGdAEPhrROFdWubNWUrqSyRMHVGSK5V=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNrDdD7AKrbLYsfkNPgo56DaoRCh_CooDW3pUUet4vFobzYPW5ev1l5ljlU3NIj-VoB5ow6BLxQ1D2EXSfL43wUCyzoHCN8XWzKFDSaaBQX_cOdF0havfb-mlDlEtWpZ1Ov-cLBDODejKAThxjYzVYf=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPYH5H4P6lqWlUR7FjpALcu2Ds6z5Bi84axVrvNcvYLe7hY3VBxbEM3GVK__Pgm2NhsVWEqlJQDUqbMneJZwDKtHugbjHFz84fRR0vkXc0beGdTIsuU05zRB42Nb4IPWsnAGhA-GEPNX_4QYP3VAJa6=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNTsOuLrIWyajrtMTYirQtGWAv1MKhqwg1oLPuGLlBlA1UDlBDDNUgnL5XchRQY90BDBZkDeCy3v0NpuBdxUV6hXDwzRyLiQpUg5Gc2EU0kKaWgi6Nwn2SdOjSbN5jCxH6R3ODakoaSDIfsDTwkHJmF=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczN0n9RdGYAvLfn-nhkSSNc29ui2RGKaTu-jUO3uNVZD-8SL6-G0BlP9RROjRvmJhiPY3hscGz7aV5kLwt-sx8S0WFM-RKDEKpJ3mZh50ZCAUEe4QEMq8InP2d_7g_0COO7q8xxyQcN6F8Uvd05gKTig=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOG8YYhg20wBdE802hQ6JAT2ij565PpZp6HFgOzovvVR7IYgpdbpBsmNzUgMPViruaUvqnr06iXiYI0GKkx8s3Rtpvxb8-qa88tO_A_4QAUTB_nUYO4UhDRAAVcheQb_3kk-L2ePscUPcI3vs3Qt1VU=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOfnyQNxlF4GGT0s4J2nUHh3Ko9AGsvQYOvvMfELawsFkVc_83I55BjkTdZ8z6PpPTU_j30LYpJMO4ZoTy3rPh2Q9lnhObWrOBV0FHf38ywJUzeH0QtnXkVTlzN3Y2U1R_HluTNjPTQV8-z40cMg9R-=w1920-h1080"

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