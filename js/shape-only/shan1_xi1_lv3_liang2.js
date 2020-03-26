(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('吕梁轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"吕梁"},"geometry":{"type":"Polygon","coordinates":["@@@NBHBDDFFDBBH@N@PAFBJDDF@H@JEFGHGJCJ@FBFHDLFLFJNDLBHAB@DA@@B@BA@GDYHODM@E@YDUFMLADEJAVBL@F@DBJFJFLDHDLBVDJDBDDLDHBF@B@H@R@PBPDTBPBH@LBJDL@F@J@HBJBHDDD@BDHDJHNBF@HAHAH@LBJBNFJFJFFBDDDBHAH@B@HAHBDFBLHDBHFBDFHJJBD@DAHEHILCDEFGH@BCDCFABAB@D@D@NB@@H@DAJ@FADAFEHADCHAFBJDHDDFBJ@J@H@FBBBJF@BDFDH@DADMLKHEHKJKFMDC@MBIBSBEDEBOFIFOFKJADABAF@B@D@HHLRJZDHBFBNBFBFBD@HHHJBF@FGJEFEDQNIFIDEDEBMDGBaLcNIFEFCDGDABCDEJAH@TIRGTORGJABA@CBAB@B@DBDEFCHGFABGJCHEHEFEHCFCBAFAH@BCHCJMTKHMFEDGFC@ABA@A@C@G@GBCBIBGDC@CDKFIFCBEBABIFABGLADAF@LBJFJHHDFDF@FCHGNCFEDKDA@EDEFADAJAFAF@F@F@F@BBNBBJT@L@LCNEJAFCF@D@B@JBJPPRTDHBJAJ@BIRIPCN@DAN@F@TBTBNHPHJHHDBBBJBHBJARCL@JBB@HDFDBBBDBHBNAV@NFTBFDRAP@JBTHPNNNFTBPAR@JAbAZBRFPJFHHLFJLPBBJJLLLJJHLDN@PDH@XFHDHHDH@BBDANFVHNTVFTDJBJBJDJFJLHLFHBPAT@NCHAJGNGHCJ@JBJFJFJDLFHDFF@FAHENAJBJ@B@HBN@D@BAB@BCFAD@L@D@BFBDDDBBBBBB@DBBAJAD@B@D@B@F@HBD@FD@BDDDH@B@D@D@DDF@NAJCL@H@JBDDFHFFFBFBF@FADC@G@E@GBCBKDCDADADAFBDAFEJKLGHAH@H@HFFFHDJBFBHHRDHHDJFHDJHDFBFAFEJAFAH@NDJFHHFDD@BFBDDBBB@B@B@D@DDHFHLFHJGFEDE@EBEAA@A@A@A@CIECECIAIBCHGHALCDBB@B@B@LBJ@B@B@D@B@B@JAFCFG@ADCJKDEBADCHEBEBIFCF@F@B@FBF@FFBDFHFBJFHFNHJFNJTNRFHDPHLDNFLFJDPDRNHFFDNHLDPBNBRDXD`AJCFCBADGFEFKDKDQBKBMAEBOFKFGNCLCJCDEBG@K@KAEDKFKJOFKFKFIHGFCVAR@NDLDTBTBXHP@DEAIAGDIJCRGHADEFCDCHANA^BpAB@TALAJEFCAIDI@K@A@IDMBIHMNMNMJEPILGJIFERMDLBJ@N@J@BCB@LDJHJDBHBLAPOJILCLEL@NBNHHFHDNLNJRLRHJJVFPDTJRFRBFBTFPFPHLJFFJNFJFNFJFFTBRGLEJALMJKHMFKFGDIFMFKBEBMQIMGMCMECCEAIGIE@AAEAGLKJEJGNINI@ANIB@JKLGNI@AHELELK@ECCBEBEFC@IEESMACFMDC@CDGFCBC@ECCCEAG@A@CFCFAF@DCHIJEPAHEHEAEAIDGFIBEAEEGCKBEDIHEJAPGBC@C@A@AAQBCGEGCGCOAEAEBKFG@UGIAEAWACCBKBEAKAM@IBGBMDIJGJGDCJCJADEBG@CBCBEHCRKAECAGAECCGCEBCDEA@GACAC@A@CBE@@ABC@ACAGBE@C@CAAAECGBAECGCACAIBEAC@C@A@EHGBC@ECECKAC@EAI@MEAEFM@CCIACCAIIMKGEMKACCAECC@G@IAECA@GCMGMCCAGCGCKGIGECGGOCMAG@MAGAK@Q@I@QCGCIEOEGCAG@G@ECCAAGCSCEAC@AAA@@AAABA@A@EACCACAAA@AAA@A@A@AB@@ABA@AB@BA@AB@BAB@@AB@BA@AB@BAB@@A@AAA@AA@AA@AA@AA@AAAAA@AAAAAAA@A@AAC@A@A@A@A@ABA@A@ABA@ABA@A@ABABABA@ABA@ABAB@BAFABABABADADABC@ABC@C@C@E@CAEBCBABADA@C@CBC@G@EDE@EBADABCBABA@ADC@CBCBADEFCFCJADAFAFGDI@AEG@A@C@CDEBABCBCBEACCAACCAC@CAC@CACCECCACAEAEAEACA@AB@D@DCF@FAFADADA@ABABE@EAEBG@CBCBE@CBEDCDCB@B@B@B@BBDDBDDBDBFBHBD@H@JAFAFBFBDBDBFBD@H@FAD@BAD@BBDBDBBBB@D@B@FADCDCD@B@D@B@DBFDBBFDDBF@D@HAF@D@D@DBDDBBBDBDBFBBFBDBHBF@JDHAF@FCBADADBF@F@H@BADAF@B@HAH@BABA@AAC@A@CAA@C@CBC@CDCHGDAFCFEFAFADA@A@CACBE@ABADADABAFAD@F@D@D@F@DABABCFADADAHAFCDAFCDCDCBC@ABABA@C@E@CDC@ABADAF@DAD@F@D@DBF@B@DBD@DAF@F@H@L@D@F@F@HAHAD@D@B@FBBBDBDBDBDBDBD@D@FAD@DCFADABC@AAC@CAA@C@C@A@ADCDCDADA@C@ABCAC@EBABCBC@CDGDCDCFCDEBABCBCAE@CAE@ABABBFBJBLBD@D@DABCBCBABEDEBCBCBEDCDAF@D@F@DBDBFBHDJDFBFBF@H@H@F@F@FAFBBBDBB@BA@ABCBABABADCFEDABAFAJ@J@LBLDNDF@HDD@D@F@H@HCFAD@FBNDB@FGLMLMBAB@D@HDB@B@BABCBEJGB@DAD@FALAFAD@D@BAFCBGHCDANAB@BAACCABAFAB@AECIEE@GBIBE@E@A@C@G@CBCLCNGDCBCBABCBEB@BA@AD@DADCB@BADCBABGB@@ABGFADANAFCFEBCBI@ABGHS@AFGHCDAHAD@N@F@J@DBTBBBLBB@LBD@DABEBK@I@GKIIICCCCEAAAAEAE@A@CJ@F@D@@CDAH@L@F@@A@A@AAEACBCBEJAR@DCBC@MA@AAE@UAKEGA@CBCHCHEFCDAPAFAHABCAI@AFCBAHCB@FCBEACACAI@ACAA@AAGEI@G@SCAAC@WEUMIGMKGKAK@CAI@CBE@GEMEEIIGC@A@AAAACAACAA@A@BA@ACA@AAAGIACEGEAAACG@C@A@CACAA@ACAAAAAMCCAAAEC@A@ABA@CA@AACECCCACCECCAECA@ICCACCCCACAC@AA@@AECCCAAAA@EAACAA@ECA@CA@AAA@AAE@AECEE@EEEEAECCBIHODEDAB@FBL@FAFAHCDIBI@CBE@GFCFADA@@B@D@BBF@BABIDIDQAO@@ACCCE@AEGGECAGEEC@CCK@EBGAEA@AAKAGAAAAEAAGCGAEBABA@@FCFEF@DA@E@CE@CDEFG@ABAAAA@QAE@ABAFCBE@E@CACK@AC@A@AF@FADC@AAAECQ@AGA@A@AAACAA@U@C@@DABM@I@CAAA@C@C@A@EBAL@HADADCBA@MBEBCBABAAGAAQIAAAEAG@E@C@ABI@I@A@EBCDOBAAAEM@AAEA@GGACACAGCC@AEG@GAE@MAA@E@A@AAGAC@CACCOGKOEC@GEECECAAAAAACEAEECAA@C@E@CA@@EEAIQEGCGIEMCGEGC@KBGKCEAM@MFCDGFABA@IBCADGCAGEEAIEUGKEICKCE@CAC@EAQCEAIASIGCCAEAEGCIDKQBCJA@A@K@QCM@MAMAE@KKAC@EBGBCAGCECAC@A@CBIFA@C@EKACAAE@M@C@C@AAAAACEEACAA@G@E@EACAAIAKBIDADADBB@D@DCDIDA@KFMFIBMBCBIDIHKFCDIFCBCBCBG@EAACGCGBMHEJ@J@DDHCBIBUGOAKCGADELKJMBED@D@F@DCDAFGLIBCDCHCDABI@GAM@IBCDABAD@D@DAHEFAD@DDDDH@F@HCFCJCDCDAAA@AECKGEAI@EACCACIIKGIECAACKEEAKCE@YBOAKGEACACCCAAE@ECACAC@KCKAOACEEEACAA@CAIACKEC@IAQ@A@ABABABICA@C@A@AA@EA@@A@ABI@AA@G@A@@AACAGBMAKDSGCECIAOEAAMCGE@IEAGEKCEACAAAAEBCBCBAAEAAKDA@A@AACECC@AB@FADA@A@CAACAMAGAKAEBGFADA@GACC@EDK@G@AEAA@@C@AA@ABA@ABC@ABCFA@ECCACAI@E@EBCBA@A@AAA@AAOBI@ABBDBF@DDDBB@BCD@B@F@D@BABC@EAKAI@OBG@IAQSKMQ@CDMJHbORAXEPEZKLMLED@B@BCBAB@DAD@BDB@BAF@B@D@BDBBDADCBA@AB@BBDABA@C@CCCCICMAC@CDCBE@C@E@C@IBCBG@CAIEGACAA@AACCECA@IDCDE@E@AAACC@C@EDCBEBABAFCBGFIFCDABA@E@AB@B@D@BBB@D@D@BDB@B@HBJ@DDF@DBB@BDBFBFDBDA@AB@B@BBFADBF@BBD@B@BBB@BBDD@HBD@BB@B@B@BEHEBABC@@B@B@B@BADA@ABAFAB[AKAG@IAM@CBA@AAB@BEAAA@AAEBA@AEAAA@A@@A@A@AA@M@I@@A@GDC@AAAAAA@A@@AAAABA@@ABC@C@AAAA@C@A@A@EAA@G@AAA@A@@B@F@BBBDBD@DFBB@BABCFAD@L@DEFIDCBC@CACE@I@EFIFI@ACEAAA@IGKCOAGBQJMDMBA@MDKKGKG@QGOCMAEC@A@EAGAEIAG@QCGAMEOGQCKCICG@MAG@KBGDMFGBIAOBMHGHGHGTGVEFMFMBODABIBMDMBETAHAHCHKHMBKEG@IAKAO@QDM@ECIGIIEO@K@I@IBMMQ@EAEACECIEQBODQ@MG@CACC@EAG@[GA@CHA@AB@AEAE@ABEFAFABC@C@KEGC@CBE@EAAAACBCDCFAHCDCBOBEBGBC@O@C@EDCFCBC@I@IBQEGCE@C@@BCHCFCBEFCBC@EAABGDCBEAGEGCE@C@CFGJIHMDGBALBJBLDTDPDJJNDJBN@FAFCHEJ@BA@CHGNGJEFGBMFMDKJGJ@BAD@BAHBFFDFDH@TBLALAHCFCNKHELCJ@H@HBFDDFBHADEFEBG@SBKBGDCBABAB@DBHDDDDJDHBLBD@J@NALBJDNLDFHLDHDDFHLHDDFJJNFFHFJFFDRHPFFFHJDF@HAJAH@HBF@HDFHHHFBBLJJFPJFFTRPPDDHHRVFHDFJJLNJJDBLJHHFHDNFHFFLFDFDDBJBD"],"encodeOffsets":[[113310,38158]]}}],"UTF8Encoding":true});}));