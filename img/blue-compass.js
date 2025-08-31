var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczMXFQrrTQCNgnhjGDzGKi0-A_F5JVa7FZZQlE_7cwwKrnuEdqytACsEeRxHsfWYITLyZqau-YImndIHeXPeAndhnw4IEvsLn-6XVw80n95y0pWFhwhkeua0KJIoCeJxVCqu2IgPN55ruB6-NhuVpJCM=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczOmKgSymmaOEA48KiUiQkfoe-tSurBVbfQaoTylCr45yNsW_Lkop_NRhSCPwx2IMM1w4-X9J2D3nouu_mlspyWu1yg1q21VvBleTF001bkDUb-W5GqasqUF8K8sqvEzsFT1vl7n8-k56oLuFuST9OvG=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczOpHAkBINutSa0f48XSG_dlmxWxcrIU0s_IT6ch_cZsZ-hu8KcmeGSg0byOdIou4oHT8ebF_FV0PSKLdnD1wL5wx8K4pAt-yfprJM3GrDbmYex9OZ6NbYr5_2cZg58Q96ble8KgMjBY-w0NtOseFVAY=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczOjxnaeMrDyowKhkpOyPMPT2Zh6srFYcThSV0vJoOOpyLRKObcdo2TtW9Sf8n_tN4cnerwIEBo7aOLftjeRMBjRQJJFqg884SHyBfPdO9c2TfogUhJdsqq1sDpfPkfZdZC5wBMfzjc7G-w8btnd9F9c=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOI1djS8aThOq6pCvw5TNftQiyXZOLsVUj2KGHpYp__POdbn3R7-jrLPPO9Fadk3Nd0rjJBNRq-Uex4arE4YzwAbEPgF2hB3gbTHjVbtvc8yt3ejmJvo5gjccYifpT0mlRTZqKwghBo0KZfmdB-uJ5c=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNNhVX_mXU-4SaEQ9V7kIP9TGaZbCWanrXrt_Enz0XGUHjI8q7eegbcdrEfzpdtesuiX_xftanZAjh5ReoF-OTzSBmYdSL2M81LO-VvlaNRj9Kt1gwS_NABgg56b1oneytdCPUTzuFIwqDNhVql2Ol_=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPJ10MoenwvYJS3K_q4tD-cPfdr0rykHyRlDTE5JsOpPv7gl5v_SU7AB6Lzmoe0KWWlGJw6ZEmZjuzv0WtqIiu-NEmJpuFjm1UWzV90wOTNZEGZRaLsgUVr3tIO6lHNYRVqkSnx__SDlq9EZuo95UUw=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczPO-aN87Fq6M_-lewCCR6_gcLuLknfYVEEGMIN76awMAs9fZVKABNn1n8wBJGuGkrVficjjrWEIskEeCPBY6SWrn4bR7UxIXTxKr39lj7oQ6UOD3as-8GJAS7z3koRDkbVeEJIQkxClXRFAN7sZcg17=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczOEpQBfJzagPkaGhdtkJ-2cuWtUnrWxf0lY_g-cjHnXxLsDkar7WSPb8x2W9LpFhukz4EUHcLXWLZvC3t3SdVaNAkxcNwCvHDwK19-Yp1zudavIdkWELo3C2UWCYOQ0qfrHPnTZubVCXaLaRMpBU1JR=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczOFrekDjqgaQVN1xaFetuGuP2vCyV9tUuh6mVqht5j3hjC2RPANsECgHJXAqvr7gv0lFsoHXs9OPV4OwqznH4k-laCeCHJYAq0hZq8Hp5Q3mzc8kevvzYak5OeMBRHa2nuCnME7v31MpUf63h7UG2E9=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPBaotirNXcCOhUvwreHAxmv6g2Gs5US0qyqqZE3xJflMwqCQRT893JHKp3Q1i0c-WPV3of-EjjrA2d-wT_gvbs75OnTNKM-iVSZXsPlWB6uoSM7tOooTK6d5K4cLeYZj5Y6IQp8nodHp4RxqAV0rJi=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczPXmGznsYh6jn_m8qvzDSTEC5SY65K1Zl7EAmsgyyVBBFlO1pRzH3RT7wn-LgkudBL_pKzbtJdj2acqGyoG8N8wIJ-1b__M9xd26JwGyaIIE4lJtW4m8e7fj897P3YHshnmRATV-HO7A6AAAUJZiD98=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPNpwBbv9T-owKG_SfWFxWcZpBOXOCMfERjVMegqaDlHafxYG2Fxm9Fylz2HttZjyeViencHxSGAQijKAJV70VSx8xynPC2d_lhvppjlwQATGewhVgO1xP5hKXveuDejWX-0A8NwIHKBso3vMW49h9t=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczNZN6T4KjAq_RVyF1gf0jCVWEdCZ3zmIT1w5w7DlCEv7q9i2aIJ2XP1KF9CrJX0MOG6WI3oERzH41nkixTZZp4fyFNrfVJy0vM7Zwbm2TJQXMvwW53miHjfJeAd6_xbUeEZmALwqBtnyzLcweV_y2vr=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczMoeaComrpAod7JaMctIoKdyfhdRBdvxPe0CMuHUMNu39t1C7e9VBpfDXGxHCe0n4Ceron5A_1bv21lOjPvEMwfEJq32GYo86FKBP8ViQnPvsKJ7QpJUq0Ngjbvf2_6_NTD9vjhncJd-08ZnGTwa-pT=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczPH_jlm72p-VGST8JWZMwoZIsH8CevltlSxVeyBwqqNyEaXf_p-w-VUI7IleMNIR4kqSwlPXVWETLMisMvGwTLlBELc7QXzijOGamEgk4isyG72aY2rK_3x6si6qx-ND0aP8xl8y_WifVQsIdDNGteK=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczPvegb0RX4tm2xbX_4Hpk9NES6f6ZPMJ9HdMtgDAtnqGo-B2pno4RPqrgL1_5UfitHl1BrpRNGwOAECjzCyQKOLyscc3n8WWSXroe-Nvprwq9sF6h9z6hOnuplVTpq8WtgsL7qVFy7BRpG9-Vu8uEZt=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczNW5X7nPNHcdrG5Oihu4Ak45t0Hm6Oax6x-ean--7Z7nwaJVcBQ_dQEPVyg06DPjnc9JsEkRdoiQRjghet_9Z0vkjfFrem1rp8Uosjg9BVXwhDjmVT7mpvGKx-bb_ocC1ODZt90VU95-fuWBLkv8m_G=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczM1pJ5MEF2r2YwJnz24OJtxXDx7VZjX2J8v7sSukI8gCPOHdSuTw79iWdwJlgVmiA9JMisI__KZhHjRT-vbHtJ7j6dybfv0y73bJA9RNSHL4bKYqSI4vrQGbxOsdTqonx9QNf24JLMfhZR9djsnE52v=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczNMU3SAvViHSb9284ZdCQTqKFIM-wWg9SY4-fMoPpe9d9XTCDrNgUULoL9-mwKxBfusAUlErsrf3rQDIndeSlMck-eZJ136SW57tJzwPJaxIWjGvFlkoMPyeaoa4rEAut52d72McE9numpGQahWjc8J=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczMWEHrBWeKrLMBfHE_pQa07hyVmaHEFnBiOBARRFiUTr4PaCxJ_72VdTqsZ9K1aojsj2nN7htKExSBIL0OTXs--66tnS1h2mJsl5wonTJZSBRuAOPxAgipJAMtgy312BDo0Y4FwVmErDzR8e_sr4C-S=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczOqi8krmGvB0oxsj7zleNu_b3oFIgQAy2iI-DizjtT_5mtP3qXSgdlBfl_1vpT7zyML6BdbytotsIEUHL3sPECABeLFJrSIlaOMbIktzdUC5FZJqGgjs8IdfEQ0uKq_hfU5C3fmuPPDChE3UFIU4OBD=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczPY_HZZg-wqEh4eRTt57R9BYLFvX8A6FvOztMzPLVPb1fYZjbUtQBAB4LL492RCNLQfTlG4a2qFsXNl8_YfzU6CVMzX9sVoTs4E3QYHv2RShSaeyXwnDhNw5aJRg6tTYUjiv8hbcEs38kfd2oLtT61z=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczO5jKCWM-Mj9JLI9t8Bl8sUm0sxnkLeaUTXvBiwO770FA9UHCng1ll6VFmHlgjhS5TmT27_jTtt8OiGAieLlLTHwfSb8NwWRTZ9p5e5udo-42A280dBK1pcmCK9Nig1dqi-dBh3mGPekdK8kCpMZyER=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczN9S-8J6pEAPD2HCgihKfTx4Dj3hwCLnftVm5vhJQXZ-oUuMpjDqaA9cshpKZ33wnvu83W61cy1Ls_lmZwjHOhHYvX9wRZrDxT93gP1UvI1ZfdlNFSc1Bd9lB6wKjZkgwApB5mI9AjpO9NETbMQthUz=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczPyZ6MUqRKj0LXtShBP8wJzHW5DrCPDFTiQF3SHjwYNXEJyWuGW5tasyYoAX0aLaiP7YTKSYpuwmXtFWtPjd5gJoro7Hh1sZhqIVH1JbF4QA8r1V15h0tbbi3VXoLxaRRHvFWYrc8_cslLfuBSdT-jN=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczMVMxpuFhKa6ph0J2ZqtRm4JwGG80Kt5HxJrsc1Dk9jv3Oh53JBlB7149rKbr1l1utrMiDLzQsHM-ooORQjR4bjPrwAHaUjDTYCVMc2k7EGMqdXDFqWGiyptJQPr-dNX0uPMkrI3hdwkUsvMjiAa1Ab=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczMNu001lzpH2oqXeA3aJNMjNQgM0y1LiL5QgeVGhzuITBRTQPmx6d-HgwBbf3CGUZr93ojDQwZxNLc2nAIeTnay9WM0bLkmwzxK3Z1eC9F_Q9_N3hNnVABTdfxwtBNhbV2Brmf_f-1xyIut8khEUkZD=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczPW5Zum9O6dgjoN1Q4sjAjbxBl1d_swjKALm8iAyJX5DgQ_PoS5PNElw7qXgPaRkFDLnnIYXLat1cH6DiBddf-1ODQfoqhMKdZRQIf2xeRMtjdpdURpaeHBOjeNbyD60pdw_WSDqmMEIS5VhNrJDI57=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczNMiHXaceYq-63QRX4fi_kwUvdt7BrrwVAesBz0N_1s2zsjoA4eyDP96XECV4Sdrpu8FipcXk_N5IvLmGs9ls-ekKXZqT5WJk_hAdpelj_O1wetm0LKHAO1DjRu3CyjjBplnT_xP6ReS-ULO0U-Jj1N=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczNshkm6fVk3b0ZPgT-iJJU8wIhroVoFIs0Bx-fG_GiB6jtteAoF7gxJ3iVT5Ve-5un8k0p8-IsfMokeb4-BMUwxQy5V1fD-jCx35pCd3GN_sFmsedtHWZoExNKwB10_gK36lmSo-GvNL1l1fcy41LAa=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczO_wdUaRn1Yng5teF9qyDp2EUwYPstk-nPLqOW_cqPF9Szu-RDX2V4Wg4jPAtkJbpTfyA37Hu1eKvcRyupuYv2UaIGu2-uOY1oHbzg-rzOAIH2q6l2lTa7MsLNk8qAuRioQXPew7nRshGgFQwMXhuwm=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczMczCleg4WsGWXWqv4ZcTMpI386OG2-iTi7VRdW9NqCXtrZld-qZUPufrYyhAT8tn2mzIv5vWaZ7kqNWnmenPKvi4nrovxJglV8uKWNbx2FRuPDd5Z97d-yJO_CuUtZBmJ_qbD5FWlt_8HSp8lALrY-=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczOyGe6qazUTVVhIMabPMuye-V14ODAmV8f995eul9fYVfyIlesBotlolXrErZWvvzkmgKjgADcfjllm9parypb5jOVdlat4z0pICZ8PainosTDlp-D5fF75MphTIZ6bL55_5DbidkQ8__K-BZwZ7bUm=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczNgyaM9qoQy33cn71oZpeOoS-hddPwrdmYfh5X-Aogjt26sXkLRwubu_-fUPvlX3oCSgAK93iA4x4oIOMW__Im6S8yeDT0G8YLIAUgI5YEjvJAxKuWXRhOFdtODT20iEhUk_zmVmhWASc96Ilua97BQ=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczPgg8oS4pp6RKS_3A_ZN_UXlzh7uZWoUA_movTRjq3d5_wo9H6uVx06JxAaAicmVZhksAP_N5qHZ54CMf-YBrVUZL2Xnkw_9lHfWVZkKrnUups4Bk22yiYvbvBz4M15gIhshwNDBm5GLZ5IJsr-d_hH=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczMJiqu20dEQi730h1kh_IW3DPLtiunzVvd8XVKjufpLQR6f8VvG02aWckQ65TebcDamzi0tfmJrK-PVlVbe6VV5FRqYaaaUrzFzU4SH6Ju2njCh4a1BY1ZpuAG5DCy3qmk5ANdlv-aKnmuoJA9basBc=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczNLShrgifoqQjthsvD9xf3Udyyv2Ps3f5C_EQeVz0NHoaLGFDf70dIXCHgEdG6rMpCN-v03L413HqQ-EuV9jYXT5x0e7hMEHXKffUFzfDUCbtIERJiwTSL6kkzMqoIx1bNJknruSHMye4YdgbntANp4=w1920-h1080"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczMGzbtYaqQ5oERqPRLVuR5s57QYkKVhlJSPg_xHQojKMvAZF1k6P4j9cEU7QobCgzdmnflU53cLvUo2fV7zCI-c1J0QN_ewBA-PrZnSyNYWVFabDxC90of2h5x8nzkZoifyIzz8WZ08iix2AWuN2T8w=w1920-h1080"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczORC3brrd-401qUApkosyioO3dM_CFlfxpKq-FY8ptfkoTlQ4xZL8cAwjVKQA3zsyZOCYvjOaRZtnuMQpPT6xTltHCjP93_PwMMWOutUFC2q9zSQPAHPANlvO0vw0BQnXJdmA3M7pkHjQ6TynStJ1c2=w1920-h1080"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczOeG891WKF8duDtmqXZpdkWX_YpHq3q6YqZXhQQL6-Swsqxg_BzvDzs-m-q0ngPjquMTou9f6Xgexje87gAxmhHnbfggwbE0VxE6K3U4WikbyDbC_b5m1x1eb302K-h_eFImd9pvd20adasnbMojg_I=w1920-h1080"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczNsnXpN6rg9yMBpiaRrQCPrD8ss8cGnAY4CyClvqFRPtxbcgSQSzhWxjKCLKgwB3Z_kVaFLjc8Iab8lKa6lpPuo94eDY2WSJSSp7DuBtz-hJ5YIMVTaD4Iy80S1dKMkEi342fEI8FXgLfKwCkUkQQWr=w1920-h1080"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczMhcQBIZYWZQP1fE7yI1ACGftEJNUAm1GYXoG_9N04z909Goriev_9xyngQb3TxaLDM335YuvXdczA_lYA1gJu7HrdD6Uwf8MOppdEpRHx6lskvMxFD1_ih-Zz2Cq5NSvudZdeIUP4zgOKNfdGMIikQ=w1920-h1080"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczPncH6t9ztORQilK6kC0TA2Kc8SAnrwaIqPaIWSnbhPXyrAKQlELCbPvAr1ZgE1oDsJKRel5aaNwpvzY7Ppw0elKo69BHMfXbvz3yM-7tYQ35RLjD1bIgLvOmkBqSrm-wclZ_lWFg6i9a5kcKoEUI7t=w1920-h1080"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczNKx0uhxLT5CEgI1Y6qsTlcayr00Uex-_spAn4ItJi6YwPPg9uUDYk20Fx-ys-u54ITk1_1Pv-JqLhA29AtquJvq582aprlxCFe4NT5-o7FT1lCXA2VPNHtqn2ZLdgSzV09rzfJPIIRmTHo-m8f_3QO=w1920-h1080"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczNVoEIPFZl4LTPzBqjDYeZ9a4ICbnUiV8024Sgo6N-pOGoXgjgEoaotQsCkZSxi8-OmkcSkA5LuSPWC5HAC47gpo9f_XWiyJfzvS_43njP8ibbP90fsdRljiRo6-Q0XkLaUOC_fAm5OeyT5vEteZlBw=w1920-h1080"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczM7PIVAuaLlFDk44ACxHBrLS_-i_kZJD2xzQkZrz0bdmKtI3njjfaxcgSGUhCMyH4GancM9j21iek-qSyfW0tT1D_3jaPtgMKN_AlCc7mFVwF-bH-jiHlqGc-2vaUfhDBVDHZHumQPcWJDZdTp8QJ2p=w1920-h1080"
randomimages[47] = "https://lh3.googleusercontent.com/pw/AP1GczMP8Jcb3-lX4Oijt9oBYqp3YtDRYIM3POlNQoFAGU4mKDmfCAtEPwmelfRXZz33RGaXQHAAWmD9E72IW_wfajYZ5fhcuxS6c8MRHVUIHzk1BiPZCWN4Atv5hoKVGggqir05vujxJJReQm6pZjNhJXsK=w1920-h1080"
randomimages[48] = "https://lh3.googleusercontent.com/pw/AP1GczOYGRuPd3uV0589zNy2blM4W0oYUbmeNVO6oUJRFuG4hFj1mucZGyYCFitEkNHorBjOBBb1lQLsaF7x6U87pJ1l6OJ0M-uG8CJckliA92EuJ3u2ELEhUL0r0DwBAM77zTNH5LApM6K9pe8uxH0-gCXS=w1920-h1080"
randomimages[49] = "https://lh3.googleusercontent.com/pw/AP1GczMimBHWd7ko0VDAoGn899GkBbXvtpamDsj0A1WSYW5hR_bR_h7u8D1r76WOPj0R4GSxPMKTwrSj9Q1DZWqBNIRxEYIMmofaau0DUR3Z8dxOtDWCTQejJ1kl0_Xg_M0aHNR6jQVu5LaLVDVJthVUC00m=w1920-h1080"
randomimages[50] = "https://lh3.googleusercontent.com/pw/AP1GczNGeWihi8LfnCHqxCYmdM13KPBM0ftrxqhdP3N7uXvrB9JmB4pEvFZjq_KV5bq-oSNS_UKCn8382EUPVvQoWyWdvBSFdRhpZm2p-Eyn0g1OrBcJ2lO29MYYUAkXQPNdRLhi-4G0P3STHCbkgk8mLthF=w1920-h1080"
randomimages[51] = "https://lh3.googleusercontent.com/pw/AP1GczN2rVpfySSFtiZokJDwy9aJUtodG8LZrfMcds5XWo31fgW8q6Xa6wIs7JQySNDHhS2_wIOFc1L3rtHGepjv5xtHFPhPljQjhqlSz2EwOOAAPbACbdyXepMrMfj2ppmHGrNsckIwExJogFpDR1NIvonf=w1920-h1080"
randomimages[52] = "https://lh3.googleusercontent.com/pw/AP1GczO0g6amIBoXePmB_0OobVXA6d3-MKzhYwUjCTwtjWHPlVKW7BQCS29ln9A6-_A6KaL0Wuamgn6p6_Nhz1sD1PoSroT3k5EJDLE6lgqDKdG6PLHC_C7mMnw-uvNzQb15IExe25TPhcO12O7_J3jqk3Oo=w1920-h1080"
randomimages[53] = "https://lh3.googleusercontent.com/pw/AP1GczNJQD1AlqHrzbObUDUmgkmY5GcsckkodWoziLxjGx1JHO5gVZym8-4bKGrz6kFv5Xw6JInnX4PO3Mzn3GT4ZWtQ-EGI0l0ULaZTtlgA23xXScJEvtBH38WfgUnYsJH4frA_UuW_8dsczDz-mDPxos5Z=w1920-h1080"
randomimages[54] = "https://lh3.googleusercontent.com/pw/AP1GczO7tW-kVzr0M-cJ8NTjussws9n2bh7d1P19oVVwNpgmmuGLlg0OHu0riH0EaoT5OTTWwz6KLjQk_IXZyUiei9JjNFF99DLRJ7rINWkKR2af9Zq_nkxV3ECi6gh91PJCfso5mtJwDSUWNDGL9-ufB60I=w1920-h1080"
randomimages[55] = "https://lh3.googleusercontent.com/pw/AP1GczOeIOCFPMEVa-Y6Kdzb2aPXrEWShcYLWN566K_0j51-o9wiAKFrpL9iPFttQ2WcQ0uFJB1b_C0K-22TkOi5Y3-P2ByzN1OwUZ_K9_52Gkz0rHEBBjdIrGjxeyvlBXsj4wN-A3UlBv9TWHohUJgwHFst=w1920-h1080"
randomimages[56] = "https://lh3.googleusercontent.com/pw/AP1GczO9nMDk3cwqH5lbt_usDG9oHY6CKs_ECH66Ng3WHjlclG_0IIGy-IWLc5_TN08XVO8EZWdC1XlRgjDYZtxks-j3-rgfflgWV0PYmNEfp7X5WKZjOlyP5FX9gd_u17Eccwe33rs6EMLEoW32_BktPRnv=w1920-h1080"
randomimages[57] = "https://lh3.googleusercontent.com/pw/AP1GczPruxOMmpbz0Ftdi1dpbKvpa5ib-BRk5jcPNtDlMU8pMc4SsZ3fBv7ikezCNcGW9QvQkVV1bwop9BsloUG1nOTCx-8_yKNSt-e62KhDD3FEw8wQyceEnhwl-ulLwlv--QSP2-duDm24LFPjoLJ6W5XT=w1920-h1080"
randomimages[58] = "https://lh3.googleusercontent.com/pw/AP1GczNKQIa3Q5B3ZjmYHAAhx6DmvGcnlOFviUiKZ4CCIj_Y9bJSUnnksCKUO6mBUE_c84FoaMIBmVNNyPuGrgGQ4vU_CcsKOIaq22TSTxyFln2lb1SE5183URodb_z3rXnxfsb8TR8PZTkKn-C7kc6XRVTU=w1920-h1080"
randomimages[59] = "https://lh3.googleusercontent.com/pw/AP1GczOc4CeXEAzpjrTNskPhTLOr6JMy0ShZQDZK3weQkxwz5HF-FSaRSyJBiwq8W6JWvTPMvoSStFSG8-Ma_GwaXzJa2I79EnJQ_WMEyf5531cDx_WudKgMjP6l1_Kq369x8q0uwKviHoF684glLPTI1bDG=w1920-h1080"
randomimages[60] = "https://lh3.googleusercontent.com/pw/AP1GczPAafLI2qs3XMsXkqVSf3cFCyAujmiR3zsSuskleFTjldgGNeW_9BmC56_QCdlSkGlprxc0f5aazqiV7FlTDwl2Cxe_rP3sM6gM75hZxsaT339v7eK8ztBYn15FR2oHJFULeWby930yfSsSPnuZYlCg=w1920-h1080"
randomimages[61] = "https://lh3.googleusercontent.com/pw/AP1GczNi4XHI_rpR8VKUQS8IcnKQiM2ElkQZvfuXA7jCziKLjxXAGRmoIufySv-_78oWSHozFdvne8vpSI51ainiijDIY2YVmQcwibV0badS2Dt3j69tpvJN6FZMEXLGBEE0QItm5IZUHo-_gBkKNvkFPWFU=w1920-h1080"
randomimages[62] = "https://lh3.googleusercontent.com/pw/AP1GczOLrn7LbBGXEbuwbkstwTBN9cOr60TCLWFoFVxiuTertfPo95vkYbZ4Pow5ydCjznKZEPzXP4RTG6DarZD7WE6q3KUAuEqv727Gj8x-aLPbY8wen06jzp8ktvScfjbxxO4M0g3TXL6VO7mNATr7tcJ2=w1920-h1080"
randomimages[63] = "https://lh3.googleusercontent.com/pw/AP1GczMResYSnCSjsAW3qWeI5GfY9kY5vvpr31j9bR7EQ2f363N-IxrlbbtiEPSSueioBziKY9ARQ4lvJUQYVz52YMEclGiXT1CehUfBQOzelAHwcxkxCvmVOhFQCwEuDyiFeigkVtRbp0q9df2eFpA4YhDA=w1920-h1080"
randomimages[64] = "https://lh3.googleusercontent.com/pw/AP1GczOOnTsU4nz6MEcu8qkDpGlS9Zz-bLTfbLy6g0SThE5m2KiSwXgKB4GYbYvBDWz_vimFsTyxqCVfX4TMudBTjQJjj7S95ZVC-PbTmYDdiuFpsFR8oJIKmgf9ezKs9W95_bZkUw01bO7kcFgcnB7vHaee=w1920-h1080"
randomimages[65] = "https://lh3.googleusercontent.com/pw/AP1GczPRWFoDFSwzZ-yzfFq-KbXjAI8aHklxv8jwKmC_O8L9nSv4eM6LoUwQNv34_VnYmrE-iA0fDAwfE4lBvlTbF9FrOfkQSbq3AP4BXuJx0CzECgBX8MgddXZFEzmDKQUCgYMNNMLUrWBpWlP8Rar4ss1S=w1920-h1080"
randomimages[66] = "https://lh3.googleusercontent.com/pw/AP1GczMmv_N9zHT2MSPQsWMgnuHVOwkS0hpB4wir3LV-VkrFNIQCv2uqUBJErUI9MHBadK0_VgZN8Sb_oNIrO91zbArPI0o-6IHptUdZOUini9JB9_rRBdkDxj7ysdWGXnIy0k78-l40QYee3ym_YhN1qa4z=w1920-h1080"
randomimages[67] = "https://lh3.googleusercontent.com/pw/AP1GczPzM6UU4GBykT1HbRIechH5ioWq46oXbmsQtwYTPSb5J7UlgyAvJtH0J9DyA8yqZECfDOuNCGhD0ZECaIqVf6BOpehp6vQL3szAIJh0NABgJHNVXTnFG0wxDZNULL6f3uufow08GgxK8Ag4Zfbwc2IA=w1920-h1080"
randomimages[68] = "https://lh3.googleusercontent.com/pw/AP1GczMGJbAB7BQcxo3qyEUg7K9C49ZONeokkK2j19LqwaEg8CDQBXgtwDndMBrY7zDrRVVv0YbS4BaYATpqxSkIshiDlOyxhgKFdMk2LSfJzhlncAaopB2424Jlbyh_3JWkLA5Y6pBes7yL_0RRXrIZZIp8=w1920-h1080"
randomimages[69] = "https://lh3.googleusercontent.com/pw/AP1GczPJbbZSkP1s56_z7_63SL4mzfvJJ37zH1gAhcBnPzGaYO4Ytawq-3YwqJjm4jWIPW_IMluWmYL0oY6RE-eX2M7B44aV14Ahvr6GI2aCPOE6C_Dtbis0_XAQLQw_TUIjrLomqH7Nr-b--Mm17pjFUIML=w1920-h1080"
randomimages[70] = "https://lh3.googleusercontent.com/pw/AP1GczN3jWUPskPy0Q72CqSUbRI1cibKnGoZUKEA-stZPO0dzCGY0-GvWXGQxHr9MeA4WN75SLzU1g8FpaEaYqsqe_us-xNqa_PJJhG4nAXDM_ti1P3KhWotGD6dyxdYhbZcqP5A0pWTT9tNym6QQH-gGsEl=w1920-h1080"

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