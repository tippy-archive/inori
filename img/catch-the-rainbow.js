var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMwwhHZWmJfhgL7Aoevy2zJHZRkOKQMKH9P-fpFusbpbOICcATsU3P3lEAFOyNiSIEXrvOdjriGEQh4c8xxrsF3MM-qtTd1SYtVFYZY09TqDLdFZUhFgb5ridSrkh4OvnkKVwnYGrtVH6zoELJ3qOxd=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczONtpO-93HjCyRZOinL4NeoPIOmu7gMnj4iZGumTuI4xJcg4APubst7JBK3hB1DJrag3ZmAZJ0mTYqozE1bhHTizxnwGHBJrJVu5iGCxfV_Muxm3patToLf1B8sVtv_Xe6Le7e4FVZtFo-nDU2EO6Qo=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNdHQ3pkIZcbNW_vb_4mahO0TfD7EKamYgdxVaUKgIXIHFVhEqFj8bIfybhmZC3IkqpfRdhne2VULPBqubxcmRfhXoqPshPj06xCTWbHhbWSCYrpdX3CvzXPlyfrw7CL6hQF4PKzSivSv5oSvaP9hFg=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczNKUZezF0QWZPZ12kkNAClQPsFBMP-lQqD98ZwnOe3z2hUTFWcsDkFAaYBX-kNUx5PK6265b7-nr53qYzJtSNZifNNqe05ZsurpSVCpuiK-MIZvuvon63tqY81x7d7Vlby6nDVoaKMJhSj71_DORVFj=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOjysEb4KkJQexbAhcr-LAlJjr3rXQCjR485-VKNBbMDXm1rUiu2rGEAPcqbRmmO63Txo0nc8b6RU1AHKMa8YfXKY-beU3E21o0PZKQ3RRAhJiSyBWGpscv3KAKAg7iTdR7LkgL9PEgZpn78fIouyGp=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczO-n8-_bsEPlamkWN4aCSymbN-uGmju3cPUydMq_m5gueEaFbD54tIF8EgWxpGozq3xzoKO8DKjTcEwwIsI4JQgkTg3a_JMmc1gVTVTskvUPJ3rZkCuoAmJXC3aYMzgbe6nHJV-hcFCtw42jtzuw_1r=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczN-wqopo8KyXt-w3_pK4HwNelssAHOU5ABSbT5x71I8-piJgqsBhQi2fbRJpkBzFsV7BkLqzowHy699N0MrFj6aHc4Kq1xc7OxItjS-UYWug2WgeBR3vKBQCoYaKDhdfZ1PCvHxferfCWjC4JOa63pr=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOEGwmGLKR-20w-_3zQc_zsSDaCquY9pzuXfF_zjPY4QMe8Nadteb7-rmw9zVMb9hX3WshVmTwTEyeywymx_vAEfbcMKVoxWEwDWU0_28ij4GjBcjfwwS107P2f2tVODkgc1OIWy2j5TmqshtoEJ4hJ=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPbGi_TCJK0zX8MwZdXwB1S97llQ-Ex9xnUL-wbiUJYEstAMxGwonpILcyvBGYL7aXuSbgJqgv2jz4gbpi08qg3BpWlcTTCzs97z8XFJaI8gKzQzT2ErMOxeIIWij84R4Yl5NKtxiaMxBkEwXmdtrNu=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMaUrMZBJQes27rBj4XBbJPToC4F8c3edZ1eQBT0KMwYBR-FV6uxQP2xQ_i6avrM7grROLT3pkQvmwUUDr3aRhPR7b_ATTckq-H-xDe5BbEBa_mQRZ1YExcztwqyEIpPFaOMYIvemmKTrCbpijpgb2p=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMkCOioDRG-29o6BfOkHw_xZ9S5xPdstmBriKEn6GSlef7MLe6yPBRST--rM0jW9ODbmCIXSe_PG1Ww7BUkXxKaCxhKcIDka_Z1l9S-UpIkbVtnEZuvkDn-95yUKbzJjgN9svfJeH_VHdi7dq4oHlRq=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNREbW938AePQ5uHZJueNASI58XfU7pWcHCVGer33XgkmTUAL1gcXsRwv4mQA8YFZu5ueXyQv1yrvJwMkdPUVSt_JXmCNGGuvqktBVjdcwmLUELFjgLZXZL3XopgRX4u-a06LoPVuYEcihWo7cUrpjl=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPAdmBLRmwBFdwJDNDlTIBn8Wwm84XepGcT0ZuY8XlQgTPc9iYautD78xjOZCXVmPOSH6MqJrTkBB5a9B5zcVmMC3EeQMoLHYu_J7TWynzOCWR5610Qd89R8mgDg6OOWaDJnVYD4_OLocD1kn9aG3Zv=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczN7M6Gobrxb6u6zPgU_KC7qkdJmD5lyaLINIuttMXox4uoSGhddFmUQL_EpBvw0k0iz-H8eqz9QrQPNiSvkj7IEw0u12qYiXraSu3X5QEtNtVtDpaUUZe1JnXpaSPSTa_ldn4m9sh_qZCLIcSS6nqSa=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczNgZuaLoQJW84YhZZiNdmgdbuFdRF84AAI9M68uLOychIKdp55vcSNKfLBATGil5C3yru2yeJ8bCRbKGzs_rW5CISTmExu7NAzQNbwhmnKkdeDKbbSGsAxCsVOBbkY1zccM2a5Zy8flDE9nO5snk55_=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczN2OFIBIg6m60XaYYCvpjAUcyB7c0Tzdiy4utUs-WZn1eGwtUuF6rgyFydqFa3dvGlr1-_4ZZG3uSFG2OvvX3pcdYn7twU7r5Yfagh8Dk-j4Z35rR3RvCSoG6dRoc_vWtHPDbswoWxfAdTE1BJfTGiq=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMbmrRwd0C0wj8sk0Fz061W5dqWMrb8ftz4yyHDzP0P8rhYl5alIwlEeVa1imeSlS2jtD_ZCwOHvGw9Jclo19X0M1wJJPFOforUUxJ9FtyBSyB_t9ghIH87sVtnIftp5KJ0685Mcjlg0dDCwgD7Dimx=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNNnlS1u0KgmgfcXr3kzlhnX81uEHy6ni_QpIqVGiiS4xn1gvOrq-DsCj9Cp3moDXG2GNOQD4Igv2XJWRyDtpE95clbcQqMzxnwAYMXEMx0IZgFlIVf_4Dy2va6jAlSgolhEU4XVAOV7CZksRmbTDb8=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczOThVkiYGccHL6gIFxrug7n34X-N2SCualmqm_LL8OueKyiRNo6XWg8Dc0KjYLFuVBjyGyhrj3QH7lo5Pq85ziT4vtu5DAyghYWlnMFg7KwXVM4Z2Gi2vSbW53lKSJXDJvmnb81zLRDQxk40-Hx_QJ3=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczMNYo2NXUT5JglG16l1qOkGl3Y3U0yoWGdOM5x655eXOC5XKX1zLkFn2W7vqJNwmF1TPAnXzKCmOCYns1BsjSj515kzDflvWB-vqzX0w1fg7qwBbYyWQJZ3qkEVIK1bUyL9hRV36YdRu2A9DeJuWn49=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczOnvERShXAFh2I8OrX0-tierSUIPHyeXH4UnEQ2Ora5M6Ok3HVobECDZwsBvGWl4r9xK7UzRL14B4cK2zIfdSzEs4j_qO5dotbikWQ4kh2Sk-rSaE6QV-_acT-tOaJUuHbQDTa_Xh5U9QHS5FjJc3y5=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczO6wnFbXPyvp6L2CW6jLoM4q44023colFrgiRwrqM5a7W_ktc2qEvTxMue6kixPtK7I1E1Nuppi0CKNxD1JpEqVelaiAtF255TqTnIFeo_gkM1xyybFHOAwRL--dP8WULv34bEKwMWnrv6RjXwiy3cS=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczMfvqk13FLQrgvXbozgChYN41USBgTcd1_i1DZ_MaD_oYhlfeRFYS4W237ixovurOh27N7XXdWyqplpouPpeykM39laJZsEQg4XwyocNgT5cy0RV030sHVc9QuJf2xXqzI0_SkBNDa6ExH29Yz3DHKa=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczOGaqTmy1B9BtO6NpHfcCkA00uEthpcAjWQck9M9DedlattoMQOaLJJ6TV26r1IkS5k5xFt_wop9dIAfJv86PGwyeoIYimrSTn_4yCYDOp-M73rHybPkibjQeprHUA8X6NjYFNcKFFA_9R9mHSElPt_=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczNxRIDzLkMD6ljWhLy0uWJUB_AHvUHymMFMEykw-cvAtd7uaQvfK3wkQ2TyDCkCIeeymfNw_GG-HBN-dRtfxJC9e9tZBrHkmhDlY-KOPEKoLNPmGpVEL-2B7bZ8cUGsXzCR7znI-hPIBjbUngLpO6rK=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOJ-Ezo6SD4oocwBWZhJynqdznzMrRsSO8N9J-5n-anuQiMPURkIqh7mTFuFmr_LUL8GkPwj-x2kzxVj8bm-LB1moBPKnRUi3FKrTp3_K2W4b2ErKCoAjRxeFx9yEMS_7G4K76NVvQzD8fTLNgenRS8=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczPneQ2dkeA4LUS7XscW_UuB6PTvVyJSAt1eVE-n7wnnNg7_ckhtOto8lT8iwdze4EhFYqZ19VXBExHqJge7FdoGTACJkZrbjl9Wd_jZ5PFGDmzlN2WuRcfdxxDAj--7uiJ3v4lc0IPph5YYQ2rSboKg=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczO8iPUd9cal3xNyCM6Z50lUFcyXvc9zk977zryVPAfYoHwxNaJN-BFLYcbHiqv53QdI0RiNGCanwWDG3-ueWjWekiv5dJjl6UQG5rlBbhZknvBw55RjCoUETaV44cir0VnRWj-f1ovZgLD9F_-akKxz=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczNO_QVVzXtE-pOm_JyLZz75naba760uSH0Bu5Ucjvdk7XNO2yuwJLLsVGqKgCrC1YqVQLZU8EFMoXiEXWzmpGPIntcZ1q2PSiut9oxGLizX-aXwRBYn1q-YmTu8LpKC4l00178Et7PXXvC8CPNcukUK=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczNVM7DiIagdTKq42MBLpepAUbKj0AXCl6sj2gz3IMxdz8H5Kr_1aC3Xn3Gi4-vTVbk3Fn8t71WvF7cc81va23ARXxcr3iHpE_YDH0Ny1Pulx_JDKH1MytMhACaySJGlZe_OfaUTDhkxHXifemvD2Qj3=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczMiNKxCHzldK9JVvIUTeIZ4bvOnDxY7NOx-u1iyQvU6fZu7T7aNgWVeV8e91d36Hf__vF9D5Kpgk8Q9WAhGNb8CpQ1Wl4ZxCkiSOcQt_nj80sCuK_QdrT6L1dOIOP8xj25JkOPgWuuPR4AiesQalGO5=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczNH2Y3a8bJr7ny3IE4jnsQmYTU72hiXVxV7cG1AVBJRGDJJ027MbAzB-UmfFIsDMYveMq-rwzS7gZSLVJEYzUJ5rx-OjGoieJlF2-BlWvisSirpWH1Xy0QdbJOHvXhx4BPICBk3JXC_gl44aQceN7Lt=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczNIpnc8l2dmuhABh920xTJbsjYzZs_GMtiy175uvuA8J4k2CyBRM0WZF3EDAaAxFYsC-SQq-bQ2O0ihdFWvIV7BUG9Hl_wDNnb3kqcr4pn5woyI83CUK5NwVQsotpL2ufwJVWKPIrI5dzkXoSsvo5yQ=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczN53g_xlfjUoROgAtz-vbC3rhopRlc5oJKXv4PJzMPyjvyqtBjq5QL5mSuInf1eaP8OSg3Y_Udxv8BjxK-gNXcm95ow1PlGAHBKxkzLjLXmXZNCqEV64X8-WNoOtW5FyrSgjx9xb8lFgJtv9PzjkHMd=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczO4QQyqJ1CRxyy3TL0Mfmi_9s7DUrAIywNEG_3UAsT56fClJp-EaPuDQxbnffjhvCA-8AHuoKUppbMtuAq3ALpoWxRlKWfSG71gOe-2sucMrM9Nu8ULtDuqrIo73jtjdRrWvJ43hrWlq8W4qdqcAdhF=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczODMjFdKLaoStQJj8epbYzkbIH3-6Dri8u34bHwtWiOZYjmXpUi21LOAOnBR32bN9bhzcId8DGJEr1oYSIXzNlX_uDR6aKldjZy_1gv7r0tvvJd2UusHIzHn98BNZSZq2dq2lXSLVtDr49N_pq1WRPX=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczMz3gFH1Ypz2oFW5holDtMAEiBgDv0kPmbOpKOT6dv3T86ncO0lTckIPSc5CMPV-lUDKN6BoteelOUhEC70ybL363m-7gqF1ev8gO87r2ZLITeGG1vXd_QdrsROmyty8Du61YXz9pwDcPHFGuWN2nmF=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczMwtQV6MN5pF77s4WCrm6tPor7PYNV3osg32cOYPOSdBI1cD_l5DhIYGHj28CK-a5Hk-oTYXXLykF38kS9jZl-yLFWvtE9QQuiUIfRfEMnS45-idJEY3VGnWjZATcgx3orVkLsMYZyjBLzwIMTo8eZ-=w1920-h1080"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczPVkpy1UcphCJEhKU-uVViBAXh1rvSLJYQlZnBpXeTCM3KWfxitxeaoEkutvkl7irBUZLOcQqLIUsC1NdxbicWGwmApiifCCkHpjhpDFJAg9Pr8yRmfJ9G03Cfqa2-DxOsbopZa6C96UUINh2ulUZfy=w1920-h1080"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczOSnKiurmV9PuInXfvVLGGUUqNUZXftd8SCJW3nqrZC0oX0gx7oPXfyt75O0DWbyGZoBCsmbJTpd75G_EKzW0NuGRhrozfhyxwo2pgSJ_r_aiOzR5Ut-15knbHSCiB91MzjTLAmlbfloGO4EbElPqWL=w1920-h1080"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczNRwZYh7FKTBINQVCt5Clc2ANbbnyD3ghsy7GkcDtRHgBVftr2Sf4k4PJV4cM3aGFDRkE5Pr727mVxCLhI5UIqKjCXicIfDlSlpyARFk2-tQMhWMrMiVqfasY1mhennNmoPB9eVzgDdw-ImnA6ePiH4=w1920-h1080"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczMX74uQRp5k2cducoBgV2vfriMAHVmoUrlAgEVeTtP-sXxx9SreWCEUYVECX12X3U5pDfonfjp_BmUqbIwyk7hNP-wuBSotv7Y1Gpm5oHU-INmP0Sp2L4kvJ8jXtB_LoYg4H7gug-T1LgIOzOv9LiuA=w1920-h1080"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczPHuZWOQjQ1Bo41V3pHLSAO8ivViBK0ZN-gQpUOaetxXqMMnmbOP3pq-hGr3bfmxS7QESMAGmjhuc7HdvLMWDCkEHCHF37tjCCIdOswEHZsU9i4zuhMwjaxgqyPam1X5X23KSc3gZKqTG4-9JqkSc-l=w1920-h1080"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczP6huDBQ9AheBKAI9ewfREuXEAevd5xRjU68UzUKQhGrG9vAWtQb5eJuTQvX0S-3S_uQXor3_DDcX0K2R4wV7Hbcv_kPmKtneXDM5AiW193Ghop3zl6_tzx3peWTfj9qxCc8QufZUjnCKLLRw_6gHzG=w1920-h1080"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczPmGfaeWSjaeAM8yYtrpbe_5PMUsw3IqxcKqkwx8PccIarQN1NwertqTklQzxSyqSkVpL8MA0quWhem9UTSUW4EQ9ARASNLdPkTGQZnJwj__HgZmVD3Dk876ridNns2sOvHrmtEXPsTg9vKfv5SdOxW=w1920-h1080"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczO2iOhNtiuS4kcCt31KuMhs9vNhubS8mEX5Ofl1c8HYLabVYnGCr8xYPRd0ZgTmIt0jOEUN8zLezseZaYpqQFCoSRr7W76xf-T_sOGinruKipc7_U4AnfjOd7Vi874r5W1EO2oOGzLarhOaUBCoHQDN=w1920-h1080"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczMa0c-xebftXQVtSi1wNjGBTiiv3m9DneoU6kW2q0bxUy013wQDepCAQd2ayICI_nhSEyQ0x5jUROtMcfNUZPxFbK5bBeTI4kHkWUwjZ9AaJ6PjAd_cmpuB2PwcT_Lv0x5pTwP8Yk9I0bSuhm75tcwa=w1920-h1080"
randomimages[47] = "https://lh3.googleusercontent.com/pw/AP1GczM2sL6K0NLHj1cv1JqlUCLeRuaE15dQRED0TM-M8eliGYoWF4TX5fWzzToHfWntFJd_eMVhWRr5jpJ86ws_M-1xquTFFCRxH1Mrt_futMuvDrujpVUxAQFenDjTnmQny8-__-HCVMUBfr8VlD4j_hxY=w1920-h1080"
randomimages[48] = "https://lh3.googleusercontent.com/pw/AP1GczN_k2s8aVjFkhWvJDPUrQQ2EPvs9IXy-2-p39M15xCda0z77tFwD3PbDmcJu3sDAh86AlKLa7AGtHdN1-ML414sV08oSjPPKeLaUsZVOSUMr-mJcmm8RWrAhK9s4bctPm8Z9Z1dfw3ZwuFCsJbyqHMA=w1920-h1080"
randomimages[49] = "https://lh3.googleusercontent.com/pw/AP1GczN9T4e6eVvMhoRNOrrZPKns7hvyfb_YiYHw30pRfpHk6nYLPF53OyVJ4rK_Wsk44ujmDiHiwqwphbSxFWlSoDr-04f72lIy2feYZiMLapCY8LM7QtWtEL5sOcx_tMBOxgXuNCw-UbYsVjQNZgqOfTO1=w1920-h1080"
randomimages[50] = "https://lh3.googleusercontent.com/pw/AP1GczOyJk-yzpvyRL7Sw30Na0-L-R2C5nUgepnWfy9AHpdR4JWHu-3UDAirhicWSG5rXSJQYD0AEbGhA90IK3vR2fuOwL53FTZR-qHNgblfbaQnj1Y2WGhHy54ydOYBYYQ_u0qZId2jXjz7iTZ96q_s6qSr=w1920-h1080"
randomimages[51] = "https://lh3.googleusercontent.com/pw/AP1GczNxr0FD4HAYxWxgCcT--pFo8wDCRaxrzr6O2J9NP8v6eyYR146nReHYXpjT8DCOI3eMH9jAxQ-mYSAm-nNrouMznUdezns-yOVCIUlOZekpUCCVVzrlY7vobWYKucB27HGHyxwQolsv7eeGmPuM4SkN=w1920-h1080"
randomimages[52] = "https://lh3.googleusercontent.com/pw/AP1GczNz7cYbVRL9E5afMt-zadpH6Defp0kJcP9DH8NeXff_bgjcjgjnQ6PNVBRuT-R95pYTCYaQ1qQyi-CI5FMjmWrB-FJorXdakivJplRHII_P9EBS413JIka5NeeGM8qCaz5vHUXYMtNyWVzg_0rAcfhn=w1920-h1080"
randomimages[53] = "https://lh3.googleusercontent.com/pw/AP1GczPKb4iJCySg3GX9kfikA7LzeO-fk_7dWktxKI8QtzfENx6nfmXYTzoctojzrBioZSD5af_a4QQ8CukOzKLuWr9loQQjh7OFlI8tlksGvRGtt0u6bDbPTT1yolVoN1bd9h3s7vQDqbkiGDlw6HAMzDFr=w1920-h1080"
randomimages[54] = "https://lh3.googleusercontent.com/pw/AP1GczNtEsyQwjg209OatI5cmigFD6Cx72vKVd-BNxGjoecD9r7L2zH84W1YOS45O2LDY3vNfutNydJEUfLPrB4XHRnP7zWqOSV0dXr8rmXAAG_OaPY_eaZ4adNnkdV1TLRhGNRaTbXmKnYfPYE5TRHY9ouY=w1920-h1080"
randomimages[55] = "https://lh3.googleusercontent.com/pw/AP1GczOKYi2eek8ibVF6pMaEqgpYJF2QCpd-nFAc68xcrasq52umVTbGnhdP0BlnKg2sAgM6bqPaNxzXw_g1u_FDALYOvxTSuuxCxAB2JbknRBTkrQc6pQT6N1rRY-P2GdVrc9a6fJ8flTzC3guLexY5fg06=w1920-h1080"
randomimages[56] = "https://lh3.googleusercontent.com/pw/AP1GczPvRgPma5j3NgLBlbra7lkp8VrM7kr6zJvL9l072NhrL_sjZK3qIgzWbdyM_5AJM8EfRoMB3hLVBAuhXQNTu1wRsswW5QMiJx0gSIFkhkEruFeCY-roBDCxWyVcKceMPNnWiJfbRXUAga5Lb8ikZ6bT=w1920-h1080"
randomimages[57] = "https://lh3.googleusercontent.com/pw/AP1GczOFxeeNWxBa34i_8Wsca7ulPeJaZxbLzkUa0gl9Pnu3QBwU2-m2uwZJThhtJq0-xz0XAeEdtw4ekC_a1ZWSMKaGwDEKHIBHA7vJbr-l_XWNJnJUnqxW_pE1hAyO2CKav0j1GFFD-WqeWc_RtIid02fh=w1920-h1080"
randomimages[58] = "https://lh3.googleusercontent.com/pw/AP1GczNdLoC_zQQYappI9ZCHEJCmj81kdTwsJZK4LWHYvIqjGiO6C8wq4FrJeoawoIiwprPxm1A9Felule6NR00uTCBZspXJAv6Fmbw_ddJezW1RgmPtmUra8TAgYScg7q6axHNhawu-e_4xZMMEOltTcbJo=w1920-h1080"
randomimages[59] = "https://lh3.googleusercontent.com/pw/AP1GczPUWKemYRIHCGpLnoJjcfuw-g_CZYFhm0H-xsdbi5rDQBXof37LgWvKpSRgLBNDhfXD96jS4SZ5MmGL0r6uKk3nmLPPw3QPi4MjdWPy4t31rQEfP1g7SnU2hW8YYCFRIfseSGDJ8jZpExMKGITrovLK=w1920-h1080"
randomimages[60] = "https://lh3.googleusercontent.com/pw/AP1GczOAghWEEIGMl5pA37I0LFyTA-FbPLJu23s9Sfs-kCBrYGmDO_JAYQRPHyiwmLxuMZJcmTM5MhnODCELFxedFIYTe_QtlNfPNEFO_nx7PmRI5mk3nG6Gw68pud1T0F5OGQNTiYwYkis25XHvPtErIZLS=w1920-h1080"
randomimages[61] = "https://lh3.googleusercontent.com/pw/AP1GczOqH9h69vEHxMU17ASVpsKPllr8HmjYKL6w5US-jEtVAAE8ghq31rHS2xpdSwHPaaIeX9XIBdXeWCf9g7n91sH-aFg_OgdeHzhEEc4a6m2-D9g2N_Z8RKkOZa_JMl9QA7deMdLTM89LFTmP_eEiFeOJ=w1920-h1080"
randomimages[62] = "https://lh3.googleusercontent.com/pw/AP1GczOS1BeGMP93F-mOy8CHnQuLFnIsyselF-hYRqos1POjBYs0CqmZKgg3FTOuBSyEWbn4WrYLbUHMrG7UFut0LLvgItDMjDIRfAGKUWn91NPiJIRN-sE6ImcSdoVgAwwrGZQaeGwj4W0zrQrP1y7tzefF=w1920-h1080"
randomimages[63] = "https://lh3.googleusercontent.com/pw/AP1GczOyS9FVLXxWJZ6EmvAD3XYNqxTircL6W4x9JLg5jQrQKxIw3tsW2pfRBPG19ehjpxLQVrb0XlVBUBwCyEFR3PNm-6-c5CHIJGJE6Z-4HkuJ_GHriad5ZLp8X4nU2TSDPZnLE0GDUbJzIa24nZVPXFQY=w1920-h1080"
randomimages[64] = "https://lh3.googleusercontent.com/pw/AP1GczP63qtcR3UsLpHLq9IzPgewIKIUkpN_nMYYSChLNisNPwtezsGvX_i4MJWnuwdt5Zq4RVHT1VvRpWK8PxLDiZa4KV6R76K0HB8T7N4UH-VtBWN0Et76ztQhmQkJY1iUWKy-N-ZFF2CdhtOwvZkC_1iS=w1920-h1080"
randomimages[65] = "https://lh3.googleusercontent.com/pw/AP1GczN9pL_aLTO_voq-1op1rNPs-vkM6knhPZWsCrNT6F1FOfvTmiiltFpdcAt9KFJyVuKkzVExepjv1YyDs-X0YBURC-13FUeOz5_eqIikpYS4qil_gMx3pVFFG5R_dQxqJdQaaKHPVX3w43ldMojAZApY=w1920-h1080"
randomimages[66] = "https://lh3.googleusercontent.com/pw/AP1GczMPTDeczulwmGeRi8bazoBgHCC7M2fE3sMXWHev6825giAyfIWxZFC4WSN-leZEy58_VwsTXlDDrK3qN3z1z9Hj-l1u524CQT0r8TAcwBzlieTKuuihBMWI_qb71SRCp5UXgf1qZxbBpV-ejYiCTqdZ=w1920-h1080"
randomimages[67] = "https://lh3.googleusercontent.com/pw/AP1GczPYJ7GheMRkXIYQDjEPzjhK5F3eRPJYz3V3sQ_si9st-12t-T7ShNTymWKM6yIthPHaykqCHzwmvD3UrBsd_YKa-_iwzuZtK7AvqaoSigB4s5zTcucpN_jfpIiqjAS9vmnAS8WGQ2mQ5N4pd0We5Q4w=w1920-h1080"
randomimages[68] = "https://lh3.googleusercontent.com/pw/AP1GczOXsYEw2r7blsrLZCLNuNqlL2Yq2yOCkl0Q6_61p08346wrs8hUadasuqVEnbFmsAFSsjbfN_u-JpGKcOVULbLzZt8qSri5BlYPKKiIqHiaUx_RwunGkEh3MqOitI0KLre2H9qMRXZhfXkWGj946Les=w1920-h1080"
randomimages[69] = "https://lh3.googleusercontent.com/pw/AP1GczPfNASZ0d903xshZwG8rtTuFMJavcDtyETeEchFWzMgOVUSN3ZkgLaqTCJmx2fXQDx5cAD6-ox14YLDrrk3-9M5GO9EJ2YYzZ_BDAho4ocnkNbyjtKT-C8rvSPdcGFxAp0j5FpdBpGvqtSTtnSxs7Wp=w1920-h1080"
randomimages[70] = "https://lh3.googleusercontent.com/pw/AP1GczOqZfjbj3_ROKvfm4tWxNDf_8LfNPPE2YkYB8ZzgKBhXKGZdiPuw728wjDa1-rl8mMhDzvSdE3x80TY6If-Xb0wrT6zwOYIK1NtcZck2zyxdJhw42Sdso6F-GH85aJzp1azwS1AU0JVp-8RHcDLzNfv=w1920-h1080"
randomimages[71] = "https://lh3.googleusercontent.com/pw/AP1GczNlmvYmCyC1wV1UA09CBb9JFe_FQagoX1MkFz0xTwQLjRb8o80y6YnoAt3LOyoML0keDqIyVe6qsJbzZVhscosz00LOr4qsxnjx4VbyMYDIXJHl--8Rg_tDIPnzDAa3Hd5P_BYGrYJ6jTpcC-xKlVy6=w1920-h1080"

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