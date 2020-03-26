(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('亳州轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"亳州"},"geometry":{"type":"Polygon","coordinates":["@@ABABCBCBA@ABC@A@@B@B@BA@ADABABCDABABCBABABCD@BA@@BABABABABABCDCDABA@AB@BABAD@BABCDABA@C@ABA@A@C@C@ABA@A@AAA@A@A@A@A@ABA@CD@BA@A@@BA@@BA@ABCBABA@A@@BA@ABABABABE@CDI@A@CBE@A@@B@BCB@BABABCDABABAD@BKDABC@A@E@ABABCB@BAFEBA@ABCBC@@BAACBA@C@CBA@AB@DABABC@A@ABABA@CBABGBA@ABKDKDABA@A@CAE@A@CAGAC@A@CBA@C@A@A@A@ECA@EAE@E@C@AAA@ABA@@BCBEJCDGLILEJEJADCDCFAB@DAB@DAF@FA@A@AB@BAB@BB@@BB@@BADADEVCN@FAB@DAB@DADAHCHCJAJENADADAF@BA@@BA@GHADA@@BABABADABEHADABABADADADABCJAB@B@BBD@D@JBFA@ABABADAF@HBD@D@BFBH@@BABABA@@B@B@BA@@BA@CBADCD@B@F@FBDFHBBBF@BADADCF@BAB@DADADCDABABCDCFADADCDCBCBCBEDCDADCJ@B@B@B@BABIJA@@B@BBDBB@D@DBBH@D@BBDB@B@DBBBBBBD@B@B@B@BAB@BADADABAD@BAF@DADAFAD@DADADADAB@FF@DDNBH@DBBBD@DAD@BAFBD@DBDBBBBCBABCBABABAB@BBBBBB@LBBB@BBH@D@F@HDBHDHDB@@B@D@FADADAB@BAB@FAD@FAFDB@DCDCDA@C@A@ABADA@CD@AA@AA@AAA@AA@A@A@A@A@A@A@AAAAA@CCAAA@ABA@A@A@A@A@A@ABA@A@A@A@A@CBA@@BA@@BCB@BABA@CDA@ABA@A@AAA@A@E@A@AAECAAA@@AA@A@E@A@@BA@@B@D@BA@ABC@AAC@CAA@A@A@@BAD@DBP@BBBB@B@HADABBDDBD@D@BABEBAB@BBDDDDBF@DBFABB@BBFA@EDCBED@BBABBABB@AB@D@FDJBDBBFBDB@B@D@D@D@DAD@B@DBBDDD@BBB@D@BB@DCH@B@B@HBL@D@DBB@BPDB@BB@D@FBBBBBB@BCBGBABAB@D@DBBBBD@BD@DDH@FDF@BR@HBB@BD@BABADAFABABAB@BBDB@@BB@@BHFJDDBD@B@BA@ABADAFDFBN@JAFBPF@B@BABAJ@FBBBBBDDBBDBDAJFBD@B@DEFAFADBFBHHHFDBD@B@B@JAF@FBB@D@FADA@EBAHBBBFBBBBB@DDBD@FDFBFBJHDBB@NGHCNELAD@D@H@DBDBJFBDB@B@BAD@@ABABABABADAB@B@BAB@BABA@ABADAL@JAH@BABA@ADEBADCDEDADCDCFAHGDAFCFCDA@AFABC@C@C@EAE@C@E@CBCDGDCFABBF@F@D@HABBF@D@HAD@@D@B@BAF@D@B@P@H@D@DBBDBFDD@B@D@FCFADABCBEBEBG@CDEDADAFAH@DBHBD@HCFAB@FAD@D@F@F@F@FAF@HBF@D@FAFCDADADCDCBAHEDADCDCBABADCDEFGFCBCDEDCBEBC@CAEAEAC@AAEAGAECA@EAAAGAEAECEAGCEAIAE@A@CDEBCDC@CB@D@D@B@B@BBD@F@F@DAHAD@BABCBA@A@A@E@E@EF@J@FAJADAHC@A@A@A@A@A@CDBDBD@B@B@BABABCB@@ADA@A@ABA@AB@BAD@B@BGD@D@@CAECE@A@AB@HCBAD@BABAAKAC@EAA@CACBABC@AA@@ACAEBABI@@HA@E@CC@CAE@AF@HAL@BID@@AB@@AAEACAAE@@AAEHCFAFABA@C@A@AB@JCD@BA@A@AACCC@C@A@AB@@ADADAB@D@DBFBH@B@J@H@B@B@DE@A@ACAAA@A@ABCBABEBC@CBADCDCBAB@BAD@DAD@DAB@D@B@BAHAFAB@DA@ABABABA@ABC@ABABABABADAAE@ABABE@EDGDEDE@A@ADCDEDCD@HAB@B@@BBAD@B@F@FBB@FBFDDDFDBDBBDBHD@BFBDBFBHBHAHBF@HBLDJBJ@F@B@F@HCH@N@HBF@DBBBDBDDBFBB@BDDFDDFDDHDHBHBHBHBHBDBDB@BB@@BDDDFBD@BBD@BBBB@DADABABAB@D@B@B@@AB@@BBD@DBD@BDBB@LDJBD@FB@AFAF@J@BABBB@DB@BJAFDH@BAD@B@DB@BBDB@B@BAB@BBL@BA@A@CB@JAB@B@BABEB@BABA@C@EAA@C@CD@H@F@DAL@B@D@B@B@B@D@BBD@D@@E@A@G@CAC@GAC@CAERADAB@D@BAJAB@DAB@B@B@BAB@BEB@@ABG@MB@FCD@DABADC@ABEHA@E@OF@D@BA@E@EDAF@@A@C@CBEB@BAAE@C@AEM@A@CAI@G@EBC@CBE@ADCDEFGBCB@BCFEDEDEFAHCJ@FAB@L@JAHAFADADABG@CAEBCAE@A@A@A@AHAHA@OI@E@C@A@@A@E@CBED@@GFAB@@ABA@EA@CAA@E@EACAIA@AACC@@A@C@AAA@CAA@CAC@A@A@A@ABABABA@EAAAA@E@ECA@CBAB@DCBADABAD@@C@C@A@AFEBCBAAI@EAACCCIAMFSRUFCFCF@F@F@J@H@HBHBHDFBBDFFF@HHF@B@B@^DDBRFJAP@LMNAJAJAN@lFZGFCBAHEDCBEDEDEDCBCFCDAD@D@J@HBFAH@HCFCDABADEFGDAHCJCFAHAJAFAJCHAD@DAB@FAB@DAF@JAH@EAE@AAC@CCEAACB@BCBA@AAC@AAE@CEA@CBABG@G@ABABC@ABA@A@AACAAAE@CACAEAAACACACCI@ABAFA@A@AAACKAAE@@AAE@A@CBADGBA@CCK@E@EBABC@A@ABABADCBABAFCFC@E@EBCBI@GBCBG@C@C@AAEBCBEBC@E@EBC@ABCBEDIDEBABCBEBCDEB@BCDCBCBCBGBEAGAE@C@EACAACEACCECCAEAAAC@AAG@C@CACBG@EAE@EAE@A@CACACACACCDCDEFEDGHABABEECACEEEGKACMFCCAACACEAAECCCACCCACACBC@CBABEBCDADEDEBGBC@E@C@ABAAC@EBC@GACAEAACCEEEEECCEAAAEAC@EBE@GBCDABE@CXIJEB@XIbMB@FAPIJKBQCW@CAACEA@A@EBA@ADCDA@A@AAA@BA@CBAAAC@A@C@A@A@ABA@C@CDC@A@AAA@A@A@C@A@@BABB@@B@BBB@B@BABA@C@AECAA@A@AB@BBB@DABA@C@AAAAAAA@EAE@AA@A@C@ABAAAACBE@C@AEEAAACCEACACAC@AAECG@A@AAG@A@A@ABGBA@A@A@CAE@A@AAA@ACG@AAAAE@AAA@CCBC@EBMDQFODQBYBSBQ@S@A@@B_@SBC@GBIBIBQDYFgJEBmJMDQDIBYFODOFIBQDKBWFA@QDMDA@EBWHIBSHQDCBCBKBUHIBCBC@@AACACCACE@A@ABE@CBCACAABC@AAE@C@GBA@AAACACC@AA@@CAEAC@A@CCEAEACAA@CBGRQDAJIBCFEDC@ABADEFEBA@A@AAG@E@C@CDG@A@CADABABABCBCBSBA@CBA@C@A@AAAACEEACCEEECAACGCCECGCGAKCIAICE@GCEAGAEAAAA@AAA@CAGAECEAEAG@EBA@A@GBEBCDC@EBEDA@ADCBEDIBGBCF@D@FAD@FEDCBEBE@CBIAE@E@E@E@G@G@EBEBGD@B@DAFADABAD@DADAD@BAB@B@BABIFABCDEBADCBABAD@BABA@BDA@@BADEF@B@BAB@BA@A@ABBB@BBBAB@B@DBB@B@B@BA@@BA@@BBB@BADA@BBBBB@@B@BB@BB@B@BA@@BABA@A@@B@BCBA@A@ABCBA@ABABA@@BA@A@A@AAE@G@EBA@E@G@GBG@GBIDIBG@KBGBEBEBCBG@EDE@C@EBEBG@C@C@EBG@ABC@CDAFFFJJ@LAH@D@DI@ED@DFTBHADCFAJCDMDGAUCE@GAIEE@EDBHFFBBH@@FADIDKBEBC@EBEDCBEDIBA@CBEFIDA@KBIDCBKDGBIBGBIBGBGBA@IBEBC@ABIBI@A@CDAB@BA@C@C@ABA@A@C@A@CBC@AAA@E@E@E@A@EBE@K@A@@L@DJBBJB@@FBD@BF@@J@HC@A@M@ABADC@C@K@G@M@A@A@AB@H@BABA@AB@B@BNBH@BJ@R@BAFEBGBE@SBKKAF@DAD@FAF@F@D@DBDBDDDDDDDHDFBBBD@FDBDBFBF@DADCDCFAFABADAFAD@F@BCFAFADAFAH@B@D@F@F@F@FDH@D@FBBDDFBBD@BBBFAB@FANCHCBADADCDABADAB@B@HADAB@D@BABAFAHEBADABCBADCBADCPMDADCHGBAFCBA@BBFBD@BB@FB@B@BB@BBBBB@@BAB@BABCDAB@BAD@DABAB@B@BA@MD@BA@@BAHBB@F@BC@AB@D@BBBBDFFBB@BAB@BABA@@B@D@BB@@B@BB@@BDBDDB@@F@JAB@BABABA@@B@DBBB@B@LDHBBBDAAB@BAF@BCBBB@BBD@B@BABCBC@CBBDBB@BAD@B@B@BBBAB@BABABABC@A@AB@DBBAB@BCB@BAH@DABABAB@BABCBABABABABAD@BABAB@B@B@B@BAD@B@B@BABBB@D@BBB@B@B@B@B@D@BA@@B@B@BCB@B@BBDBBBB@BBB@FAB@BBB@BAB@BADABABA@CB@B@B@D@B"],"encodeOffsets":[[118674,34211]]}}],"UTF8Encoding":true});}));