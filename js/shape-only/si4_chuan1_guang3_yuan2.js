(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('广元轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"广元"},"geometry":{"type":"MultiPolygon","coordinates":[["@@C@CB@AA@CEC@A@AAEBC@ABCBABC@A@CA@ABCHIFEFEHGFGDGDM@CAECAA@E@CDADABE@EACACCACEIEECAAAAAAAEICAAA@C@IAA@EACAA@ACAAACAAACAI@C@CAAA@A@A@ABCBABAB@D@F@B@D@B@D@BABC@A@AAAEECAICGCCEAC@A@A@ADG@EBC@CAAAEAE@AB@@A@A@C@C@CBADIBABADCDABA@AACECEGAECC@AAA@ABCAEBEACCAA@GCC@C@@BAA@BA@AACACAEACAABCDCBAD@B@BBBBB@D@B@DAB@D@BABADADBB@BABABABABABA@ABCAAAAAC@EBCB@B@FADBB@BBDBD@B@BABABC@CBA@EBC@AAC@AACAA@A@A@ABC@ABC@A@@AA@@AA@@A@A@A@AA@@A@A@ABA@AAAAAAAA@@AAA@A@A@AA@AAAAAAA@AAA@@AA@A@A@A@A@A@A@ABA@A@A@@AAAA@AA@AA@AA@AA@@AA@@AA@AEAA@ABA@AAAA@A@A@@BA@@BA@@AA@@A@AAAAAABCBADADABAB@BC@C@AAEACAE@AAA@AADABC@C@C@ABAAABA@ABC@C@AA@@A@A@AAA@A@A@AAA@A@A@A@AA@AAA@AC@AA@@ABA@AAAA@A@AAA@A@ABAB@BA@A@@B@BA@A@A@@BAB@BA@A@@BA@A@C@CCCA@C@A@AAAAAC@C@ABCDCBC@C@C@C@EAAAAACACCAAAAC@A@ABABABAJABEBCBCBA@CBCDABCJAH@D@B@DADBD@BBBDBBDDD@BBH@H@BABA@ABA@C@C@A@A@C@AACAAACACACAA@AAC@A@EBC@AAEAECAAA@AAAAAA@ACA@BABA@A@@BBBBBAB@BA@EBA@GCA@CAC@@BA@@BAB@BAB@B@BALCFABAD@DDB@B@BABA@AAAAAAAA@A@A@KACCAAACA@CACAEDG@AAAAAC@CABC@AACAEACACACB@D@B@BABABBD@BBDBBB@A@AAACA@AD@BAA@@AAA@ABABAB@DC@ABAAC@ABCBC@ABCAAA@AAAAAAC@EACACACAAAAA@AAC@A@A@AEE@A@ADE@CAAA@A@C@A@A@A@A@@A@CBABC@A@AAACECAUOIGAAECEAMCAC@ADAHCFADABAD@BA@A@AAAAAA@CAA@C@C@A@C@C@A@E@EBEBG@A@C@C@AAACCEACC@C@C@CACACACAABA@C@AA]EA@C@ABAAEACE@EAAA@CAE@CAC@@AAABABCBEAA@AABCBABA@A@ABAAA@CA@CAAAAA@C@C@C@A@ABABABCJ@BA@ABA@ABC@CAICCCCAEAGCGAE@G@GBE@C@AAAEAC@CBABAFAFCDE@A@CAAACCCIICA@C@C@E@AAAEAI@KFEDGFCDCFCHAFCFEBC@A@CA@C@C@AC@A@AAAA@ABC@ADABA@CBADAB@DA@AAAC@A@CACACAAAC@A@C@ABAA@ABC@CAA@AAA@AAAA@CBABABA@AB@B@B@F@BA@ABA@CAA@A@A@AB@BB@BD@B@B@BC@CBC@A@AD@B@D@B@B@BA@A@E@A@A@@B@BHBBBBBABABC@CB@BA@@B@BB@BBB@DA@AB@B@B@BB@BBB@BA@ABA@ABCD@B@DBBBBDBDBB@@BAB@BA@A@C@AAAAAAA@AAC@ABA@ABAB@BABC@A@C@CACAA@A@C@@BA@@BABAB@B@D@B@BBB@BA@A@A@A@AAABCB@D@BAD@BA@@BCBABCBEDADADA@@BABAH@BADADA@GBA@I@C@CBBDDB@B@B@BADABEJGDAD@B@H@H@B@BA@ABCACCCAA@CAAAAAACCCCIAAA@C@C@CBCBCBABABA@CDA@A@CBA@A@A@C@C@AAACAC@C@E@A@ABCBABCDEBA@ABC@C@AACA@CACAAAAC@ABC@ABCBA@AACAAAA@CAA@ABABADA@ADA@A@A@CACACAA@AA@A@ABABC@E@AAA@@A@A@ABADABA@A@AAAAAAA@A@ACC@BA@ABA@A@E@A@ACA@E@A@@A@A@AAAA@ACAC@A@C@A@A@AAAACAA@A@AAA@AAAAAAA@A@A@C@CAA@A@CAA@A@AB@DADAF@BADADABEBC@CBC@C@A@C@A@A@CAAAAA@@B@D@BAD@BADABAB@BA@A@A@AA@AA@AA@BA@CFAB@D@F@B@BA@A@CAGAAAABA@A@AA@ABA@AAAAAC@A@C@A@CAA@A@C@@BA@AB@D@F@DABADABABCBA@AA@A@A@A@AAAAA@AAAC@EAC@CACCA@AAA@ACAA@ABCB@DAFCBABA@CAAAACBE@C@CAA@AAC@CAA@AA@C@A@C@AAAAA@ABABABABIAAAA@CACAA@C@CAA@A@AA@A@CBA@A@CCAAA@A@@DCBADAB@BBB@B@FADCLAB@B@D@BBB@B@DCBA@CBC@EAC@A@AAGACAACAA@C@E@CAA@AAAE@GBCBGBE@CACAGEAAE@CBA@@BA@ABCBC@A@ACA@C@CBCBAB@D@DAB@B@BA@@BA@A@C@AAA@A@@BAB@BCD@BA@A@CB@AA@@E@AA@C@ABA@@B@B@BA@AACE@AA@E@A@CBA@ABA@@A@ABADABABA@C@A@A@A@A@AAAA@CAA@@A@A@AA@@AA@A@ABABA@A@A@@AB@BC@ABA@A@ABAB@B@@A@AA@BCAAA@CBCBEBA@AAAAAAAAA@A@AAA@AABA@A@AAAA@C@A@A@@A@ADC@AAAACACC@CAE@AAA@CAA@@ACBA@CBABAB@B@BE@A@CB@DABC@A@C@E@ABABC@C@AB@B@BBB@BABA@C@G@C@CAAAC@ABABAD@BBBDD@FAD@FABABA@AAA@A@CDA@ABIDCBAB@BA@@EB@B@@AAAAACBA@@BBD@B@BAB@DAD@B@D@DBD@F@D@F@BADADAHADBDBDHP@FAFADCDA@GDA@EBC@C@C@E@EBA@A@CAACAGCAA@C@@BABABABADGBEDGBA@ABA@ABEDCBEBE@AB@D@D@DBDDBDDBFBD@HBD@DB@DBFBDB@B@B@B@DAFAD@DADBD@D@DABABCBABCBADADABC@EBABAD@DADABABCDGDCD@DBDBB@DADAD@DAD@BC@A@@AA@IEA@CAAACCCACCCAECCAAAAACAA@C@ABC@EBG@C@AAAACACAC@ABABADCBABE@A@A@@DABBBBBB@DBBDBBBB@D@BB@DBD@D@DAB@BBBBBDBBDBB@B@BBBB@BBBBBB@BB@BAD@DCD@D@B@BB@DBFBFBF@HBFBHBDABABAB@B@B@@BBD@B@BBD@FAF@DAF@BADAFAF@DCBA@C@CBEBEDCF@B@BBDBBBD@BCBC@ABABAHA@CBC@AAAAA@C@EACBA@ABAFA@A@CAEGAA@ABCACCK@A@AA@ABA@AB@D@DABCBKHKLAHBDDBDBF@BB@B@B@F@F@J@BADEJCDABADA@EDC@CBABCBA@E@GBEBA@ABAAA@CCEAE@C@CDAD@B@DBFBF@F@B@DBBBBBBBBBDBBBFBH@DAD@D@FBD@BDDB@DBDBBBBBADCBABADC@C@ABABA@C@ABABA@@J@BABABABA@@B@BB@@BA@A@A@A@A@A@ABABA@CAA@G@CA@CC@A@ADAD@D@BBDBDDDDHBDDDDDBB@D@DBBD@DBBD@B@B@HBBD@D@B@B@@B@B@BA@@B@BDBABA@CAABA@ABABA@A@A@ABCBCDAD@B@DAB@BABCBADABBD@B@BDDBB@F@BAB@BA@@B@B@BBB@BIJEFEFED@DB@@BA@A@@BB@B@BAB@B@BBB@@A@AD@B@B@B@BAB@B@B@B@@AB@@ABAB@@BBB@BA@A@@BB@@B@BA@@BB@B@BBBAB@B@B@@AB@@BBBBB@D@B@BAB@BA@A@@B@B@BB@B@B@B@B@B@@BD@D@@ABA@AAA@A@A@A@CD@BBB@BB@AB@B@@BB@@B@BB@@BA@BBA@@BB@BB@B@BB@@B@B@D@B@BABB@B@BA@A@A@A@ABCB@B@@A@ABABB@B@BB@@B@BD@B@B@FB@AB@@BB@@A@A@ABA@ABAB@@ABA@A@ABA@ABA@A@ABABA@ABAB@@CB@@ABA@A@A@A@ABA@A@AAABADABABBBBBBBBBBBDBB@BCDABABBBABBBDD@BBBADB@DBAD@BA@A@@BAB@F@BB@DDB@B@BAB@@B@BB@@B@BAJBF@D@D@BADCBC@A@EACAA@@BABAC@D@FBB@B@B@BAH@D@BGHBBDF@HDBD@B@BB@B@B@HAD@DAD@F@DAB@D@BBB@BDBHFBBJFHFHFBBNJLJDD@D@BC@ABA@CBC@GBCBCFABA@A@C@E@A@ABA@AB@B@BBBDBD@HBDBF@H@B@BBBBAB@D@BDDFD@BAB@BABCBC@EFA@@B@B@BDF@BEDKAC@A@A@A@ADEFCDCDABGF@BBDDBBBBBDBDBDDDFFDDFDDBDBF@BCFA@@C@AA@A@CBA@C@@BBBBB@BABCBA@A@A@ABA@ABCBA@A@EAAAAAA@AB@BCBC@AB@BB@D@@BBD@DCBA@FHDFBBDBBBFBDBFBB@B@BBBB@B@BAB@BA@ABED@BABCDA@BDFHFHDDDDBDDDBF@DDFBBBBABBB@BCBABDLBFCBA@A@CAGCCAEAAAA@CBA@ADABEDEDABCFADCDB@DDDDBBNLFBDB@DB@@DBBA@@B@B@BCFEJABCFABA@C@A@EAIAC@A@C@C@C@AAGAEAA@AAA@AACCAAAAAACCG@A@A@A@G@A@A@A@GAE@CAA@AAIACAA@@BGBE@@BC@CAA@CBCBA@A@A@A@ABEBA@C@AAAAA@A@EBA@ABC@GBKBC@G@ABAAA@A@EBC@A@A@AAAAA@E@A@ECGAA@C@GBCAA@AAAA@A@AAC@E@GAABABA@ACCAAAAACEAA@E@A@@B@D@BA@ABA@E@E@C@A@C@E@A@C@C@G@I@A@EAAAAAAAACCCAIBE@C@C@AAAAACAEAGAAAIAA@CAAAA@OKAAA@@AAAA@CAAAC@A@@DAJ@BFJBHBDB@@BAD@DCBAA@BABEDIH@BAD@B@BCBC@AB@BAD@BABABABCBA@E@C@ABCBCBAB@BAB@D@DAB@B@D@B@B@B@DBBBB@BBBBD@BBD@DDBB@BBF@BAB@FAB@BB@BB@@B@B@BABA@@DA@CBAB@BABA@A@AAA@A@KA@AC@I@A@A@C@CBC@CBC@E@E@C@CAA@AA@AA@AAAAC@A@C@C@CAC@A@CAC@EAA@ABABABADABA@ADCBABABADCBABADADCBABAD@BAB@BABCDABC@A@CBC@C@EBC@C@CBE@C@C@C@C@CAA@AAC@CAGACCEAA@ADCFCBC@CBCBABCDABABAB@B@DAB@B@BABABC@C@A@E@CACBC@ABCBABA@ABCBABABCBABCBA@CBAB@BABA@A@ADAB@B@B@BA@A@A@A@CDA@AB@BAB@BAB@B@B@D@B@B@D@BBB@B@B@DBB@BAD@BAB@BABCBABCBA@@BCBAB@B@BAD@B@BA@C@AA@BAD@B@BA@CA@BB@BBFB@BABC@@BBFDBBBBBA@AB@D@BABAB@BABAB@B@BABB@@BA@A@AB@BCBCD@BBBB@@BBB@B@BBB@B@D@B@B@BABB@BD@BCDABBDBBB@BBBBDHBBADABADADABA@A@EHBHBF@B@BDF@B@BBBAB@BAB@BBBBDBBABCBABABADABABCBA@CBC@CBC@ABCBCBCBCDCBEBCBABEBCBCDCBCBCBC@C@A@C@CBA@ABC@ABC@A@C@ABC@C@C@CBA@A@CAA@CAAAA@AAC@C@C@C@CBABC@ADA@@B@B@B@B@B@D@DAD@BAB@BAD@BADABABABA@ABADCBABADABABABADAB@BCBABC@CBC@C@C@CBCBCBABAD@B@B@BBBB@BBBB@BB@@B@B@B@BAB@BABABAD@B@D@B@D@BBB@B@DBB@BB@@DBBBB@BBBBBB@BBB@BBBB@B@B@B@B@BAB@B@B@D@BBB@D@BBBBBBB@BBD@BB@@DBB@BBABADABABABABAD@B@B@D@HBDBD@D@D@D@D@DAD@PDRFLHLDLCFEFGHGLOFIHCLGB@DCFEBADAJBFDFBHDFDHDJ@F@JCF@N@DBD@H@DAD@NHRFDBFDBDBBBH@DBBB@HBJAFCHCHEFAFABIDCBCHGBCBABCDADADAHCDCDCBCDEBCAI@E@EBCB@FEDCBCB@B@FDFAFBJ@L@D@B@D@FBBBHBFDH@F@FBBDBDDDBBDBFBFBD@HDHBFBDBNFDDJFFDF@D@D@D@FADBHFBBDBFBDAD@FBB@DAB@HBF@DBDBDBDDDBFH@BB@D@BBPCFAHCD@F@J@F@HADABADCBAHCL@DAB@DGBABC@ABCB@BAHK@CDCBABEBCBEBCBABAFCDADCBABCBADAD@HDB@D@HBNBBBB@B@BBH@FBF@BBBBBDB@BBD@D@FBB@DBBBJBFBDBB@D@BBBBBDBDBBDAHAB@BB@D@BBHBBFBHBP@D@@B@BABAB@BB@JBB@FBDBDD@FBLAXDH@BDHFBF@DADAJBJBDBD@DAHCRQFCDCB@DAFBHDHBFBD@FAHAF@D@FBDBFFBFHJDBDFD@N@H@D@BDBHFBNBF@D@NHBD@FDDHL@DDFFBFHHJFDDBB@DABCBARFJDF@D@DBDBBBDBDBDBTHDBHHFHDBF@D@D@F@H@DAHAD@DBBBBBBBHB@B@BAB@H@H@BBBDBDDAFAJ@B@BCB@B@BAB@BABC@A@AAAA@A@A@A@ACCA@A@ABAD@D@B@BBD@B@BABABC@A@EAC@EBC@ABE@@B@BBDBF@HA@ABA@AD@B@BAD@B@BAB@B@BA@AB@B@DADABA@@B@BAB@BA@@DAD@BABAB@BCDABABADABA@@B@B@BA@ABABAB@BA@GFA@ABABABABBBB@B@@ABB@AB@B@B@B@B@@B@BA@C@@BABA@@BBB@BBB@BA@CB@B@BA@A@A@A@@BBBB@B@@BA@A@@BB@D@B@B@@AB@@BBBA@AB@BB@@B@BA@A@A@A@ABABA@A@@B@BB@D@B@@BB@AB@BB@@B@B@BA@@BA@ABA@@B@BA@@BA@@BABA@A@A@@BAB@BA@@AAB@BABBB@BBAF@DBDDFDBBB@FAH@FBHD@BAHJfBRDFDFHDDDDDBBJBJBL@JAJ@LBJAFAFAHEHCD@D@HCHCFEDCD@DEDCD@AEA@ECAA@WAEAKHWDGFCNKNABABEBGBABCFADAB@@G@SBCDCJUAECGAGAGBCHUDCBAD@HDDBDDDAD@BBDBD@BABA@A@CAQAE@EBCBEBCFAFAF@BCBCBCAEA@CCEAGCCEAG@E@E@IBGFGJEFAF@NDD@D@FDDBB@BC@C@EBCBADEBG@EHSB@F@FBV@JBN@BBBBHJDBF@JADBDDDJDDHFD@HAJFHHD@B@L@D@B@BFDHDDDBDFBFD@F@HADBFDDHNNDBLFJAXIFJFHLJFBFCDCF@B@HFD@B@F@B@DADGHQDEDADDHDFBLFFBDBDDDHFHFFDBF@D@DABABAB@@DAFAHAH@HEHBDHLHF@D@BCDADAD@D@BBDBDBPBBH@D@B@DADCFCJABBBADABAD@DBBBDDBDBHB@FAFFB@BBH@FBDBBBBBDAHBD@DBBBB@FDB@B@HCBADCD@DAB@DBDAHAB@D@D@FADAFEBAD@B@B@LHF@B@HDLHBBFBBBBDFHBBDDDBBBF@B@DABAJGFCB@D@B@DCHG@AFE@A@AFCLBB@BBD@BBDAB@D@BB@DBD@HFFDBFBBB@DBD@H@FAF@BB@B@DARKB@BB@D@DBBFBD@AB@DAD@BB@B@B@B@@ABCBCBADCACCC@ADC@ABCB@BAFED@FKDCHCBCJEB@@A@ACA@A@AB@FBB@DALBD@DBB@DCD@D@@AAEAGBAFG@CACACAABABCBA@CAC@CCCA@CBC@A@A@ECCIAACAM@GAA@CA@A@CAAAE@GAE@ABAL@DBB@D@@A@E@CAG@AJGBADABABADEDBB@BAB@DCBCBA@CBABAF@HAHADCDCDQBABAFAHALDLBB@F@DABAN@DABC@A@ABEDEBCDCDBJBHDJBDADEBG@CAABCHAHCB@FBHBH@L@HCD@D@BB@DBBD@BAB@BCHCB@NAF@F@HDHBDEB@BAF@JBHBBA@ABCDCBADABA@EBGDEDCFCHAB@F@HDF@FBH@D@BBFFBBBBBBB@FALALCPEDAHBH@F@B@FANAB@BBBADABCBADAJEFCFCDCJKRIBCCK@CB@BADAB@BAAC@CDGLIDADCHAB@B@B@DDB@FAJAD@BAB@B@LFBDDDFDLJRPDBB@@B@DAH@DBD@F@D@DBF@BB@B@B@BADADEDCBAFADAL@HAF@H@BAFBF@F@JA@BB@@DBHBFBD@BB@D@DBDBHBB@BBBBBDB@B@B@F@DBNDD@NBLB^DD@BBF@D@BBHBB@BDB@B@B@ABBBB@DFB@@BBBDBB@DBFALEF@B@DBB@NEDAJ@D@F@F@B@DAB@BBBBLFFBBG@I@G@M@E@A@EBCBC@E@E@E@E@EDIFGBEDCFABCDABCDQ@EACCECECAAABKAIBA@CDEFQ@GBE@EACEG@C@A@EDCDA@A@AACACAA@C@A@C@I@CAM@ABA@AB@DC@A@A@A@CEEACGGAC@A@A@ABCDCBAHAHEFEVIBABCDC@AAECK@ABABCDAFCDCFGBEBC@AAACAAAAEACAG@EBG@CBAD@AE@CCC@A@ABCA@BC@AF@F@FBBABAB@AAA@BEB@@AAA@EAAC@AA@CB@D@@ACC@A@A@ABAAA@A@A@ABA@E@A@AAA@C@C@E@A@AAE@IBADCBA@CBA@CAAIICG@C@ADEBADAB@DBHBJBBBD@B@DAFCHCPIFGFG@ABABA@AACACD@@AAAB@BA@C@AFABBDBCDD@BBDDBBDADCB@DA@CB@DABABAAAB@BB@FBDB@DBB@@BB@D@B@AA@AAAA@@CCBAA@E@A@A@ABCFAB@B@DAD@BADCBABEBCAAAAK@I@ACCCA@EAA@AABE@AAAA@ABA@ABEDKDCBK@EBCDC@C@A@C@AAGBAECECC@ADCD@FC@C@IAKAAAAMCCBEBCAGAAAC@ABEDCAC@@BA@A@@B@BBABB@DABAFC@AAACAAA@A@EDA@AA@A@CAI@AAA@C@AACCECEACCAC@OCKAGAGBE@A@ICKAQCMAKAKAC@E@CCIAMAICGAGCEAACAGEc@IACBE@A@E@EAEEK@CBCBALIBCAE@CAC@C@EDMBKBEBO@C@CMEIGCCAC@I@ACAC@I@C@AAE@AAAE@AAA@C@C@A@ABABAFADCBADCDAB@BAH@BAF@BA@ABC@A@ACCECCAGAC@ABEBKFCBA@A@A@CCCEGIECEAAA@AAA@CAC@A@C@A@CFCDE@AAAC@C@O@GBA@A@@A@A@EBAAEAEBA@ABA@A@E@CBA@AD@B@DA@A@A@C@IAEAGAA@A@CC@CBC@EBCAAAAA@G@AA@AKCECCCCACBGCEAEAAIBEDCBCB","@@@ACA@AA@AAAAAA@EBABAFGBAD@BABBBBBB@B@BBF@B@B@BD@F@B@ABAB@B@B@B@BAB@BA@A@A@@BCB@BA@A@AAA@AABAAC"],["@@B@@ABA@A@A@CACA@CAAAAAAA@AEAAACA@B@B@B@B@FBBDBB@DBBDFDBD"],["@@@AA@@BB@"]],"encodeOffsets":[[[109025,32749],[108968,32696]],[[108634,33560]],[[107726,32776]]]}}],"UTF8Encoding":true});}));