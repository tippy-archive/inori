var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOur6XYtgfIR0dZ3zVukaU3youBvIvCYZNtgA2UF79LG8pI5UtD58f0WdaiQ_1V0P5rYhPeMqLFIDT28WnGLP9U44XYo9XkuQBH2eFM66uezJ0y285_Ou93nY0G6WxZ-BuTpnTPzuPafpdfHE2K5_wj=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczPTzMFZV2NmdYr_Rg_ErtfYa0FEgJDx5ixJYkF0Cbscc_6gwy63I8ELIrmcC1AEkJrWBYRhgswPmDlBIvvFy9j-Um_lPu2TXzyWmada2rLe6cRYmhvYqtLyloV3a2FieGYjw4eFbfVoQzIUx5cvaqXK=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczPCiKcq5HwovsMXK7-w7VGHvxKdN4T1949lc0LESnZ-hdBNT6cOeum-cjSS9FnJRIeFNRr1t1YbwSi9COrydAXLV41oZwb7eVgBU0oxaNZR2Nc-7ILHDNxoC7bAtDO_JBTPL6HcsuIF2pFEj9aEGDWT=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczPQSMlFPmleuVSEGd8RfEoYEj-5mc-bW5iX1_fu1ZAo52TzwiltihDyopalEaUqaOd0kN0VGWTX8r7rm08TWnUZ_xlyg92yKff_PpxMibNCNPccQErhWp6uDCTCsjXbr2px7likRh6vd_iIrUee0nFy=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMsPuTRAYiaXOR8N0oHut5IJrYL_SaisThRj_GLNMlhAggTQYyO7hOBrWh2zdlqwbXqMRoxuoW8BnqSkMPPGLoZHsvdxhLmV76_MVgY-yPm3o5ao4e9VpwuRaPhzjiK9DsDpKIfWTFukkRajiI7oPRb=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNxi3B0PMzYNUPgwT9ZTSOA_1mQ1VnfXBYVXHvST8glEf0afMPCp_b3sDH7W7oboIXMO0a4FyndnTk2rBvs7iGcSQtdgQsbSOmxNYnOuZeozrBSw1cjl-kVeAUUOm_BEMROw2-660Y9-I7OrtPndSjp=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczMqhjQZ2pwpEr7j4MKRGSieoiqRy0mgx7XnuyY1gzRiAQkB-YpHqhtPYgya9741jz8kqiheRn9S1qlbRoGQ0kYPCjl59th8hc6D5RVSWJvDxq1FdaySLNeDWLtFcYoS9jNHAYVZ7GrsZYyuy_LfbJPZ=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOxkJnei8d2nkfXG_lnZkCzggTM2x-C47IEPXfA5vdHlxXmv2vhWbbDivGQjKm5PP4cJSLlzx4GvI0tLfug8EFjtS8duesJpTaT4xGDKEgOruZ-wF7ydIk3Jwd23rCC8F1rhoX7MmrAfHAl3eiOCffs=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNKCBaJVC1_JIHbgIacSLX9y3PWlZVfDXGHpo41SnkZDq4JKPULbKtSzHtu3ZHuPR7buu3QMUTpBLt-lJGtRcRHg8dS6k1BdyuUo1ODScNUXmNo3QnvNvXZJKFM6kP12hzHrLWt0v47zHCu3t-XwRV6=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczPo0qqPVbODrImc_FnonpmA-HQB_mfHpYAE-oO0nV3uQmqE3Qx7jZk0I7bHLaKVodBvoPHTfyHuFUt8Rw93BOaQWjPNJAqCNylE9I_iU8TIo6lrM3WJbJtCDFg8Ju_VgYmcQk9vNhs3o-F_7EPzyTkg=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPxy_dk9RtDnjpyg5K6caXNyCR9ivjpR5-CQgm6MN_CZNvJthdx9qggeD2c8TsXAXvQjloo7Qu261r4_RfUCqRMBLoITQp-B0diZhy3DxcUT0Heshns0omip32u39SzTNcOa6KkVHFUXFaYJWkaHWcC=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPUJRnIAQbmsZK5S3zY8vYqyMWt_OXGy99XqVjw5GdJZeLYV6NzGD96ehSz1xfjtLwWf5Ku0dxw73Rv3fMTEyhXZ3FgL49K5OvYdFkcHdxlNvuf6cgVZX0rNj8g4IRs0Z1dR46i7cUWojiMkhSlZeqS=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPUcmiwtFHVMv0s3iFP0e_QC30cxiph1IjF2htgybqKBfIIr_w1-DF_NvHjVcd_CfK4b5tlRXWczPmoonztxaO-PLxZxsJADDRCMpYHzJfq80PKoym2GCz54y9e0CNtPjMLLWa2wasxbn95kXJlcZEO=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMEibRlys6xcmfjKx87HsarpdH7XNSD0ReYnromVnn_SB3EwYkNpJTFB1v0N33IPWVvhb1N6zltxnnRGHbalDdP8rysdpQn4Q89QUmqqSpm98BBiCccUPtYp_W7hihErELfLPlnO2BF5Ktlpy09CdG9=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMKtBlnBDybcGv680MWjpamYs5HxuX_4UBUSOJMMWzd-zdVdKvTEIxDASogr-q3iFfcGGf8BBcIMA8ADhNAR3cexO173-biRO-q3kkbSVTbViCkKZYQOiRFQ6Qx0pElJ6DDU0-FTo0V2tZ8fbuwW1w-=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczP3jWUhG4gRFDDe31Go8ppiWgmJfWguTrqwQqWUf5bpW0EXude6DcJlg0Pk2CK0Z3BDkC3HjVCGEZHTw9TgSIz_ufCj8znXuxJQV-_t1pZzfmodtKx4It179KBBfLdrWS8jGbvCdoQho_D4vsZq_g8v=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczM3_vBKfg0QA03HnT7GFI6bXbP_UVPizHFQMIhRfh7PgJrsdb2sQ7uYyP6nzt0Qqvv-G92niMvC0xKR8mh6N1q655xy14OJBITw5j9aKmrh4l8iNZu8dtgxBI40C9gsqUV_0reT5pgYOD4SHHjANYe1=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczN71ci5LPPka4CftajxwmKiV_ymaGv0pBPcxqbqkoLd_Mw1ZqOsysnYLXDJkuJiXiRHf3l25A1YThgYhdUuOD5icGqARbjvu-3cw5R_FkET9W88hdwsTn6tqBT1Cc_BYS0D9bQBGo3N10ZhRM_MrrWe=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczOiI6qj5S05sAVpBN03YQP620bJw74N4CZO4jViRS_tB5ul3q-T0s9SLyEtBeluXHFQ3ly7IG_74x386zzpkgMe1DLpd4yMSpc0JNGrfHxMh7F5F9yAiNhg_SXOyosRLk5arAczFr72kMJfClX8fniA=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczMqV9-PY2wfOc2nEz0HwMrlpG1wucAaSKJ_CYd3RmMS8nIurG1AD6-BGvvtyGH_0zF_79sjtHpZG6ry7ZrWo-XxL2O015zJzMGVVLHmRiYB0JEnBFvGTiZ9RZVpHLnaZVhwf9jKgM0IULokYi_8e1a9=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNBEKE4dvOhuqEMKHvlngBCXTdmWbfYmFTOhwbEYi0ZXWI8TTJne5bs1Y8kQFL0heHjTO9WakqljjNDdEg1Kpez1Ib7QhfW5ogMHqRZGEmyyXqcwqYWmMKzidRP_9HV9hnkXxAoW6-e2wZlJAsGF1p6=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczOmy0qlU7p1cT-f7AVLuUkEFPq5sdTDt8lJLilHvB-KkElCEOj9xu1XSo038GYAPrxTOx66ccij2hK_165uupSX-WK9niMgvPjjP6Gk9zC85LUqhA5HxHicSHx--0PGvlhqhM3qbeknMvILOxanZ_RI=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNlYdvTt1W_IPXYqpe997mKcHAqFj4Coy8XlvSQEeX9HQ-EGPs7jgWdbXqHdz1pC6bgpnlcFOhJPNmh-TJOGiK9Iin8-eMS8XIp1Q9uRsxMvoCv707DzQP0_Jd5Wx4-twccpUx446gDCj4xXVNxDNtb=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczPiRoMbP3ruJdUwOydaZqG8Ts14K3YBO3vSArBYRWAkIexMYnrmKaQyF5WGHa1XK-IKcynXfARZglJltpFPFBhIkSG9IRonE_Z622TCX1fJ8LYXPp9TvCp_Q_LV4kg2VOKrfigSnI2UEP4YcMyuUQhD=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczP-ekZ3V4eOBHwRQpVnyV4ZBfDGh11ZYpz7U99svyIQ7gf5mRoNq4xFBZ2xMouie_oGL0ayvxNDkru7Q4eICpTaMIoWi1OdldMIH_MFzJnwE1UWP2_Xgt23vD2yTcDnsUe9fb0Jj9eMxQPZwMAkd1NR=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczPLZBQhzuK-BBn9eMibx3nckK-6QCVfvgXW13ySV0QPJOQCi809G0VQ-kGXrjrvoG4MIQ8AypueN5mYoYQBARuqH6mPhmeTmMtw4ObuQQDdL2lYJmqEUpea6zGxLLK_talue-JDI7EwrSov4VQ602oS=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczPcbs7l47E1wIBIsSSTj2h9vKmPJHTZrAgUJRlWtDYHGPBBC0mvOaz3VfSNyZKncMsGChh2mIVYnkJdKwpk1dHqJlA_Me-SKxu7baRlmg_QsNjKcMR_dl69UhY-6fahavmtCAc8f9V788jDQD7J-Ydo=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczNmflHks_NFWQJUFgWokPCCZN55nNsysFUBvpRczMQDEwamtNSNkfiHot32ZhC_3CDPhptuOA9flaoOBH7SbQZQSMVHx3UlXoYIEUHd5nikp7lNab-yIHk3ITjyVReee7cKpEu9fn0vyXfSyx2X0dbh=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczO4P-MhoY4AwRMYNmCpAJXjeiZVG5m-DcvDL_Pn2pl_W6eJWH2R9b6LGx_kpxUPfXZnbwJPK-wb8_UpBJRFc1jOgC6gtjUKKUjdZefCZZxM9InOg2VU12wgwSWwJeXh7IyATjYIyM4AeziHMUZnmKc3=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczNHAki3QhMapts9aW1gxXlQLH1gmTXDcT46OhK81nlQliov38QK61D94Gx60EDHXgtRvPQtTvcXm1HGm-6qHZDcr2VSWMlL7ceb134xKRzeNlJ_7RbdwBvFmBWJB4YtsI_d9fLuWG7VElSGD6XgIXq2=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczNPfRqRa9crS-7Zhzk00q2nASfMnKPQkxDkngvkwJVhPPpFgb5J_zcuX-xFpJvU5xvCuBb9vI5iW4WS3OpEkP3pWeHNWFhQPJfZBzueGru6lHuX9o_TH2EE8zhSXJn6oA_60AVyQcUsvkvzy4_Yc5gx=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczMJ4pYn64s5FFoPTJAizJSU6whzbhntXaoHCSDgHBAMIUQR8CrBWPq8SHajkcBR-EaEjV7Fgc4OzOCHnSCS_k7T4RkOzAVrbjhzdgcbSGfTCD2BkTe5zHAqv1o_bEYHZfpHed0Tz87EHPWBtAizoPuX=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczNslRo51PIxEkrOkUTUQwl_shmr0xRxKCrdfx3YbiLHuJ-uoL6QMcjDtB5iufoVGjip2U9_-UtJL2Okqqmz6dyPR98SN4O6FLPlwNKyMZqVLPviWw7xQv7b_AuQLdWIZsVqc1QnJbb5KBDXbfPETnkW=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczNWaANsr1FQ3Yf0CYn0IU5Klr7VkgO-w7s5KgaQ2lcNkmsWEoTlRornRNoKQd_aXHuhMfDfy2KvLRNQr7TmlPsE5Jtb_uHYcwMUX51AdCgxodvIOVz3asMD6PhB56330eLHagKOu24vgzkhZuazoaKK=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczPjtAGLxUncVxfHcP5nf-eqQVEGWStLTq_Q9Cb22t8ErOcYlUhdhF4tOxQrz-uB3tsQmFWpmWJ5DGc0Ee8wN7ZhNXECcUGih4oU2h390DWAcmAowbs_5L8SAnDLob5soEvoBeZgScFaHRtXgqKrwOfY=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczNf5RuE05ZLT_XPyE2ee0H1jEelk-0aDrCZtwAZwSGg0nU8Io2wY2cHyVXIoujvhGL83N2zGIOqv3N8KVp3kL8OjiPg30lUrDSE7D6ZT07ERHlHNFEm72ZnlwRtosShimNBi0d6NAEP3OkftNgBwoaX=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczMXWmA3W-htYh0o-Qy74TpMO5STLt155p9cRBzUEw58RHBPl5WrIJwYOludqnu_1ltFFSgM8Gxlqgojcr85Po1-Q7txTM5tUUR6TFrz9DN45yrlVZmZNP-zVeV48NtprOyeUB6QizG9aPcLPVxPYSf4=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczP6adJZtRcSLoq3GgkTcwNe_Gbt90Un0-Sxv4zq7RNrivw9BFdGZTQ4aQqd-gAE0Fhql6EZ6Xve5zVlLrAfO_8IXnKuXXJ82Vcc3REAdVvML_HiVOkDrtBZBa3xwRWvpv2jpEnz9D3zgVPNRM2hXuY3=w1920-h1080"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczNQ4U0HFjoN-xV4KgarxSQlFU-Si29PpSSuEADA87cQywtOFr8F-qXYFHgVmYlRIo-qR5zBIESlgvG1uTmmAICRQ-2ICIRDGY3ZWkkjEeh5T7-KJdN5cC3JuNHNFJpyl6t-rxh9zfQEDhUMsHLFxk3-=w1920-h1080"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczNtEAFvdPp_SROCk3EhslR4euBwbzqhDoMBLmPAei-CCzO4TLQFzPmzNgj9lnHUUKiFhGOLM5KZkm8hxcCjGPCE1TDj1Te9tWShd-8yYPsB47R3HuNFUCRRWY1Z3lnSd8JkbrAu1YFdutPQR6vXrVFc=w1920-h1080"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczNd0lSSjIPm2-f9dgDpDXOG02XsTRFwuafmIFIphG2n0m5kFaYcoWkfm2oPUN52GBAT8HpIFMWdfUrUwM4-6ma4OzfYKyI_SZAJGipsId8StbxDkmkjva5ThhW4r3fh26GnMg5-w4FkS7kFsb5JQFje=w1920-h1080"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczMV22WyngZ1foC2B2qfbN2W4EWvaIyeULcj8i8zeiJMOoobQJtuAL56sd2IJhWzYN1k-NohTwr7unW55ovpDM3PKjUfM7ZSx53JVliecMVLA1XFApNXA_n7uOcXbojyY9gikMgCrdZX6BVn9LqGhXpr=w1920-h1080"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczP_DhFKkVfQ-E3BGqztfVn76U2sYLokdhmRUDaC7VH7NW713BB_iEbqhN_sqEBRvi2e0smnzAJ9x6WqkTVvUnjzMwZhNyfgSCY0vFsDLfzJ2PvFQ2ZAiPipwBjyjNW0vOq09aoz8zz_3ojs3Q0sbykg=w1920-h1080"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczOZJfG33wy8mTvci0UqIh_e9MwXJliOHXrFJPybHRUM_1XfM29Zs4bJKwYNubR_gArXPv4pLlC5IOhGM6iFaYUUY0nk3hY3_vahYlDhxDlzx_7h33EQ5mv4-Iu--OTcBMC_jptHUAyeDnq7MbBoL1Ky=w1920-h1080"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczOC-sgWOIVDmKz-4PS-a7VcyZXHFDKkpvgq_4mpnXw2NlHFHtUsWnTwXy8PoRNQp0f5TzKjttsAWqj_gtAk9ubNAVWXH_x-xDfi_U-rLIH7HAsMSDhxjtKZMkJM-rEQQPHBzoHA2_a7YoTyaMn2aH1m=w1920-h1080"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczOZ4W9Fk7qFs_RvfIW8Cnao50br48iw56zSgFqzJhI7m257qUcXDJbodX553rWZtH6LsdnOCyPgrTxHGSZj4gMY3iEzGehz0uPpmMh4lmjmZWq9_4hcSKHF-z9ja6Pc5rylkf6th2kwo7x0HHwLcNrE=w1920-h1080"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczN4otNQtQcnW8uQV4fFiLijv2DJ7t9-cm9ajQ9JeYdc_ja7PLqdzVNQ5emsNHgX-Ry9KYKKNti_Heq3DvVjQp3JukUAy62syPgyt1HAgJ6Z0PUTE6PyhSy3BlROAyNt1KMLtie68hx9NhezuXpROpna=w1920-h1080"
randomimages[47] = "https://lh3.googleusercontent.com/pw/AP1GczMYAEryQzZaj7c_kshdX3yGA3a6TOCYt67DCfx3xLBIPx06k5MPyA0XjG4yQ_DJbvAjjdGLGimJETuqZ2gHECjA3-O-weJ171AVCBD9iV5IdLAmjgymoJSqsVcruL9Pw0SZHEomM0w3ZKDf-cj4tWfA=w1920-h1080"
randomimages[48] = "https://lh3.googleusercontent.com/pw/AP1GczNF0f0hl8lwSsS1FqaAVYgKJfJ2krUerFdOq9n7FNVsLnVWDD1vBMmOeIYemMWND6SxHzCu4FiX6INvdHyAjKOsQFMijlfHjzhvjzYkZ0nTqqyPa7NqhbsSyJR2f1-RBVKPw-CL9gsjwgIHrrq1TAix=w1920-h1080"
randomimages[49] = "https://lh3.googleusercontent.com/pw/AP1GczMtxSHQeQpEHa6t0yH-80xFd5SeIesBkIULZqsCbhV-YtIWbiHjVlt_WO2pOD6uea724DvRVN2-9xKhBN4k0M7RJiXgSu9dK9FGl7oqr4v7JrwBL_EEqvuk0jCc9VJq0kAChN5Z5CKcg5G_iWMrIrHl=w1920-h1080"
randomimages[50] = "https://lh3.googleusercontent.com/pw/AP1GczMVVRpY4lmgt7pGT7LnmtBjsnebGV152XI1wdSjj_rl03M2ETFjd9B_fCsNJAN-EdMHLz54_yR_4FkcoRHDTA42x-4tEDPTROUtZidlHSXBKaExSECwCJueI--WwUrMbpv10yX3UUsFPdIxCYTPHGAx=w1920-h1080"
randomimages[51] = "https://lh3.googleusercontent.com/pw/AP1GczNs1u5i8KyhV3rzTz_3UX7zet53HgVSqd_mj2OKzA1sJdU9CaY9y15zXmup_aVhDq4F9jB0fHGUN_Q5QGL-54lUin6I0oLuvz0aGk2kkgZh2SZogFeefubkDBDHconED2wre_MIbDYU2Lx2d5KCxeGp=w1920-h1080"
randomimages[52] = "https://lh3.googleusercontent.com/pw/AP1GczN-y9kKtK1t9DSnRXWLSSND-WWkzqmvEOzc-uhve5xl4URf4HJxeGqEu3Ygqetwl2mc6hat42_A4bhX7BAGiS1CzC5EbYvDUuN1NoZozOeQlWM1ydLAY7dhLAmXo8mjSjm9Fk8c5cF1Ym90IiN04Xi2=w1920-h1080"
randomimages[53] = "https://lh3.googleusercontent.com/pw/AP1GczOm-xX50PDGuDDd2NC3bSuFnXkAG1xciyHxItmOXv8kjEzY8RFx9-r31u5-IsocqohTmrY27tVjllnIst5NnDlulFG2pozImSQuwcCbSZxUdW3Ab8wAlA6RJBJJAnGsTkU1R6q35-JlNe_LJISUgUBT=w1920-h1080"
randomimages[54] = "https://lh3.googleusercontent.com/pw/AP1GczM1tTcpWJWXb1eVh4hMXNjk1ox8juBBjwApZl2isYb_A6ZLzoDelxgi44D6yM-SL_fuRQMzhZq4ScxtofxnHrF7IExnwQabDovT4XFyntf7gxK1T3gjs_VIwWfPiH2qi4EDF2hax8uCyUoqPMkJ4wvT=w1920-h1080"
randomimages[55] = "https://lh3.googleusercontent.com/pw/AP1GczP_ydIQytpX645vJuVw2yJDuPrc11Lv3RyA6Cs9rcvSpc5UwsuJEScPI5LhqYc8wfMQVahN9H444vDZmFIx7fWIxS-UjD_aUtx7zh7xysPexenptBy1ECn1sTSt7YU-s1KIei8vDr_9Vs9T_ZCbw-BJ=w1920-h1080"
randomimages[56] = "https://lh3.googleusercontent.com/pw/AP1GczNtyMufrMmCVVpNphECkMV9X9G3YdxwpjaOUEMxUtmy9aGlDaWFNNur_FtCCJSbJTfZUcdC_4npfeTCabZAls5kkHYLg79oU-wP7kXKGKlJjvSJrrl55bGBUlc3jyskaCRsWNbG0b4i2N1qlfuliviV=w1920-h1080"
randomimages[57] = "https://lh3.googleusercontent.com/pw/AP1GczNxe5ZH0lMgFrCPEBEByasTTnA2x3VoELVPKtuxWMvOROQOvZhh3pnUaM93GTShmqkn4jbbMI6RrkHUm6Mvfq8HGnEWpXtFYnQ85lQE2UYmOJW58T-IfjyXPdrcGWAO5j9DnQo_JEtTt37kqa3hSq-d=w1920-h1080"
randomimages[58] = "https://lh3.googleusercontent.com/pw/AP1GczOfAdY1RB8iZ41HZX6VvROrQiUtUMmwVnB4K2-K38whQITnFHFffkH75DAyQsEBV_BFkfFV9Xw4D-OjrAImriUxOZ_2jIEhaUj6KxZsC1n7Fe6yV_oQX5Xa_7d-qhpiosYA7hrJjOuYpu-FI-aa-tGk=w1920-h1080"
randomimages[59] = "https://lh3.googleusercontent.com/pw/AP1GczMdc4xMwjWGv7HH5ajyT_cXwNWPD35pi7VxYZpdku5_DXnLQdV5dEcPtOdvuW8Dx57v0Rx7laT0RJEu5ASb3hMIcVntYrf9KZyV1BNXheQORTcilXTf38FhLKtoJqLkkDzJmAaqVEVwbBcYE-B5S9fl=w1920-h1080"
randomimages[60] = "https://lh3.googleusercontent.com/pw/AP1GczPxTr6EIe5A_0WfU3BClPisoO869HmhULKmM1lP2Z7O-jrho4Gzgu5nV22ZLzkjokk33F2ThBad59k2wH89j9nExmhCq815JEmgW8n4cyvXGjKsCr2AFIurotxsW0t83vYH8kU-M6rtP4VdpJqoUYyu=w1920-h1080"
randomimages[61] = "https://lh3.googleusercontent.com/pw/AP1GczMJcMEZzZMeIcSF1mmW3k-bN7w0CZHl_VJ8R27HUlfX4yju72TQkwc5KO7yq7E6fTZieMcBEvB1_83jq3Ti8396TBK7s6FULPQXH0_zb_ohwCCaPGoPtvDBcSoIHiM2ZSl4gbaEkspagzkR97lDZq_C=w1920-h1080"
randomimages[62] = "https://lh3.googleusercontent.com/pw/AP1GczOY78Ie1QkpmdBBDd_AZlT3l8r4eJ7A1RgXQRMbNLt5nn1IHtBQFQDP8_2DHOkNMZ7dlm4VefGrRq8wmj2Z-ASpUG_UvyyPZxsclGHdZ4CKxXlw0fVcA6Yld2x-MCmvTxbyfjEPHLvekrC_utbcRK2Q=w1920-h1080"
randomimages[63] = "https://lh3.googleusercontent.com/pw/AP1GczMeAeKiSGDfqZ-sYlJjGCnTU9EYnERsZhepPRo__SFRh9Nt4IPVRVTCIDqOL0MKT8QXGaknQ_ACgdsYVnZVyZZ5F900Det4FGhR5fPEnY9El3Mz6-rWt7qXCKuVno8sacix36wGC-dUiCkd0EiJqbUa=w1920-h1080"
randomimages[64] = "https://lh3.googleusercontent.com/pw/AP1GczMgh_aWe235-ylWdEqsP2aPV8-PRVKAKHqWNiNOFEfOKZPhBG6C0abUu81UF7_CclN7aDKR1agPWv_Yq5Dq_rTNKnR9yjxKZB9-yTImcpYSJF_HYbx-8VtLWqYNN5fyDqvBqZ2z7xxAkwB8WtzVCyaG=w1920-h1080"
randomimages[65] = "https://lh3.googleusercontent.com/pw/AP1GczOcZJKYgJNblggodgzZbml9KsuQBLnH32Meq73_nU3QMNO5LlcnwFCra63ZdyRaZQ2mFpATXHSzFuQ-KLm2legXDj_PyaFQxmgmt_t4j1-wSv-hxLwQnVpkKzZ4Qv-9JSHB315DVr8GzkoAgnoPgBDu=w1920-h1080"
randomimages[66] = "https://lh3.googleusercontent.com/pw/AP1GczPP7A8uLOag6XubNdfVdpjzBUHDWi0OAQxr_98xN6a7PrFlw7Rb3fZw7oAwpfx0kWkwAm0MpMrIH_D2BEPTnJ_og15jXGf8RQDtMyWlDhswQHHwWCTbeBNgRW67mZUJWgXa1fHFXdKwDBoVTQfiiBxP=w1920-h1080"
randomimages[67] = "https://lh3.googleusercontent.com/pw/AP1GczMHPuXnGbS3ICcm4ths5BglIjloIcJ9bz9si-0TwPr2V8E7YYAWwOzOmS2042n1RERGJCFMTcCkTF1TP1pEPpknROYUBF8xyv4Cysyn5O-7LYe16TIc15UsRbGUttwZHbGZwpZ4sUSLPncI9O-uDiED=w1920-h1080"
randomimages[68] = "https://lh3.googleusercontent.com/pw/AP1GczMBOlGbw5HjuAYsaQWefBiFKdyX5mmusthoolXv69f8-hp1w0c2DR5h5mRnISN85VWST305K1_uPi0j_OzVwNrrA2xOlkR3BpLPVIO7N6L2HjC6jD7kkeHtTDHRW7CTosycPqoIHtUfdJRDeuWcknZ4=w1920-h1080"
randomimages[69] = "https://lh3.googleusercontent.com/pw/AP1GczPKdmsoHPYdUtYREA-FTPA7CB14i2dzsuKAjo175dvcZDj1WLpKzUvC9asn0TLypMHe4nZ_xEHM-azKBU0zKQ5B0YfKHufGTL_bfrQQTivei8mmW9Tv0zvll_rA2zkQUnIDhqfRTVbsUR2KNXiPH7ZQ=w1920-h1080"
randomimages[70] = "https://lh3.googleusercontent.com/pw/AP1GczODfNEGrIRiMiQlounXxg0GVWvtLxi-N4SDDLx58Pq0UbxUYxHu_VIfol0Mdn-EYSuRVv49fcFKDTq9yaePT_-u5b1gkX0V6YoraIxLbTRaO6ZkQc2eTB0lKi3bdYVMySFUXYz-2V3VLyK0-6Md_gof=w1920-h1080"
randomimages[71] = "https://lh3.googleusercontent.com/pw/AP1GczPSBFAJUA3dn-yh4-W3dVE5YWxV5LuN6ES0gvJv28Cfwd7fV74ZV6DnqUH1Fpa2U1Vcb8TUpFjKxkQDGb_bMBf6cJElh8POEB2psny3ytzD1cGR4ZLYhHif64Bzq37Fi4p1AIRo4dJK1P2P1OX7vVl3=w1920-h1080"
randomimages[72] = "https://lh3.googleusercontent.com/pw/AP1GczOZ66qRuTDfkuBNlUmikSPvA31HnsC_jaiaFBNDF0JmygR-Gi6-Jf6ZoZw6nPpmNA-J17C5S1ypdYq4Vfh2z9etZx-iCP_Xl907Z3Y6sR6Regw3JCT_rkEZlFCQVT6ueHU_TJhqEfl-bQBhP7JrmLv-=w1920-h1080"
randomimages[73] = "https://lh3.googleusercontent.com/pw/AP1GczNTiYJm6yY097W1sYiM-2dAffLQOci6ge-ENaOnqcVKnNHsCgpRtqBPqq-EfcKAcZOGyKtmBRIkluSBCtL0PwfzN-FQjppAxZC90rIwaz99lo5AlGkcooXfG28o-EbxNYLj4WHg7AWP9ZHu-8ppWw7F=w1920-h1080"
randomimages[74] = "https://lh3.googleusercontent.com/pw/AP1GczN-ihOawjVsDb-7qXqDt6YZBxAf0XZO-u2dbKOnT_hMhZ8CJha5CI4jvuiRjSobpo0EtHBaRMBpWAqLvq_k-GzV_6Gge4ej0HhXJSC0AP41up5DT-mjLrXMe2kvyX5al8nZXl2jp63PPkIh6VAhu7wz=w1920-h1080"
randomimages[75] = "https://lh3.googleusercontent.com/pw/AP1GczN0Y_7UM_cF63k-v9dba95bfu2PHTHh4AdwEW5NQFSi6I7NZmpuadN82FK_6Sbf-oU8Hi0zXyvVwGaicRXtFV3uyYCQnx1RFsWMZEW2AgYImZYmULbg3_iGa6hVJB2z6JvJq3gcFMgnOXj4GCLKav1h=w1920-h1080"
randomimages[76] = "https://lh3.googleusercontent.com/pw/AP1GczPRikVEGWICIkG7qioLWhqsmvV7g3xqhMG0iCCk5F0y2tpxn7DbOnspMftOOuPVkGjqXadYZcpZ7OU2X8atPoHIjQa-JUXCewZxXDHi1PfLE6ee8-NLJKMdz4p7PB5XVm3fDqubr61uuH9AUWJFe15j=w1920-h1080"
randomimages[77] = "https://lh3.googleusercontent.com/pw/AP1GczPtACFpUKjpKP11_KGORUl5c_WhAer2_YPWHGlxsUBKQ9QQDqh1eS36WfEnZSAropXCBs8NIFB4zajLy0mDp6tAlHwj6VVbAhWuD1qi4pBoWqG7dTabiZl3Bi82z7qlydk71LIBSBhLEdWH4u6UfAtA=w1920-h1080"
randomimages[78] = "https://lh3.googleusercontent.com/pw/AP1GczP6XWZrFmu8iRDitHn0DVvghXxoAByedKkTB813nSm6H6Qn5V_nTag0qehntfKAmYw-DC1xF2LGXOTYLa5jMd21uzfPkTi2CAUfkjzjds0BGHGBBl9aYmZqGGzBiUVyEm0HHZhnyrSdbcMJkas6t6zK=w1920-h1080"
randomimages[79] = "https://lh3.googleusercontent.com/pw/AP1GczO-2dsvI9jToMv4hNr8giUylyP7q3d5SoBAFLlv5RTC82Xhxt4amLVFs6yHfrxhXpEjjfxKrxwZwzUP5f1slaqBUFAJ1wcxYah-r0Vw3nrtNZ2Pt0QqrwJuoV8rJfgUyVbuBk8QLw7ptLrOq9WoaEVN=w1920-h1080"
randomimages[80] = "https://lh3.googleusercontent.com/pw/AP1GczO1RUMG-vmqjpif5PNeGN7JUK60RwNi2lZJvPlglq7u_pH8H38NGy7k4YR-V9hthRQB7CwJlBptNMg22XmoCYBvnrz34oWH7RjqTDzSlACi09JkO27f1BW5cQZXC3KqV1clWjQDzXmoZMXZ1RTTxJyw=w1920-h1080"

var initialImageIndex = Math.floor(Math.random() * randomimages.length);
document.getElementById('image1').src = randomimages[initialImageIndex];
document.getElementById('image1').classList.add('active');
curindex = initialImageIndex; // 현재 인덱스 초기화

function rotateimage() {
  var oldImageElement = document.getElementById(currentActiveImageId);
  var newImageId = (currentActiveImageId === 'image1') ? 'image2' : 'image1';
  var newImageElement = document.getElementById(newImageId);

  var tempindex = Math.floor(Math.random() * randomimages.length);

  // 현재 이미지와 다른 이미지를 선택하도록 보장
  if (curindex === tempindex) {
    // 만약 같은 인덱스라면, 다음 인덱스로 (배열의 끝이면 0으로)
    curindex = (curindex + 1) % randomimages.length;
  } else {
    curindex = tempindex;
  }

  // 1. 새 이미지를 비활성 상태로 로드합니다.
  newImageElement.src = randomimages[curindex];

  // 2. 새 이미지가 완전히 로드되면 페이드 효과를 시작합니다.
  newImageElement.onload = function() {
    // 3. 현재 활성 이미지를 비활성화하고, 새 이미지를 활성화합니다.
    //    CSS transition 덕분에 이 과정이 0.5초 동안 부드럽게 진행됩니다.
    oldImageElement.classList.remove('active');
    newImageElement.classList.add('active');

    // 4. 다음 회전을 위해 현재 활성 이미지 ID를 업데이트합니다.
    currentActiveImageId = newImageId;
  };
  // 로드 오류 처리 (선택 사항)
  newImageElement.onerror = function() {
      console.error("Failed to load image: " + randomimages[curindex]);
      // 이미지 로드 실패 시, 다음 이미지로 넘어가거나 대체 이미지 표시 등 처리 가능
  };
}

// 1. setInterval을 변수에 할당하여 나중에 clearInterval로 제어할 수 있게 합니다.
var rotationInterval = setInterval(rotateimage, delay);

// 2. setTimeout을 사용하여 지정된 시간 후에 setInterval을 멈춥니다.
setTimeout(function() {
  clearInterval(rotationInterval);
  console.log("Image rotation stopped after " + stopAfter / 1000 + " seconds.");
}, stopAfter);