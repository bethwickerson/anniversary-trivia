/* ============================================================
   Family photos for the anniversary trivia game.
   ------------------------------------------------------------
   These photos are shown between the trivia questions. They were
   read from your Google Drive folder "Wickerson_Anniversary_Pics"
   (100 photos).

   Each entry is:  { file:"NAME.JPG", id:"<driveId>", caption:"" }

   HOW EACH PHOTO IS LOADED (two ways, automatic)
   ----------------------------------------------
   For every photo the game tries, in order:
     1. A LOCAL file at  photos/<file>   ... best for the party
        (works fully offline, no internet needed).
     2. A LIVE Google Drive link (using <id>) if the local file
        isn't there ... needs internet + the folder shared so the
        link is viewable.
   If neither loads, that photo is skipped and the trivia carries on.

   RECOMMENDED FOR THE PARTY: download the photos so it runs offline
   -----------------------------------------------------------------
   1. In Google Drive, open the "Wickerson_Anniversary_Pics" folder.
   2. Select all the photos and choose Download (Drive gives you a zip).
   3. Unzip and put the image files into the  photos/  folder that
      sits next to index.html, keeping their original names.
   That's it. The game will use the local copies automatically.

   To use the LIVE links instead (no download): in Drive set the
   folder's sharing to "Anyone with the link -> Viewer", and make sure
   the projector laptop has internet.

   TRIM OR REORDER: delete any lines you don't want, or drag them
   into a different order. A caption (shown under the photo) can be
   added between the quotes, e.g. caption:"The wedding, 1966".
   ============================================================ */

window.PHOTOS = [
  { file:"P1130124.JPG", id:"1Ntd1cOwvwGNoOYtlP5aidos2q3e96FQM", caption:"" },
  { file:"P1080539.JPG", id:"1bKPXA7Nqyc6faSHAT4ceAcOEh7SL6Gms", caption:"" },
  { file:"P1050832.JPG", id:"1Opaj7hZMvqopnxf5-IbtTsW-Cdv3JR0F", caption:"" },
  { file:"P1170992.JPG", id:"1lqMIhGxwWE37eIer4K0dqSHAbJKKAexc", caption:"" },
  { file:"P1160320.JPG", id:"1TL9T_7dVvqOT9CnBkPC3x9H2OH_Tw6qH", caption:"" },
  { file:"P1160831.JPG", id:"1nP-uDrerzn0I1T1SKz0KgQ-g2UvviA8F", caption:"" },
  { file:"P1160284.JPG", id:"13o21rvrZ1mxiOqtjoi1B5SuLOvfICsUO", caption:"" },
  { file:"P1160285.JPG", id:"1AY9nqCaulfvhQ5OubduHLhPDBx-CI2Jh", caption:"" },
  { file:"P1170994.JPG", id:"1CD2BdyDmsLbLrazwCy6k26Y03fBohOr3", caption:"" },
  { file:"P1160262.JPG", id:"1x1qIUiW4ApzQ3n9JhMVG6tjzno1-f3Ug", caption:"" },
  { file:"IMG_6897.jpeg", id:"1Vwd1TvnoLTWNHTMvAnNSkL8sFJYsdlnR", caption:"" },
  { file:"IMG_2651.jpeg", id:"1f76fFRzNDg13Nv3kkMLmn01BKz9dVg69", caption:"" },
  { file:"IMG_2629.jpeg", id:"1jp6xyvEZUnMmd3zDiPJMduo47dh3FQqB", caption:"" },
  { file:"IMG_6401.jpeg", id:"1_-BiHwYqf-H75G39xZwk1YrxtzwNGbAS", caption:"" },
  { file:"P1050643.JPG", id:"1Q7FdAVw2SqUgVTqpEqiBcDecl3o7zgbN", caption:"" },
  { file:"P1110052.JPG", id:"1tp3u24QKZXkKaBodOeSNYmsyZF1rieBH", caption:"" },
  { file:"IMG_2645.jpeg", id:"1bCLmfqsZpplBpVClon7zXCu71HAnTvkh", caption:"" },
  { file:"IMG_6321.jpeg", id:"1zYGbK-SB6f_30i7oRb3LdYY-m5V54inB", caption:"" },
  { file:"P1080568.JPG", id:"1RzqD8eDOtMkeEqDOL5FOXlbatdwL3agR", caption:"" },
  { file:"IMG_6312.jpeg", id:"13pyRcuZjErvNs0Ts1QhFOYOTqekQfviN", caption:"" },
  { file:"P1110070.JPG", id:"1L-T0SI0cLZ27ewRJPKxiBQUww6cxzSjt", caption:"" },
  { file:"IMG_6317.jpeg", id:"128Jloxu3U_aBlOhwZ5ItEDbxw1iJ1T3O", caption:"" },
  { file:"IMG_9606.jpeg", id:"1RR_eluERG8n1xzsQSsUhrZGWHOVT1F6-", caption:"" },
  { file:"IMG_2626.jpeg", id:"1ycF3rSh_45xZ0zJmVnJWJOSSdiwuQ95Y", caption:"" },
  { file:"IMG_8008.jpeg", id:"1FQk9jPHPl-Z6HDb9Fbxx0CzOdIXS-mOo", caption:"" },
  { file:"P1080567.JPG", id:"1pGTh7AlXQR_2wyZxVwpgxqWqNrqG58jy", caption:"" },
  { file:"IMG_6899.jpeg", id:"1zSoBSN9g5PH93L-JTphI9KOK6WkgXoSc", caption:"" },
  { file:"IMG_4022.JPG", id:"17cLm9lXsmSQPalkNl4KtrLCwVfE07onN", caption:"" },
  { file:"IMG_6290.JPG", id:"1ryWSg5nWY_D3ZSN6i4w0OkkPX73mKFJF", caption:"" },
  { file:"IMG_4189.JPG", id:"13fBJYfs1PleHjIckAyecMKshYGsqgAWY", caption:"" },
  { file:"IMG_1575.JPG", id:"13ajm1Pz6luPROfO8evF6_Pdu8X9xnQFw", caption:"" },
  { file:"IMG_3996.JPG", id:"18a8ZDjo_GBxOk-tdcowHmZSKd8dwbr09", caption:"" },
  { file:"IMG_4018.JPG", id:"1RtdMpFmeN8Za1E-Tv5NMLVUqSN9xUKV-", caption:"" },
  { file:"IMG_3943.JPG", id:"1MC9JnePD6WAoGahQOu0LB3qhue53s1Mo", caption:"" },
  { file:"IMG_4003.JPG", id:"1h-sAGJgfwP4Jcl89Lpfan2hkhFaFn_B5", caption:"" },
  { file:"IMG_3081.jpeg", id:"1l5Hzr-HfM2jGIfJoAVF-PfmssyhWSwtq", caption:"" },
  { file:"IMG_6505.jpeg", id:"1FmmSLR9fqI6l38hKbrgALB0-7sZ5Qphw", caption:"" },
  { file:"IMG_6492.jpeg", id:"1Izj_raSokBnPo_2zvCMWuYj9DcWtBeNY", caption:"" },
  { file:"IMG_6507.jpeg", id:"1LFm4ajyaVwdNtnYSiYYxod6MbQcoqmyh", caption:"" },
  { file:"IMG_6481.jpeg", id:"1G5pUK_eiweuRqwvCFLq3qB-kjbuyleIt", caption:"" },
  { file:"IMG_6511.jpeg", id:"1HKnCK3Q5n-42TivbOUhT8ehkwZWOLoKC", caption:"" },
  { file:"IMG_6482.jpeg", id:"1BrS02ri7QmWLoN5Hdyg-VpfSE6bmRBZ_", caption:"" },
  { file:"IMG_6478.jpeg", id:"1pyh9PlHeK5SwjomK9LLSoMxvejowedBZ", caption:"" },
  { file:"IMG_6512.jpeg", id:"1_YgZmGfNIcWyx7uHax2fugzlI-RDErPw", caption:"" },
  { file:"IMG_6484.jpeg", id:"1rrUFmroT3UbgonTyNx--WTZr6YNbooBX", caption:"" },
  { file:"IMG_6502.jpeg", id:"1DkF-wAoqJrpryO3HIfHLSYu26M-peYPs", caption:"" },
  { file:"IMG_6503.jpeg", id:"1l0xcC8hkn0JYU9GTf3y8nwArL0pL0Rtz", caption:"" },
  { file:"IMG_6483.jpeg", id:"1B_egKTxesZiFPMr0Tl8Hd-Z8cTZGor2W", caption:"" },
  { file:"IMG_6480.jpeg", id:"1fWQutxgHlChu1gyU2TSiDvRK4QNl7TkN", caption:"" },
  { file:"IMG_6477.jpeg", id:"1hU-qz2e5RQEW18eMPlm2VusZSaWSMLDu", caption:"" },
  { file:"IMG_6508.jpeg", id:"1bLW0dXczVcweCMQJf25bcakzkAweQ7Ax", caption:"" },
  { file:"IMG_6509.jpeg", id:"1nRumBHCHiWh9dtnFx-giEDgKJzL-Bsnw", caption:"" },
  { file:"IMG_6479.jpeg", id:"1Jy7XavOKDEPDmbtDICwbl-hh6nTFsUo8", caption:"" },
  { file:"IMG_6486.jpeg", id:"1eeVu5Lm28Gd28TOSL8KSQDQ-4mvlIBmF", caption:"" },
  { file:"IMG_6500.jpeg", id:"1WX38PQkkLR4jrqx2z2ToM4dIlHWfUfEQ", caption:"" },
  { file:"IMG_6515.jpeg", id:"1AXlKntr0EuvD33X2w6uPdLHStCRcsGB8", caption:"" },
  { file:"IMG_6514.jpeg", id:"1s0jY65bQ4Vm7105AZbJDc0uV7ouGriWN", caption:"" },
  { file:"IMG_6490.jpeg", id:"1cs8CPiJz9vGjXOb4QsWTGbEkOLmjtrhi", caption:"" },
  { file:"IMG_6488.jpeg", id:"1SP6OaZcroeIHPxyJHXvXt9u5VgNtV173", caption:"" },
  { file:"IMG_6489.jpeg", id:"1ZlS3khwCStXt7A_8TYP0uCc2h8T61Pnt", caption:"" },
  { file:"IMG_6504.jpeg", id:"14FEiuBpKdtb-pMYRxM8h8z9-QBbEGzR2", caption:"" },
  { file:"IMG_1707.JPEG", id:"1oJ33h11d_oZgeNjBHqEW5k8Xmw4Nad3L", caption:"" },
  { file:"IMG_1525.JPEG", id:"1wlwKBfcbuUdKLgWBB030mT5VjObAncGu", caption:"" },
  { file:"2007_08172006_091720101.JPEG", id:"19n8iBqOto-5QqjL2k0-RnB_DxwWdD519", caption:"" },
  { file:"IMG_1500.JPEG", id:"1yHl7OunrYx8m9oukrZjr-ufxRTA75Xba", caption:"" },
  { file:"2009_12252006_091720013.JPEG", id:"1AA0HFaZpUMs1jfB3BO5mKtIZK0TZNrvD", caption:"" },
  { file:"2005-05-20 15-03-53 - DSCF0979.JPEG", id:"1SZj6Bve6z0HHKUYkSlkGxtSBfFI7J9fA", caption:"" },
  { file:"2005-06-11 17-47-27 - DSCF1077.JPEG", id:"1GQ7mWoeEtLs3QURjS8tqDNtEM20Dn-Iy", caption:"" },
  { file:"2006_09030059.JPEG", id:"1qPAtTVBiOcVsW5s5uT0ZDWjjI3DzsPxf", caption:"" },
  { file:"2008_08022006_091720024.JPEG", id:"1Ql151cKP34-ox0tWHExCbvCRA8aqRGCR", caption:"" },
  { file:"2007_03172006_091720021.JPEG", id:"1yewmOb4AmGvw6p5FKnwpxU3gszDSVUAS", caption:"" },
  { file:"IMG_1260.JPEG", id:"1q4xfPjn5KZgR6PGPl0f0ItqtWLeMR2n1", caption:"" },
  { file:"2007_06242006_091720132.JPEG", id:"1k1IM2fQStweYL1jNtSZJtey9o7sVqnA_", caption:"" },
  { file:"2005_05142006_091720156.JPEG", id:"1Cmpm-8bHp_NfrXWLy-uHmQ5VV3DiBdrG", caption:"" },
  { file:"2007_07302006_091720122.JPEG", id:"1PhUcfI9YQeaBNcNh3f8LzTUTZ64PzaMJ", caption:"" },
  { file:"IMG_5632.jpeg", id:"11BLHK9D8WALcX1kah081bKxErVXmvb5F", caption:"" },
  { file:"IMG_6446.jpeg", id:"1-PSLydY4GH7Rzc5j9QCIRKAdEvcqjixC", caption:"" },
  { file:"IMG_6447.jpeg", id:"1vE-hX1ZpiTLViFrAwYG9RUgYlR8Xe80U", caption:"" },
  { file:"IMG_6449.jpeg", id:"1YGTpgmja8iwbd3uexhj8KQkA7MrlPl6z", caption:"" },
  { file:"IMG_6443.JPG", id:"1lnMTcLKBKlb1SCpXJl5xlEeWuceULW93", caption:"" },
  { file:"IMG_6450.jpeg", id:"1v4y5uNv7z1KjCfpV-Cv8ss3vaG9qqRwh", caption:"" },
  { file:"IMG_1964.jpeg", id:"1JSc4asuNOTOGXYRMH4hj01yFjVfQGm6U", caption:"" },
  { file:"IMG_1561.JPG", id:"1FoJYwVDe2-hy45n4LFEhpVavdrJwEAe9", caption:"" },
  { file:"IMG_6442.JPG", id:"1GFSGZhjdTcO3xUPW0HoeXEe7k0iKo3_Q", caption:"" },
  { file:"IMG_1082.jpeg", id:"1jLHcDuOR1mse4GWFuZwoM-Kgqe-mneEp", caption:"" },
  { file:"IMG_6454.jpeg", id:"1pe-i5jpPQPkx9xKihScrJTqBSrhR8Rpf", caption:"" },
  { file:"IMG_6453.jpeg", id:"15PCSQKKlf29uugYVWa7UXkza6JGG3wNd", caption:"" },
  { file:"IMG_6439.JPG", id:"1XJxedf0c_mGKuk_UggbSAaOtI890XVE4", caption:"" },
  { file:"IMG_6448.jpeg", id:"1eEFgwKYvkhAejQCPmCAbz9PG5-sLgbh5", caption:"" },
  { file:"IMG_6451.jpeg", id:"154QJsZYBF03dMqyOnQyPgKtXxliyQoSB", caption:"" },
  { file:"IMG_6437.JPG", id:"1AGL7-JvD2gFiqG7iUGHREPZI_21Wpl3O", caption:"" },
  { file:"IMG_6436.JPG", id:"16IAYNlOjsTVGaT66cmY8z6y_HeGtP9wj", caption:"" },
  { file:"IMG_4182.JPG", id:"1oLqCWUf3Qe1GO6glS-Qgu4BW0l1OnlQK", caption:"" },
  { file:"IMG_1588.JPG", id:"1_w2btQaIOXRgpOK4lVbJPwNjLDMW7pXE", caption:"" },
  { file:"P1030553.JPG", id:"1O99CB2HoesqtGhzVZQvH6X1wgbmw48n8", caption:"" },
  { file:"P1030552.JPG", id:"1dsButOqTB1vB9YWLiiLMceUbPmCJTqmU", caption:"" },
  { file:"P1030508.JPG", id:"1lcaqW7OiYPCe6wO0UXPnltNo6R7bXcT6", caption:"" },
  { file:"P1030519.JPG", id:"1wjx8QZ63krJ9aYVfvzRhOk3jPEAoB25K", caption:"" },
  { file:"P1030495.JPG", id:"1fP-PI7HVBcy1Y-SecCpsykzxOnfX9J-Q", caption:"" },
  { file:"P1030499.JPG", id:"1XNm2G6OqlCu2atxrs7CAgOVIONGElWko", caption:"" },
];
