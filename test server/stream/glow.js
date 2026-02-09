var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMQc-U1S9NpFMfqbp2axVEVpGwE7ChZbBLyXnalNbIVL0F158CLBTmMGufpVciLO_1TnsSIIlbROgPEx6Mn6sN-bNNx1sxGsIGHk0C6jwcm-ANMVB-VpGP2kiKjM9pZ5yl9g6NFKMSNdET8RvKksUlG=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOKm_DOLVRAXt25DvXj7PGO6o9GmoxzNt8NibWzLj-Zd3VP3sq-ryJ53D14m80EP2lQqfGcGTQAUfMObFrZF4eQ4rgs4YPZ4wT65QCQyZMflzBsUZotd51npV2wsiRiu5LJhsC0egQ07PNgWKxPkyAu=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczO071PkddCI6CfR6G1GQiltdWHKVTYsXJu2CGlC3Vi5Mjm9tzFoVRr-6Mv0Pb9THNshCXx5bpExPELYr_Ma7oipHCiM6xEhb81gYKvXKax4B3uxLfiROhnmMm3VMBkckrSTT4O7gCNhWCVYzWpNkpN6=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMJtZtH4VpFvIFWTQ5YQCp7peFE1D-g4IVOlVjpvIsEZne1NLbXtjegZCcUDXtR_G9uJo2T9KOHqsG9jDq_F3O0YZO9uQR6SXABvAPQbbwiJPGeVh4StS0_xb5iY_klWxcLlOsGTYnWNkfdmf-aiQEW=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczP2e5FahrhgW6OEWcVpX2t9TvxNmqN04AwLAxF5DY56ZBxDEfvmSKoIvENZ1MfxUrgBC_4c072VnoM49rsp2KIe-Sc0Xnxg_qXfbo51NGrzsVxiVt4WAZEt4wQbAgj50PTcdpo8T7R1p3cV1DQUwfde=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPDLws8HiDF5jStq46MTFWHjm2U_fgB8_Ol2PAUE_NQxLrx77aWBo1tZEKxZHVxim58ba3-DH4Fq2BTUz40bUyxKcx7OmwrmRJdDC2U907D09j5JFODGeCQKZOEb1ispSMBf6-ZrzBHj6tZDr6gOK5p=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPiEh2Jq7efEuuseTivT03oN-4G4vh45d4Cb4CZpN4IZ594GR-Otnbt46gef2KwK-OkKevfRBCHqxil_nG7XjfqPr6k_LZp5Mk8P26OfOV0Bi2Cf1PaxC8zIdTUp1x5_pnt7XJij7PWezxGA0671Rwb=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOB1NHZjWtve3CZScZ0QmskaamUN0IsZ1-LmCq5RcE9yx8XKtXGA5AOinOhMZ52pu9G6XvXxPsgaJ1mqdBZlRpFP6_SDBF3sUxymS9CtDHy0MUZq_qcgEps85vTVaiW8_hEVlOuar4rsdm-4MS8NRuz=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMcq_uMg1hHU_UwPdkSi_nXJe8g1zWIJNQe50Kx55Dv21jN_AmlS84dEbCG47ii2ImEr-YdmBh03Awoq2UcBtL6zd7xAtyngrNQZAYKpWIpgbYSLclNwi6KjAbValUGxxRz2dgNasXVHSzgJ01seiQs=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMzCZPx047DRi8GJnLR7ai92r5VG24bGmNPP1lBv00vJPgVvpgqIlJf9UZ5bFiLryseTcE6QuFgLCIvkxLmf3M5jafKLSyltHn1gpwFkBjSJo67tg65bhDzMIPukTEJwDHA0n73aiSkDNT7hbm1LbWc=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMnRdGDAqm-SNVvZ2mpmDkU_Olv33Z40TaEQ_Ey6xrjNMuSKnBIm-tc_DzngOWXIMJbHm7ncdTPGitvGI-ImG-txrWJnRMvU32PVtV07eyhy-NjaJlhZWVVpM0ROPflE0INr4SNNd6pNB9IIW4cFqPR=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNAeosnyGAjTkHXtNk-qG9TQrOqnZ-heGlVSQ0QNyegT6SeMzUu7yyAMmS6scnUwlA8vUcnJn5ZXsEBNrvnBDX53gKcXjz2NFXy01ngG4e6_9qadH8Sl8z6NzIquizZIUQ1NtpoJPqdZTpgDnT-otLM=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczOohALTyFwdLJNR2GL_ZZ9VtTMVtN_vxTgQK-wbswFNsU0xP32HaOrpGY2aiAOya-d0JqKyBxm-yhPKrpbJF_T6gXC2PJJFaQMwvATKPen8QzV8xBco4nfhj-0fMvbHC24-efcbXJrL5oHn0SexTzoz=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMP8f4P-_v8HWz53DAnGLzdz0F1haKGSmwp11lCZd3DmfwIXPLVl4mZ40FJm9P0Y8HSGTk8qSFDU6_DHjwH7xvHoDr2bBwdo7iv_jIPOF7SRSn_WJl2lc3Krjd5ZWJ8A4xvWg9644BZiRq4FoqUx3l3=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczM_mZ4fJklTBRFVevgVe0WgIwK9VEAucZj7dc2pN6PDB0mhXfRSxfSctSYI9UgmmeX9ffAey3fAKwRGTrCrqK9iBIqJUK0nZSp3cLWWlAE95r2evCTuB2Zevlxg1Ywwff6HVSsl2HxKM4dKye45vA7A=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPQ2quuHhGXmbXogy71UgrvmtQKKtYB4lOyeU3GkbxasmaaLN6DjrveaBwr4ba5al4O5r5MwQOfqn70etCZg3USHdHeQTtjLwqYAppwpdygi0tNwcJCpiHgoP4fCO9-pLuxDHR5sLEK-lXAHMI5fjR0=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOOY8Io9nK1kVwmCPKbzF87Pt1W0FdtQlP7UFImQ0TNwdN54K-KtPKK22fUmMk2nZJ-VGPGUeTjqBA0jqnz25Y9JHHsiR-LKtAgcfuEAaOK7kpGO9227XL5urxJCXvBYIp5fynYf-YGANhKeVeDZbDc=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczP98NABOQ3SjzGg7r38tr6o1B5ID7ic69BUSLtDBfow65GN_AVkijfE37fzArthVsWkrO2EshIHbaqqSbjCy1CCJyempT6Jk_IY3TLfFW9CmPgDdxzBeSS3ONHHb3eYskBNE_T_VWXJZ8bz7V7BI3VL=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNhNeImfDqgEhxW4f9XkRQ3Ji4jo7FctLO3hYtQi_us02FoMogY7HjL2vDt1uAfWQviNrD7pmzE88FJ-ynSJIEDTkoKW8yLVsyocydSLID6wFPzTF2ooESXwS2tuIisjUn1AqNXggItY7p3g3-eDSdZ=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNCSV2ko5id3YaJeLZwhp6wndHX7cpm1sD1nZRdWkJ5D3Bl99Os9vkW86dbKxto5wma8_rS-CjaGz_gYFDDpuUj3avD8L-Y9GgH6cMn4shop4ltNWvkdjCsX2IkCzP6Mml8mEpAa_f8jh-CSeVSmriY=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczPH-QamHi8v5J7dqbAoyI3SmgMMUkuVbYbNKLDhIPCx2gCDnoKuejHVtwebDPwSnLgMI_B3LQu-uXlGbH1gzg_rvwBYWXHj9_BuGI_B-hpotfthVQqdYhsPDQbou7Jp1xbng9JssNbYhyvPfih1kWMA=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczNEYuyCflKARSzk8cPi8_S7rzjNpp1lYRk3bxPCCzOIa029QE_B5Q45slvK0hKHaZzAs9yfaqiZX9qTcQarFUGtyGNZSJKVEL8Q8uB42ni-8HW_dHxReihNloPn7RnPwPHYSz9iV2YF085emqKjNaL-=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczPDj6q3k6hGfpZkHIkbvPJrY3_k7dJ5Tgc83deiegZYF5nbtC08osPDl3d5zhYG381D9pG59k5-vFS3q_89Awvn50hksTTlsw9ddxIhswY4Wew2Hm5wGB8XRKI27gJ3K22LymFgjJEE9WusRTvl82D0=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczOEqZevs5W2gAe5CevgWFeub2ee0pKTiERZ6RdLEwVvDrtz4hr7neL5lNilnAjbpNbuqrGRvtW6yQHqDV7tstDciVwIQ5u3opbwuBooVZKCvLbLWkth0UMYFwe2Uvpr8emCXJErzGYYJcV_wCWk3G87=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczMVxtarZ4tiyDNKOHbHXEbRKahTYgdl4hD0lLMYze14JOwM_LnsDZV7fjm4YaizkvoZFYRLKJ9_9SKz6kYOpJXsU3aioUlZxlXA5q9k0Fn9aJ5OF2H6fq2pCiUPAcNyki--HlSKFMyOqZ_VHHst8lj0=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczONhZmGX12aOlZ6TpUrVmz3H0U5chiETH9UXVzDi9mDiqElWqOnxF3XYMNrJrSDWMdLqrvUGH6iC2ao4vdZlKp_YOo_hjANO841kDXiUWLjAvQHUy9nsjsy_hcpasURvip-5GfpWBLqBOUmlqPuNpPW=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczMEMDysnLZpwe1W9AuPDX_EGD0t_ZhfWd37kckWrKmhCeHcTmloBHtzUTyezl99qO2NN1h0aRYltp0fP7TqNiDmAXYaxypm-KEarBLp9cyv1hhaBBOWfl57ly7I3R16aE1mvQXihP8MZ_WY7fvgORx2=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczOeckVh6Yr8eRz208F9QJMi4552mcTR1pEcnRGiwNFTBM3jbLVcngQQbUmyNzQRHn6GTd57N1WdbSY3ZlT5U4wB-eYfII8GXHNIqpatx2EwJNKHD11sny0eFuErrj4bJtE8-buVnYu5PMIWe1PYUCTY=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczMY_9UhuufG1cQ6hHsZL6rf_pYyILzCMgObgh5qJh8bVMF67-xQv2yndJunXwgFpgnz782Pj6hLG9SpiHEcNWsGBfrUfipOxhk7vEgsgAUqyun8ZbzY6J2LgQVr03ePP2zzhnIsWacyzUrrHPAyzXfZ=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczP8rudBMEJrXw3H1bW47PyhUXJ5jK44TOpXuQBCZZ71GXGL1iQ6fucc8kHa7JSr3-ALYJFd7-qEdGe39kbNkVBAuMF26tTJogqNW4zxkc4qrdX_vuBa7QKHN45WrlIBi50RwVR1LGmhaqZotmz9Eu2b=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczMcPyEYYf_JhVkDcQMLF-aXSPe7fIdTm7tfxNeEX4w2I28guTX51BU2Q2Nr8M9FsmtU_m7z-B7iJ7iSZkyZ4iroywYvU5d0Hz7rEGhFZMYZ8zFtPrX4XsTXot8IPX_LIxPeB6DR00Z277BnC7P36vZO=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczNARXh1HGmFaJc4BbKar_r99xSlSQHW88ESeAkXlxfHLfAv39UZrgCF4RyZE6qgdLhThD3TmtRgmrL_dIF87fIzgjc3D3e_CJwnwARhZLC3etTdrMkYZmxXS7Kt-jH3DckbVM2DNk8mMYtaC9lmR02p=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczMdGhW8ndNpV2enX-Pvrf-s3DrXk2E4GAmSREo893y-8R9zNvpGqt91AnwQl-4g5ZUU4gV1CUG867m_pQsaFTvH5QqhHtJPmRVCGDylDkH4_6fY-lddksnj5iOwNRu7HSPhQxmGv9IYARP59J-nb4tx=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczN2ATa56hVf3cGa7_ZF2MNPYUG9nSVMi76fXm7k4SD2tNa7mZMcdpgAenkJ-KHdbKSJaxwUfvlHAtefeOTO5JbFd-t83UH-m_IJqQDE-IO-9f9iAgNJVgeZDKJ_w3smxuopFkF5H0SBnP3TkDzDSTK8=w1920-h1080"

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