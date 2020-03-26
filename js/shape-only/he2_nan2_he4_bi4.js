(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('鹤壁轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"鹤壁"},"geometry":{"type":"MultiPolygon","coordinates":[["@@@FABAB@BCBA@ABA@ABABA@A@AB@B@BA@C@ABA@CBCBCBCBA@E@AB@BB@B@ABA@C@C@A@A@@BA@AAA@ABA@A@AAABCA@B@B@B@BAA@B@BD@@B@BCDA@ABA@C@@BA@@BADAD@BBD@BAD@BB@@BA@@B@B@BBD@B@FAB@B@B@B@D@BBB@B@BBDBBB@B@BBB@BAB@BA@AAA@A@ABBB@B@B@B@B@B@B@B@@AB@BAB@B@@DBB@AB@@AA@@AB@DADA@A@AB@BAD@D@@ABABAB@@AB@B@B@B@@BBB@BABBB@BAB@BBBBBB@@BAD@BB@BBB@@A@AB@@A@AB@@BBBB@D@ABBBBBB@B@B@BAB@@B@BB@D@B@BBBB@B@B@BB@B@D@BAD@B@B@HBFBBB@FABC@@BA@@B@B@BA@A@@B@BBBAB@BBDB@BBB@DHBF@B@BBB@BADAB@BABBB@B@BD@@DB@@AB@B@B@BB@BB@B@B@@BB@@D@DB@AB@BB@@BB@@AB@@B@BDAD@@BB@@BB@BBB@@AB@B@BBFAD@B@ABBBB@BBBBD@@AB@@BBBABAA@BBBBB@B@BB@@BA@@BD@B@@BBDBDB@BAB@BD@A@A@AB@FBB@B@B@D@@BBB@BD@BBB@B@FAB@@BBB@BB@@ABA@ABA@AB@@A@AAAAA@AB@B@@AA@@AB@@AB@@A@A@AAAA@CB@A@ABA@AB@@AA@A@@C@ABEB@@AAA@ADG@A@AAAB@@AA@@AB@@A@A@A@AA@@DA@A@@AB@AAA@@A@C@AAAA@@AAA@A@ACAB@AABA@ABB@A@AB@@AAADCB@@A@AB@@AAABAB@@AB@B@@CB@@AB@@BB@BCD@B@@AB@BAD@B@@BB@@AB@@BBDB@B@B@@BBBA@BB@BB@@BABB@B@B@@BB@B@@BBCB@B@@AB@@BB@B@@BBBA@BBBBB@DBBBBBB@@BB@B@B@AAAEDA@ADBAEB@@AB@@AB@@AB@@BB@@AAG@AB@@ABB@BD@@ABA@BBA@AB@D@@AB@B@@AB@@AB@@BBCAAB@@ABA@BBBB@@ABBB@@A@AD@B@@AB@BBBBB@BBB@@AB@@ABBDABAB@B@@CB@F@F@@BABB@J@B@@BD@B@BBD@D@BB@DBCB@B@@ABC@AACAAA@A@BAC@@AAA@C@CB@D@B@@A@A@A@AC@@AB@@A@ABC@EA@@AA@A@@AB@@AB@D@D@B@BD@BBCB@BB@B@B@B@BBBB@@B@B@BB@B@BDBBBBB@BAB@B@B@B@D@BB@AB@@CD@@DB@B@@A@A@ABABCA@C@@A@AAEC@@AC@@EA@C@AA@EIAECF@B@@ABBBA@A@AB@@ABABB@ADABCA@A@@AAAA@@AA@BA@AA@AAA@A@@B@BA@A@CBAB@B@BA@@BABAB@A@C@AAEC@AAC@C@ABA@AAAA@C@AAAD@@C@C@A@AA@C@AA@AAAAC@AAK@E@AB@DCBCB@B@F@B@B@@BBABBB@D@@AB@@AB@D@@BB@B@@CC@@AB@CA@AA@AAC@A@@AA@C@@C@AA@A@@AAAAA@AC@@A@A@AB@AAA@@BA@A@AAB@@AA@CAA@ABA@@AABA@@ABCAAC@A@@A@AA@@BA@@BA@A@ABA@A@@BA@A@A@AAAAA@A@@AA@@AB@@A@ADA@AA@@A@AA@@C@AA@E@CBA@@A@AAAA@A@AA@A@AABAAECA@A@@AA@@CBAB@AA@AB@BAB@@BD@@A@A@G@A@AC@@EBA@A@AA@A@@BA@A@@ABA@AB@BABAB@B@@A@AC@@ABAAA@A@ABA@EAA@ABA@A@ABE@ABC@AB@B@DCB@@A@EAAB@BA@A@E@A@AB@@AAAB@D@B@B@B@B@B@B@@A@CB@B@@A@C@ABA@AB@F@B@@A@CBA@ABABABA@EI@A@A@AA@AA@BIB@D@@A@ADAA@@AHAB@D@BAD@B@DA@B@BDD@BB@BABCB@B@@B@B@D@B@BB@@BB@B@B@@A@AB@@BB@BB@B@BC@AB@DABBBA@A@A@ABE@C@CB@B@BB@@BB@BAB@@BBBB@B@BBBB@BB@B@B@D@B@@BBB@BB@B@B@BDB@@BAB@BB@BD@BB@N@B@@AB@B@B@@BF@B@FCFBB@@B@FB@D@B@B@H@@A@ABAF@B@@BBD@BB@DAB@@B@FBB@B@B@B@BB@@BBB@BBBB@@B@D@DB@BBBBB@D@D@F@B@BAA@@AB@F@B@@BB@J@D@D@F@B@B@B@B@D@B@BDB@DCDADAB@H@F@B@@BF@B@DAB@B@@BB@@B@BHBB@@B@BA@A@@B@B@BBAD@B@FB@B@DB@F@F@D@B@H@BA@AB@@AB@AAB@B@B@@AB@@AB@BBDA@BB@DA@ADADABB@DBBB@@BB@B@@B@JB@@ABA@AB@@B@DB@B@@AB@BAD@B@D@B@B@F@B@DBD@BBF@F@BDBFAD@BHBBBB@B@B@@BB@B@BAB@B@B@@B@BB@F@BBB@D@F@F@D@BADAB@F@B@BAB@B@HBB@BAB@BAB@BADABAF@BALCLAB@@EFBB@@IBBBDB@@BD@BBB@B@B@BB@BB@ABAB@BJHDBFBB@DBDAB@B@DBB@D@HBBBD@B@@ADAB@@AAA@AF@B@@A@ABA@AD@AC@CAA@AB@B@@A@AB@D@BACAAAJ@D@BAF@BAB@B@@A@CAAC@A@@A@A@AB@B@@E@AB@B@@A@CB@FBB@DA@A@AB@@A@A@AB@DABBBABABEB@BAF@D@BAB@F@BABABBB@AAD@BAB@B@@AB@BBB@B@B@@BB@D@BABA@AB@B@B@B@B@B@B@B@B@@A@ABABAB@@ABAB@@AB@B@B@@BB@DAB@D@DAB@B@@BBBF@DB@B@BBBBDBABBBADA@AB@@BDAF@D@B@B@@BB@FAD@B@@ABEBAB@B@BAF@@AB@@C@A@ABBD@B@BB@B@BB@FAD@@AB@B@@CDABA@AA@BAB@AAB@@AB@BEB@@ABAFCB@BADC@AB@B@@A@AD@@A@AB@BCB@@AA@@A@A@A@C@E@K@C@AAEAAAAAAAA@AA@@AD@AAAAA@AC@EAGAA@AB@@AECCCAAA@A@A@@A@AA@AB@CCGEG@AAA@AAA@AAACAA@A@A@A@A@AB@BA@A@@AE@A@A@A@A@@A@AAA@A@AA@@AEBC@C@C@CAC@C@@AA@A@AAAABA@AA@@AA@A@@AIIB@@AA@@AB@@A@AA@AGAAA@BA@A@ACC@AAAAA@CAA@A@A@A@AA@AAA@GCA@C@A@A@ABA@A@A@A@CBA@ABCBC@A@@BA@ABA@AA@A@ACB@AA@A@A@A@@AB@BAA@@AA@@AA@@BA@A@@AA@KBA@A@A@@CA@A@A@C@C@AAAAA@@AA@@A@AAC@AD@B@@AA@AAA@@G@CAAA@@AECA@ECA@QECAGEGGAAA@A@@BA@@B@D@FA@C@@A@AA@@AACA@A@EBE@C@ABAABD@B@BBDABA@A@@C@CBAAA@A@A@AA@@AA@A@A@A@A@@BABA@A@A@ABA@CB@AAAA@@AA@AC@A@AAA@AB@B@B@B@AA@AAACCCEA@A@A@A@@BE@A@@B@BBBCBCBA@@ABA@AA@A@AAA@@A@A@A@AB@@A@AA@GAA@@BBBA@ABEB@BGBA@ADAB@BA@@BA@CDA@BA@AACC@A@AAA@A@@B@B@B@BA@@BA@A@A@@AA@@AA@AEAAAA@C@AAA@A@A@AB@B@DADCBAB@@AAA@AB@AC@ABA@A@AB@@AA@@AABA@ABGHABA@AAAAA@A@@B@B@B@B@BAA@AAA@AAAA@AAA@@AAG@AAA@GB@BACAA@AACAEA@A@GA@AAC@CAA@CAEACACA@AAA@AAACBACA@A@@AE@@AAAAAC@A@@AA@@AA@C@AA@AA@A@A@A@@A@AAAABA@@AAEA@A@AA@AA@A@@AACA@A@AC@AA@ABAA@AA@C@A@FCA@A@@AAAA@@AA@C@C@A@AAAAAAABA@@AA@BAB@AC@ACCA@ACA@A@A@@AC@@AAA@A@AA@@AD@BAB@B@@ABC@ABCBAB@DB@CDAAA@A@C@ABAB@B@B@@A@ABABCBB@AB@BAB@D@DCBADA@AA@AA@AAEBA@C@AB@AAA@A@A@ACA@@AA@ABA@@A@AA@ABADA@@BAAAAABEBGB@BBB@BC@ABA@A@C@C@AAA@BA@AA@@AA@@BA@A@@C@AAA@AAA@EA@A@AEAAA@C@E@A@AAA@@BADA@G@AB@D@BA@A@@BAAA@A@AAC@A@AAC@@CA@@AC@GAA@@AAAAA@AAE@A@AB@@AAAAAQIECA@A@G@OBEDCDABA@@AA@A@@BA@@DAFCF@BA@CBA@A@C@C@A@A@G@C@A@EDA@GDC@ID@B@D@BBD@D@B@B@D@BBD@B@BB@@AD@B@B@@BB@@BABCD@BBD@BB@BBDAB@D@B@BB@B@BAB@BBBB@@BF@@BBD@B@BA@A@A@Q@A@G@A@GBA@@AB@CCAAAA@AA@C@C@A@A@BBAB@DG@A@AB@B@DA@ABA@@ABA@AA@A@@BAB@BABA@@B@D@BA@C@ABCBEBA@EBCBGDC@@BBB@B@BA@@BABA@A@A@A@@C@AA@A@CB@DAB@B@BA@@BG@ABA@A@@AA@@CACQFA@AAA@A@A@@EA@A@IBA@A@AAA@C@MDABAB@BABABA@A@A@A@AAA@A@A@A@C@A@CDAB@D@BABA@@BAB@BA@A@CBC@A@CBA@CBCBABA@GHCBA@ABCBABA@ABABA@A@KBABE@C@A@A@ABGBABEDA@AB@BA@C@A@@BABEBEDCBABABABABAB@BAB@B@BADABABAHABBDAF@BBBABA@KHCBABC@C@C@@B@B@D@BBBBDDB@B@D@B@D@B@B@BCB@B@B@D@D@D@DBBB@B@BBBBB@BB@B@DBD@B@BABEBABA@ABCBA@AB@BABA@@BBBDHBBBFBB@B@D@BABA@@B@DABAB@BAB@B@B@BCH@BABABA@C@EBCDABA@A@AAA@A@CBA@CBC@AB@BBFDF@B@BABA@ABGBE@CBE@ABA@CBC@C@A@@BE@A@CDCDABCB@BBB@B@F@FBBBB@BAB@BBD@D@BB@B@J@BDB@@BBBD@DAB@DBB@B@@AB@B@B@@BDDBBB@BB@BB@BB@BA@@BB@B@BBHD@BBBDBDBBBB@@BB@B@@BBBB@B@B@@BB@B@B@@BB@D@FBD@DBB@@BBB@B@B@BBBB@DBB@BBB@B@BD@B@B@BAB@BB@@BBBB@@BADADABABAB@B@B@BB@@BBBB@BBB@D@B@AB@BB@B@@BD@B@@AB@B@B@@B@BA@A@@BBB@B@BCB@DB@@BD@ABA@A@A@A@A@@BB@@B@BB@B@B@B@BBA@@BA@A@@BA@@DBB@BBBB@@BA@ABABAAA@A@A@E@A@C@@AA@A@C@CAICA@CBAAAAA@ABA@@AA@A@AA@AB@BA@AA@A@ABA@AAA@A@C@A@A@A@C@AAA@A@C@ABC@A@A@A@AB@B@BAB@BBD@BB@@DBBD@@B@BBD@BB@BB@BB@@BBBB@@BBB@BA@A@A@EDA@@BABBB@B@BB@BA@A@ABABBB@DAB@B@BB@BA@@BA@CBA@AB@BAB@BA@A@AB@D@B@BAB@BABABABC@A@@B@BBB@BA@ABB@@BB@ABAAA@@BC@ABCBA@@BBBABABAFABA@@BB@@BA@A@@BB@F@F@DAB@B@BBB@BBB@B@B@BA@A@AB@B@DBB@BAB@@BDBBBB@BA@AB@B@BAB@@BBBBBB@B@BAB@B@BBBD@BB@BBAB@BBB@BADB@@BABB@B@@A@A@AB@B@B@B@B@B@BBB@BBD@D@B@B@DBB@@BBDBBBB@BDB@B@B@BABBB@B@BB@B@BABB@BA@C@@B@B@B@B@B@BB@BBF@B@BB@B@BBBBB@B@BA@C@A@A@@B@B@BB@DBB@BB@BBB@BB@@BA@AB"],["@@AAA@BBB@"],["@@BAA@@B"],["@@A@@BBA"]],"encodeOffsets":[[[116822,36772]],[[116768,36835]],[[116918,36901]],[[116813,36642]]]}}],"UTF8Encoding":true});}));