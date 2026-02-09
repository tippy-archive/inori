var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNxCP32gaNTI5lgeTFFtveql2fLUa8SVEdY01SG4DpN9J4UVvnMHFVUI6kGOXHS91SuIlRj2XV-URASXOpjsds77bPhvDoiPjED-HE-8Yad4d8fQT5RJGPN0wMyerzlBYTjX22TVLPLxutecI5vMOtC=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPfHwfR4YB4rLmi9rs9a9u1CaVkPp49uVKT3vBEueVrluat8I3SyNOi6xCUx-HBi8jaiylq1JnY7X_CX74G1uIET08ryPQqF_bz3kdrfV9OPJEpbun-hkIRuX75BR5NJPVCQWIR1WxtU72072Ap0PzK=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOFaLq7p8Hm8Q7LA0ssm7_z5ZPziNjeHRtYEBTB0PZ-xYdjOCXwYXvsphYJ41D1zM2i6H161L6HqeFEtgXZ-pqPpJb_XtX2SmiHkWNOsZm6oL7gbTBu42ibMkKtoVXrOHOz41tZxedWSfiiD3_lKxNM=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMAy6fHldi5wvaWbYl-XyFxj9iAWPNZWs9TLzKepcZVL4o5m30QeeClKFjm1Z5CS7qRpQyHMC0ReWqpXeU0O8ClM0J8y4akPRtC0XM7GUUK-JzxlOCFv8n91jZyYIjacS3NzimMlPZ794sPxTEMMcfS=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMNCicyjeSl0hN56nIUMa3puc_ItCpstd8Ggn8IIzyvsXiv317TQ1HCosN_YOYkqC66U7gUEjMYiJDOXqoQMZApOCv9HbniiEuMYxokDsOmCFe7X1o1L9A2dnR2W7dCK-QbClX1DtALoA1ZXMxLxohN=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOvbQHflQxxZZazuI2nysBtCcT7ovJAohLLpNojhVhAADlzT-xpKGKjMbNgRPH9bghMXlusuiO7cRTd6WSPlo-C02DW5wrIMVMeIpVimlvcLam86zihdjtDlS7RBnLivHXhRyJxp-alYw6dwYlNwdXn=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPADN1nvps8xnFcntc9gdayrY8-gYNtXBnOwn3jQNNiZI0z_Y-Fx5Yn8BUQWnkF5tJLaI25DxCz9CQlZ0Ng5H842M1TzFm-ww-OYzTd7w-SFrd_gw4oWBmZXQG0V_xJ2-7BNT5oZmujxKhzHYnfr8ti=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMj8yQbxv4QOSrPEk3VV4njvMsOhdlSGRh-HYzQsb3ufTaEvC8Dg1bOf_o5lh7x2ALkFSX6uEpusE8_mwaWRVOKpzP_Wy9y25OHbo32spUHmuxZm785Nnne_vVwk1cu8qNvA_DdFUyLfeSE_STJtd34=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMb3wB5u7ZuEQzUUljIkZC0fPNDxaDfsHbVXL3NCYhtLxwDfosApNqmIg-zmSzQQLHc-Ob5kqxqtFmX-Yy37XI8aYK_VmqkFbLvmHqaPygCwAn2nTuDYSHFECDaeQV3jw0o6rT295H0neEg6w5I2J5N=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczM_StKZqTS3HmjNXuUznpsQqnyO3voGzwmsDOSICQ79HUe8gTqP81XsrNs275K5iTP3m4RI4ho-0CMdswJn-68mfExRRe-FkWfZ2YAXQOtBjnvhxeQZEUO1-F4ZBQ7eMQZLsZPoB9nexGtqddDl9SM_=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP177yhEb9Cu01XqrDJ8s8KIseHUkdkrW03-hAE9nGjhsiE82eEXvjeufk5aKUgZYKRDTg3yiDX3FuB5C3wILWAChTyYskYHSP4QagtxvHh05CxfgIDTnSRs66ReHe0QEH75-L54TFo7YKXyDahtRm-=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOrhFnFX4aI0PPBXWDCX5vUNenlYVNHHLELrs439QizznDXVfmU_lEKfagBDEdWeg7iTDPJaL_kaOdP7atyPiYYTL0Au2jk47ooIYIKeTDw7RqpaC53LXStLfyZiL1KaxnyD-eN5p3RbOQ77JZ1_GCc=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczNZBt1MDHJJhwnjVXQSd1DYVIrpeX8lLi33fsim41vwsV9Ahe_yoXojhOuolJdYvHh37bGrvCVbpoPRdG62cG-TuCbP4Te-hvxotmsEh4kOTWVuxehCZvhzIT8NQIMU822_ko0foHfa8G0pDpue-C4N=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNo8mA0Wa3_7FhIFyZHRBfwc66M-vuvLvT3DayU89v9wCtDPNCfgSxt7usHlE9qv2lEifTkdasha5DySEHNp9cZEytYfxkpg2CS5y_aDeOybiu0PDe_86Y8JcVXqKCYnU0A4PltmlUdpm3jyOWPCIlK=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPithUGpKhaDgsAvEt4wLsuxgpRms3DDM-1oNYX6OeyFtrh4Lj3eOJJFOkdLGZMUsDtql1uaaybwBhF6OjRTwA9ymvwZcnlzrFf1hzIQQNS0BPjrWgwKMzSVNCPkhTKhzEJ05j26d6I2DwyPIBlh9QY=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPOR2yc1_sKqwcZzSN0gUXxP_89t7Zh1yy_cjq9rJiNZv7NpKu7lgy-3_VbmO7WaCRQ7lncE1kMCGmZQAczGCQNQHynLG7bkjKclGXChABCFwjXB3WYYZHi8Ax33YR0hMl-PIrd3FzwnnRc_O_-G5fp=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczOqB9fh3lizsZIMFyyGGQT6I957nEIZEDi_mcZ-UMIL5PsBloMmsRgl4SqT5AR6gxLPxvvu13rmcXfwJC86jcUW1NBbt6ynAMdxXP1kkcyfpo3iC_SB7q6A0oK7YkR1pEkghZd0EmMO8whpbnEOVxEw=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOWl3D2-FoB_jC1_DOpX7I073Av42PvwNkhGbiL3qTJhoBEBLjApG0FabGeuJ9Ia0ZYGdqVhCgYgdSpny-H8_HWEtetbrXmqm2J92cs0TJZ1BLweg8jVZ6p0mrO6W_AH7kj9DMva0oy-EkLC65MIj3Z=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNil0VuI6QZ2ZLCGSfc2XypjWTSYA9Gbz1nyTXlcZpqeIz6a5JDrRkhYmlBiDPjkSWrbKNgyH8DsSjmN8AjyjxptpltuIBPr7zjYJ8ctMwTGSSEQQ7u6y0i-uI6iMfm5GwZf7MB5QMIIc5p_KDabsh2=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczOUuC36DlukcYg3QkVRYtA7m81eywe6bnhMyM5InMPAw0D7HGywoDUW7_AdR1jh8UbZxqPr_9b_WJIEh2vVG3oqKQ3eg_Mp4HQcJ2Z3iWUOu_f4lGJNvlap0nRxyze9LqWAA6ihVN3zwJtMXU4tZHUC=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOe0UKhk-_Qp-Ov87jPJ-XaFymA6pp_1Lgclxy9VoXBQolSN2oDG1vz79Jr1XYhemb_6jqFfxZRsQJVu-5zvXtow9wx_klU8sLKV72tYjg4glB_6TLeLC_g3di7Gp4FCc6WiV_hITqjzThkW-7UwEPM=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczOnuFPp8zR8YSLoMrsoOkcbn1FtfV2sdZkSxv3uwb5sfpGHXpC4pHJve-HI-Xn3zvPTrblFE64e_VG0dzsF-NNOf0ASDfHvzL4tT-pEao8nnkYejIV8C6H_HmlMEbdcMwlkMdzNN3Lk4SLB9uRJJhTg=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczM_Mv3ytv96f3PbTTDIfp9lArEhu0yuKT_s3mBYLvMTVt-mCWh2prplHE4-Fjy3MMdn8cbfSzrwTrZmTdrsstYYIRTbP-Um3-BVCUNPrwVdn4HLROBGqUnnqO7sOcpXQt9L1c5DBiZ7-dpPHrVqvEgn=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczPLN35x5ZBC2wEbsFC5JCiM3SjkfuoNXm3mz7O6AHnLAHDKsuMb42W7To96_z7lcUPo9TBaAOJ2YeBU6jDa0wGDbgDqhhdv1y9eYWDsqVDPtW8U-AgoqO8YGol_PyyyMWtUhFDW_ug14cp73vNulOLw=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczPSBWDtWSmS57Wl-gjp00Tq8dAyNu4kEzuerWr42Aa2vr5fR5K4-MmYdieanN8bmzWzYT5I_5RnJu3cIPRsOl9RzHAkOlDtQxGBiMUSiO5TDgFbMtIFvepk1wIhQcui2pe_8QWrNHUeDrkhJeHDqvGC=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczNKZwfVp5iVgFYaQhAABHCtKkIHUI7A0Fouv4hQfjmbqZHTvyYHSGA-gZE7dinE-qIzlzcpsaUN1Ew0NdaQyHWf9zmLncWy8uzODMnpbLfBt5ynEGq_iuyj26qpbB-x0M0pgkS7BQ0-U5AndDr9-Cld=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczPbwp-QEXcqytcvetbKiSuwyLMeVBEpmSUb6Kk5iDKNm7-d4zWnAzoVjMfxwlAhuRZJzAJ93CPKI5BrapQIOHSRRpkGAAG5jvIQ_2b8d8y0DUtpXxpL63ohnibQGrJ_h1RfiVVkUe1lcGWk4LAHCias=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczPMKYpFlj-rb5p51KYXqgC2X4YdUnd5UROZMKB46IjOezX2R74-imsuhfNI-4Sw1wBhDEvBMv7mcCQCMB7zmSuL_oGaG4_Fyqtupu8pM5aSfxOSWTCQXG2pEGmdfes_wflo0VIgsWktIhG7iYFwnAJs=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczMjb8WGRwxQ_D7wz9iYjK_P1sKsAgEpRpAdUdQHveeITQFYWuqU5CIJ_kYH4-ueq3GzeTbQRqdegZy1yOoU5oCJcYD1R0OZlFN_DRJVu4L05ekoAg4_TpXebYzQcJLCkFFL3rU5QG6IH-4FbJmn9R8m=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczMrHm6pLyWjtK7J0yRcfkKW-CVx2D0DAPLBbTyMvONCZkoNUcPVsSz18T-O3U8aUCK0vbVFGF4PAmWAVNCo1zPjGTfZgtiM-wVDAGY_rXbvfVo9MBgwZLGQ1y8JTGzX0AMa46BqnhCuWrckJIkHsp3v=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczOyibSQdYk_9gND4L_KnX9NqDhMPwfrKBzfNptsx45jAFK1ELlyYVFcbjbBL8_wYoJ6fbFjrul-1Qi2G7FWkmJnURbUZ_dPAEtkLqTUyaPb_cd1lYFMJ25y6_G00TJ-Arp_ViD25y0DjKxime-GSRGT=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczNwZMhORdbxa2m6ZAm17F_DcQP3DsUYNa1ZaHZ6n-Ahy_YNWTcsylreLI61U2Zz6aEobJvkbcTy7oI_GAJohHGuXRcjGiD4EwAImvuGNZ2zdC7eByC2i9mjjcV0FD0b2erLJr2LEdk-EOkq72wVVS-G=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczPpz9Ej2udXKtp0BBGqBICMf36QiFY8VllKy8xxE9nRxmacizsdUzsRZk2AwAp4NqxzwHFdqFJNcvo1_blD4-nhgRX2NGekbikfMU_cHaCoI4XwH2oe8g9ZL7g5VUW81p7W623nVWqlA8-tXGOlNluC=w1920-h1080"

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