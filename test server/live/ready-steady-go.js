var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMf3TBBadswXILXgshJTIgFj08aqZw3zbpm8PQA_vddm3lCaYAIQqWOMwWndyNgHJuyH5UogAzOJj5dN1xYN8lS1cy7vSqxTPHpc7TcqPpbsNMSck3iyvIpLvrvtLaaDLlvmocnMonB5sW4-ENaCmc9=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOuTYge08T9XYfLMBG55Gp8Uk6xmhyAb34ZdqBe6K1FrGkbZRJlE0i8FfECBATRl4Pz5GXL3YyIgT-yC9NKuxzCNwky1O1w8IKrJcApcz2Yq6ITVuvX0KZZ1ryRy2GyyujQU1oRj8hOsv_fVANJHPBr=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNgPEIZ7UvPWtDaVZ6137NNRoRHk02P89oqfxWhsFacHbSWeJ36ERKlz4wF_a-0SWXdOpa5w03EscXNCQYOn2E22AY4KGWyKVw-ceLzNyMee8ff5JSjS6BcUzCnZ1EeQ4FZtl8WoG_BCki4I8TQ84jB=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPBvLHci8pXgq0JQz8BaR-LT_2iWeDbSCV_PAc8mrJ7Z-EAoG9TllGGrMfkt4-7gQFnWgnHS8-2HyKkVBNcJWbScBrVJcrjvSfEXrIut-o3NGgiskAweq62G9HfWD966NtUM1iIZWrbB4d-MdUZJ4lM=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczO1zKLO6XHieToSHGuYVMgG7AbXjyoma4YNrzEaxiT0z88OKRxFvEhiaEsKlCDfWJ7AXZQ1JbGQ-y2JLne6mbKiTOYoih6lorsnT6NUFDgaVzygYoRT1ywhid0BjsCnYY7xbNzRcnpxV6cQHpJhsTfy=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczOI9ICZZm332Cv8P1T0BVOXXqisNCguLujq4aiKlKkqFtRct_0f6yvx0pRUGebw0lwevLOWf7ANcd6Z1CkMaTrmqgeelrG-Mr5uNbHCFZHQlsL8qmDiZSPCI2o89WLskdYtnlxNva2yEansZxV60SjA=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMcUJG-jAP8MuEnH6C0mI5w6nogzvoNpY91458sNYQhn75lQ5Ti8hE-xIZ2pOf0FRCz9sT6crjQ22QFn76jAezvWNinERs12Wud-GLoIdycfcB2VcXjTB6lIit3pdEN-12bLRA0i7DB-DH5dYIg5-Fi=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczMASPkcfs0C_mMIbfioDKCF0giISLgdvsSszdjA1bhdueDxc-hWjseH7cdN7cKjXWKU5avBjDUCHUAt3TgDI8dBb8f2ffyktVuX9oteU47nq6fAksKAoanEB1B0Pt8CcqpazDElcZe4zrkT9M5vYdRk=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczP1KhkyudmkoeDwK-PCXnWYL6-LVgXZhxxlwz3gLgsL_wRjpSTzDQaGrAwcJ34S2koAASo_GW0vOGwqve5m0Ouy7Mvm0hbMXv6sAy_ZLgW0CAnwCDBy_poPPW7bmRh1qlQVYWzU7-QzV1PFvk08Afre=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczMWIxRAzoNRZ-52u_X3bMHIklgZj32YcmHXjywygbGvyssXhI9ge8ZZQNoJ90w_tBG_wwTaTfJ5HBbxtrtvJJ49KKgHw9qcIifewwuGf-pLftlpS2KEWJIQI9o1HDINSxu_Pj4epGebgmSdvoWEvDLi=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczN0zlHCcutyjKmCnOgprxTmjZBDFbdlamKs0dQ97f8LlIAv3LkJeqhqRwjTwEkU-D_rIxSyBEEU9Tj8HPgNgA9hKWAKU3XAG2tcs_isGFiFsPZ5pv85FpKIduj3-ghkTdRI4IwhriQClWvq_iNuuyAF=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNcCdBW2KDUAbvN1akNldmfQ1jm1CpwVdgPglZWeklaDUhOXg9Vcg9OfB6nmoJeVo86x45nG1g8fBRjT-QdjYPeYnFluoO3IXoBtJm5qJOVjNahkdcm6pGlK3LnV5w76PO5zjSCkcCW0wDhOHr0deYI=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMYcNL77xhtiQ089e7mcSLbgM8TxeTG6lYi0WcGcVoKpP2brjB92_3Jhsr4Befzp9tOMFG75O5Ik7QKyBDU97wdsd9oeGgd9T4gHfqkV9DeO55vhCxbvcuvC_cwXh47Ee7jaM6vf7cgZAAdj7jJOxej=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczPDzjSk-mtdsWyZEF5qKcnj91RPSCdonuvUVelrnQpwCIFj3lxdTxB9kXe2Z4ZrQK9i-xyO7F-mItKlCW_mapXYTGimkmXbUduEYQ2NIcspwET6LZy3FINz3QJhOfqK33nSJfNLxwYQjGMFM28BQD4W=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPTwroppwLokn7LdbKSQuKAu5bq6SS4IaBXUnuj9Av2DAY_a2ThIVy8chKtUDM_Zfgia5yJ4EaXDxJ1kQov928PW-60rsSpnxfYjBt8tn2Vak-VPCuBMgcbPou6RyGvRb2IYHFS_Py0kB6WOy3Gsqgj=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNAVNBJ8qcnYpf-ahv_YGNkRZQ5zdQhNowYZdIGXKS5KblwcfsWq7ws85wn_ykkyNMswNrd15y85PJR0JzjzE_mUUsoPaR3gBdGk7Fyb30iM7ocAz3X6YQ-sjLWsFTJW023ndAbThKq6EV8fopt7bEv=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMIKmose7zQdi7MwOJSf5r_SJe_z3NFDyGMOClP6c5o3vOM2gChwAIBg76MLuwTTCvGmXexYwAQfENQ-tO_NKI7EjDb-UFvzBNpTyk21efF83M8URVaRcwgehvQHJR40t-bsV9Z4pw65FEzxDRnfbR1=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczMsfJigegTSisOYcE1PGvP5BibxPssNeWq6J-phfiD8OZ_LYEXpV41cDhGYCXl4TuIFkCi-QT61ql0Uutdd1zHwO6u4gmhp9KMH63zB-h97vqqIeFQQZfPmBFJ70352eHUlHV_NOnGPhah6WhwKqFcx=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczOnUgXuhK81Sr98sQvb-_sCLowv2kRcILpaPk_OagyA97AYYtn5zrwhyXiOo3M9p18dJxNuKys1t1mOD6CQEu1IcadZwd4bBH72mhbYhecItgtqqO0JruV8WpuvUQIM4TWxQMlvVciDmIYW_FJTMuFS=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczPer-PapdZ02LL_TC1g9EckzDVOjmvE3-0PD-mFrhoMHEIuUMu7LUgyLrpBxnZ_NhzM06iRrbDWDvwgQbCnvLtPBk3uP_0O_YA_OKojTZfAeak7vpTg-3l0QvkhhFoXsZ-4WHHL8hZ7k0-Z6QUMUUUq=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNp46kASWt6yE8CGYYkVupse_BgSIPX618AT3N8aUjZMGwtgtf1Ly7aSXR3IlF5_H0AzrHTv3vPUIg5fZptjNitPubtbeewSRXzCR1kcNYVgOXTHcbd1DKM0gIsPP4aOErd5JE2-XH2niMtLa6dmoQY=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczMvm1YQ3ruf2ypaMQYKHPHsLpSr9fQ2ps0I2lCJpkqpjPtjMpD_qCTHvSrRMS50F_EGX1LZYgjRcnaKGaiclL0ayOKN_90raMXZoTlPCFECVJWVafcLjI3d0PrDvSzOWxcFUW-bUp4Op3VZao1ywm9W=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNUuzAWyqEDRdyiZokYaO054IMUKCt3A2Xj58VdzfM8awc6DYXg5IIVWMQS6MuUJGSjJrYFMdBE55C-Lf3HG43XrDIB4p9Whoy5KqSHXaL55eRh_NoFH5dR9yA448YuUiWUHlaaliEoOYJUcEcm0VhS=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczMkJNuFXwuXFca0UwKurLQNDAt0UCuEiyOHEkFj_FYFbTIlzmyRyNhnuBoJd3Ip7asCNgQrXcT9TUxfOM6zTaowZSSq3ATTkCkj21vd-S9VbU4edvd-CC-PYJNAbX3cDUkx6I0dYM5qkL3SqfPe0Jr5=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczPB1W5Gtt9rRmSuO-1RjwHNadx87HG0SrouLQodNAGoVmAqUB7_Al3KImHrbFbAivIh632WvcStFheFbq19yC9RjRYDTZ60Nu5v2GF37679Y94z63aQJBkGvj9D5gQC2mrJAo4-jfxjhfQeR0RfHWjK=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOu85OfG5WFDT0-bEa6-Zhnl9zLMRi2CBj969s4VDCUREqLy6rPvEbKq91RbRC9PQfZLs42IrwQP8X1t56_TpD8cvw8fJZPWALyD722tAF5PU__Zd9sx-Uk8xE9ZwxC-xMA9BrNBlKAI8lpnWWdaSF9=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczNdHr9TTzCLFIr3A-gX8OzFxcoNi9nedn4Q0huyTY6alQon0iIwX0qUpDYbLu8_FE5uPyFPZ9PTs17atYZpR_T8Z58yeoeo4aer-umjxp-oR7IFeU_T9SW7IieJelTBkHj7sKVF4sEZOOdA0kStxUxp=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczMHauDrSYWSLSPGCR-nMv8Qmr6ESgFIwnTmYIEaKBFPpENPUhxg-SYBpZdMLzhd5G3e2mFzKSLd_00bzM6gMxStZ5DZnMH26u88uPHTdn2kgO1AhVaRB7LpZ_rJ9f1-zA8bWKuAgZUi8yZQWFDdWiLo=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczPTKK2SFMAFc6YZDx1Bg_ziwLJyuE21VYLRE1ODp29lEC0ILvWy5FqUqK7Jx7arZwyISmHJh8sS_mVEGCb5SMgPRD3_iHX_Y1Q-j8kXxxY0BBkI9L390UCCYWEUHncRnyz-WV-ALHNFCpLNWaf1zXGE=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczMvIwDuqu9M514k93q5AB7JeV_uhGUqp0za7EehGfYm5DDomBsz-OuwVd9KbZ_IMTUFaklPk2Keyw8SIqNyzFnlrCt0oPi03rlAdwFoy7_m17971YGUDacdHi2wRiEEtgcJGXyS6_ViWIUaZEuBr3Uj=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczPSMluEmxwuxXNQOZ6qoH2-mtMqhyNMrRgUK_ZDw7DHdabH4u560dMZ7a_-zfBbrBHLLm4Quo-NU50SD_srqMfvJd1ZJURa1Nvhq4FVVW3G3jJBvZz5gOyCyMGgQ1MTZSF6BdVi4AWYAFHfvgHJcB66=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczOwYqn4SsGkqSobysP3Y9CN5E9QXuIh3SUsaazd4j1KgcOee-LcYz1DrDqNPjHH-DylGPqCZKWWHe-il9IEBJHh4HfGoJsWW7RQnaFjPeajP8UL22XjSGxPck8YIUgQZN4gTykoK6_Cez2EnuxTsrUh=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczPPjNMko4xfQWK0g8-nNY4FXj2GSAM4ljfqN_IPteTqk9Cjs94unDNRrRXX_qXMI1hI8P_6rckfeh1Bshrx0gCCqOavEte2lTyMsd6d_LGST521y2TA5D6nUrRGo3iFm8VU98UBvvq7bD3FiKLSGCU=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczPfoL1TI7BhkJYpbroQwXboMuR5OyGzrF6kgvdv_AzNAigvRo5JpJBWEbCFywIJZvQLScsQ8j5rwquzHO9wsQwXuusKQzCaD2krGKsjH3puLRIC3cf4j0tCes2OTxdOz0nLxtba7osY8Ke-fecXMHM=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczODTVgfrTy6RgFKOIyMTax7qvykajJGOwczIqZFz79TZpU0w8jxd8Np2QYACaTji6kclmk6jDS1ZPCEXWiugA-VdYQfJ9MOAxsBAISrwN58qn4gmRjDfA32oYab4ssxWxostpQyhUUAmV5Q1cHU0H0=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczNn8gFp4Ohci_bEIIUW_9eD-4RQTEvY6_nbfoeebt0Hc0kLUrG1H7Y03SMInnOv81xKXA9ndZ2qrX6bDZgckPqTPJX566UpLnO7jgjGFuiaxkONKqDIRB3aD5dpcw2YXwKAN6nGDADoI68Qb-2v2oo=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczNyIzWeL59DO3QYYnWhbH_ZCwFHPTi_amVQPIPSt81pUP77bQ7xKrakdTx4F2lMssWKQdYVY3oF0uIEvG7LGqGnXZ-WUUwoQsLgPa_qLf8-_ZCevODjNJApKZy3cOASBsJo4p-0YqGEj9CUTaArkeY=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczM2142KH48igOcn0mBKZtRj2WYXvWrJiUo-LuI0zD8BoFYB9IQMIg2bMbYKwcbDlS6A5I1L_JTNGBUsAxeC-22gWGCF9iuUdQlLScpCcdR1wjBnLQBy4az745qbC4PXRjx-EkGj3bHpNImyBeWwGAY=w1920-h1080"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczP2ftcywAarY7zAu3YTG5zMW_sOleeXqrpUe-zOMNvBcHkr60hi_UrYMHLvVDyY4HzI-II6G3ppnhaZIVDXdy4048XK8J0-qwLjmVwvpZev9gzi6qPpAkxQ16cthlTZOJxfquKfMeNhPZ5_918aIDE=w1920-h1080"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczPzObzSIi5-qgBS0kO3X2fUe8-87_nSgDF5Hmyxk4vTynPn3Qe2vQAXx3V7HETalecpHDF4uyYEO4uHWO3CoF1GoFfw_vAoOQJF9ak5DrgOQHwGZN4s5B6y2BpjpPWfP_76FzNXM7ILzna_wrLOKS4=w1920-h1080"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczP398WvgX5V8ZdrPQk5ZXe_bRlB-6c_wJ2DpYjtHE2mNDZzqNi2vnCyVumw0F_p6Su4qZXGinCQU7WygURLteaKyADrkpX9Lk5Q1ANcdSaakM7EwDCe90eO5UrlnCtFMFLhDTXsJw3xX8Koq8naqz8=w1920-h1080"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczPTJnANmrV9FH2miCHRz3dR809KJmlU9VoGfjrfS58pLc-mO6NjmLAdVSYI83uQPF2cF0rZVjOpSkhy3s-z6RCXbDROyGLlww5Wpdvf5tXIK0d2HHhUjmfQtNgWmyiWvW_bEguwIz48VOXcClM8u1s=w1920-h1080"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczMHXgYzTeEbXstHC7a8F-iPcKIhnQYfr8suLZVWsjluGCC9Ez7lHD1iBdV6qw6HQNw7pRuSm4_zXPoYth9w-6XC4xOqhvLjiJQ7SjSMcSkX7H7N4dRWsNvIqBnjjeB97Nz_HFbctnmf7PFr8VN3vVM=w1920-h1080"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczPQIMKsVWP_PuD1fSk9YN0YEF7Yq_CQuRnZKFi4Wy9YXQLZM4xcTLlzJB-Q9dk3vYCfnzULGwi_znLFsF6PyAfs32hdpkpp1QuvAdeIqLdsvJtDT59Xowcwnhwd3wvTr2uUzRhPWnJ02jSr3uoAnDI=w1920-h1080"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczMp8p8v5DWGmji-gMfNHCVb8vBOINj_z46R3lmwGVzl8naAcO4Ahg17ask9kywSutFXCeHm6vZ-B8eemceo_4uYZMGCXLhN28u9gliHBXdP3c-17brMl_8d16cGJb4I0QwuHjFlAn_KVimHkGN7K_Q=w1920-h1080"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczMSlx-rSkypAQgW7t6t7dm2COABKmTpQ_2v5qqKz8Vc7g4hMJ96nFe4fDGwynxxUMFWxnyRrjBWRkZ8fzcHA1NZkDEmMrQc3VdrWwwfG81k2Hgp3eHTJzRAeuGLwyCp_jMAl75dAuzIfibDfcraVe0=w1920-h1080"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczO0mli0BQapMst-E6sKrVpD3-qzWWg-zdeZCA7OGjB_-Qvt1sSXKTDIPrXuujSGRlaM_mA1iBSa8vnbUMtQ7ca0mUb-R-xx3XBK1jB3-4xYZAqJxTs8l2lOIIT_DXEZnxvsu740qgdrftQwrkGVFBw=w1920-h1080"
randomimages[47] = "https://lh3.googleusercontent.com/pw/AP1GczOhW3GyiaZJVmgU6X9MXgE5NQGcyCg89yo-cYBrHjBSRCDZu_xnC5TrbRM5xHSa34VohlvusMFFrlb2Sxg_zQGi5j6qpFWJQWqfG92QxYOoDKYCXIRM1Z7Jpckbc3-nMiL2sVUdTR_w9nDbcL-9M8s=w1920-h1080"
randomimages[48] = "https://lh3.googleusercontent.com/pw/AP1GczMExHWV7gXUyyBZuCNd2SCD1o8iPFizkI1wtP6wvV-f3nSsk8xLe1x2zqNJRITT8wl1eAfngT198QdAkhIC4-ztK4bpeKjfm9jUWxdsPrkP9V7OlqfjkCiD4Uz-AA8KKbyUKsmS_jaUu0Im-Ve-TWQ=w1920-h1080"
randomimages[49] = "https://lh3.googleusercontent.com/pw/AP1GczOaQX9DZor488iPqvYGmS41f8YvN-tvgqofsjn1eXbfCoUahDJgru0o5UWJAyXCSb5aPPx8ZcR5EAMU1ons2psMR2UtyES7FncPVq0ZEgsXwa3vHaQZJYwAHoONageA3r1qH9zloebLQ2MMOY6NNjo=w1920-h1080"
randomimages[50] = "https://lh3.googleusercontent.com/pw/AP1GczOVDzGfEJnbXKdLi77WH5uwSwhuyk8zgWiHTZp0n8qy2DF-rLDLX2FtyWtKXTIZ1K_5oHB0dlgxDFDBpmjhL66GDRE7HJNQ8Hk_hhtybT1efZ08MseFawtIOBXKl6RLlxmfrqsulqMqQg98cdMFeKQ=w1920-h1080"
randomimages[51] = "https://lh3.googleusercontent.com/pw/AP1GczNzuVxk2P5XPyxwjYXIzQq5eTk3RQklIphiv4Vd-lSdfeY19IdQ7_c42ij53uMvZjeQvzFhnB1hPPwgpYrnPLAEQAtX11AkW_QsGowrxDGw9cw3BbDqAiL_Vj_Ue5vhgyJ4Li-sLyIGgkbgZzO4AaQ=w1920-h1080"
randomimages[52] = "https://lh3.googleusercontent.com/pw/AP1GczNRBvq07LoebLzBYlAQnKp3Sk0HF-zk3AaQd3KgneL1Yfr_oPILBfsuHojUQQQIhbmM794MzQXpP1GkRdsVqGHiWWP5TyTAf02xaAwIaseoaE4Sqm8NsCEkXY9OpZYUpHuRvNIdtsCjIBaDk4gqeDo=w1920-h1080"
randomimages[53] = "https://lh3.googleusercontent.com/pw/AP1GczP0l9Az4FiRhOkHfKbqAYfTJ4DhUg8ioj7Y1gg2XwiYGIUxVDD5RiN5QUWy6FRKc7Q7Cy5qKpThwmIEsNGmw3dJ75fGKQgWqiWMgeDI6BN__GB7pQj0Boj_hsoT1n-qcbt2jp2VaFA5hPuHiKzLfsc=w1920-h1080"
randomimages[54] = "https://lh3.googleusercontent.com/pw/AP1GczP3ggRCaFW7J-Iq5Q022p5ERKVT-qPVXlZow7F07-6R4U8EMsz7mvS2ZtPrF7qJFcg8Ems8s9_2sQ3vb-TLFK699PUCsHg7pEbn1Z3i43TUsGVh_9DkeIiUr-D0ClV6Wf8ldvmyKuDwXX8f8C96AWs=w1920-h1080"
randomimages[55] = "https://lh3.googleusercontent.com/pw/AP1GczOSOScXisoRrIt6CnK_cA_SL1iVWEX9lj3l9f6aHYaOpolp-d9IilQTZap9e3-DA0GO4LW8gmwhm5OZBM7zNwn_RlO1zP9fMV5CvsV9GtX-VkTR0fPPpBEzagL6Es49ARVRvvgbEiYixlIKDvGIIpI=w1920-h1080"
randomimages[56] = "https://lh3.googleusercontent.com/pw/AP1GczNsdc_MPaw1lkXyG-y5MsqeNg1OGEuiL5k3pBwsElOJ3dl7G6tOKOeJZJhS3Fs1L925Z4vHu1Q8GdVwHG06tsFQzxmx7v7-V10SRLa0eQ38_KTl4231BHKRBPPYreiytSDoOmvhcty_0g9UCc4sv44=w1920-h1080"
randomimages[57] = "https://lh3.googleusercontent.com/pw/AP1GczOXdTw5jzMz3RpWhOAnWejUfMlvianO4VmYX6MfdS25mQ0JxQcWkC8DX80cNh5jtsOBABX2gSMUkR2HXU5g759i4yXenN-3Rt4C0FS4AA6Sqb6y3h7yBgc9rTKdCpuwJ0OCrD9n_0zRw1Gy06Wx6G4=w1920-h1080"
randomimages[58] = "https://lh3.googleusercontent.com/pw/AP1GczNaiyS4BkMrVFnAT_eSXt-HlEmG-ZVei_GRIUF4gAC6-Qyorr29JtxJeutCkY8JKk_739m_AplnH1QqAd-90cBC3FtfeAfIcLzNLQ474Q31u3MCu32u_tIzNvARnTpiDJ-8PeDI9-UGqK8FmO-3wPA=w1920-h1080"
randomimages[59] = "https://lh3.googleusercontent.com/pw/AP1GczNUDjvTsI3qAO-bD1EFtWMr26qJ4GQFnM4Zqdk04ei_AeOfI3Yn-68bRjFEDWOrmnGq2iiDYQl6qzgNn3H9iE1HKAX7teKA8arHaXRTF_kdLHqcr71zHeVDRmElci_4rCte7qu5MLqL82MUJxbOE-I=w1920-h1080"
randomimages[60] = "https://lh3.googleusercontent.com/pw/AP1GczPPm4rxk4MdHh1DiO9jNZa1Xnu6sFtywLg29vrWRJDGMmGYxnsZpCVOcLvo4fvWOkV8dQ6__fcgG35HTBh88ivdH5JLLhQcZqcfXb7sR4daeU6uiRhEohNX8cJOziPi0bhkinMPbKlBK3SgvpbxS4Y=w1920-h1080"
randomimages[61] = "https://lh3.googleusercontent.com/pw/AP1GczMoie-5iKA6rqXvxP31ZQT6lv3XELRFaaG9I2_tKjnTjDvhD8_ChRjTLXXLgXfLCtEUw8QEV86rrQuXETqErxE9VO25mfsjeGB6ZBRkcGEBurDUqAjIIy98jHBpLiYkntVvgQf5dNseAbjP7Vl-REY=w1920-h1080"
randomimages[62] = "https://lh3.googleusercontent.com/pw/AP1GczOeH7HL7UoNydicp88wP8UhdjEOUjYBxcuS0LAXfRojlEAMn11EXaOwCRLD6Gg8bKCdIBdRRLt5ZRrR_y1ossWSSudBR9EHUDsLwle8ZIC_yycYFLQh2bYXEGH6QyjEGVUzUxIElo0DDHeBM1SwtAo=w1920-h1080"
randomimages[63] = "https://lh3.googleusercontent.com/pw/AP1GczPHLw1s95huzgla1DRkVm5EER3WbzNJcAkmiFczu5j73EtVYIlSyhmXev6RNrQbB5T0pDVF8VDAYRYLcJZ1xhIiwskHlYZlqaa3fTgPwxZ727mso2fsbUEgI21OzpkVXFIVln2uf1xtIQjPQ4bZy_k=w1920-h1080"
randomimages[64] = "https://lh3.googleusercontent.com/pw/AP1GczNVcNFor3gvBlNrWm1wxuC4QZtAo4E57stTI84FTjm4PlnX1MBpYwKpYW8AMWYo6Z3G6Ze8ER3mbLA3oOnZ1pqZwIDzjQD8UY4sAN-OZAfoIgKhNlnYLAP0PZa_ZSb3UfRCRVs5opRI42n1LP5oYvo=w1920-h1080"
randomimages[65] = "https://lh3.googleusercontent.com/pw/AP1GczMQM2Ymv7FnUxrw1qY_oQUFT8MyHoxqS9OrdZUsMdrVte_PgSz-NXLBYLxbAudaNYoYot98N8AuJCAPxAayu7cBKBFVrdfWvVZKl8uQYFpjoeV7otWDwNoAZLM0e5ejtejODbf87hfT5vEPB2DokXM=w1920-h1080"
randomimages[66] = "https://lh3.googleusercontent.com/pw/AP1GczONujE6Kg407EuVOHO7guxdBv-3ujz2QqDo8mmHmD3koeeSRKNYnTm7aew86WbJDs6VP3XfIgew23puwCmPeJtx12EJ42e0oyKKbA_bdeHlGYCq9y6eCEDhtourCoGywNDEnY58uPoT8v7GFFf8n70=w1920-h1080"

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