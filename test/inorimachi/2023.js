var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPImxOtvHHt7e-nDu5czi8gZCBPcOpFCEr_LDejvDVjmM1Fx9LK3CngqPnX4BmZxqQ1slQtk7geeZWgZdlcHmENp0FBEYs7FtCLW0l1zr8EKJ5K7rymWB-5cj1hG-trTY6ar6BjKXDW5bgQEM5FEdHJ=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczM9_BRZNOOet9c7IIlTdh0NL_32wiC1NgFEiP8weKhsnN1iiUb_kYLuIUSyFjixL5oBBJxUojhZQwruME_ShADqOthclxYwUTawroXapdoh2Oq5TtWXOigU58q1GToeJNWK9kC7A0Yh72PQPpuuocBw=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczMk7-v0R-CZe7Ewv9H4EysvbEIVt-q4wJ_DfUS7nzQ-wzpiWm02wxwTO1SSl38l8LSgDckaxOR5gl4LXCHuvLRjMQlAUcyKTADRnVFChJfjRPLu1i5oGl-5g4j725-t737AcqWz0uK9hVKgMB4GvnOL=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNwLcHRPtneVQ8syJvATvxib1pUekQ6SiChFpQUbLBkGnNuB77UpLjiRnB0dL6FnYj_ZgRnMiYcf9k7GiIXPJ45x-bx3OS4Kk40_eZAec3AUwEKlAsh3BcXAK0IuIvi7M4NGKfNXS_Wi7RtoTKPmB8k=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPzbwBU1qR63nRQ1yxDFs0AY1l2QqKyBT1IzbLt9sbU_plDxRqjm7dd2N6M_SQZ_My3C76Xhjq_Y6prEtMuaoSSiOZdYkfzZ1a-ITtKcnJ0T4gBTF1RPQFqQ06Ol2iqd6IUvAiEBAnY2yQJK8ZGbv-m=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPt0rp1P0Cnw6ieg-Jzjvhzodhqb39lXAgQKqsqQjaI94vXKVQBi18xqwjUHU1EENopjlYT_7lkKnRUlVsSHODdnQqa0KyoDCQnAKBWRhy6f_cRxBYMko_w9ihFPHKZbLvXp6qX1P5p9kEfP_5pedgT=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNJX46dMcLuUmn18EXzkNwmw0UUFDWPtDIFf125yb5cqHEBxdHXkfkQTz6n09xb_75Worl_YLyeVbLbABzrTFp1BkdtQeh40vJD-3IBB-CnDBSGMgtaKT3jiqhfEdhqq_L41bfv4e-zuy_TrMFjHL1i=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczO-cpNIzj86f8ABmRH8CH9Kt6cskmDTDcDUYi5nBZrxUruQLBIk5GSAydNxBvi3meybZLj1rPOmor7cr8H_I2nLluKTPQWTMz2OzOHYzZ19E6Alv0STQHHOthIN7ekRUcOGZmE7j-0NIq87HJg7cLML=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP6hznACjyiVd8bvvk_c0nTYbJYnbi-y6v6mvHKBPs13m3l3pG-maMXn5oQPQupds2H-zsktWOaKKjU9e9y67RZ-avTX6Tw_tZSQ0bRZ3FiNq8fpvJg898Kr7thWh1uuF_CjIHkURw_oaBTBH2xVmRG=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMInvC5vXfAa8ZiS0NqoFebaydrH4sP-OS3nGFnK0CVuDCn5mMJI5AIP6AEkGLvCAKWxuDmN8t-xkuybDovrQ2kvSmbVUV3uRjIQVptxGmcjTZR-1U60YKM3kfuLrGuYuSbLxxKayRyo5vVn62vbIfV=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPves4LxIVejPRAKQ-6KBgxKGxh_NUEhaLwyknJ6GiJgHr95yWcFaTAlux3Oupc4u3rMHsOrlWtWLOfQbvJGOjC41Jd5BeFhRp3Q13yX1EKUSyVPn4Lff0oTy87l3ifF2WRKuAegon-rs7lmXl-1YYQ=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPh_0R249Zaz4kC6u_7mrAH6Gojwr4-4kU0yACUW8A0HWRXqeLfDzIO3D8C4idmRhjr8VecTyu44JTiwc6WfLMip8_a2aXRaZKhllO8AqqpQvguecXsgc4DPSIs0yn4IHWOpMPu4sdA8gaUcAD07sWd=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNt36r9J8NxfqH-A5uv3OjxXW8MLIlY5Vy4jtrqRUBso2TZItim9DoAyxpFStQS_XiHgDMNDQYc-xy5ujt2dd4vGipmHBvIhdekIYDKDUzu0MO4CYrEK-5rRyrb1kcH--J0vl7omIWN85dHUNP7Ehbw=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNrQpX57s5p5M-jip6tHD6kcN43xgPNhMwA9ZI96oWQ_KcJPvlWHyBymW-20HlCmNo3fYC06XxCvzSKTqf5SE63UGbeTGQ0WWveuTPI-lE5NbGDl3d3GHfqsnKvZC56M4ItGuJCmw6SJe2SeK0gXzkX=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMddyucN1aYGNDY5yljvLV_JoxNNhDN4n2HBJwenVU5bK23yb6aRmrM9TE0iiJ4XvGfnfio-xYxcCPweI1MZ6JBomnbNhoJD6BXsZ_qtYefi_68-2AtExj572WW4oS6itBgumKuYGQndT034NWMR3wa=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNimh4feiVPZkx-UR7r7P41L8ZGlYd-dWrLbtOTKWTTIWEvs2kR-F38p-yvAUhnogCnlQ-sCmKXUjSICZUtjjrs_k7nnzm767HuR72fSz1DOpxwLjfQWiK8Y29iW7hIeBHdApgrgdk0qpFsXPQhCU_P=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOzQ2uymyVjmQT7kRSokiThLYVLE_Ir6xbUsNmYU6YFYcem0ZFsbsMlPLVTLZuu5aYYUlPD8X44HjLBt2Syre4FH7HgvgSPE6hJFCyJZR7Ruhs2ldN2n67qcU4fqkfTQJVsZFf-TKINX_sDCosy5XS5=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOv9M2yimvP25BmgZy40CRX24XNsAE0mBNU94G1URmTV_UBkLo814UGOip8tJW0HI9ZDL7rxOi8TrWcGIAmH310XEYIaoZYpe9azTdIP77tO7p95K0ThrfZ-ZURLMkKgUcbB7rFeIh5hSKXzUwp2m7S=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczPCvuNrijwUkLVQL2zDu8t9UmM8ZnsQPud0MH37kn28qvVJiO04YeRW3aA3e_wlXuwKeSCwzW8AzhqwWLCZlKypOFf7Yup81Dqyz28_gJ6zRoBcAWuOO2ts9MaOqUvu9L9BiJrJZYh6itnNd-AnSM1Y=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczMzVxzCgz0-NxQCJF2GeGkPzmk-fVvf1c-wAyA54a4V2qVefG-4qMRwyLDnDqsTkuvKhR_lfOzIxfuUS-zTUB8nu6lBDs9Vl2t8-qUNXBRqIIRkivmMXXfV0r7w0kTPa50tW3CXOERkGCwIoBPpCyCC=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczPaIUbq5ek7gnTYyhOhBftP5GsVd7si07RU1gnZjKpwy4RhI1XD7s3vyhR6TqC7l0rowlOh1XNgJyb4cC4J3ucdEbjiMJY-Nxi1g0ReT-0SuSbxFCLR14XpuKwzKBunkw-yjt4KTc9uNVeIsKj3Tbws=w1920-h1080"

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