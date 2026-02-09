var delay = 6000
var stopAfter = 60 * 1000;

var curindex = 0
var currentActiveImageId = 'image1';

var randomimages = new Array()

randomimages[0] = "https://lh3.googleusercontent.com/pw/AP1GczOruvKXFrRP_RjEnBwQXvfa8ojw_XJShe-UkDC5fX5u8yMxccvC0Bos3PFWG9aFgcKwfYTbODh8hJEh__zZOyETQEelZCv-X_3rcPtmve13i9vDubSiMoEvzAA0sZKCOlJYW_085SDoeNWn_cyfUL5u=w1920-h1080"
randomimages[1] = "https://lh3.googleusercontent.com/pw/AP1GczMYHVy_BmJX1jYU3hRZKHuiAkM8a27AZbrj95D6R6pVv_mi0PkxkldoPEP11qn3vvhbl3zRYzqxQ3qY_zz-BJBZZQc9e-InbfLariJZOtmXPWjyI6DvNTFA3_nRcUjwD8JAubUTSczmFqeK_7jI_c_9=w1920-h1080"
randomimages[2] = "https://lh3.googleusercontent.com/pw/AP1GczM9fCFQhFm6nyhIbwJjBciALiRXX6hJu4GK_rQO9zOeqmaaYMUbmuLfkjnUi7vkL-UjFR4GDAmb7M2Q4c2XBSc9aL9xXdkGyBsjohVQXUGKfxZVwDeof3EAP2niFCZYAWZF96MFUMvzuSHFDHClhRC8=w1920-h1080"
randomimages[3] = "https://lh3.googleusercontent.com/pw/AP1GczMk3Cb6Pd8Kp9o_ARgmp3f837sYFllmPEXNl-PO1am30fu7kRvJnjpmCJVOjiOjMfHHrihDKVwvuA01fkohPQQnN7JVODN3okGTmfC4rOb5vtIwckFoV8mAMrsNM5Mwo8IzK5U9o-fzLZCd1qMrDR1t=w1920-h1080"
randomimages[4] = "https://lh3.googleusercontent.com/pw/AP1GczOlE8Qk3zK4oLuQr8CGTBr3WxqsCjAm5ZGwKaZejuSoTiaVtFBrElsnYnRu-Y6T242WIDYUtRwvEWb1G65-uHX3YTVHSCtGCtQLdBCalqs6q44u4Lgb6dvH2paRWRhesUKyMhHnsDdQdfxnpGxiVDhi=w1920-h1080"
randomimages[5] = "https://lh3.googleusercontent.com/pw/AP1GczNtpjdVTqw4PCuTt91-jmm6m2d2Wu5aHwCF0O0oz25jw3lyOCP7ydJV8GOjZW7T2JxOd5aVUbSToSrP8qhTeYzCnyo6XvXIsaunvl0o1st4QKav4bOgO7_ZdUcM1Pee2oAZ--vPB8wnvuV4xb4zcSi1=w1920-h1080"
randomimages[6] = "https://lh3.googleusercontent.com/pw/AP1GczPkQlAGYsFiHfoHc6_pnD7xr1BaR2vkIUK9ncbrnHa7nQbbKq56GpQwAM1ZgWZG6nJS7xxwc8Jh9gxL75hZtmHcgxBKL7jugi5zSpIFb9m09PWGkZsOiKm17mwz_Gt6WhtMq4ONDqharC1CRyQNHjNS=w1920-h1080"
randomimages[7] = "https://lh3.googleusercontent.com/pw/AP1GczOCewvsdIpcBwXDQyCfzzFj7rMYBMk0VrUo_crlclQfO6C-U-05V05HAXNnUL2vDV4zNx1RsBNm12FiZVtr1yEoZQtrjFfPWJZkY1z5ubyL4_gfKqEfJ_FwH8wIAGi9l96hpBPnd1Ik9GXJU3MYqRZB=w1920-h1080"
randomimages[8] = "https://lh3.googleusercontent.com/pw/AP1GczNfcaUsEAQOEvOw_TL5tdmcZ5S_-X0mrknkjzpA50jH4eEqJxPm520qcBFTVQ4uTmd_vsazPt9o2cxlHPsZ9TYDvmh0rL66Zza0C0Y3BbCfCFqF7U9RJdE4D_ZVBSZVeLqKVBUl60vlSKCRLwuhrQUU=w1920-h1080"
randomimages[9] = "https://lh3.googleusercontent.com/pw/AP1GczO02BfVUelibDQUTGBar6bj83YSfK3gTacw1lCqG91vl-bdB1LSpgyXHwNCQt1Hb2_VuwVipL9HoQIvpL1g2H-2P_v2YnF5Jb5A4EdiHU0C5f6Ayo_cBAGymuyUOTPKXsD65z5cgLmTv3Jyd6amZD4S=w1920-h1080"
randomimages[10] = "https://lh3.googleusercontent.com/pw/AP1GczPOky4WRFnsrzHqdy5nHDwUvWoPzgpYPeuvACpsVRPGXeU89aB3NWnHQkCxGIoQUPGmPZxM9N880i309yMgwUAM72a7gcDKHizm9fxZCcKcpNrYHjKEts-9rNH0sGNkFD-EnlXbRRirmWJztKJ-dUaI=w1920-h1080"
randomimages[11] = "https://lh3.googleusercontent.com/pw/AP1GczNWPpDwJ9VLRMMSKlPko7-LrumXYAKaFJi_uAqneuELnchKxXbdqGeiJImUDzJBhRD7z4AzXeCF03lFqbifKgRRKaBaHFren7VJcbzQ10H_w3DDdN09sc1lJolb-EIY4DbpKIwEs8LD9aPlyd4hFosZ=w1920-h1080"
randomimages[12] = "https://lh3.googleusercontent.com/pw/AP1GczPKpda4rNjYUXMboJY7Fya-TmQvJQA__YM3d3C-Usc4kIJ5BlWqKwjWW9I3B1dQz4hUb3YeFohALrlLoU9uZK4KkaDJWLREcmtuMvwsS3VL8z5r8U_-brDHcAiVTnlwDDg7gxevxq49MKFUbLxwtMNR=w1920-h1080"
randomimages[13] = "https://lh3.googleusercontent.com/pw/AP1GczOPK7NDV0Qj6NHmaM-J3dzIp2yQofjxjnbzJbA2gS3QD4zn-iG_NH9wnWvdb5aP0qO7aKsUgEq-Nq5tqNzmJhPmAcjgwtpoBv83Jod9J-a6_HNKzwCO3k3b77D-XUWdEuud2rF6Z59TAlJ9HneEmY4q=w1920-h1080"
randomimages[14] = "https://lh3.googleusercontent.com/pw/AP1GczOZDVlOqKLuku9xrbkKfVZLOKAj5cetciqBxFeOEtEGvKEEnaMnU16G-eLChvPc3AHtd42mPW8uB5B2jw7ACchCFsAGec0ENq6WgkyXU1Eto_uRqCn3icn-HkULPmzLpV6XNM80JSEzHiuOQrQOXQNI=w1920-h1080"
randomimages[15] = "https://lh3.googleusercontent.com/pw/AP1GczNu8pl78kGU4aeJ9Ki8DDLWn64h3rGqHHGYip9fSDfAB2246edypTgqedgulGdAAwwemKr6Y9UOwiojJtZfAb0UQTyHyf_SWeBQmUEVV5EoFmPPVGH64HDApfGXM3sMrTnrlJvmuMgWC5Zp2JuBoKeB=w1920-h1080"
randomimages[16] = "https://lh3.googleusercontent.com/pw/AP1GczP5e2JLIa30gZuL5U6PLtavQGzwIuo97A91_xSh2LsMjucU7ixsHrLPzrlfGgmEoBjESIcTvZXZLmS14-PWp3vsB5Xr_o6H3f6AgctEdsGd03hBKApSffsn4Eoxr3t1rVPOJE1N_sMv_JyHIDLxWI2l=w1920-h1080"
randomimages[17] = "https://lh3.googleusercontent.com/pw/AP1GczMz8hweIidtaBX0WbYyuHb44D4QQyxLLRqe058Z8waemzV_5mtbSu-q8fzFMHyB3W3H3LKmMRXlMBCl5KTS4qyDg-jGDtwTrUKwk35-Do-G7tn6Zln4vnjZXAx_Ib1maWjrHhRwny3WzmPrqBIcV3E3=w1920-h1080"
randomimages[18] = "https://lh3.googleusercontent.com/pw/AP1GczPHrNcaeo0qhujswgE6rBmQbZx8wRHEUVwvv5-f85TjmzfcR8MTg0iobzUoo-Ago2fprxTMcRJnRNikrbERjWenoW2oMRPLR0adAQWZ8YQR3Dg31onAK_4FVTsvh5o4owI3ehioHlSGRY3DcbrFfeGC=w1920-h1080"
randomimages[19] = "https://lh3.googleusercontent.com/pw/AP1GczPsVMyHnLrAhCDBmTwr6Rgg_N_Ym4dIQltbubriRUi4Lp-TLVCNWuz-jLpyjcQa3IXqtJ_Gp0jIsm1HptVBBnklogZG0gX14Pq8xK7noEZd1A_B291SWDqp_myuoG6jS66fT9WQJjfbhQKtrGXABb6P=w1920-h1080"
randomimages[20] = "https://lh3.googleusercontent.com/pw/AP1GczPJyjtXmyljsOjOjlvgJa3D7D_C7s4Fz7WbYTW1_-yMXqJs8CvuoBy6veHPGa4BtBq1KoZA_HzDqUXU1XpMHhn_ntUeOz3WRtWqgZt5BoALbFu23qkkg38ZECcnmMADdieaQ7X3WpVZl5WjaH61BQCG=w1920-h1080"
randomimages[21] = "https://lh3.googleusercontent.com/pw/AP1GczO7S3EDE28ss-uRxBF8koe54kr84CIotZC6x98kia65_BhgBuOpSt6HdB0e9d6gCP0TwT59JN3hGjKfs_xSYclsEvXkhhn5t9S7jh5bAJKa5PM79ENI8-k__Ivg2pF1yjnIyQVvo_qdyG3b98b1HpVy=w1920-h1080"
randomimages[22] = "https://lh3.googleusercontent.com/pw/AP1GczNWAFVMNf-8ceQl2dW7KwDczwWupLtMzXhg4tVwXpp8VVsll-Ojh8wHXNKLeHwqPCqzhdylbtnWWbUQ2wBGfOjaf1SGlIToFiUu0td8-429j6tPVJU61P6YDSZmu47UxNqMZelz0sIX_o4ngOBXGF_p=w1920-h1080"
randomimages[23] = "https://lh3.googleusercontent.com/pw/AP1GczPJeUl7qEAHvQ8gB3XJCwobrwE5FVVAArxnPJLUdXwV6Q_WO5f10oruzxXMoUGVwZHMDgJU6B5AeHILGxWBEAFoUiH1D30pSr1yi7bHlGmBaUrAaBeALmy4pIWRYMFqoi1KvHJGOL2eK0VOJ8FyaHl0=w1920-h1080"
randomimages[24] = "https://lh3.googleusercontent.com/pw/AP1GczOygtp7S6hW0pNDd7PA8fYtoq8Y3uC-IqJ2NNKm9SnAIsApo8paoWSf2duMWwsezzW2rJxRC47mcb8ajzLWWFDy9pPua_zld73vZUa0VXTLV2s0Opu7uRITp1t9R9xrPYx4lU_Nqo7lbAl9QqrYGhwP=w1920-h1080"
randomimages[25] = "https://lh3.googleusercontent.com/pw/AP1GczOLFDvsR99Az6N9ir6O3S1MqzbAS70OMOHkIgZTPcOWihoVUnBpcLdbFhoT8zbycTRos2jyMhBTPPamvHgB4yMJDfd5BW0MdH-Itih5IK5qXgSVB_sFRPaoR8_CzhpgoQF4Rs3C__4YD9aAPgzn940b=w1920-h1080"
randomimages[26] = "https://lh3.googleusercontent.com/pw/AP1GczM3_ghkwHBbFR0Rv2aGZjhTetIL0z9dba8d-f5zUcIifTyYQtmZWvlqEAeYjo80NcZj2g9RTV9oSkPItXCRjFEHtHWiGuPPTYxOtr-2R5x4Z8G_SZX2hIqplZ6zSZ955-bAOw54wK_x1upc8SRSAbxw=w1920-h1080"
randomimages[27] = "https://lh3.googleusercontent.com/pw/AP1GczMy4HVNoGk7DKPzTEuMTnAKZN2Qy_kZt3U0BozhKnJVhluRiqr7akfeicvzoOZK0_-2cln1R7cbE3KhSZu3UJj1z7Pan-mwDls8de8xESxCwSSuqERotI4D-v1f3Lw4abZLC8syIbN627CPpecUAIx0=w1920-h1080"
randomimages[28] = "https://lh3.googleusercontent.com/pw/AP1GczP8yhy0z9LHWASxD-50-IQhP4DqkOOlrJIGhDzP7_Bxm5GX1bbnmFhIXCWBihyFp741Vo7j7HIOH3Q7tIkOkuF6NuLMKoQOTKhprj3B21LAgwKCiHFjyQ7o1atP6VQosfoxqVA01yI50OesqbwayPgr=w1920-h1080"
randomimages[29] = "https://lh3.googleusercontent.com/pw/AP1GczPpV--2lVr9WmMiYY_EN8c7jN3nX1kaL_vg2-hTojMErV6nxVENyj8mXlcRjaTs21Bga-Haoyj6lF6B1zmC8o_foYU_g9F53V2SfNem6a1in71FgLp4KUewdsCHpEwWI-mvLHCvlP-LZR7WYd3_kLmM=w1920-h1080"
randomimages[30] = "https://lh3.googleusercontent.com/pw/AP1GczNuHZqSCj3918m9aZFHuiwWoYH1zmg-XQ79B6scPEnezZOeNlCqgDKy7NdtcmudpEiCBGYezdSICC_z9pPl5K-QVHFNuxQLBx2BPTP5efqArylsHjNAkfta5-EkiqjNJqR1cphrpg_DljFvAvymwb0U=w1920-h1080"
randomimages[31] = "https://lh3.googleusercontent.com/pw/AP1GczPNo9q9SW5IKLylSx_Gvw9alNpEopPvVunb2PQ0W_L5ET7P_EB0591yT2i4xpPJKkcoB-C07BLZrZEUzGUPO_G4eypZBaCZo-DQND06Ay3gOLe4cjMgl5QFO3vT8mTUpBrqXDg4H_eQ2yrcB-UK7C6I=w1920-h1080"
randomimages[32] = "https://lh3.googleusercontent.com/pw/AP1GczNM2AhmsN5dG0r7YoXhU68EoYdxcEA6iPJM0OhqkmlWy7ngZ6_AhWjMmsERpewMI17ELVRKNpwTEdLDzzOja8z9nA9HScyLRVfr_W3MjbQ97OFYweCi8Y_Pcd51NlQ5iSFO0bsDbN8XfCxQYcHsTtSe=w1920-h1080"
randomimages[33] = "https://lh3.googleusercontent.com/pw/AP1GczPXm6gIWrJQxl3JsigLdu_NwcUh6CrEvY_9tLf1ebCYPTM3OVNl5TYg0pCGf9kxBd_i_--kDodfsH83VOd93U6Rb5g2MrBvVv3ugaBLjlvMuAtGUmcgzGA-A8Kfkpfpzpiv7tqLb09YxsucmqHH1vlh=w1920-h1080"
randomimages[34] = "https://lh3.googleusercontent.com/pw/AP1GczMWGyi43fCN-rK83cvmT4Ys5Isx5S_gik77AWWp9iYgmDDHjlFi5SKjztrdTXofIuO67BNTi3XWpOVCM6tEn0J2bH8cw0Ybq-Y40OkcT7xHRJ_ndgfAoR8Ed1iY4fZG-sGroeR2LrISjNgSjfDFhYCn=w1920-h1080"
randomimages[35] = "https://lh3.googleusercontent.com/pw/AP1GczPSt035_ug5pQGJBbe5NUaQ4ch1PyI2BAe-QpwyBB8GqiFy_0AlmooS3sNWAkjav4WHZFCsv0emV_9vPakC8sliBV9KvVsFKGTaizRQy5Bn57hRV8deWhYuHpCG5nfts3eocspUyOUYW0g29jSRk_Pc=w1920-h1080"
randomimages[36] = "https://lh3.googleusercontent.com/pw/AP1GczNklHdV9nRk5CWxqpe26ERXkEmCFA1AefyHP9l96Vikbi7xT-WR4D2VYpcTdHGsKq_nQ55f4W-4DjQSrIwVKciZiUfdoCHJ8KLmabKi6OTxvi6wDEC2Bpxolz6Gu6z2ttEz9a7SXy7Jm7pyKB0MEb38=w1920-h1080"
randomimages[37] = "https://lh3.googleusercontent.com/pw/AP1GczOqdrNjb_0vdeRZD9AggAdofiOrfMJL4b9nZPjrXnh8xDSjb44hEF2VI_FXzZ3uaUGVqdos3PZ7DvpyfDKjYYYiPunM3F81IZXUbvIGm3mUe-viawn-_pQ3Zo7RjB8e4EylqC2UWFgcMz1mK0UfY2q4=w1920-h1080"
randomimages[38] = "https://lh3.googleusercontent.com/pw/AP1GczNSafbsa2kjvwrs_f-e20py83DYpkr0jmulUecB1so6WCu05NCCH2C6ZtZL-V2kLOMsR2Jo5_LKU_tS5HZTksp15OoQwmvgwanbHPD4u0EQcJpvqfEa0J0IL0qoAVHyCzPpFr6a-UE5luSbXM-5WOER=w1920-h1080"
randomimages[39] = "https://lh3.googleusercontent.com/pw/AP1GczM2cKT3WctXlX0JChFZ25QlrqaHlY0Q8Yj5nramuZ1FdRfgRdZSF0-I1zqh-rXFCSpPfI5hMmKeikynRWVkq5deB400k2hkmsNyQ-navbD40Jp9lwdmJ9OZUDYUkMDFMzQnPE6l2aXY-3u7m4eTaK6W=w1920-h1080"
randomimages[40] = "https://lh3.googleusercontent.com/pw/AP1GczMx1QdzuuSjEDcNmQ5YuEY6y4-OWEY-2C_KBn3G1v7EfKnGZtj3jEtzWDNLfDD0orScjIdkJznr6BghmVDc77Kzel_aNfJWHzsxg4TrcC8BW2pMoIv_oOXBl_wkyAHwNhfSK17uLW1Ld7os3owhoNDp=w1920-h1080"
randomimages[41] = "https://lh3.googleusercontent.com/pw/AP1GczOs62a3vqDUtmlnhEAdLVMqpzuwnAIcVTZXH_3EJuXRGvwTaT5PY9aP63yX4QTEM47F3A97TWU8_f308RXxQCRLnB60dsKJtRUS3ut3FD6ykDqhJtJJf8VwSDl-jAY7xOBqf4uoaNjPnCV_cp9WY5Xd=w1920-h1080"
randomimages[42] = "https://lh3.googleusercontent.com/pw/AP1GczOfLWlwNGy04xrji4Ei0ZjNXK5NRSL4EmymvF-3u7gR8Im1i0xykKyFp3bLSIpiOB_OSzQOwhPeabztwQj3_TsWjobGETja6gdK26r9pzVFFIhr2m0DaCRsJU7utSe3C-moPfOiHR1QBJuZMbATI-qk=w1920-h1080"
randomimages[43] = "https://lh3.googleusercontent.com/pw/AP1GczPw-hzDdeO2lvpEcV3v5nJyd8d4zCbJjtDRxNitivXWf0ZqFq8fM_GJiEP2lkVSVBz-ZAWEFL08zb5eejW7-fFuGltHr_XbTjKQcqSG8pkj9DngZUAUt3vO6xLpcmjI6-TZDaynpmFXMmTBzkaGhCEO=w1920-h1080"
randomimages[44] = "https://lh3.googleusercontent.com/pw/AP1GczM81cA0ioymwYsAu4H4_NMSXwdQAN03DG3cg7l1F4zL4PzO9ZXalf0T1_6ceJPjVNM_Orznc5Ivoeo2o9yf6I58Shoacbx-GP7L0t_CLkvxmNT9HiyoPaFDWFhMZqToFYr2AaKtYWEa5olPdI8T50WB=w1920-h1080"
randomimages[45] = "https://lh3.googleusercontent.com/pw/AP1GczMYGRXhFtjz-_cOCLe-mIDwf5tDDWqTEQqPUJf6gF_6Z18fkbIa7QzO5Bfa039vgHDco1tOrme1K7I9zPOZNsWdbwJOpGFbwVJFhaJHdqUpVJ50O1TeGGERM87OTFUDW1d2ctE2psumxEu5qlkpQhxd=w1920-h1080"
randomimages[46] = "https://lh3.googleusercontent.com/pw/AP1GczPQngqeWsAGfjC4FoEQZM1yNBcfKxJ_GcvPGU43eKp7_wleAuhbdG4e0F4k7SWVsVVjR3d2QG_bRIG_uK9h2AzOmYfe5iw4TMg3AVRbZXzLjKl9Xu8Kn8A6fi6kNIDmQP5JdPI0bwAu3doUnS7utn1T=w1920-h1080"
randomimages[47] = "https://lh3.googleusercontent.com/pw/AP1GczNshLIJdtXFnng0fQvNfIQ-s12l0m6T1KbpHxy-RHQa3nkwDWADe_eBa2gwTTgS8ZOQF9jJmp3j42Xe_4QXmw1s-sJT8NCW-6-2kgQCDbojJX8CV9mdbM1agc_T87o1T6tPGOo8cRa2mTvAo4gCRTG5=w1920-h1080"
randomimages[48] = "https://lh3.googleusercontent.com/pw/AP1GczND1bTfhKRnAWZ064VRCsqtquyGRWNg3RedllM53B6Rg_IHxCOiA3Yc4Xe3j2I2XPHlLTF-IDYqJBJVIdOjTrPvRYQlUP8V4Z0SiGDILXuoi3Q1tG8Z5SLzUJQ6Vvu4X3_NQ-AcJFQgYV-eeunZ-aw9=w1920-h1080"
randomimages[49] = "https://lh3.googleusercontent.com/pw/AP1GczM4_U6iaIr95efc4753GuSeRidK7AxdB9KthJJbf3x8PJd_s0z4bNru_km4dUkUDnE3aWQ35xDnyuwRhat_84wpeYkNh0xmg-WNSdPJEmxH99t5EJTl5y4XY44WBB_hiqLwu66cpeQqJcZN0nM0p81a=w1920-h1080"
randomimages[50] = "https://lh3.googleusercontent.com/pw/AP1GczNRbfJj1GXy8NHWk4Vy9p8n1GqfHEnzgoNI4oRu_Fib8o6FrghQdQUz3TFlULN_1fmO6DLjUg6Ua-lYmV8bHMC89AWEwNIZnwOey-HJuMbKOUDtNbtzCEo499C9ZxwtxsEceiqmz4vFJHBh2lqtEV8h=w1920-h1080"
randomimages[51] = "https://lh3.googleusercontent.com/pw/AP1GczOgySVcIHzyjLEJTUr5_9lFNxVpbNNPkugfQaVOLKoCuc482Kh0x10-Y2lJxtqNm5UgBpdC0d8zPix9UNu76Ed4-FU-qe6vgaGGuLTZ3YA6-jD5OE2FsazBnsZo1bMP5LniAQlVqLBhoz6GCkytZcbH=w1920-h1080"
randomimages[52] = "https://lh3.googleusercontent.com/pw/AP1GczPOtdKqK6YeYlvjFoxJzvnKL1Jx9Jbvb2HrNzxUYKSmYSm5KPsIyuncqMaD8b2FGIhIkuieo5VQeut-dXrZRnh-tb0mW-abv1HVy2GBwHdXpMzyDCSqx19NAqexoCk5jpniWgQa25Yw-ErtAfYPIso8=w1920-h1080"
randomimages[53] = "https://lh3.googleusercontent.com/pw/AP1GczO_a_0U2_362rAbLJiCc4o8GI_sChvoudkfJOXys0nrwqTXhe5fI47X9O02_Y51M_2hQtD6eXOP4-4xdkKHWfmsqWfeh8WefnN2s4m_7RH85jFCCKLJCk-hhOEZwmKjrGl3adx-OnTsbAPSqLNE6Tkn=w1920-h1080"
randomimages[54] = "https://lh3.googleusercontent.com/pw/AP1GczNtiQkyBGMUSyymRpkOQxwdXqh2Ml20xUqn-oj70QchcW6M3B1Zi8gCsmvd8uM9rXrLKlOM7Tgu_qIP08qNv-2d5lB7CQvyi43G9EsNx-qNJ0RLf6tpf_837TUWe0-Qxj1XOZskfziXmYnrwd-co5TR=w1920-h1080"
randomimages[55] = "https://lh3.googleusercontent.com/pw/AP1GczNvA-JeKOGuGJ1uCrHVfaQTgxZB1C4qbFkACIZDOoQjrk3JenNqzagBB5Nz07x21NjK-9ErFukof6QCwOpwQ1NHi3YjA9FPfDa-Eu5L032zOa9yKe0KXtb7pCamCwfQrNxu59ew1ro0S7MIU5PrtH7B=w1920-h1080"
randomimages[56] = "https://lh3.googleusercontent.com/pw/AP1GczMSwbFZYkYMVpvN3S8tIlbU0AGqMMYNJVrV6zh68A-pWwCZ9KI7C0V4beDvzuEFqRM7pCM06ew1-huwPghSBkXtsvuT0nGKt5H3J5ui9cIzO3Xzk09l1fUF_QWowPiHaI6QM9pHn4D_oFIodTatxbqY=w1920-h1080"

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