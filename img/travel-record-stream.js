var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNYgyegJ_GcDF1Yp0HityCWAyegoH12qmynPIN0a-J2JsbIlLk21qzqP7s4IRDhHsp-uyvDDYadwa9Vz5RJDQlVDRzAzQQYvLUz5Lfv-OCjsySqZ3yU6-CUS40u8f373LS5Bthi8suRIVa9FaWdjWqz=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMZc8BJkbXm3IYlGSZzawt4MwkOx1LWBwPVaWBUyZRoQhDPXqUYoVRr5BHGvGWdU2MrWe6kiWjIHDLbsVV9SLJClh0gVc8zxOLnTDClm5mgEk1JWiMYgWH1cjdWWmDQQoq_BeqKT2LQAhscMmvxtSYk=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOCkF7wHKDJDVElotF-DoKFuSrooMDtuUJIrEo39LDrSsvfHtZG1MhK4t59liSG1rTTHm38Ti5lKL86hbWMyIQ7jFfgLaDuGleX3W4YPq2T-WO2rZ3yEMot3xrmmS7kGdRVj3eqcEDhzB0oZ5B8isYd=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN07y62EonHD_tWCfX8sBZ7j7w7gyyhAQx553w6yaaTNnpeGinAP5_l4GalDQ7YR-kGEBNaAlkqRNsbFRbtLvdSXcC6IiH3a_avCN2xj_6krJWN2Y9pjqDEuzhnUx0Bvk9kpPtM5x_t1Rs3IjotdEB9=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPa3dqNW6IGRZS-bTs_ZgqfzC2icaQLUHpTjdaPKsJJ2TFA-5RmQ8DTehtlbnDlp2bp7xRk6DsVvxD0qW8us0LHz_LvB7rxKibC5mLhpL3tybhke7r5dhd7evY3ySQ4eP6DVEUnw3D-mtRQBmuXQVik=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO0Y6nGtvZbUyQOFD9g5q2GU4adU-ObvP8YVH17RcqMdq5dkP90lghpAoKBMGlwEPwVyxvB-Sm2wW_7gM5oxwvy--oyxfDuZ0Idwa0QVSz4czSgk_oXSvZ6PRmLW6WLdvJSAjp4v6Ih_M5LZj_S8sMX=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczNON8X6yYc9xdhKlW-11zRRP6S5hKkykUwdRkbkOIYdbtJRkdHNmMBTwQk3MGTkNHjPGOmrSSj0hfzz1USBMvPL3YCNNtqsNOlBTOr4OZArQYzpGGNBjKG-Ye4hqOTGJNnJfJXRk4g0PQn_NagKCjmI=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNYb07kJJM4cpPS5lcjireF0tn2uNjtsazfi2fWi_JBPnskrJbmLBzEvCJXceEVrAfe1TtHriNvq0RcvBiq_Do8abdoFeDt_V1D-9xNdR7m2DG6VuLxM3LOy8lvimvMKs4qgYYzhryf-Dqvjn0vJdiG=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNN_CpV9b0Gti16c9l-jafkRVqr6DmkME5ZYdnYM31NfrNBoU0Wqd37xjuxoMX2HQhu3Gp5u8bLWvE8vhA-tHLIyXh-nfJsVjy5oHIdRvDz4wo3zFzqx3mR1Iu6h4W83s8NfXJn6KqTuMgWJIkHgkOa=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczN1yi1ky8pNpmmwutCf73u-ElBqLZAFQajCCdl92G-CgFCHmbKEnxQ1whhSWklIH74-acFwsvkB4RfukJmb3UgRhO-qXGf9zLxf1O7ar1r6yTpDXK35rTCQB_dHR0glkk3jA962gLWNcn8IF_Zmv5W4=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP7x3UEPr179hNiv2s4fIxJtv4bf8IEC9XUefZIqCTwuy6R3vuicGazHJTqk5qbnD_i_QDaqjUMOOF_ps4hA_9oBBYmiqqpO0U-aX9DUcOwxMhtFhwV1dh7Oytarf8k8ZsrOOmisvhBoBxZP1iCnGAN=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPkGkTBY_B5HOz8KKLcyk7wzeCjDWPaPnViMTZAhSF3DjkMuTniqbR0xgoVEVz4Iqta2Hmf-0duYZRtsARkvUPcJvbV_Owb72VaytOZNHI4mw2ZY8mPa9XrUSl4EUTCk4punB_74xV1kvPOLfYcGWlY=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOooXFeR5Fmxbr6kA8BAhITzzJ7vGnQF1-liV7eAXyF9niMlZqv0NY4jUu64YxyiIFo_FBbwjXwvBk-kjc-yU9W423DNEUKtcsympknIeLt67PbPiCb7Q8B-8RuXNFOzF78OeufTsayNDSF6DqLAKtl=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPUVvLykaRhKfy88vtpLSXCwm6rCfjttoZrsFxVHKzAZrt-HOpgvj0A8kRn2Q26zncF_qEnPtDd4lY9Rd5htJPAF0NdMBK3xUV1Av3BI1XIJtEkmtT7BOpU71K4LKB4z4MeZ1S9g3ginKp0wzTNUcB-=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMIxwi205q6FpbOeQCG8NFLtncZTxUczCog_lgHEHIXb5_al8n2g8mlBbwDMI0nzcKTw7-qaatMmvj6xu9xuehmIDDgAj4Yy902axFrv5WjuCn3YmRft-IjdytgQFQsfyFLvOcsuW0N76tP8XLfYUBa=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNO-ZKd0wXMksL3HkPrilFdX_br3iFI03Y-pwGnqdazUz6bRs76qZKYAspwgw2eXFxr5sE0ybgrMELfdogQUDBcdp28hcb1c0RNZBMo8X1PaWlbk98ZFBfW5d4WJoN1sL8g5xVLh7QOfGwa8g15ZZpQ=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPeBHPy-Uo-CjLX6Tawb4YCTWtkgo5UmedFiAX8vfpVLbNgcajBBnwclJGZt1Ie_qB6_m5NPkKlG6eLNssJuPEXjUhQ5kqr-uoOiJF8-Y3e0P641iqBuRu4RqF4ihYYm49pH4HMG2j7ehu3LywF3L0J=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczP4gkHKnmrF4_EfOZsKjsq2LOUbM4Jy9KgUlYiGG0qwQ2NPJ5mF-W4GirsVFkhQLjV7mVQ1KNmoT_iFB6pGhMNREzAhaXtIYLNqhCTrHNb-5Vl4COWcIeZjumiOVPUie0YSJm-1MQ8IN6ae1yWmjmxv=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczMSEsPOstV_XQVn2UJRJ0njV95zJw48e2fRme6HuQTvkQwubvItXGa0uR1WcPRuGy5GRwoIBlLP84Uw6n714o8fM6soNkYOTWSgpZ5v1BrGO_J5IrnQawnunKG2pTRTWDZeGTHXdFHcdXeCc3CcnFtd=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczP5bEnG4AlIllkIhrvjIYhHtzUHfpsJretoa9t1hgNzUNfGsm4tQiea1mkIkAQ6KXZrgHhmj8OaT3Q4otfesDhhD9XqJBpfwl59df0F9KAtANZ8efAkIjrc2BdSrJMBtsCba5HJFtFNBfH7DpE-G1ZC=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczMe56lfDRQ_6a0Ka5AUA2zY1dHNFnZNtu-glCaFvEd54MdnLMIe8OrTvRSdFgyl6tZas-rsXnb3LnDdV4H43L2acCu1ZmLjv0b2KtAwRhk_DmOXBqQAW8gU3jKtV5hMIoMMNGu-orthQtD5nAAByCPn=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczN2DbjlgoGAEQ1pqAZzRwoqC796PvEn9F3R57gjbq7GJ3MUwaIZV_yxl6osiaSz5aMdUDtF5Aa-v61AXZEoJCknQjfDI06jgHQt2byEEUf2KCnJ0T5TnfnMHPmO5Jcl6bbirwGdD77IpFzG8TAaA_UG=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOGokAXzr5M6V1puR6StVUoRxq84KmBmmYNgo6g9K7q7HPC7vGRdsupKwfXv3tNgjYohKg09G0ITHvcfxqi7JYdFB0UwDEh-hidGsQVStjAoL-vo6nKewYOlQYsIrtj-xxh-Gr4Cu4mO8zX0SQOeNBz=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczPGrJ2qs2b1fWnv1P5-C8IzTzwxBRgp5VkfIGxSl7arcyujk-7VWm6pdqhhWsEaWwZFVI6VBpnIUqSVgKiTff3PtNguaHkNhz3qG89IDOFpEOznWBRJrOEZc7xp29VITahDWAI1lMOMSrKtbAp9ho6F=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczPhVRq2Mp5xaydlr9SOT9360c8ur6Tg_Hl-lgwCRJu2FnUNzGTjETvDYja33LeFGv_bPuZZuiA89gt_NABmw7chd62_z0UODpqCpWPwihds7t-qRjxwSHNx3p3aTpQC1QpxKd--JrWNbZMP2F8pXdAw=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczMjg5WddsJhDjapz7O3OEaaC9z6C0VQLEoZ5sOFi9vIhHfvDO7LSA0_ULhsw7yoL2gfbWhEmhLNBheg0LL2L68cPql40weH6QWOUZZZvlmdjKYPMzaM_MwfgXOrJZlHJKtTlAc3k5Ua-xKk5OhNhYvF=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczPnrNOWqdj7ck6FegZyHpv2FkdKIoiS5f4WAJdPSBPesynmCmAN8Hif16NdCTLIIXI6RDcHdh5li83LtzyvMNL5dfGrKITLHicWzjFF3BRzFbSjJH73nTnsPAdiVKAQ9MesAP82Yem1GrMnbqVAYROs=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczNyCmQTSynACXvW-Z1pNv_63rMoIxHaFYIvNl3PbZ0q1p9IC39mK6vbz8F11AE5ePYdhxs_BNfrikk89cm9aU89g2hr_pC8bFjee9P1PVSFke3rV93V-3xnhoiLFzg6TMZBtY4hHFM_eD7EoNcWXwH7=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczMnr2V0XxWLwYydkqvMqBJFTBegalWYJu7VOKEGvGpAaXkWnABElAmHSzPsBaKxb8ysZpVfazyFDiE-FLjtxgtujytzGVCHICD9vka8mkL_8oBnLiFVCoBWkKhwQ2u9MJciHjcaov5eGCCQxTl--cBi=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczM3Q3wsiaA42EaR2t0_JOoBJ54tV0rQXOocdeJt1XGtDOb6ankwCCs_c9ByqpDRaE7eGhrAJqubPUDNEwcz_IzRcDDCydS9utZnaQ7rFTsmCZWmTQnABTiBj2s3aofOpb-pQ_uLj-DFwQkSk6ZYgIZ7=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczP5xAtaXR0uJRo9zV-tYpEbh48mG8GfWDY1eWM5s6luEc2ofFmzmrJvcbsAZvRnE3Y6REdWGt_wWCHGjOK3Uwzxt5P4oVIeSjCF-q87JByVvYS9Gbu7X_FhvhEsvg-4_pBRIJjoo2iAoQzpKpa9Dopn=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczO5bMHv6iBJ-iAZMun6UamxJpXry0aMZhAowZ8t1_Y5Z9LnNsfgkhBWFAR0SrqDWw1CXEwyDbPOXcBbCceHlL2PDG1oZ1N8ynOwu1c2vTSPPEEF6K2ihY07Eguyw0_u-T3f-wjlgTduGCuxujTPxMUp=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczN-Tgkjywp8wrzYvGOnLvITmmNKm5unUvgk0HkQS_KVuDDQfroJ4ZLgoumjndiCUXehLjctQmZdBtEpkuskM0mjJQWYLOnw-Ch8FCep8DR2l6UZrFqx8E1f2BzV62EPOFGUbDX4r8ckqsvlip_MaR0L=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczP0Iql0ZV1J5MvhL8xwy947a9S0S9iQPFvVr9wy_RvU7sbnMgTa-Un_b8dMxoJa8ONrC3Fx-wOT8yVwOQkY23_j2AJQuecQB_O3iE17EyEE5VFvDQS8VkS6HOmvwMzl2ZpRo1fM66DHTD43TlU4Rnmz=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczP5QSgkHKIP_CtTrmQ7_TlFWoDfcbqMCK_ua64aBhA24zF51YsKf7Hl3zaJiP7exSq-3ApOcmadrswyiSxS2HNvHK39npAzUbrU06ZpXUbi6eDJahm6B8F-vMh4mYFkHIYRt-5GGMTqi05j2SIL1521=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczMcwI5s8gwmjkDbUDK1jKkJ4REcS6tyO9XP55y4K6USd3IjgPkVdI3GNnKSt4d1T51p4HBPKVzJroOxvTznWhxvQgpl4jFUdaX_PDfgT5WdlUmUW9_spCusCk3WV9FNsZSykqBywFv6m2rkr9GIsIzy=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczP3OA1FLqlASg0ecuOrWu6NeFiB9GpFmvTOIkwcLY62hxx5Ilmx1okKGt5IM9R_3AlIaGelIKnNT3Uoke04d7x78IMD5P6qci2ojCZnmfQA_T4iYWSaddZfpiKVXZmLfzXYu5ll4V5AW4KYaKdt64cg=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczN8Mplfi7WPyR8Esgh-1A_o8W04gOL4fo0cWgmrsSf4ps3PMq7EGX53hIyLC4bDb3acR3vUoyZ-pFBBxl2MHczw_rAoAqD8gJxXPLW0qEJda3r1LLC0AIxsZYlSa_hiHlcjHaEhDioPjUypr2p2RC7U=w1920-h1080"

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