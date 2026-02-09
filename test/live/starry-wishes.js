var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczPoGrSvl8cDGLKFzSw34uU1byAaUroWonKF61U19HOHbvKtEDukjNORdQZSg1nsfvs5i69nELxpHFHlTruQegwECFQ3IAvCbimn-BvjJhAQsj9hHaWY-2HPH_UdmbH9BIplPfiXpFoS022L92aOom-F=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMJFDZBfSbgGUpjreMIMoeApb2HzfbNIGi3MO5k7Vbgrd9mxSw9OAYjRLhSQHmS9lat5U3MdPUy5xhYN373oIocDOqEPZLGgUFFWJJxTtb29YMr892U2uJbIOYCaSg56HoyKNHE9RowgNf3wmDie88k=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczNEbGb-q5wxBOynNy2zZ-p_n-u8i0ha02qXo4haH3nHKqiSMVNoDOlkRB1qoDoK6n-77XdjipKA8ywf35nNLAmzJFT8AY2KnZQa-b438C5-sV2nLOezQk9OA5pYsA8Y9b55OqqqcCFEBKIKwbrT4f6V=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczO8bIBq7MG1OU76eV-JAANduR1IjMzfozSZ20-sRwxi8UXlpvHH5HdoCFUcrVkSob6CgvGVbnajLA9936R4a9pyT5cYvOXZiO6rQ8O2YtPlcSeftdo3fsuzhgDH8jjCb6fCvSZp4NRc1I0Fj5JkoK-2=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczMjC8opYXC4sHbqfbVXWCukyN9aFxf5VCDesrCTfCTjhsoDiaFlpstZtjNuEMHVv0oX7aVHaE3jzyj55C7hSsZ5EXcmSjQslBWenFEmrdIL94SPk890qvRN8J9YRZO5v4g8nVZ9FrMpGkMKNg8MxIOX=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczPg9Z2lO4nH0Df0ij1RVww_pI4gTcYm6XeAkO_t9_McUKRenigUBbuSnoNtXBTcucoZCzW6Q4SmxfShUYG3TPskGkY-Y1mFR17w1dwKnCovFeu3a--62QjMCLN1nIqxbzuVFIgz22S8m-OO5EitvIul=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczM_AzbQ5SeXFjEl2PTUaqoTjfGKp3m57jjFXXi7eadt5m9ukqVq0b0JQqr9Ax218AvGsKD3QcHA1fs4_hDdz89v1QpMdofTLKFAaPeAP78luLH0Ruy2HSq43keb7zvDIZiNfKcLgYQlHjFt9GcYoSLR=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPXisvPEzhZcMg33_nExmMjUJsOqmw5GiW3-Rq-E-QCp-qUFkw7sGTc4dcX623OtkplYa9BZZwfY9b4bljvJTlYg_3eZMB7oELyNNlvHXe-w5MZ2oKGuJ_iuKCVghpLY73piEohZfpOcwHzvpy5wc-V=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczPE6f2h9y-qxu3XiC8077ZgWLklVqZCX7t5i4fM1mUDDeq4nNEz9qBuStdiojXMf0ZTPZVvaspO8XXsYZd6ghmcZ4pIZQ3q9x8I125RUH-NkIIxyW-MrpBt0X_Y8IrpqL_NeRIkw-liUwLjIf7XFdGa=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczNQA5pFxg40GPc3Q4-fnvnZllavLsFjiTk9II0hRS7RGAtQdKDUN4xP6RA1CU5p7eK80PnKgU1TJUM_SbNxzCQRUy7iyioxQvWls2ZIngAqBr8TR8jzXFnkunaS1QWgOUesMVI3aphr5mGwUqbIZ2Wl=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczMZ_jGD6vqmS4VxmISDDPEZfkfVv1iHvL0CpuayJV00eyEPEnsyF6jwM0EZaRwCpqy9CTItqdWcgLj4NLPPvpKzfvKpdcabLpqBqy5osT-kqVsUy7iDe07kie_glSkhun01cCYss_Xfvd_rzheraSHC=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPp9O50-1LtDXvEoHOrpaK8SZP688hq0DjXNLB4pYt3vfl3Ot2phIwOhyaQoxY4dsBxpbDtNAAc1RPbuiZsc6beRDYiXbZeVUR-6P6BEqUvVLqMc3M1RNRlFwotd_imD5EfbZdr-zCJl9qddCoP69c9=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczMyfVMmtHuFJdmP1g7dPECLnt7-II83ayRrogFlBzfBZKV23NN9VilJeu8hyoYGCBioQKRv7Hz7EJg-xQWmX-mqCQ01j4JzGB_hbj0g1HTeXSsi80pOnfgBnWMTG3fKklT2iYikHwGBbYDRH0pyfM7u=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczMv6qQrskVHL2YndwGbMe5tOhHn9ZS5km5AVjPmY9dD0Qfc39xScdJ2_s9YHWxaeiePNRacb2SxuzSG85tPwiitbzFZ_EuA9_4fHEN2hq7w6atY9Ko4N76yNLZoM5EVxg64wCh1OkaU5v28xjEp2iwg=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczPg4F_iKq2U28rDT0eCGMNijYQCQZsa-JBhvrkKZs3uMu0pMefqqcOQwYG-dn_Cf-78ktH8Bej8AoCdDVeIQpDcJp0HA1UEWzc1elCXgFl2TeYNFtnay9IcunuHWWHFG12MTI9WMHq9jkNbjmBJoDi4=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNHBgQGfE_AXiTh4vqd_FUKhikfI0qIHhcgas3eS-L1f2wSSL1Y7msYyqk9IXNwBhkw48rzI-MYNlaAFFa6_ZxYehrPBhOFF4EVltn-OV054vBzSPe5UFjRwH4nIqsgGWaxkKSPwAoMW7YMX8nKXOEN=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczMPdcomEaFSK_bYpavYEq4wg3z8EamA_-gzsVuc43CnTUuCh89-7MIltqHCdki0mDe5ifmlwfKfXYZTGg69UrQKWh5sxleDzIO138RzZLVFk2swi153jzlcV_M3OLlPn_qzO5XuDV-C9JcYSRSvX6fU=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczOdAkVLHSKDa6SkXyW-q_LfkaM-AQNok7pLtOBxkhvV74CKXrr_fEdra48cmHlmRI_QfV4l3efbsIMbmnuHBfmYb730ScyKBpbd_VJ1S-ZZh__bdcVGd9r2gBGXoqJatlZ9O2V6wI2S4abtp0kfMLUv=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczNO3N2JFQRjPu0nE0Ao-1EZxY872WWWcN_yma9Xvijo9z2DkVqoA_eW2MhPlJbzNzg2L10B_pG-jeyO_XlKI7HxgqKIqF9y7Ohy8gAss6uiaGtbZC8o-uitsh6nQ-xFQlbSUVKM4u3y9S91-h-NqjE2=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczOoUmhqeaZ3EClsx0I4CRrMJe35mZSkhI7kZwB9LvOLRp6xvbsxE8St3AtDmNkpPAEK5NhoDDGSXaFqdYO9_qn8oLlHv_Gni5IJf7l8pm3TBl10_Y6XoxuoPDWBDHAWQwbdq-ImRXIeFF0fap7At-Re=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczNRx8voIfTJPMLTZ4c5NKULomkGqWbPDFlJ8pyaJze5L__wARCXlcDuXktIErIR4UQc4VyFhs-I3-u_jcc2fZy3-Cf3XX9LXJZ9n6ghwL8FuC79zHfKTO6jPe4qcJGVDJdN72KSl9_DrMFGfWHKmuEl=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczMDyBd6tuyhk96y_Q8YmhorsisSkesmmc6bhA2gEw6hayRBC6a8OUtZokhHG1irqlSRtGZxAOZObCRgICuybSJPkuUCFlq4Krg5PAxmxCLdG9PxqBl7JVpHHkqp8LZqiBmGXzimBbFywdugU12nQz4h=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczM_Ey47RESpVKdJYO5uXP4lpXK2S-Hm0Yucokcq6RIo5444vtt6YAItgmXovT0VDmqionr_MIe9psvLjg1cbu1vtmxYlRhob8GuoIAPr9-6APFnMKIBFbe9gNLc6qiqt2vMp0tCKWc2NuzC8aE0IZDV=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczOtYktD2rDfBUn44bosNfrCb5xgbfmUVHNU-DmsYZBw4USYVp3qgiGce2HyAA0odCuVRIeEnegg1k65dki3cFvwjS6VfI9ENulSXl_AIgD8EPsDJdg9apBrfdOBjX7ZJb7u95jme4wHwpYbemHziQOJ=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczNvaYvE_OK6MMW_XIOi3WYZoqnpMIlBogBmk_80ocEYBu8E53EtaRlw8UXbySkp7eUWj0pHHGVpmoQbMsGnHkm13kK-I--NNcdQ2FymEzk_ZQVDp9FStlTIAHdQVLnkWkBpuEmOOqCG-rJNxh6-AfbR=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczMRmW9FHXMzNHf_p2pE4zJFs5Lysjfb0_hlYX01WpV7fX6lrnjslKagiikpaGFybcY3oV9cBC1cMEUBQeNufDV0NLVUqjX6dxV65rKWUV5j-ZgAknjf75DpOTDPMGXPguUf0fcy67-d8T5cATBAF8Vl=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczOZLEIT6A1gwJUeTsDaQ_G_DsneeIOhOHR_8HWCZaQ4ipQS3ygoeHwn7r0y2iK7nFy0UZZmFLr5RHbC6_greGHkRUOfo2tkcEjMc-TByYlQ2e9C8puwVZE2sAS0TI3XCNVWGByI5QPe9he7pqv9ru0R=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczM9awoFMtRJVMGgZ8yzviIszOCTnzmnscbyXiM-dpISgMMqEMOhAd3BqAMssN-IydUnS_hW43vBHgH4P6H2yZstx7hbAgvb5ZG4Z4_W7R4lD6lOIzhObeI_ecoRcp8RBXnSdF-D2FdIu3GVloXuYujb=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczNjm720LUqTSX8NutYlFNEX1bCG3mD8pD1NZyaLy-Juj3xXDbgryR-ST58n4trPFGgmYo7GWS0erL1xTCcda2LvMEAt4JdN89sN3VtBu3PjQ4KZPLSpNueLfPyApVCvV20GLlFZrzyCggTzE01c7Fe6=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczNMT-LEkMuIvLtVdvMN5O-pYWAStnZMGtBLimuXs3tqw8LaWz6Sdmse8FxZaopcxydc4zQS1KTMH0pye7SyX6mYqNsgx8Bd4Dx5YVK72CW-fLXMUeD8PIroaBGnLzn2vE_I5gJpdmZKDQwkynDz4BQ7=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczMu6yJfHh2fSJB8oHLkS3xiAIeBRWw95rJ4zZ2LyVxUJz3yK9sWn7q_Fy1zE3pwA1nLJHqjgT22ZqJrWNnUHLqrj62_Fs_GMY26Cm6wCSDd3g_h9U3ucTpLwom9lmTsYRzOeYLfF57qTPQvwrVdn-Cf=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczPa3yd4eDh8Cqf5xdiAmLOi17pgXk9Ga419cWoYe3ZErPis8WWIjwC0tFov_UT8YUH9Cbo0u82-ck-gYE4OCNf3MOD9tdKxntA4plbZgOd_0kSGPN3Ra0nMaUMVg278h95wv8uMe2uy0uh7by69Mb_O=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczNjXGoJ0bvjxQGMbsm0nWlxwdSAkC4YuBQhKyOJZMstnL3yfKqFv4AG8HgYxk5iLdXleHWYwreJopieJDH3c9pz5poHE3vWyZ8Kqy4FHKSG_KhVYY6C5EfrKQunHhADCO2hiI2vwJhGfHpFcm6kMMB-=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczPkMQnoYLVbqKNBNuvfZ6mZPZctTFtZM6n28r1tFNhI2Bf2yFjIx4msb620QItwXtLv1jZfCg014j5ogNrkbxLPqUMnW5BA5mOlvQpnkmdd_Oqy3j8MAEdY0LOma2GpNa3WAOF1HuaiFoQEFln5bmYS=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczNHKZXXtIu9H2ONE6RQkqzz6ukegg0foYHTGFbvqBdf4w3Oj3FsNmLl2Wfd-UGju75koc3HPZG_i1oJMimZtAP0MDM3MqUkuHGt7GamCigAg5KSzQy8t4p0DxAOwvl_ZcTYJJJ9tApxOfjPA6keAIMZ=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczOVA3acWCPsiPFoANZkiNw_MHEkl107UOrr8J1boGOHaKKVyWd_s7rryzT9PhUyPJFm0tBrHe8s64_7wX6P0FKEZvIoZTbyR8FJ_FWYS9DTlWohw-GRhyGi9i7ECg9AmbHpn3Z24_GA1_Q0D-v3JURI=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczOCsqSEZkJk0L24o2X_5GLOFfaj5FKP2KfYimjKkbhsSbXuwTCBZjz3b5a4Q8BSt_SMcqL0feZ4wecSXHAUqPP6IM1ROfMptCdMlxLiu0rOf27_OsFIKJjNXw_5UuXyzHj0XrpXGF-7lBgHUCRl-BlV=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczMbIFXLcUm_tSKZoSVJa_MaLVh2CKcFZhucp2pXaVQiXXhSuDN3ubqNJ7PVEOsWBJZSatbOtK-JKYkMJrv54evAEmUyicjjO31EB0P2SA4445rTABXL7H04NhRkrkhkuEsmmIsW14RPov3KMFXnlbaQ=w1920-h1080"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczOK21jOth1IsxRVSvwHiqqJMqnFrmooLhXG75DAjFo0fQG-9TOhONAHqmkW5IBWXv0RrfhSaxKlJr7IgE747C4lhvewnbzaSxYMZoqbRKSe2HBGI3jmxjI61yr1jd4CAQEomXFPQ6lzYRVgVNy3b7u1=w1920-h1080"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczPpudCyHXyApSZSkpDtMRD32qBTS_UmJ5rU2KHxrZZgQL4nmD8mFezM1Ha9CAyoF1Qvf3X8uTJS2hqgaSrfB9Qy4qfRMKrkKhNutKtk-52-HjTNdwIR3VaedD-ajGiovhi1oG65VEm35UD8FDs_WDHi=w1920-h1080"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczOHRY3oPMXL1GtX1KbcuOYRWQVUnOjfJwgVHfER2uqMJKqKQaFtOuORsiWyoMi4r9TLmbwKYoEDvLVEbDvoV19f73Yhd8ZOslEkBLLqnKJMO35OiiIXpcNAYpgcNmsc9EjWpe4bJSe-mCAib15r_Z2_=w1920-h1080"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczOfBRJf4coky0OKDSBo8WURuSSLZea06lQgrNnFaBPsZ2lmCcmTyxlIN1F1kQchzWIvjU-2rEBs44eivhd98z73pDWr0LiRhEkdNvXLW_GmHGy8aJHLsSl6i8wm_tof7ir2SG-bgqe0Gzwht5X0Z4Ff=w1920-h1080"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczPLXkDICf663f4I9KVtYCqXmgHeslMtGPW_zYEz77du0bxfAUcguY6e6eRUYxIkz8RYgTx2wMgy_otuABh5NQ4E2qLtbL71NM8ymJZmankAg4UF_q4SBm1cbV3hb14hKEYWXezwdTgtOobUfsFOXpiT=w1920-h1080"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczPHfIrR0X8QsBPruda6Cx5WG7T-LquJqINpdbclf0-Ne2fcascokz3nKqJpwG2aQ-i_Wgb3ZXUflKoFlL2VMdiY8OS22ZSx4uL5oW47LBiQN1m3jC6Bu21YGPVzl2CLGG6BdFduLvOYybG8_LPD9gVW=w1920-h1080"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczM1K89Ba-QaQFkFTa0uz32Q4Sn_FXK5Olw35YlX4ByhsHhl19Bk0awTVuXd1G5D4utXzRjJyXZ0J7_sRLvYBhZ8WM9e7WvWbxlWJsDe66Ocb4uA7xPykADyrf5OuHCuHkbkQ-laRZaEDgq4fR4vcMI5=w1920-h1080"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczO6c-A0VVqoKdYapOI1roU2KA3prwRTtiPtsKPQg2BErp6-bon_MXXqh-ERCtfmk6TubjRLxKjqfrlCB7YN_QGeJ7CBLkJW6Q0DDXFYJoeIS_sAtMzhIhr_kwbm-8zyMpvOHoXQW8eKsc0UoXnXrnmQ=w1920-h1080"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczNrj9ezcUV6hh4wnEyC_Z0ya8RHmjVM-4Dp3221g1746BunXtoRnBwLaS7iklBRs8zmtMioqLVcyOVh30_luyTjy99ACuWtfme5N6DeazNqVHjRZvYXhzbdGdzE3YKdWQAgyda-XSVs3eyR_eMBBVKt=w1920-h1080"
randomimages[47] = "https://lh3.googleusercontent.com/pw/AP1GczM4Rs1VBhbfxIu3k9VycFgi4kvUW_v3v9EVYdUfUHLcMh9VnRJ67DRDlFUbUH0bhFAoWi0c1g7MfpooE5Kh5l-lKtg5cYZ-Y6QJeVcJ2ZB2UMkCaNXjLerPX7P4TsbTiOvPmE37Op-fDUUOaKYWz-wQ=w1920-h1080"
randomimages[48] = "https://lh3.googleusercontent.com/pw/AP1GczPZTWzyYPydfH4Q1t3vo4AO2TD5llQ7st-Whh7619aeHEUDY7xyeFqZQn0bpBcWa7Dx4_evtVEJiLdFMf980PK-PCu3xdNAcIQJtSRKzepgDvB2GkfckX7VudVSJAIagywWK0R-53cUYarQToWBVzbl=w1920-h1080"
randomimages[49] = "https://lh3.googleusercontent.com/pw/AP1GczOvtNLT9yawI5lMlxxGXu2pvfYLPb3gebo78xiH7J1QPcVrIu2DKTH6cmRf-fFXRQcuwj9rbSgRpUC_2YnkQ1c23VHpLADlJ9V16DRYX-aH0CjSoNdRCHf4Pt6mr9YWC7ujoDKMQI8YOmk52t1KTlYA=w1920-h1080"
randomimages[50] = "https://lh3.googleusercontent.com/pw/AP1GczNN0k-dk8YxHfQJAficEdph7ctz0D8lbQfJpFWnr2D0doEVWIOc-JjQYKt8uNNcllIaRXqrHc7yOw6USnFDR5tDfIWbXoC6Zsow0t-F0CdEg0j4in-EGzYFhv1vDW3ogpODIhn2G2uFPCjTgiShLaHk=w1920-h1080"
randomimages[51] = "https://lh3.googleusercontent.com/pw/AP1GczOu1DZh85mc3XY2DJH4N1jDs6q_xXQ7Ekm7m8SZxyJ45rCwJioUlGais_XopQOSRB6HDmU0eNN37kUuIxBVWT-DP-z2FK68tgIxsBpUNRstj7i68RhlvunQgvOprneblQ6MU5TFxhl8wz5UXg3gF8qP=w1920-h1080"
randomimages[52] = "https://lh3.googleusercontent.com/pw/AP1GczN9-6r6dXSVMywmV_7m2UH-so6BjaWS8zdegkdhopWN7W8EjniTAqxdyvKWvAk_JpolQEbMDn_i08Fms1TNrNoV5NamUHwxPPk0D0HkIbncoJ9IzGhEl8I1NXMLOv1mwkiw5jFIuzQ0K40nqZORSRJS=w1920-h1080"
randomimages[53] = "https://lh3.googleusercontent.com/pw/AP1GczPsdM5JFX_KNq1PMF6-Rw8DuOx1h0Fqtl1dmQN-sfYo9YuIncD8ZBdDGyznrzu2qSYX076V-zPMcK54g72ctObriYm0avB5jVziqh5Uit3ddo9sEiULpTz7LeePORRJqVdCQ6bgjmVIHsW7DgNymys3=w1920-h1080"
randomimages[54] = "https://lh3.googleusercontent.com/pw/AP1GczMIsQKkMnYN0C4keL8s3ix6uuXSSe0v-w4S3cdB9kaOe7sdYsqrKGHL8IMYEgTuOsgbudLWAiZLMcA1aRsbufdwaKcqf9Sq1KQ07-650PSIzjzBSXIX-d2PAebXCx5a6lDv27p-ssFSsGROt4XA2lXI=w1920-h1080"
randomimages[55] = "https://lh3.googleusercontent.com/pw/AP1GczNIj3lvDylAPlJfwZMxojK4teKkIioeYOkVeFuUYz6F5e9vh3ExoJo2qmJyLnNahc74UHQq6_98LfqLDKdP4RFDmRzaUH_lUV5F3QdUBZYjKwLFoZvQaO_bc7rLG4Ha6vM_Tu6BT6i_kmNoUlO6Om_L=w1920-h1080"
randomimages[56] = "https://lh3.googleusercontent.com/pw/AP1GczOT6HdWluX1rH6GZq6sLRyPdl3_SUQ3LLdwSmSR8Y4p4LPeeNKZCUpmFEvTd8aI52iVMtuC-BokfLF99myPx910PL_M7zIneJfpe2eKC9s-URKqPSXzRcuSWucWjPV9CdfaHTQf_PdFvoxFn7JezY8V=w1920-h1080"
randomimages[57] = "https://lh3.googleusercontent.com/pw/AP1GczObzyJkfD6_1WjvIKJpeX8ltz5c4TJ2_0fE68DN4S3ZvChreIGAMvCKh4CA-oBSeJo-6SduZBnboikXL5FbyncgeFRcrYe0TtTmVtnRVMhUKsMYxPD_URAROdEws5KLP8ybzCfGZrPCedYxjXS4MXML=w1920-h1080"
randomimages[58] = "https://lh3.googleusercontent.com/pw/AP1GczNIdtlyNGhszagB4l55oCnyIJMUFdCd_x90Tx7bORylM4S_xtbQWijs-4i3HWsxghhu1JTTq1KrTc4SJB-4DHNKlFFrdHDKF4-f_23V68gjn8_cqdLMevoR8DesXL2vGUfwc1b9DF4BZZAX7vVDNzqv=w1920-h1080"
randomimages[59] = "https://lh3.googleusercontent.com/pw/AP1GczM0qpVjmrBamFm9nnGLUqbrEKZJ9oTrx-4hb-RSnHUqUg23mPpHI0Bm9sYE25JA4EVbJQXgXlcezyPjkDiv5qahUoh3zOm6lZUZ2ogayKo1oc6vTCcvCgDHtxoWHQ3xo0DyuvqzxkG4zzZreY9vaI6r=w1920-h1080"
randomimages[60] = "https://lh3.googleusercontent.com/pw/AP1GczN3NpiqyZyGl1aiyFC6HO8icaYhlxati3VTGjd4SImEEgXsju-VozxTA7rWPncn3ef-hnXLdGEGGKZxAqTzZJq0m2nc-bsh8dxW_y7LCZfbdBeF5KZA6E1CwyfI1ISd3QNIIrTK8adpDEuF3PKzauVU=w1920-h1080"
randomimages[61] = "https://lh3.googleusercontent.com/pw/AP1GczOota6nEKwb9R7Rp1C-_-8WH7NYALx5pWe_Lyy6-qOha_4U1wGJ991gZj1g_0TTBF5GI54pTDLNB93vff3cPy1vmTBgPyQMGXV_gZ1xlzX6B_jDi79UOlcLg56pSCOrwominzqJvJX0rmEMNMg0JahI=w1920-h1080"
randomimages[62] = "https://lh3.googleusercontent.com/pw/AP1GczP3ym8G8V4HfI7jlHtDdjHWBkKImvHcikymB7ZnLr7joKSj2ZqhnC7LPrb-qY8RAgohzognOTE4ZObnaKB_gdTm1kgu0jJSj78Tj6nRMX-HqzPriShjmeapBAz0GjLjJ0q1UHAo9SQdAQ9aeYzFstPy=w1920-h1080"
randomimages[63] = "https://lh3.googleusercontent.com/pw/AP1GczMTO6PHRyuiwHWNzZacfIQS9AaGD81COYW4naRckl823XBZhCztKHAongp8MEpPqXhzoOljnTuAvr2SS8h__oXFLCHeVjUtuCahrxMZCJ29K_zKQlfT82Oxw3t48hy1VJGtbUVUzPiOUTQJA1BTcq4x=w1920-h1080"
randomimages[64] = "https://lh3.googleusercontent.com/pw/AP1GczPwF6_nTXse2QG-tJxBdby08zcckeITVw2W1Xi-d0QmdqWvCpy0DXH3Nw0uizrHrpjfuV71sPR3fVeqFsJWXpM8pRPh_m5Md2zfT992fhPFbwh5Jjb95HpqPsLQbjHuRBeiomcCKDHj-BqwpHfv4Xns=w1920-h1080"

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