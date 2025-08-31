var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOSNKlspBduuRiF40G5b8RD8HgXpKs2eaTvSNVuz5BrGQEA8egai_c7tPA8wU8bqGqidicdBQfLuVt0ZK7MyIngeUWYhkyWJS7Fpn5P8828bTBt5jRFY513FyDf1YrpkWu-eKEHZl245GvyKUpX9-0-=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczO55YgVfYbJUpqvXqQHqZPYW0s4SDgbc3zgfjRwMpxrioONBFHG5-bv50hGyZIM1qLu4NDZxA80Rjyt6-Vxpa64-g-G_cuE-QV0sCSSBysKxi5Vd3uYVCTTH8UjNuuay5gH-Yj6Aj1s86kMLqPhylNN=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczP_uU1fDDnzWlnVzRuIOvT_1Y2ErsXnQzh2iUbNzoyZR7f6rmTcr_brmjIXXfqnbDrJmR5-90oKxcrpnEKeioLPB4wgvVJBdYlO1eZFTR9gSGmeg875c8nakHKpPd7b5_4jkUtW-lT_kIKFOFWlmo56=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczN653aO2Atrr-QZsJ1av-oikpMrhGUUS0c5hoD0LpDx_QaGCikwP7L24ZgxRFcXagUKZeuERbRizYYTw1kWrbbNXxO5Suo22KqgvnSqGAJTkzplL4pp-42zxQMhPO0EN1kpQ522OFEHC-mxyoGmh6SA=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMpgU2EzdZA2g4qIqPRDglbNttYUyGUSUcKuPGmWzJsfakECW4J273OPeb5yLl8-eRscK3V9ensnsrqAhmKfAzW5ScFaeri3grLRlrhA-X1xjMM5yuewc-G6sJbjFUvIPPhdYO72Ec6HYdKRulFtISd=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNP99Hp5vHhLJjBNaDf7bzNrLdu7ZK80UcDStFgzN6Kdf5RmFSckM-u1VNL4ZeXRFu2uZtooDqsylaHjEy3UOxH26T5xVMjZDeRrTNR2SSU7wu67ls5Hvte_AcZXEphC84sEjD8Qw5O8ed6YJeF4Iel=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPKc3CMIUm0QCAmXpQfth2I42pw01PccO4RWuyjjLOOim_2YiRUIpDT523Xga5kUEDio5fig4-9aOnH_gaYpCCQkwmNPH1NoUhb9R4mlXytkzorXmblwcotXUiWEXZ_gLIogW9dXM2RwLJwhQQXaT0a=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMg8fxBAaBZAYIbAOZLCwCBNhBQiAChbOCnOznr8gSrfKXoYdGEcdM-gP79atw1e2eFrIXZoKgquxX_ABH4e00lKzDnv_XK2_1YbxnfnkT3RYWOCJP2zxyN-EAp-MmQ9j4gRmq_Yhe-3raEa9HtNrvv=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczMMEzuzEnFKGBHUeismNoIOIYyAQ0yKpK2WMTxfPbrZieSHwAsnxRMgnupk8tFrCPMmh67yp5RzU9vzs72KLnUYwt5Swf3SQKu2j0OKOwlLRxcDJgjWqHjNoeAD1JhFKyIHB7-rf1SvEDHxy9NdSuek=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMA-LXveBVawrVHXO4PIBde9OXliKya-DuXzDLjINKsu_0u2Fktc_9m57QMz6xndziVyOKR5VdOp2wpcJZWMWcJ-sXEcTaFQWwRNRN0U82K3DBNxfTL5f89MUSrv1sM6FToku95zbe9ghJOJBqZYsin=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPBtSF0EdqPWAnqIhJXddbxrHR6eNn_b7WV4J7iJLWyZfT0jQmBjptQt1LY1iAT6iok2zX9JPqKt5L6MT0-RFmj_1B8H6lEXg-71RomppMQTDHlxM_QoXLvFNpdylpVXP5Pmx5gp5KDdBcMk5oR2RFy=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOvA8CW0A_wPFT217m_uV70_u0Hq_WXQE3wdQXAUg1GsQMnQvg_B82R1w6QJglcATThFmXVXEUrGc9E1aLItx-1iyAW7H9cJ6qXuF_SR2jHhSMK1XrHeiDhEAzm9vYa6DzrMoZgb0bdLrY9jqYwlrJs=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczM6SKyc-9AXEO2IXXOdKDo7ES87lmJcgDwOTRcaerOHWOaxXyDiiFchZee-79bAQi8UPX-iGmne91x7qbOEppV9ajgkhri64OoepUSsJtm3iB-PZQ6O5egfkF5agONJ5q_dSuzOMh95BxIrBkZoTWN9=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczM2XkzJ-4yBFA9t-FH8H1Fi-5i1T4Y1hI4xmODb8XgUvWO5ysdF_ChNrxxSJ0Q_x8sejFjUD6f2qNYF-yvd5KG6nsJTtiIvR-mEHB6XBuO8PpdbodjA4onbMNg7_G6Gj_LsOIeIKpjMnVwIa2DZ9j9G=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOIqYIKHWL6rSevEvueP9qLU1D0iDtsXr9-sZDfejKWm2CpgJWt72lfcgqDpd7Hd_atf_RHq1FiGgyBkAKWJTmHnK7UY69uQx5yJD5SY0sV5IWI7X4s2d7FQ8CUl2gSmIZJp970Y1OnwNUwmyyEnMlw=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczOpY0y96OxknqCtbpUF1QS8Yb1AMPSa7-q48NZXENnzkS7qiNkiC2rG_wsHYOfKu4wjdtC3MQBIQV1ccGkEkzuhXz6HJjpvPbMeWqjvwOuNg0OWUN273GGCDDDufdhfLCV6m9w1pEryJw7D9DR7mOiX=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPRunl-j9Bz9vMLgo2JbeHDnmuWr5y_VrItnYgHwyJ0_NELNv-yPGINjcW-BLhloyPVlZwg46VVTJfmhtYx8ewqBCWYd5kZK2iLLFVo5HqKVC-yw4EysjoequIl4sC7UNSBcoyxwSanOSudsPH5XKUa=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOywkOcQKmMYOaoHTHzJTDBSfPRdhWG-eNVBVv25cPrylY1yzLAnVj8xjgiDQXk1jsSNGVh0G_Au1AgQmtcMiBBsIuyP02z_pyyS6g2YCNf2yp5E22gN9tLKoxVfbBsbuYSJ_F9r6kX-IwTo3ioN4ix=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczPF0PwYVFldzTnUpdpUUVtKs3MluXcvCWlFghg_8_9m2ds5ejGN_EEkANGJfRFpSntyKu_7q8AAbdyd33c8JkoNrE_DI10mznAUKJD7I7a_NcCUCAr3SzH8rCpYRe1_aV_ESY7G9mHRfDl8Qc04Dfuy=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczOfiwHf3EpVMuHyVn7KDtshvURnuFJ09NJYYU92ZW9r6iJ9J_r8LYG_Mmg6nQkDLaFns-cPmRD9g5D8hO8PCnNlloiw2T01Cw9VqsoEg3QoAcnIRGjAeWCOwUkemXvfgCh4oPSHOmRs3IBr6WiT_Lyu=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOlUX8Rj4uEo3IAhrWVBh5nF5Xi-zfM9q3ryU2ubOQhKypSYa2_Ordy3X9aTImaNfAlzhzeHpC_M5Ge0hzhAFEWHySIIZbmObftsf2vdLM6g_7NAbf9XepO3u1PMLXpBIToxlg8fSjfJIxO8C-29tIN=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczN14ULIILHL5n4bVtQKs1AmiBHWUfd3jpmhwuoEY1cGMC5v9uLgVD93Iwda7pRoMD9duD_NjjHr8SXSm7648fX3rX6p7sGrz-KfIMq9gNbVP9xY9hscSpA61T_kGeBuoeM4aTbmWpxgVVLAOWCIT-ze=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNugO_eBzKWZqcsSKCwzprz41lD5YFpNaMIsyso3zr_3_2SJXi8doX0xLq-6B84HaAmUPIUZMNgXfD7eBAtYtNJZBPHNreZdvtfpuW_ZXy0ZoDDodDzIfraSJPKPJ7hZnKjr4GP0QodATtat9kDUBI4=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczNozfGdLu8506shfDezjvp-_BcRXTsrPL3zCP-N4SDCZbStMoqxDkP0G7Ht9iFiw8nkVEVBesh8S6cqYWjc6CkuQ9mxyUwBfml9w7uEYUgtN1hesbF4bwvLsIK7pmVbRlJDLlW8mIX-Zwe3rNVhxEWI=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczOy20voV73mbthq0-hfJliZ2dxOEquTlZBAE79eNSOk6OyV8yGY0tVYPkLqjSE-JPAj4GgbBei7mvnAW4qaBMX9p07MvjZo-alcSHw9ZNdIkz4HH0T8N2tJ2RTgNTQ2H4Js6Y8ZdMU5UIMtBP2GL5Nl=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczP0oPbNMPzrBi258gFnzIew4qC0z0gP6f5nhHzZYXl2oGqUKt8K5VNbOhJvjx3SwPMwVZy_nhQHlae7fhkXrQ1quA19x52avphYXJMh0HDzRK_6jxp1KOQLpiarW2I4WX-0PBKuAqk6fA3QzO2h7Aov=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczPLi7NPE1mMUU7Y_NsiV2eXg3yUsWCPDNvIoVPnO8No8VswjOd57TQ2Ov6QA20NftX4E2OR-Fim-QjjMg4F-HoKyPMogmrxuM8QETIfAo15A9uoxttyluOUdO1lbH6Sc7xbaTOnrAVHunn2tGJusck1=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczMZpV_R1DODIeBYEX0WjTiBmE0BtC41TaI_ZUe21mpV35JCNhSzY1NIYaC3iDj7lYTNX6GfTz905uKlvZL0vM7KSf3UHAq0Nn2c0EH-NRhp64lhy49Lvv7HDTvBzbLgmkgZXwRlIV9tHNTCH0vHVsa2=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczNmzvCIbRjWxhGosFL74-lWGe729aYBYDzbRqvdP7u4-H85Tq7lFESyXxuoaR_UOVHn41pOMKFaOFAUyCtgUXjO6liwYTG0t3xmCB59DbwsTjaUT3vs3dPjAFQYfr3aHQyCGYq2Kowzr2amgHnCS1WK=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczOLM_6nb7RC1sJslsxlLsCwMfGn9RUXbjBObjSUicUufFqnTdlblXeLJL1jRgeduN4Rg9ghMDe6tE20n-2xguDTLAKy5RsY0uBLT9L4v5qzv3jvrE-rLX55grdZCp9GMQBsUo_G1mNvy59e0Wyyocj9=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczN2HpQoFCNCle3aqktYUlgFTtnQ-hfLKqwIkMUfIdyGFg0Lpwne1sPk5feMNmH4IIVctqru4YaX8aUeP4irXlCKc_eLDVYafKW2_zSBHNmZZCTExas3gE2NiMgQ_elH2N6xC9TyKAYf2u8Qj2MFD0cX=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczOZpVrptzFSn88pczVUYFtIIFBXlNhgZkF8s7K3WWLr1udxXelnORfgL-V1A8Z2ncgJXZSTC50JPfPI2ZiRW4wTGmqKHZzMEeucp9LOAZrpFB74Seai__pYbGVX3BYNGeKAlv1zok88w0dQVE0Tshb0=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczMCqGQtnBaj30xcvld-HFmhAKqsvNmX5M_jSZR8Ygeupx3E4OGGJbcpoQ8PRVNXAY0CY0O_q317hZ6SwomMOfdOMQbyCs71J0HStr3j3KlnIHb5E7n0l80Eq8KHLYGA4bKLNwutHHgv9IqmGV-Xp7wb=w1920-h1080"

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