var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczNaoU7ZAtSxxKqOxuVEHmv4cfghllLftXMMRuDbe26oO2qxsEUw9kTvUmY0hisSrQSLdO8kCwiSkdfTHvsjHJyUW3BeSyQ8Th2a9C89-mMcAW_gsPA9WkVUCE0QIOHG9EvTDA3DPHiqPlyI4bV_VzzA=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNMtbhXSBavajmqZZuNg5ATyqAh1Ryq6g5ADrSloveNAcGvF_trUtAKEhMmcv87Qgi2aWl6-uI5429eJ9hYqzQGPh6z2-uwpx-QSINvQu_h0MEu_CVxDSPDpmiLeRPwQ719XRGdcZeNrhQZlNudGtyy=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOn1iDek3KvgDSxXcnQiq8skCOfGcq4fATYP-hTS1jvI4vSLqk3F4kdKLzGcIf0g7EMVVDELvXnKxhmPnVf0FNLr8dmlsxmIj47mU7FGQUh89X0UbC0BFZV0rI0pXIc-nK5qmt-QEeZttACsrcI5oEH=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOK-DgRvYFrNH6Y2LuZ28qGOEJ9kbNu2SgCrtdmJ7PCw2xa_mOxpPCJU2efmJqzjzLDqy2-BjiBTs5vyTyLFwMCRKlEsHriJ-sY85vdazm8KgQ9h1jxkwKgkeF0Osndmd2vE_XeCRGyxOaYm2m0F3zi=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczPBZuIK6NQcIprq5yxoXv_1abiKCh8D0Bdy8JHU-EJQvAe55bTr4e9j_Xx-nXU2sjMe4cALkhvXoFn8yprILjmCyVvydPfaWs2xs4NOSOd3d1NZvNCDOWPQ3UYJ0py4pEj4f52AKWYg6KCzaqSWnyeS=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPJsXQPPsaR56jXjXhql75oOt8taCPg3Io0zcKB_JU7ifgbK1SfJ9UDGp7eL7u4ub4N_Wcd-G1cltpKycR78BNVWQRk7Nh_WZWzncbsBPm1eqeSDsFCfJ5OPtIJy7AmVKZxke6VNovxG1L4EB5r02ho=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczOKDiSZg_hBn_Ivpbz21pcyzsjeRC7hoYwFxL0ajQeiemoNvCE5yVBwUAIkyMyaz3_KR2pQjqPdA3bZrvtKT23csxefIa9H-ZbiVlMW9rw-SPutAW7r0t8uH5nKAsCZq1WkQmp2oLpNGpwLb-vKi3RG=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczNjdLid3VbiYJ_nu9kNHk6XSM5oJgdfYHFofR3Ly_n8gGo5GL7iyHoaLoO5He44PgQzwBZ-LHMt9ImvXt4EL-Y3uyXsZCHXd4ahXjYjjcs57_UNZcmJEdsf5XQyIMgNnrTveLIeouG-JczZiom4GeZY=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOd3ztXorSEoaCp_5wZbcG-gLdF_xdvmoaEDj0UyecPytgEj1PVvg4GzdBOBjOKW6ioL0MpMzQgBVQa-4tC_o7NDjAO4g9rG4__a52eCaM1oUt5u2FYNkG6e_YzowcEs5Gwg25VmO_iFbzQyuvECQRR=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMw_kuy8sULF9_MNC_-V6GkLa_j_69nZsvgHtGM9Ljr3IbFw8BM9uAjuzDFXiMU_eL33mhk7RQsQha4xaCo_iMX8CdJn0igBb6KNM9ZRnRIIHsT9BzshlEvL9RpvTRD4ZIh5W9CbUhv5gPH3j7I4W68=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPfMBpwB8SzIcWHBsZkgdAlwQ5JDJhCLDa0TIQLkDbU7XFzcRhW1m3Q5p-VjumQZOf5kn_4xRfusvnEKxAPKk9-s3FIAXSagKSG2-VMiH9cN1aLIam345O2brVHgSGVoIo4rXG25AVs_fLsodjDHsd8=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOwCQ7ncm2Z_irzUkBRkulSn95s8ZN4LptwnyIw9cc0MtDkPkBFh4swOsorN9VnT_k6j6joyFSYQlx61X2w3EVr2PRkgu0hy7aDTnzA8FCTICEc5FeaqISszPrhfB8i-9gJNNejbkGctS135z37Qcdd=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMrLAedfn7mNdIc4aQCxkeQbPLz34L9t2sEG0TCxnlE0L_K8I5yP589IqyxrdxCnTleK4bQiejcFy4-FgDsgxF7EjCDleI9hAhgMKwx7kLvdZb0Q6J9iaEn2ldu1kXY1DrQ2U2dsxWa4fcoU4ZzkK_H=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczP3-HxolsOaIG6lwiqfoFEtsFrqh-hspvAy0wvwxpuT33admoqmsO-qwelwlupDu44CxDP3nuSS5BWjyZHL7OQBVN6G3RhUZdVCYH5heCi7U9lc-GlqAIB5-3J1EN4w4YlSYaB-LaGoOnGIluYvLRzn=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOkb-pqHH4IqOgm7AnxySafVEfEhWaGSFb2bKdu9vXf3xgkj_ZnvQGxw-ViVh_Ae8zeu-n5j_O9X7VBLaK5HoJ2cxTEj2oGCSeUTef7bcBD83APwibGuyCEnMzvSONJZvO9UohazpUXc0w3osJUzV3v=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczMl5Xk28hgUWpBv2vdHBykwVGvnxK88JSkHpxIYpMjMOd5-xixkSko1OjomTTtaxggAw1n9mPhOM_CWlOV8F0k6LqYyoXrm51FIH3V3ph2EJfFelBcj6FA5OAdUcefgDBv1E67QgWAienAuMV7lyfRN=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPD6glAJPls6LOV1IqGBfAReNMubqjKg-RZ_X3x4ZWd2nNjt8AnF08AhGtN8JZD6e2l6-87NNMrXLZFi0hYEANz86NJmU1J5qr0DjnWqlGNvVoMuTkPK8wZU5Xmbb2kLrblZzE1CSLZYrU9To7eB6Xh=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczM4wzGf4xyhn-b8fNLoFwIzLN_iNuyqAiK9cXLV2ZfazsnJXBQ2eL89491zQMT8ZnICg1nFfzPBfZY2ksgJQHr2mvXm-dy7w9l2G7U2neou23AS_xRPUPFKbp5PSuQhAM_tMUMB-jw5fg5Yym9dKqv6=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczOSEgXkwbQNdQuHr6L67HkAOac2J0QRbJbKYGsF93RVPays8q5w1_oj8Ujxq-d8YssrBtbONYfL-wM59Tni7tgMw2s7RX9HHeNKaqngIovhjY7rMZnoIfhTW-TSQ9uY64wIKMjtUuKnhOkuf1kGIUr2=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNO3TYb3GWvDaiVQJEgiIWw6kzRRY4zmL1kGwpYsJ8Z-Y9CHmSMj1M6EnTxE56U_ytkp6yTWrNSDDxObfLC69jeyTLw-CoBRygKyVmIJAVhNnCvz9wOr2VsKKIa6Z6U_8xgr8z1lsR_3HOxwjH70CP0=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNzGgJ3PnFC-G3AFMum_fkKdKTroGH6NuUaoy69blXqu1iHE-JrMYXTrzvbHvW1cAtVK5joJdSWVxO0sVAp5BAEYHYonvsNK7JrVQtgF6am3osDYx8f30tq1CC_SmTtXkYsq9UIKXWDxauMj6aBdesQ=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczMKluIwq1sGV3XlUpzgkNvq07fJ2oWe6nxjrtHtXOT57ElO9N5aJ6G7SP4ZoupCeGChoaOO9G9NQPuIGQMzT-lIGCbE-IqwY6onKdsE51BePK1bNep6GKqoCmoFyNf0VDH9R4aLVcseTtK_aWqhVXB5=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczOi6DTrZF6ApBan-JLkplnbYIa1vo0dIBeefvuKCwmZHc1DeZQkLasnBcnZovnm1D57q6ap3mcwaD_bGPoXag7rnKioruMUl4G5JOO8hbClk7f733K-uorlo65atOzH7wwFdUmhVMgAonGufT56SmAx=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczNMkpcp5bC6QZ677cQbtnMfus1HUh7aN4vpZeFtedTxZKkynBKf39zeGsvFGz_nxhi0oKagXRQ5ybN_zoat_fdz7_co5IsQN3Ivjo_XHCnNlFmdgWEt9v87a2T4IRYBBo9D-Sco6Vom7wB3Fq8fdwNT=w1920-h1080"

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