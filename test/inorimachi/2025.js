var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOgnEfgFtBRbhXwFBErAJ3OHabrzMsoio9lnwSzeGUAiWVZp-G8M2BvmO9u0Ywq42M-QAAn2UnIdx6QReL4WP2PmErAf8Rm4sAl_P4bcdwfrkl-_UrTtI68gNtcsxlqEaKtd3LO0b4GO1uS0msi30mc=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOoOlwJQltAfmOoJZrUnI4nKeK4v1KB6iaKS5GbNFNg1XNDkxzSO3vsuOynHEzIJ6G2O2cQobiJQWya2QGFcEpRAIzPwpEve9GI31CwTXDseiXHog7FAxbs3Y2rjgwl6sMPjJL6vVkI0JoJ-0GFry5-=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPZEWVuLJGzAABdgCclri7Aa0rTUZ_9fuLquePJNzIlzQNvyR4w94gO1LqcnFLfZb7xv-Y3CxZGPrXK51GNzSiKzNmxYrgGSMLJFx523Tpp1J8Bu24CLh0viIfzZVmocjJZdMwOgRwzjqtA6DlNJAaj=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNI4lW5Wt2rzWUAh0sKQJeeCHRK4r9x3zYBWCs2DXSCNFtSQNIJmv52onutZAUnNCnryXCiB3XI5YRsGW1-Wb1tcChdOrlclv3IZFLu4nElLrNYko25PYXMF8HqWnPHoDMm6PUW4Tu3DZgSs-zuLhrr=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczP79-V18Fd-V-vSexZ1HxiGq_dZT-MtfGUA7OJIDHxY4CL2vNzKJfb1AGtMNjEbqr14z5Xl0HqNSHjQTlO_GDbYvhX1sAh_eYbP5fNDXE_28R_G30pzcezCTbtAPweC6ZXHbFV6NIHPGjf0JLoIU4kS=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOsJ7XwFhmW_1YFGeBCpMGeVtJfUJRZl1_6tH3mZWBTfyWkBuBdNmxg2rcOtE4DSfNxKPzVZfY76o5K2iwk0Ajp5awkHFpfR35UnmUlDGIWwcH6FW_Fy1pA-q6FPtuYJ3xELbyDVO6XMsRqXT3e2GI5=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOrwou0AehC9cheU-fTsGHU0b8P33tafpaYDIFc-mr9G0AXMwCzK1r_W04EOU6cRufDOOLpBGbZeaDPNKf4AlDAg82TqZl0EL2qNaUae65y0NIvPH534upm5oeV93CgX7bekrT3HmIW10ngeMya4WkN=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNmor0Ym6aPagBarAIO6aBuZvHOFcuf3BtRZUkevfe15v3Gn4rMfeFMT6q4SSw8klowaOdXJngwtdc1Ot9drYwgL2pzndoU6aYd7hfVweHbPcCxrsrauRg5KWUidCQqiHLchlCqwPsBGp9v4mcTHN5e=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNn5O9WbJ-_wZlMbhDm0frgeaR4M-C6QJElRMH2iW1agYXJQhRRIr3jZ762J9VljTVPUTFzdr8JdZ9mz2Vhdoit7pKCxj-ZHRXlGK_DXK8rDoeAQ9juIdoEWHwmKNheWvibcM6aBOHT_kVAwo1xadQH=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMEiQi_c7PDshMXTU4NcXx_Cj4GjtuaX_9P9HcLsZQkzw02-GPhSnbtvQeiYcAQ9TjgHLxGFcN4hhlaHBwa9-ErvhWU5Doif6z0zr6kRiV0TKGITv7ykz-WVAEY7PxycJpHppSuD4Uf-c2ddFun_XEB=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP2p0tenxf5wpq9JBTQzvL9rqWn9_byy_lgvNX2sMygW_c4dJVvtX9TqpnQpCV5yUCA0Cbi2vjW59Zkzg_n3R2ldy_EaEBAqC9xsXwYh6Nq19YKmRQcp1ur0uo0ogLPFNbNlSFlZmFADUCfXRW_y0h5=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczMTxqjkL7OJ6KUrSshyHoVOCcKrUgDYcedZCWHeB_fUaGYiU_3vZRe4qUm7tqiQQe7rHLudEQXsHwyBDjXlcIC0uErCIBqALZC1F4wRBUd91R4HpQnDSEuiD22hmWYIjoZKbuQBEujYYX-kUBOKWpKO=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczM4SVtOk4b2TJqWyvk4jAPRefa46lwTvPW8MgYHbR2OvBUTmOnlegKJ9cb-KpoSStzREzBGr9MezEcyNo_niHT4xolbtKlcN14XYfnlQky7qG5yaKp8CblkzEKILcnCa1MrnSJfd1MCtUDlho0xDKN3=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczO0I4mWqdXP0Qd09DjVtV0DSiZ7576vMGjB4r54X2qAYqkLzfozw766w8jNAuuZNO9-cTMSbL-q_sGb7tUG02RrPwQZyQLckgY4vSjx-gTMioauKjra3v8sUMcCa0C-LpfwXz-AjszEr1iicqPQBGjv=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMmtc4V4gHXyjkg-uCatwIt9DdunTmp5kKNJobdYPNIGqd_s_PKidIpX_7bfqxOao7L8ynzAVGZF3gFVRp6MV9BBZHY7ez7ISbYSlW_Vrm2BXvSkalG8EDkE2LJadVZYOY1Q9UdS7DS3O34yreROu8f=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPe8e1iUcmK0D-WaqKTJP1Zer4IRCji3FEmByK4XQTybdaIMHxLadCyH7TlK9DXJ_A0wW1fZjdw3kjWor-vz0CGXj5OgeQIhxFCTOtWKa7pcVg14nhSPo8KYucpf065uNfzrtpqbm3Kt0f9UYB3KdMH=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPWOO-R_wLtOckmRxTTxU_rbR_MuWFH3z5GEXZH6Igi7XRavDRcHU1J4dlnnjRO9eje_pM6expBHI7HIT1iSSTWuFgiy2mj77avxP3nmZWlCQ6gvd-OxiMCWGHdCl43hfbfvBm6Qty8J3eprGhRvvgP=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOLLlBp5yv_wJCM5zNCQuNt5TLypxnO9oHy4af2uyH7Liz76leue3CsbduIRGcCQBzrcLv4-ZUMSnVDV8NirEUmgbRTwz41LFemYwKEyG9dsepoZc0Fpv9wEQh52eG7A53sjtQVrhhsGHq0EIEga9Hp=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczOGy_bioO-KV4rDjmyrzuLmtLwc4rgaVy_aDLVJj5JvMP_CgxDwujGuqZlnoOvehsEwjPtFsUEKqHiGUHFnE8tdzdwxRc-6EicU-45HLIiSan9z8kYgfTMrztS_X26Jewqty3qzAGs5QeY9sE5ltQtn=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczP6dIYMdUnkPMb6ZJD3_ptGhpQMZNfJYa8lwx9INhgKklxWmnSv9FZ7vImBHJp_ufUn4ka0AV-wE907cx8XZxXPjVtdg_-uD9czyF80oWqWRzcSrwPdVnHTyyBGyQ_U5kOOk_ML72ARdL6Wp91epVTj=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNe9rSK6_yDag0-_cGpHX3jOTrQ13OeDqflY7a532g6YHoRus_RxeGQ-hdlALZxrMia9GgMYf2jje13kLZ3Se7lTGvFC1h6_uRDgjZHDwM6cgE_Xzcvj_isrRAFWdPumY55GzpkG1iE2CPgMgn4ttZ8=w1920-h1080"

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