(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('丽江轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"丽江"},"geometry":{"type":"MultiPolygon","coordinates":[["@@EBE@GBGBC@GBKBE@C@CACAA@KACBABADAF@FHHDJJJ@BBDADEDC@A@A@@B@DHLAFADEJC@CACECGCM@ACCG@GDEBAB@B@D@B@BDF@FBJ@B@BB@DDBDBD@BABA@CAG@C@@BCBEBABC@A@A@A@AAAAA@AAC@A@A@ABA@C@GAC@A@EFA@ABCDCBCB@D@B@JBJ@LADC@EEC@SAE@C@GICAC@C@GBE@GAIEE@C@CB@B@B@B@D@B@DABABAB@BAB@DBB@DDD@BBDAD@FAJAD@DADBB@BBBBBBDFBBBAF@B@D@DAB@BA@AAA@EAECCAA@AACACACAC@C@C@ADCBCBCDC@A@AA@AACCAAAA@CAC@CAAAAA@CAC@CCACCAAAC@C@CCEAAACEKEGAAEGEKGKCEIKCEEK@ACCAACAC@CAA@@AAAAAA@AAC@C@AAA@@AAAAAAAE@I@C@ADABA@A@CAAACAAAC@AAA@AB@B@B@BBBBD@D@BABABC@CBC@E@E@C@C@A@@BADA@ADABCBAB@DBB@DAB@DAB@BADCDEDABAAOBGBCBEFA@A@A@C@A@AAACAG@CACAC@C@EAE@G@A@CBCBA@CBC@C@A@A@E@EBIA@@ACACAGBE@@AC@CAAACGC@E@A@ECCAEAC@G@IFIFKFOHeJKFEDEDABABEBC@EBA@C@EAAB@BA@@B@B@B@B@B@BABA@AFABABCBABCDCBEDGFCBCBAB@BOHUHM@CA@C@EF]@ECCIAI@O@WFI@A@A@UBKCIAG@IBA@ADABABCFCDEFEBE@E@ABAB@BABCBADEBEBEBEBC@C@C@G@E@AAC@AAA@ACCAA@AAC@EAG@KCEAIECAECCCA@A@CBA@A@AA@AACAAAA@AA@@AC@I@E@A@CAABC@EBIFCBA@@D@B@B@DABABEFCDCDAB@BAD@BBD@D@FAB@D@BAFCBQNEF@BKDOHKDE@IBI@CAGJGJEFCDEDADC@ABA@ABC@C@KDMFEBAFAD@FAD@F@FBH@D@B@BADEJEHEJCVERERAD@DADADEJEJAFAHAD@D@F@BBDBBDD@DBB@B@BA@A@@BA@@BBBBBDBDBBB@BAD@BAB@B@B@DBBB@ABABA@C@A@E@CAC@AACAC@C@C@EBCBEBABAB@BBB@BBBBBDABAB@DADAF@DADBB@BBBB@B@DADBD@BBBBBBDDD@BBD@BABA@C@CAA@A@A@A@@BABABA@@BA@@BA@@B@B@BAB@BA@@B@BA@@B@BABBB@D@BAB@BA@@B@BA@@BA@@B@BBB@B@BB@@BB@@BB@@BAD@JDHBHEFKFABA@CBABC@ABA@EAK@GAC@C@ABABABADCDABABAFABCDAD@D@B@BAB@DADCBABCBADCBABC@AB@BABAD@F@B@BA@@FAD@DAF@BABBD@D@F@DADADAD@D@B@BBB@BADABABA@ABA@A@ABADAB@DA@ABABA@AB@BADADAHAJAFAH@FADC@A@EBCBEBEDEBGFADCDEFCDCD@HAF@FAHBFADC@CBC@ADAFAFAJ@F@HDH@DBJDL@D@DAD@DEDEBCBAF@B@DBBDBF@B@DAH@FAFC@BBD@DAFADA@CBEDAB@D@D@F@F@LBD@D@HCFCDCBC@C@E@G@ABABAFBBBPCDEFEBED@D@HFLDD@BCDGBABA@@BA@A@A@A@@BA@A@@BA@A@A@A@@BA@@B@B@BA@A@@BA@@BA@A@AB@BAB@B@B@B@B@BA@@BA@ABBBJBHDDDFFFFDBDBF@FBF@HBDB@DAFADCDCJADCJCJAFAHAFCFCFCFAHAJ@F@DBD@D@DBFBFBBD@B@F@FBFBBFBDBFBFBDBBDDBD@D@BBDBDBB@D@DBBBBDFFFHFFFDD@B@BABABA@@D@BABABCBC@ABCDABAH@DBD@BA@A@A@C@CBCDCB@B@D@B@DAB@DAD@D@DBBBDBHBF@D@FAFAFABCFCDAD@DADABCBCBADADBB@DBBBFBFBDDFFDDBD@@B@BABABADAD@D@BBBBB@BADABABCFAF@FBD@DDBBDD@D@J@FBD@FDFDFBDDDBDADAF@DAHBH@NDHBJDBBD@D@F@FBFBDFFFBFHFFH@BAJAF@DBFDFDDBF@DABADAF@DBDDBDBF@HBFBHBDBDBBDFDDBDBF@FDHDDBB@BD@D@FADB@D@B@BAFCBABE@CBE@E@E@CACAA@CAC@ABABADCFEDCD@DABBB@B@BABC@E@EAE@EAEAECCACAAAG@E@E@ABEDCBADA@ABA@CAG@GBEBCFAFAFCFCDCDA@C@GDEBABAD@FBBDBBD@B@FADAB@DCBCBCAEACCCCAAA@CBC@AAACGCCAC@ADCHEJGFCFEBCDCBE@C@C@CAC@C@ADEBCHCJEBAFAHCJCFCDEBCBC@CDEDCHGDEDCBCBAAC@AECECMECCAC@ABC@AAGCG@G@EBGBAFEJENCB@BADCBA@AAC@GAG@A@A@ABCB@FADAB@HBBAFABCBCAA@A@ABAFAJGHCFAFADCDC@ABG@GBCDEJAHAF@D@D@BC@A@C@ABCBCFCJCDCFEDGFGBEBGDADCFCHCH@J@HAHAFAFG@CBG@CBABAB@RCHCHCBCBE@C@E@CBC@E@CBABCDEHEHCNCHADABABADGBEBABAFEFGDEDADAFCD@BA@A@E@EBE@CBAHQFMDKHGFCF@F@DBD@F@FCNGJGHEDE@EBEAE@G@C@EDEFCDCFEFCDCDAD@DABABCDCBEBCBCDEFE@A@ACE@CDA@ADCDADABAJIHEBABABABC@A@G@E@A@C@A@AB@FADCDCFEDEDCBCBC@A@A@A@ACAA@C@C@ICAAACA@BCB@BCBEBABC@A@A@ABA@A@CAA@CAA@A@ABCDC@C@E@C@CACCECCACACAE@ABADCFCDEDADCBA@CBC@C@C@CACACCC@CAA@CBCBABADEF@DAB@DBB@BBBDBBBB@BBBDBB@FBFBD@F@B@BB@DBDBBB@@BB@DBD@DBB@D@BBB@DDDDDBBBDBBBBBBBBBFBHBD@HDBDBBBB@B@D@BAB@D@BBDB@DDBD@FHLDFDBDBD@D@DADB@BBH@HAH@FAD@D@D@BAD@B@B@DBDBD@BBF@F@D@B@B@DDFBB@BBF@DBDBDBBBBFHBDBDBDDH@DBBBH@F@DAFCDCBCBABADAD@F@BBDDFFFFFDD@FAFCJAJ@HCJCBC@ABABABADAB@J@L@F@BADABAJEFCFAJBF@J@B@DBJ@LBLBJBHBLDJDFDDDBDBJDB@BDB@D@JDLBJDD@F@FDDBBBBB@FBB@BDB@BBBBBDBBBBDDD@BBD@DBBBDBDBDDDDDBBFDDDBDBFB@@BBBBDBDDDDDBBBDBB@DB@BBBBBB@D@DBBDDDBBDDBDDDBBBB@BBB@BBHBDBBBBDBDBHBBDFBD@BB@FBBB@B@B@BBBFFBBFDBBBB@BBFBDBDBDB@BBFDBBBBB@B@D@B@D@BBDBD@DBB@BAB@B@FBB@FBDBDBB@BB@B@B@DBBBBBDB@@D@H@D@B@DAB@BABCBA@ABA@@B@B@DBDBF@DAB@BAB@B@B@B@H@B@D@DAFCDAFAFABCDCDABABADADABABADCDEFAB@BEFAB@BABBBBBBDBDB@@BBDDF@DABADABCBAD@DAD@F@B@F@B@B@BABADAF@BA@CFABCDAFADAFADADCFABADCDCDCDADAB@BEFABAD@F@D@B@BBBDBDBB@BDBDBB@D@BBBBD@DBDBF@DBDBDBDDDFFDDBDDBDDFBB@BBBBBBDDDDDFBB@BBB@DBD@FBBBBBBDBDBB@DBDBFDBBF@BBDDDDBFDB@B@BAD@DAB@DAD@B@D@D@D@B@BAD@DAB@J@D@B@BBBD@B@HBB@B@D@B@D@D@BBDBDBBBDBBB@BADAD@FABADADADADAD@F@BBDBDBBDBD@D@D@B@DB@BBF@D@B@B@BBDBB@DB@D@H@B@BBDB@BAD@B@FBDBDBBFBDDDDBBBD@BCD@B@FAD@F@HADABEBEBEBCBABAB@B@DBFBD@BBBBD@D@BBBB@BBDBFBBBDB@B@B@FBDBF@FBD@D@DABBB@HBDB@B@HBDADCBC@CBCDCBCBAFCF@F@F@FADBD@@DD@DBDBDDDFDDBDBDAFBF@D@DDBDDBB@BAFBBBDDBF@FDF@DAFCJAFAB@BB@H@B@BBFBD@BBB@D@BAB@B@BA@@B@B@BB@BBBBB@B@BDDBBBDBB@FFBBBD@B@B@BBBDBDDDDDDDD@BBBBB@B@BBF@BBBB@@DBBBB@DBBBDCB@B@FADBB@D@B@B@BBBBDBD@B@BBBB@BBB@B@B@BDB@B@BBB@@DBBB@B@DBBB@B@BBB@B@DBB@B@B@B@BA@ABABBBBBJBD@HBHAHAHAHCJAF@F@JAHCDCFADEFEDAFCFCBDDFFDB@BBB@B@@A@AB@@C@A@CBE@ABCBA@C@CBIBA@A@AB@DABADABABAB@D@B@B@BBB@BDDBB@D@F@DABC@ABABABA@ABC@ABA@ABA@ABABAB@B@BBBBBBB@BBBBBB@BBB@B@BBB@BBBBBBBB@BBBBB@BBBBD@BBB@BBD@BB@BBBBB@BBBBBDBBBB@B@B@DBB@D@@BB@BB@BBBBB@DB@@BBBBBB@DBBBDBB@BBBBDBB@BBBBBB@BBB@B@B@D@B@DAD@BAB@B@BBD@DB@BBBB@BBBBDBBBBBBBB@BBBBD@B@B@BBB@BBBBB@BBB@BBBBBB@BBDBBBBDBB@B@B@B@B@B@BBBBBB@D@@AB@B@B@B@B@B@D@BAB@DA@ABAB@B@B@D@BBBB@BBB@BBBBBBBB@BBD@B@B@B@DBB@BAB@BBB@B@BBB@@BB@@BB@BBBA@A@A@A@A@A@A@AAA@A@AB@B@BAB@B@BAB@BAB@BABABA@A@A@A@AB@@A@A@A@A@ABA@A@ABABAB@@AB@@AB@BAB@BABAB@@A@AB@@C@A@A@CAA@AAAAAAA@AACAA@A@ABA@AB@@AB@@AB@BAB@B@BAB@BAB@BAB@BAB@B@BABAB@BAB@@A@A@A@A@A@ACA@AAA@AAA@AAAA@AA@AA@A@AAA@@AAAAA@A@A@A@C@A@CAA@A@A@AAA@A@A@A@A@A@AAA@A@AAE@A@AB@BA@A@AB@@A@A@A@A@A@AB@@A@A@A@AB@BA@AB@@AB@B@@AB@B@B@B@@AB@BA@A@ABAB@BAB@@BB@@A@AB@@A@A@AB@B@B@B@B@@A@AB@BABA@AB@B@BA@ABA@CB@BABABAB@DAB@D@D@BAB@B@BAB@BADABBB@BA@A@A@ABC@ABA@A@ABA@ABA@ABABAB@BAB@BADABABABABC@ABABA@ABA@A@C@ABA@A@A@A@A@C@A@C@CBE@A@C@C@C@A@ABC@A@A@ABA@C@A@A@ABE@A@C@A@ABA@A@ABC@ABABAB@BA@AB@BA@A@AB@B@BAB@B@BA@BB@B@B@B@B@B@B@B@B@B@B@B@B@BBB@B@B@B@B@B@B@D@B@BBDAB@B@B@B@B@D@BABBBAB@B@B@BAB@B@BABAB@BABADABABABABA@AB@@A@AAAA@@AA@A@@AAA@BA@@A@AA@@AA@A@@AA@@AA@AAA@@AA@AAA@@CA@@A@A@A@A@A@ABA@AB@BAB@@AB@BAB@B@B@@AB@B@B@B@@BB@B@B@B@@AB@@AB@BABA@AA@@AA@@AA@A@AAA@@AA@AAA@A@AAA@@A@AA@@A@A@A@A@AAA@AA@A@A@@AA@AAEIACAEAABAFARB@BDBDBBBBBBH@BHBHABC@CC_AGBGLCH@HCHMJMLOFIDG@AB@@IAEB@DADABA@ABA@ABCDC@ABABEDEBABA@ABABADABAB@@ABA@ABA@ABCBMAWEK@EGKEEAABEBABCBMCSAOAAB@B@B@BB@BBBD@BBBBDBBBABBBBBBB@BBB@BBB@BB@BBB@DBB@D@B@B@BAB@B@D@B@B@BAB@B@B@@A@ADA@AB@@ABCBA@AB@B@B@@AB@B@@ABA@A@ABADC@CBABABABABA@CBABC@A@A@AA@AA@AAAA@@AAAAA@A@A@A@C@ABABABABABABC@ABABABA@ABCB@@A@A@A@A@A@A@ABC@ABAB@@ADAB@BAD@@ABBBABAB@@ABA@ABA@C@ABA@ABA@ABABABA@A@ABABABABAB@BAB@BAB@BABA@ABA@ABCB@@A@ABA@A@A@C@A@A@A@A@A@A@ABABCBABABAFABAB@B@B@D@B@BBB@B@@AB@B@B@B@@AB@BA@A@A@AAAAA@A@A@A@AB@@AB@BA@ABAA@@A@AAAA@AAAA@AAAAAAA@AA@@AAA@AAA@AAA@A@AA@@A@ABAB@BABAB@BAB@@AB@BABAB@BA@AB@BABABAB@FGBEBO@ICECK@C@CBEDCFCHMLQBC@EBE@AEACAAA@ADOBABGBADCBCDADAB@B@BAB@B@BA@ABA@A@A@A@A@A@A@AA@@A@ABABAB@@AB@BAB@B@B@B@B@BAB@B@BAB@BAB@B@B@@AB@BBB@BAB@BBB@B@@BB@@BB@B@@B@BB@B@B@@BB@B@@BB@@AB@@BB@@BB@B@B@B@BBB@BBBBBB@BB@B@BAB@B@B@B@B@B@B@B@@BB@B@B@@BB@B@BBB@B@B@@AB@@AB@@AB@B@BAB@BAB@B@B@@BB@B@@AB@D@B@B@B@B@BAB@BA@AB@B@B@B@@A@AB@@AB@B@B@B@B@B@D@BBB@D@@AB@BBBAB@BBBBB@BA@AB@@AB@BA@A@A@A@A@AA@@AA@@AB@AA@A@A@AB@@A@AAAA@@A@A@A@AB@@ABA@AB@@AA@@AB@@A@AA@AA@A@A@A@A@AAA@A@AAA@AA@@A@AAA@AAA@AAAAAA@@AA@A@@AB@@A@A@AA@@AB@@AB@@A@AAAB@@A@AAAAA@AA@@A@AAAAA@A@A@A@A@A@A@AB@@A@AAAAAA@AAA@@AA@@C@A@AA@@C@AAA@CAAACAA@AA@@A@A@ANKHABA@A@C@C@IAAACAAAE@CAAAAC@AACA@ACC@GBCBA@C@CAAACDG@CAC@CAA@CACAAAA@AA@EE@CAQ@CBCPGPIREJANADABAD@DABADADADADABADADADABAFAFCF@D@DBD@DBFEFENEBADE@EACAGAO@EBC@CDADCDCD@H@H@L@H@H@DBDBF@B@DG@CAECEEECIAGAEAC@C@AFIDCBABABC@IBCDCDCD@FAB@D@D@FADADCFAFAH@JDDBF@DDBBBBD@D@BCBCFCDCDCBEDCDAD@LBD@DABADAD@FBBBD@F@FADAD@FAD@FABC@C@CBA@ADEDC@CDCBALEFABCBCBADEBCBCBCFCFCDA@ABC@CACACEGCCACCEAA@CAC@CCACEEGACAACA@ACAEAACB@BAB@BABAD@DC@A@C@CAABCAAACCCKEGGEACAECAAACBADCF@DBB@DABABCDEBADABABABC@A@CBA@AD@HDFDDA@ABC@A@CAC@A@CFIASACAABABADAF@JBHBDBH@D@DADAB@DBDD@B@H@FDDDBDDBBFBFBD@DCBADCBAD@JELCF@BB@FBV@FABAFAFCDAH@DADEDCFAFADBFBDFFFBHDDBBBH@B@B@DCHCH@HCJEFEJCDAFCF@D@DBBBB@HADABA@E@C@GAE@ACCA@C@GDEBCACCGOACBCFEHEBA@A@ACCOGMCGCICCAAACMACAAC@A@CAACC@EA@AA@AAAAAC@E@AAC@ABC@CFCBADABADADBD@BBB@B@@A@ABA@ABCBADABADCB@B@BABA@AAAAAAAAIACAAA@AAAA@C@C@GACCCCACCACCCAA@E@C@AFEBCBC@C@CAAAC@A@ABA@AAIAAB@AA@CACA@IECCCAA@C@E@CBGDG@C@GCEAA@A@G@GBC@[FE@AAAACKBAAC@CBKBABMDG@E@ECEGE@EB@BABABABABAD@BBB@B@B@AA@AAKCCA@A@CAA@@ABA@ADA@AB@BBDBPNFDB@@AB@@ABA@ACICE@AB@B@BBB@BA@CBEBADAB@D@FBLHDDD@BADE@AB@@ABA@A@AB@@A@AAAAA@AAAAA@AAAAC@A@C@CBCBADAFCBADCBADCBABABABADCBADCBABC@CBA@A@A@C@AAAAA@AAAAAA@AAAAAAAAACAA@C@A@A@A@A@CBA@CBABADCDABCBAB@BAB@B@D@B@D@B@F@BA@ABABA@A@A@C@C@E@A@A@CBA@C@A@AAAAAAAAACAAA@ACC@AA@AAA@AACAA@C@CAC@A@AAA@CCA@AAA@A@C@CAC@AA@AA@AAAA@A@C@A@CAC@A@A@C@A@AAA@AAA@AAAAAC@AAAAC@AAA@C@C@ABA@CBABCBCBABA@A@A@CBCAC@C@CBC@CBC@A@E@C@EAA@A@E@AAC@C@CAEAAAEAEAECECAAEEEAAACACAC@CAAAA@A@C@EBC@CBGAE@CAC@AAA@CAAACACAAAE@A@CAI@C@CAEAEACACAA@A@AAAAA@AAA@CAAAA@A@ABC@C@A@C@CBA@EBC@C@CBA@CAGAC@CACAEACACAC@CAA@A@A@GBA@EBC@CBA@CBABABCDA@ABC@A@A@EBE@A@C@AAAAAACAAAAAA@AAACACAACCAAAAAACAAAAAC@AAC@A@A@C@A@C@A@C@A@C@C@A@C@C@C@AAE@C@AAA@C@AAA@C@C@E@E@A@C@AAAACAAACAAACAAAA@AAAAAAAAAAAAC@AAAACAAAIECAA@CAEACAA@C@E@A@E@AAE@AAAAA@ACAAEAC@A@AAAAAAEC@AAAAAACACAAAAACAAAAA@AAAAAAACAA@CAAACACCAAAAAEEECGAECCAC@CACAECEAEACAAAA@CAAAAAECA@CACACCCA@ACAAAAAAAAAAACAAAAAC@AAAACCAAAAAAC@AA@AAAAACAACCACCCACAAAA@CCAACEAAEC@ACCA@AAAAAA@AAA@AAA@CAAACACACACACAA@AAAAC@A@C@AAAAA@AAAA@@AA@@ACAACAAAAAAAAAA@AAAAAAA@AAC@AAA@ACACAC@CAA@E@CBC@C@CBC@CAE@A@C@C@A@C@A@A@ABABAB@BABCDADADCDCBABABCBA@EDC@CBE@EBC@A@ABA@CBABABAB@B@B@B@B@B@BDFFF@B@BABA@CBC@@BCBAB@BA@C@C@C@A@CAABAAC@CAA@CAAACCAACACAECAAA@AACAA@A@A@A@C@EBC@CBA@E@CBC@AAA@AA@A@CBA@C@A@A@AAA@CAA@CAAAACAA@C@AAC@C@AACA@CCCCAAACCEACAIAAACAIAEAGBEAGAA@GA@EACCECAEACAKCC@CCAA@CBEE@C@A@CAACEAGBEA@C@CBE@C@CACECCCCCCACACAGACCGGAC@EDEDGBEDC@C@CACACCAAC@CBEBGBGBEBG@C@E@CBCBABCBE@CBCBEDC@CBA@E@A@CBCBCDEDC@ABEBC@C@AAAC@C@EBIBG@C@CBA@ABA@A@@A@EA@@ACEACA@ABABA@A@A@A@ABADABEDABEBAAC@IACAOCA@A@C@AAAAAAA@A@GGA@A@CAA@CBA@A@C@A@C@@AAA@AGAC@C@@AA@AB@BCF@BBB@BADAD@B@BA@AB@B@BBB@B@B@B@BBB@B@BADABA@@ACAA@A@C@A@EB@BA@ABBB@BAB@B@BC@CBC@EBQHIDCAIM@AAACEAACACAC@E@E@CBABC@A@@AA@AAABCBABC@@BA@AB@D@B@B@D@DAD@BABCDCDADAD@DAF@F@DBDBD@DBFAD@B@D@D@BBDABA@ABCBADCD@DAD@D@D@D@B@B@BBDBFDDBB@B@DADEJAD@B@DBBDBF@HAB@DDDF@B@BADADINGPABEDEBEBC@C@ECAAAACAEACACAC@E@CBG@IDGDCDEFABGDA@@B@B@DBB@DBB@D@DABADKRGNBNDHLJp^@D@DCBG@A@CDEDAB@BA@@D@B@BBBBBDBB@@D@D@DADABCBEDEDCDADCD@DCDAD@F@D@F@DABCHCHAFAHAF@F@D@FBHADADCFCDCDABC@A@CAA@A@A@AB@B@B@DBDDFBDBDDDDDDDFBFBD@DBBAB@BCBAB@BAB@BBB@BDB@DAB@BBBBBBAFABABA@@D@FBBFFDDDFBBBD@D@B@BDBDBDDBBBDDBDBBD@BCDA@C@ACCACCCAA@CBA@AB@BABAB@D@DBBBBBDFBFDBBFDBDBF@D@F@D@F@D@BDJDFBDBBBBD@FAFADAF@DAF@F@FBF@B@JAF@FAB@B@@BB@@BBPBFENABCBCBCBCBA@C@CBC@A@AB@BABBB@BABADABCBC@A@CAE@AAAAECACCAAACAC@CAABCBADAFAFABA@AH@BBBBFBDBDABAFADCBC@CBCDABADAFADBB@BBDBDAF@FABABABCBBB@BDFFDDDD@DBF@DADAD@FAD@BBBBB@D@HAF@H@D@BB@B@BAB@B@B@B@B@BABA@CDC@CBABABADABABABIDEBC@CBAB@BBFHLHJBD@BBJ@D@DADCBC@GBC@A@IA[CM@CBCBABABAB@D@B@DBBADCBABAD@BAD@B@D@F@D"],["@@@BB@@AA@"]],"encodeOffsets":[[[102815,27200]],[[103596,27852]]]}}],"UTF8Encoding":true});}));