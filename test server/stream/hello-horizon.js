var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPqqWkauTbzrEHXJBiRsH8NvVNOxd_dCR5cpvy3Xf63ARuiVJ-IEGbPYxqtTqkeRjY79oHnmIMh7Ljp9hqW5Tmqmbz6QyDmLfxtXJfapvan8lBc8F9QyOoP9JQ10m-yt914zIq0OG7R2UVfIeQu62-n=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczNWspQN3uz2J9ZcRCeFpGg06bUXGJUp8wlG9DwC8JnIam4yVBBRb10p569ttIVn3mEYWF4hMtIMUxMs3yxN9zMgkBjDJUJJY-9S5Z0DSiGypJYUOkxnOG8UTShGYy9eQCgjcQNur8FYYxG66-vOMGNw=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNnRwOd4neD5NgCPr8QO8YVuNT2_ExH8Y-h3h5qmjhEgq3i1RgCMAUp2XXJ-sU1-4BZ7wPUgm4EcT98GgDK_lwGlRQKM4tB3Gy-Lme6zExtw1cW5Gkop4Cqj_EuWFpsF_bex05PtsyrHeKJVxmAVYV4=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOD8AQHJN0pa0heo_thWjwVXUeGjAxa-rgfVYPkVu0q3LXnw7q3JsZVYDmMtVnLvdxvKTkSTev2zgaDFmnbXINfCoZ5GfZHfm1xvKNN2ylIJKJVkt1AbJn29mogaELGj4WIl4pLoe4pc9DnpYtN_Jbh=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczO99vTSun8OYlf3ToCoFLAq-k3rdfSDGmXIX1xDvfTTjb62wfoQI4vz4qnLASsXg-0X8Yrdjk3-JSPhF8Mr-hVKU83DV4bzgR1DKuSbV5hrZpiw9SgBpvO2aRo6V861ERtEqXHMACakoIAojXwRIaCK=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczM9718G7z6OVtnYFJXu5xbqpwePhsTUhhMhhmJkUv78uw3Q075daqMq9xhJq90Ts6EqCTsg3rAPMSREzm4k84kVNoG-M8Ghp-m-svLIrNuC1q7TMLQDp0Xr7F55LKJ3mys47TfMBw-wDQx8L7_UKahR=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPkCpqcTB7vomOBC0ET1erfdE1xMqSymq2SHhL7WxDw_wUpfQpbJDkpTbgUH9PQ8MJ3I4BBd0PK5_gBQJpyZu_hi5B-tbpMeJWbElKaMi7PJxLbN242HgOMONx3L79sk5Sv4F-WKkfDzxSwRuIhvOE1=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPYy2ImCE3M_EyeqC1nGotoulKin036nTTXjLOiGjBygp7S26T9BeGF_xCd2flh4dVwjDihzCYwln_xJ2hiX1x-GegszugYyJ7o1l57SbIm1i7u9q0h3kbqbiYb8_S7kl0-LF64r1FIeBhtbTyJPS21=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPYKcRCcleq1xnEIBH6YJypUWDuxH-OFWecGTszfHp6RCZJZpdtpSeV8HA8J05GP_G6DDDnwu5rLa5XAgWG6cBCIjB7e-JliOWgCWFIvVJWURNkRQKqgERqFfm8PuvNaM2e5G5dFuduhsU1SSdaJrhm=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOP3Q9WhO2nOJgVmHaQ0CVvrq6rJyxZOknDGxJ1ZS_NEZ0ECW3xxOha1f5jwTExh_7w6a0BDqZP4yVx43LpV7ZJWWRgFJOXMSLgu-GT5-8-OBVONKMIoPt5iQYW1pIys69PW-tkto07OmbRvgUcjkJ_=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczP16gBcUZFXR0J7hyL2GIhwkYZ1pyvj6QBWPncoTl22bVVIVMbg8vZ6T2_NomPeZjqB17Y4fUpQjFO647Ho17P6gRkh9hcJpF8F_sQV2ZIU96QY4PYt33Y1rK0460qpfzBw-FxdwCw5V1YR6lqs48al=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczOwaKncrwWbmgVvFCdrf0Z04J-kA4hdKrU_ZKbOUHAPfyXd7V3fh918qxDkn9ST2V8A6P8EFTvN_ELS1s_jw1g0_epAo2fqoh--JB79T1XKtqNZhD4oO58s0zZJRRiACQ0S_18SGfjEn-ujrK1F4TLO=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMfb9hJpJu--XvGitqGrg_1iTvFeMsweGnMdfPRuyi9TZ9zZiUsDaKFacquAJgXyFK4AFEQ-t0UPASnVt2C0QnTS9m1lTY-AqJpeKFUVoJBFdINCkbnLJa-agx-t23-p2RdB5L6Mus70SGAA0ou-BBh=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOFtMzR4SVxkx1D45KQBm_pp8pdY_Azh3hEQ3wvs9FuDqxwvhZoYGCqG-Jx2sQpUHwvKd2b5i4WEHqFAYkYh1liRGb9GxEQw8HqERf_E9d4hUSFrksAJxxfQ0sMNpoRQK9MYL4UcskLZJrnOLEDXbHj=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczO19FdKatbyc1Cq59ofGD6yqBdqBRlfoGQz_k80cyvnYCBb3UKFX_z658ZqXB4-EBYDKF77B8EyAKirZEEwMZeYdp8m932radUR9TF4jFqSkPQxKnFFgYS7B_50CqIbzTMkBFd_omu4Hbu6xNvATton=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczO57u-S6miufn2_HLPq1sHMtWJuX9J-mxDfcO9PKG0Hp5PiX8nNFxxklN_1g9O7chM0IMjaGW3FC7K5P9D6j9TIOC56ovaEXz3rWlc4OER8ioAi6Ps0Y4pkvCCpMDK8wA7gxjpB1EthjBQBCePlFM7r=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczNZ3GXfeQ59dWC-MBFmfXg-wpMu_1VPDDisQ6DQbx6JXNJIbCfEDDP1sUuW1e7-8CyACRVzCA-WmJq3XPulV27s7k1RsS1cvjxtzHNy30TC-a13mRvge6KD3Q3c-GdFl9WMVTDQ_BwqEC9F8aQpefmK=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczMrfcyz32yONXQRt9_4IGH_WeyYJWB0MNA92hSowrNOlCRAkhzWUM2vHhOZcOz61HN7vOPu0CfJr3mofMI4OMB3TUFkFfVks5LhNcBLQeaYT3D8HRZa0KooryWZNY96N6XjHO9o1mXfTCX5ptlRW-CB=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNDu31ho8UvIAVO9bg2OQTgAKG4K3zCI3-7y2u_POOhrSETIbDiD1OdNtqRSCMOOFmWF7Hol_5kZZNEmpjp_r0hKn72y72slwzzN4tDvznJYC5KruWuIxnSk_0Nr7Ti1tKCNUf3FNXUTzRvtXk_ef4K=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczO6EmgUVAwjYQz2iJv6IBGlm5hhRKxnR59yi1MX4MinOvrOOQMBkbzZXVv5nub4bx3mdh91_u61j0DBqGxepgDPfaolY0rYw-fSZQMzSYazHVSgWFVqxM26MQ2w3PG6g-9_4KfY4M8q5RObdKF_AJOT=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczPV6HggQiN7zQt5h7VzCpyoaoWUp8tHWxzrSCcqofQdBclGCJp3yfDNwCsMfb-GqU4guoyC7As6WIirsgoz2nlR_Xn6qoy196UQjrKvWrWXsamE_SmEclzORnEkZnCgdDBpSXDwx5ele2c42Vcnnyhw=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczO-slZAuPIZrQ0-GcPfswI0IAXz6FkA_yfcslD3TywMFa1uJBWZj6d_v6xVD_b9CBCCjw11X50VoUgf0qreBjFuNCQLrcW238RA1cVlRM-E8Ky9ogkveDlPBKQueD_zFb1QIMB7lxIVLy37Pn5doAz2=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNVpbKJOt2mLDtHLsRu-u4NbSwMo83J8cWw2foDnGWBSGGV6A6nioh17DqWCjGIhT64Os13fLL5ish-oVn3Npc_WRTbFA5ujNKnCf2E7QQZ6rgtj6Q3z9TxFjxYaqjWIijpEBENJUI5REskgf4ZEzJ9=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczPY0sEysCWLQ-b-_fZgV3ud_COjBBoNd126iluF4FGsrwTtFDDTCV1zBZBrt43WgscoFbLA_9IGrzl1tvKrlfCWG7deCN5ASLcDtZgwrQTRC90MBsbdjOM5dQenX-0Op64qY42MH8EjpzyXjK8TsDjW=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczN3h7gLH5FAZDKl2f30_5hms73OWDRl4JORtfeDAPrjkzYPRWmsJHpY-UvG3XfJlpp_Q-jUfdE8gR1w5Exa_f6j9ysj0NmXUqpotDZqz6fuTLET0LYDJlNRF9rnZABinH1IHBPF6ud95oLZQ8-6b7jX=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczMMigAe7y7fCL68FIAOaoRzmOYb_bVIIugUpOPed5AsVEcrFcuhoaimkyjVPIcLmDyzBxuHiql93ztASgT-aFEpsmryd-ZhCGGzqZrgnjiFDxk5e9DOkvk1Af5FWCpQxZdSnYdQDK2dKhswUErfqf2A=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNsack-XNkSC6YgsGUo7g9AZZUA17z71_HnroWFtt363wA5dib0Z07xt98bWab0AuIdvnqvW_Zp31ZUQWKW417hgEkjMrnoWJ6c3zUz_T4-j1EXODarMIMh27wjm4OYJoC0kXA-2uT4Io7WOPfsWTf9=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczNTdLpmL-_jn7KHJOBY7njvQF2-qh0SNofwCT4XKFeq-1LR395TxefKaZdcX6SBPYVzyP5LJNE2bRuNi2H_etHTHnhzSSMtDrz6b26BagZo5ExQhqDyQwZRj2UmGJfMmBIk9i76BRGxL819hmUU4Iv-=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczOcHUH5RExms-ihzIb2gLyhyUrgh7c8NPn7lihv8lOPWljqh_4d12BcZH29nKqrAUYukNaJH6jGCHEHVV9XTLHfcX_amhyg7OXVcM7e-CVbVw8dpyjwL1Gq8kNEVbmsnBSozgvcKLb341agL3PynJG4=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczMQ_iMqhtDsuxYKhbh4pkgWqqvc7CC4hNAuzrPyzFLExZK5v56Rftolok5s-j1II-LjE-YP-WKlQtPVaNOKlO66dYQPA1FAEdlbySccn-v42_HFG7Tc79GKoTKOblvW90imiNL-r-yALfDgs7M-3o_e=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczNHTBH7y2rA-nhe0G063fpkxhLxhUrTUn3Uv1NRjFydrnZqzqxMy26BK_0ZzCEXa-k8UF2T_yC_zcKFQtvGv8Dpr_gvwN5Epq9lYQ32v69fsKu3inzsgf5P58ZTBPKhEEV1O68mBUr03nwXHyVNu4da=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczMNbEEfZ3P1B6HvM7Qfv-A0tmwfSW8JhVHBlfwzEe_Z5_sLdX8M5BbEhXmsEvo0Lh9Al3LzYFdb6J76FZIrEJsoWiqEw0tWjEvP4ulnbZvC0qOUt2omqRVFJCUbE5fvkQ6sldafBuOaiCFSBSFUpEQv=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczNkhr_E-ZcEJtRgNyGvq5o0M2XdFAngvYuhvzGLo1Blucqxo3mwvQi6Yfn4-Z2JDznkNRbWFeMNFM2L1fdNJZ13NrotdPoIXcMAl_CTvlY0U6cxwB27u73OIwRO3oTIVtBDLg9UFs7ZLdH4rsmp7Tw6=w1920-h1080"

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