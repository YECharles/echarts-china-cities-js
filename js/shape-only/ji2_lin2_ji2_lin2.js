(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('吉林轮廓', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"吉林"},"geometry":{"type":"MultiPolygon","coordinates":[["@@AF@BB@AB@B@DA@ADFBBBBH@BA@AAAAA@A@AAABAB@BBB@B@DB@@DBBBBBBBDBBB@BFCDBD@BABDDA@A@A@A@@BA@A@ABA@A@ABA@@BA@ABA@AB@BA@@BA@@BA@ABA@@BA@@BA@@BB@@BB@@BDBDA@ABBB@BBB@BBD@B@@B@B@BA@@B@B@BA@@B@B@B@BAB@BA@@BA@@BA@@BA@AB@B@D@B@B@B@B@B@B@B@BA@@B@BA@@B@BA@@BA@@B@B@B@BA@@BA@@BB@@B@B@B@BA@A@A@A@@BCBCDCDABBDBBEB@AA@ABA@CBA@ABA@AB@BABABC@@B@B@DBBBB@B@B@D@BB@B@@B@BA@BBBB@D@BABABAB@BB@BBBBADBBB@@BABBB@BA@@BB@BBFDDBBB@B@B@DBDDB@BBBBBB@B@B@B@B@B@BBBB@BB@@B@B@BBDB@@BD@B@F@B@B@BBB@B@@B@BB@@BBBBB@B@D@B@B@BB@D@BBB@@BDBB@BB@B@BB@BAD@BAB@DBB@B@D@B@AD@D@B@B@BBD@B@B@B@BBB@BBBDBDBBBD@BBB@BBBB@BBB@B@B@B@BBDBBDDDBDBB@B@BBB@@B@B@BBB@BBBBB@B@BA@@BBDBB@BB@BBD@DBBBDBBBDBB@@B@DBB@BB@B@D@B@BABABABAB@D@B@B@B@@A@ABAD@BABA@A@ABAB@B@BABABBB@B@@B@BBBBBBB@BB@BAB@@BB@@BAB@BAB@BABA@A@A@@BAD@BA@@BBB@BB@B@B@B@B@FBBBF@BBB@BBBBB@B@B@B@D@B@DBB@BBB@B@@BABAB@BA@@BA@ABA@@BB@@B@BA@BB@B@BB@B@B@BBD@BB@BABAB@B@BBBD@FBB@D@B@B@BBB@@B@BB@@BBB@AB@B@@AB@BBB@B@BABAB@BAF@BAB@D@B@B@B@BBB@D@B@BABABAB@@AB@B@B@B@BB@BBB@BB@DBBBB@@BBD@B@BBBB@@B@B@BBBBBB@BBBBB@@BB@B@B@DAB@F@B@B@@B@BABBBB@D@F@B@B@@CB@BBBBBBB@B@B@B@D@D@D@B@B@B@B@B@@AB@B@DBB@B@B@BBB@BBB@BABABE@A@A@A@A@A@A@AAAA@@A@ABABA@A@A@A@AB@B@@ABA@BBD@DBBBD@FB@BBBB@BBDBBBB@BB@B@DAD@@AF@B@BBBB@BC@@BA@@BADBBBB@B@BAD@D@BBBB@B@D@DADAD@@AB@B@B@B@D@B@B@B@B@D@DAB@BAB@B@B@@AB@B@B@B@B@B@B@DCBABABABCBAB@BAB@BAD@B@FCBA@BB@B@B@B@B@B@B@B@@BB@B@B@D@FBB@BAD@DABAD@B@B@DBBBBB@BB@B@B@B@B@B@B@BBB@BB@BBBB@B@B@B@B@B@@AB@D@B@BBB@@A@ABAAC@AB@DBB@D@B@BAB@@BB@@B@BBBB@@ABCBA@A@ABAB@BDB@@AAA@AB@BBB@B@BCB@B@B@BBB@B@B@B@@BA@BBB@DBBAB@B@B@B@B@B@B@B@B@B@BBB@D@D@DBB@BCDBJDDDDBDFDD@F@B@BADCDAB@D@D@DBDB@BDBDFFFFDBBBDBDBF@F@DBHBDBB@BBDBDFBDBF@B@DADEDCDCBCBIBI@M@GBEBCDABCBEJ@F@FBFFFHHDJBH@D@JBDBDDDFDLFJBDDBD@BAFCDCBIDGBIBABEFADAB@FBJ@H@F@FBFADELEFCBCBEDCDABAB@BAFBDDDDBFBF@NBFBDBFDDBF@DDBBDBDDBBBBBD@BADADCDCBE@CBC@AD@B@BDJBD@HBDBD@H@F@DCDEFOFI@EAEAE@OAGAIAEAA@G@EBEBEDAD@BBBBBBDDBLFDDB@FDBDBFAB@DAFGJEDEDEHABGDAD@F@D@B@B@B@BDDBD@B@BAD@D@D@D@BDDD@BBF@D@D@D@DBD@BBBDDD@H@BABABEDCBKDIDCBGBEDCDCFAHAF@DD@DBFDBBBBDBB@BAB@B@D@B@B@@AH@B@B@BBB@BBB@B@CBAB@DAB@DBBBB@BBDD@BBDDFHFFB@B@B@@AAE@A@AB@@AB@B@B@B@B@BAB@@AB@BAB@B@B@FBB@B@B@B@D@B@B@B@LAD@FADAB@FBFAF@B@FAB@B@BAFGB@B@BBDBDBB@B@@BB@BBB@BABA@AB@@B@BB@FBB@EBBBBBD@@B@B@BHADAB@DBBABABA@AB@@BD@@B@BBBA@@B@BBB@B@BAB@BBBB@B@@BBAAA@AB@D@D@B@B@@B@BB@D@B@@B@D@DABEBA@A@BBDDDB@BD@DAB@B@AAB@B@B@B@B@B@B@BBD@D@B@DBB@B@@D@BBAB@BBD@DABAB@B@B@ABD@B@B@@AB@@ABA@ABBB@@AB@B@B@@BB@B@B@B@BABAACFA@AD@@BB@D@B@@A@ADADAB@B@B@@BBBA@CFA@ABA@EDA@A@@BAFAB@DA@@B@BA@TBF@B@BAB@B@B@B@@BB@@ABA@ABA@AB@BBB@@ABAD@@AA@AAA@AAA@BA@AA@@A@A@CDADBBABBB@B@@EB@H@D@BA@AGA@A@A@A@ABABAACB@@CB@BAB@B@FBB@B@B@B@B@@ABABBBBB@B@BABAD@B@D@B@B@@AB@@DBBB@D@CEB@DBF@B@AA@AB@BB@B@BD@B@B@AC@C@AB@B@BBBAD@B@B@B@@ABB@C@AF@@B@B@BB@BBBCB@@AAAB@BA@BB@BABAB@DCB@B@BABABB@BB@@AB@FA@CBABDBD@BB@@ABDA@EBAAA@AAA@A@BBA@ABABA@ABB@@BB@B@B@@AB@B@B@BAB@B@@BBAB@B@D@NABADCACAAD@@AA@AABACACCAA@ABA@AB@B@B@B@B@@AB@B@@BDBDDDAB@B@@ABB@BB@BAD@B@BAD@@AH@B@B@B@B@B@@B@FBA@DDA@DB@@ADAB@@BBBBBB@DAD@BBB@F@BAB@B@B@D@B@B@BBB@BABAB@FD@EB@B@B@B@ABB@@BA@@BD@B@BBB@FBDBFDBB@AB@D@DBD@D@B@DBFBB@DBDBH@B@D@D@BAFBD@F@B@BBB@B@B@D@D@@AB@BAB@B@@A@E@A@CBEBABA@ADAD@FADCBADABCBABAD@B@B@DB@BN@RBFBBH@DAD@BB@FAF@BBDDDHDBHBH@NCNCJCBCD@F@DBFDDDH@L@\\@PAJAH@BBDDBBDHNZDHDBHBNDJFJ@HBHBTF@FF@B@@BDBDBDBBBBBB@@BBBBDBBBBB@BBBBBBDBBBDDBBBBBBDBB@BBBBBBD@B@BBB@@B@B@B@B@B@B@B@BBBABAD@BBB@BB@@BBBBB@BBB@B@BB@@BB@B@B@B@D@B@B@B@B@B@B@B@B@BBB@B@BAB@B@B@B@B@B@BA@AB@BAB@BAB@BAB@BAB@B@BAB@B@B@BAB@@BB@B@@AB@B@B@B@B@BDA@A@A@@BDBD@B@@BB@ABA@@BB@DBD@B@BBBAB@BBC@@BB@FBBF@ABBDDB@B@@B@B@D@B@BBBB@B@BAB@B@B@HHBD@B@B@BC@ABC@AB@B@BDBB@B@D@HEB@HFBBHBBAD@B@DBB@B@B@D@D@B@B@B@@BB@BBDBB@B@B@B@B@B@B@BABABAB@@AB@BAB@@AB@BBB@D@BBB@@AD@B@@AB@BA@AAAA@AAAA@AA@AAA@A@A@A@A@A@@A@A@A@AA@A@A@@AA@@A@A@AAA@A@AB@BAB@BAB@D@BAB@B@BBB@B@B@B@@BB@B@@ABADABADAB@B@DBB@B@B@B@B@@ABAB@B@B@@AB@B@@BB@@AB@BAB@BAB@DAB@DAB@@BBBB@@BB@@B@BB@BD@BBBBD@BBB@BBBAB@B@BBB@B@B@B@BBBBBB@@B@B@BB@DBD@D@FAB@F@D@D@B@B@B@D@D@DAB@B@F@B@B@B@B@B@B@B@BAB@D@B@B@B@BA@ABAB@D@B@B@B@B@B@B@B@B@B@D@H@B@D@DAJ@D@F@D@F@D@FAF@D@D@H@B@H@DAF@F@D@B@D@B@B@@BB@B@@BB@B@B@D@B@BAB@BCBA@AA@AABAB@BABA@AB@BAB@BAB@B@B@D@BABAB@D@D@D@BAD@BAB@DAB@BA@AA@BABAD@B@D@D@B@B@BBBBB@D@BAB@B@B@B@FCBAB@@A@AB@B@B@BABAF@B@D@B@B@DBB@B@BC@AB@BAB@BA@C@AB@D@D@B@BBBBBAB@B@DABAB@B@B@B@AA@ABAF@DADAB@BADC@AA@@A@A@ABCDCDABAB@DAB@B@DADBB@BABAD@B@@BB@@BB@BBB@B@BA@A@ADAB@@AB@BAB@F@BBB@B@B@@AB@@B@BD@@A@ABAB@DAB@BBB@B@@ABCDGBABC@ABADAD@@A@A@AB@@A@AA@@A@AB@@AB@@ABA@A@CA@A@@AA@A@AAA@@AA@@AA@@AA@A@A@A@@AA@@AAAA@A@@AA@AAA@AAA@@AA@A@A@@AB@@A@A@A@A@AA@A@@AA@@AAA@A@AA@BA@AA@A@A@A@A@@AA@@A@AA@@AA@A@A@A@A@A@A@CBA@A@A@A@A@A@A@C@C@A@A@A@AB@BA@ABABAB@B@B@BA@@AA@AAA@AAA@A@A@ABA@@AA@A@A@AAA@A@A@ABA@@BA@A@A@A@A@A@AAA@@AAAA@A@A@@AA@@AAA@AB@@A@AA@@AA@@AA@AAA@A@A@A@A@A@A@A@@AA@BA@A@A@AB@@A@A@AB@@A@A@ABAB@B@@AB@@ABABA@ABA@A@AAAAAAAAAAAAAAA@ACA@AA@AA@A@AA@@A@ABA@A@AB@@AB@@AB@B@B@B@@AA@@A@AB@AA@A@AB@BCB@@A@ABABABABA@AB@B@B@B@@AAA@A@A@A@AB@BAB@B@D@B@@AB@BAD@B@BAB@B@BAB@BAD@BAB@@AB@@ABCBA@ABABABABA@A@AB@@A@AAAA@@AA@@AAAAA@AA@@A@A@A@CBA@AAAAAAAAAA@@AA@AAAAA@@A@AA@@AA@A@A@@AA@AA@AA@@AAAA@@A@AAA@C@A@AAA@ABA@AB@BAB@B@D@D@@AB@B@B@B@B@BAB@B@BAB@BABAB@B@B@@A@AB@@A@AB@B@B@@ABABADABABADCB@@AB@@A@A@ABA@AB@@A@A@AB@AA@AA@@A@ABA@A@AAA@C@A@AB@DBB@B@DBBAB@BAB@BAB@@A@ABA@A@ABABCB@BABABAB@B@B@B@AABA@AB@B@BABAB@BABAB@B@BABAB@@A@ABA@ABABABAB@BA@AB@@ABAB@B@B@B@B@BAB@@A@ABA@A@AAA@ABAB@BAB@@A@ABA@A@ABAB@B@@A@A@A@AB@BAB@@AB@@AB@BAB@@BB@BAB@B@B@BABA@ABAA@@ABABAB@BAB@BAB@B@B@BAB@BAB@B@B@BAB@@A@AB@B@@AB@@A@A@ABABABAB@B@BABABAB@BAA@@ABA@ABAAAAA@AA@AAA@@AA@AAA@@AA@@AB@@ABABA@AB@@A@CB@B@@A@AB@@ABABA@A@A@AAAA@A@A@ABA@A@A@A@AA@A@AA@@ACAA@@AA@@AA@CCAAA@@ABAAA@A@AAA@AA@@AA@A@AAAA@AA@@AAAACAAA@@AA@A@@ABAB@BABAB@B@BA@AB@@AB@@A@A@ABA@ABA@AB@@ADABA@AA@@AB@@ABABA@AB@B@@ABA@ABABA@AD@BABAB@B@@AB@@AB@@ABA@ABA@ADABCBAB@D@@AB@B@B@B@B@@AB@BBB@B@@BB@@BBD@BBB@BB@@ABAB@BABA@AB@DAB@BAB@BAB@@AB@@AB@BABABAB@@ABAB@B@BAB@B@B@BA@AB@@A@A@A@ABAB@BAB@BAB@@AB@B@BAB@B@DABBB@@BB@@BB@BBBBD@BBB@BBB@B@B@BBBBB@B@@BB@@B@BB@@BB@@BB@@BBB@B@BABB@@B@B@B@BB@B@@B@B@BB@@BB@@BB@BB@BBBBBBBBBB@@BB@B@B@BBB@@BB@@A@ABA@AB@BABA@A@ABA@A@AAA@A@A@A@A@A@A@AA@@A@A@A@AAA@A@A@A@A@A@A@A@A@A@AAA@CBA@AA@@AAABC@A@A@A@A@ABA@A@ABAB@@AB@@A@AB@BAB@BA@AAA@AAA@ABA@ADAB@@ABA@A@A@AAAB@@AB@B@@ABA@AA@@A@AAA@A@ABA@CBA@ABAAA@ABA@A@AA@AA@A@ABAAA@A@AAA@A@AAAAA@AA@@AA@@AB@BAB@@AB@B@B@BAB@@A@AA@BAB@BADABAB@B@B@B@BABADAD@B@BAB@BABA@AB@B@B@B@B@B@B@B@@AB@D@@AB@@AB@@AB@B@@AB@BAB@BAB@BAB@B@@AB@BABAB@@AB@B@B@FBDBB@DBB@BBDBB@@BBBB@BBFB@BB@@B@BB@BBB@@B@BB@B@B@B@@ABAB@B@@AB@BAB@B@B@BAB@@AB@@BB@BBB@BAB@B@B@B@B@B@B@B@B@B@BBB@B@@BB@B@B@@AB@B@B@B@@A@A@A@A@ABA@ABA@AB@B@BAB@B@@ABA@AB@@AB@BABA@AB@BABAB@@AB@B@BAB@@A@ABABABABABAAAA@A@AAA@AAA@AAAAAAA@CAA@ABA@A@A@@AA@@A@A@A@AAA@AAAA@A@CAA@CAA@A@AAC@@AA@A@A@BA@AAC@A@AAAA@AAA@A@@AA@@AA@@AAA@ACACAAAAAAAA@A@CAC@A@CAA@A@A@A@AA@AAAAAA@@AA@@A@AAAAA@AA@AAA@AACAA@AAA@A@AAA@AA@A@AA@@AA@AAAAAA@A@AB@@ABA@A@A@A@AAA@A@AAAAA@A@A@A@A@ABAF@BAD@BABABAB@@AA@ABA@A@A@A@A@A@A@@AC@A@AAA@@AAA@AB@@A@AB@@A@ABABCB@@AB@BA@AB@@A@A@AAAA@A@AAA@@AA@@A@AAAAA@AAA@ABC@A@CA@@A@AAAAA@AA@A@A@CBE@C@C@AABAD@DABAB@@AB@B@BAB@B@B@@AB@B@B@B@BABA@AB@@ABAB@B@@AB@BABABAB@BAB@B@BAB@@AA@@A@ABAB@B@@AB@BAB@B@BAB@B@BAB@BAB@B@B@B@B@@AB@BABAB@B@BAB@@AB@BAB@B@B@BAB@B@BAB@B@BAB@B@B@@AB@B@BABA@ABA@AB@B@B@D@B@B@BAB@D@B@B@BA@A@ABAAA@AA@@A@A@AB@BAB@B@B@B@B@BABAB@@A@A@AA@@A@AAA@A@A@A@AAA@AB@B@DAB@@A@ACAAA@AC@@AA@@AAA@AAA@C@AAA@BABABABCBCBABC@CBC@A@ABA@@AA@@A@A@AAAA@A@C@CBAAA@A@@AA@CCCAAAA@AA@ACAAA@AAEAA@A@A@A@CA@@AAAA@BA@A@AB@BAB@BAB@@AA@AAAAAAA@AACAAAAAB@@AB@BAB@B@B@BAB@@A@A@AB@@AB@B@@A@A@A@AA@AA@A@AAAAAAAD@DAD@B@D@DAD@B@BABABAB@@ABA@AB@B@BAB@@A@AB@DBB@D@B@B@@ABACA@AA@@AAA@A@ABABABABAA@@AAAA@AAA@@A@A@A@C@A@A@A@ABA@ABCBCBA@A@AB@BAD@B@BABAB@@A@AAA@A@ABABABABABADC@ABA@ABA@AAA@AAA@AB@@AB@DAD@BABA@AD@BAFCDABABAB@BAB@B@F@FABBBAB@DADA@AB@BAB@B@BBBBB@BAB@B@@AB@BAB@BBBBBB@BB@B@B@BAB@BAB@B@B@BA@AB@BA@A@AA@@AA@@ABAB@B@B@@A@AA@@AAAA@@A@A@AB@@ADABABA@A@A@AB@@AB@@A@AA@AAA@C@ABCAA@A@A@AAAAA@A@AAD@@A@A@A@AB@BA@AB@@A@AAAAAAAA@A@C@A@A@@AA@@AA@@AB@B@BA@AB@@AB@@AB@BAA@AAAA@A@A@AB@@AA@AA@ABABA@A@A@AA@A@@A@AB@D@B@@AB@@ABAB@B@@A@A@ABA@AB@AA@AB@@ABA@AA@@AA@AAAA@ABAA@AAA@AAA@@AA@AA@AA@A@A@A@A@A@@AA@@AA@@A@A@AA@@A@A@AA@@AB@@AB@AAA@@A@A@A@A@AB@BB@A@AAA@A@AB@AAA@@AAAA@A@AAA@A@@BA@@AA@@AA@@AA@AAA@A@A@C@A@ABA@A@@BA@A@A@@BA@A@CBA@A@A@A@A@A@A@@AAAAAA@A@A@@A@AA@AAAAAAAA@A@A@A@AA@@A@AAAAAA@@AA@@A@AAC@AAAA@AAA@CAAA@A@A@AA@A@A@C@A@@BA@A@@BA@ABA@A@A@A@A@@AA@A@A@@AA@@A@AA@A@@AA@@AA@AAA@@A@ABABAB@@A@A@A@AAAAACAC@A@A@AB@AA@@AAA@AA@AAA@AAA@A@ABA@A@@AA@@AAA@A@A@AB@@A@A@A@A@A@AA@A@A@A@A@A@A@@AA@@E@A@A@C@A@A@AA@AAA@A@ABABA@A@@AA@ABA@A@A@A@A@AAAAA@@AA@@AA@AA@ABA@AAA@C@AACA@BABABAAAAA@A@A@A@A@AB@@AB@@AB@@ABA@ABAA@@AA@A@AAA@A@A@A@C@A@A@A@AA@AAA@AA@@AA@@A@AA@A@A@A@@A@A@AA@AA@A@A@A@A@A@AA@@AA@AAA@A@@AA@A@AAA@A@A@A@A@A@ABA@A@A@A@A@A@ABA@EBABA@A@A@ABA@@B@BA@AA@A@C@AAA@A@AA@AAA@AA@A@AAAA@AAAAA@AAA@@AAAAA@AAAA@A@@AAACAAAAA@AB@B@BADADA@AB@@ABA@A@A@A@A@A@A@A@C@AA@@ABA@A@A@AAAAAAAAAAA@A@AA@@AAAAA@AA@@AA@@A@A@C@A@CAE@C@A@ABA@ABABCBABABAD@D@B@F@B@BA@A@AAA@AAA@A@AA@@AAA@AA@@A@A@C@C@CAA@A@AAAAAAAAAAACA@A@AB@BABABA@A@AB@@A@AA@@AAC@A@AA@@A@AA@@AAAA@@A@A@AA@@A@AAA@AA@AAA@AACAA@A@@A@AAA@A@AAA@AB@@AA@CAAACAA@A@@A@AB@@A@A@AB@B@BA@A@A@A@AA@@AA@A@C@AAC@A@@AA@@A@AA@AAA@A@A@AAC@CAC@A@A@A@AAC@C@A@C@A@C@A@AAAAAACAAAAAA@C@C@A@E@A@A@C@CBA@AA@AAAA@AAA@A@A@@A@A@AB@B@@AB@BAB@@AB@B@@AB@BA@AB@@AB@BAB@@AB@@AB@@AB@B@@A@A@A@A@A@AAAAAA@A@@AB@AA@AAAA@AAA@@AA@A@A@A@A@AAA@AAAAAAA@@ABA@ABA@A@AB@B@B@B@DAB@D@DAD@DADAB@BAB@@AB@B@BAB@DAB@BABABABAD@@AB@@A@AB@@AB@BA@A@A@ABA@ABA@AB@@AB@BABA@AAA@AA@@A@A@A@ABA@A@AAAA@AA@AB@@A@AA@AAA@@AA@AA@AA@@AA@AAA@AAAA@AAAAA@AAAAA@AA@@A@A@AA@@AAAA@@AA@@AAA@A@A@A@A@A@A@A@C@AA@@A@AAA@AA@AAAAAAA@@AAAA@AAA@@AA@AAAAA@AAAAA@A@AAA@A@AAAABAAA@AA@@AA@C@AAA@A@@AAAAAA@AAA@@AA@A@AAA@AAAAA@A@A@A@A@A@A@AAA@@AA@@AAA@AAA@A@AAAA@AAA@ABA@A@A@A@C@A@AAC@A@@AAA@AAAA@@AA@@AAA@AA@@A@A@A@A@A@A@A@A@A@AAAA@A@A@AAA@AA@AA@@AA@A@AAA@A@@AA@@AA@@AB@@A@A@A@AA@@AA@AAC@AAA@AAA@AAA@A@A@AA@A@AA@AA@A@AA@A@A@A@A@@AA@AAA@A@A@A@A@@AA@A@C@A@AAA@A@AAC@A@A@A@A@AAC@C@A@A@A@A@C@A@A@A@A@A@A@A@CAA@A@E@CB@A@A@ABAB@DABAB@DABA@A@A@ABAB@B@BADAD@BABAD@@AB@BA@ABA@AAAAA@A@AAABABA@AA@A@CAA@@ABA@ABA@A@AAAAAAA@CA@@A@AAA@A@AA@@A@A@AAAA@@ABAB@B@BAB@@AAA@C@A@A@ABAB@@ABA@A@ABA@A@A@AB@BA@A@A@A@A@A@AAAA@A@A@A@A@CACAC@AAC@AAA@A@@A@AA@@C@A@A@A@A@AAAAAAA@A@AAAAAAAAAAAAAAAA@@AA@@AA@@A@AA@@A@ABA@AA@@A@A@A@AB@@AB@@AB@@ABAB@B@BAB@BABAB@B@B@B@B@B@@BB@B@B@D@D@B@BBDAB@B@B@B@BA@AAA@A@ABA@AB@BABA@A@AB@@A@A@AB@B@B@B@B@BABAB@BAB@@AB@@AB@@AB@@A@A@A@AB@@AB@DABABABA@A@ABA@CBABADABA@AB@B@B@B@B@B@B@FABADABABAB@B@@AB@@AB@B@D@D@B@BBB@B@B@BADABAB@BAB@B@@A@AB@B@B@B@BBB@B@@A@ABA@ABABA@A@ABABAB@BAB@@A@ABA@AB@DABA@A@AB@B@B@B@BBD@DBB@B@D@BADAB@@ABAB@B@D@BBB@DAB@@AB@BA@A@C@ABADAB@BAB@B@B@B@B@B@BABAB@DABABAB@@AD@BAB@BABABA@CAAAA@ABAB@@ABAB@@AB@@A@A@AAA@AB@B@D@B@B@D@B@@ABAB@BAB@B@@AB@BABA@ABAB@BABADCDABCB@DADAB@BABAB@B@BAB@B@BBB@B@B@D@B@DAB@B@B@B@DADAB@B@BABAD@BAB@BABA@ADABAB@DAB@D@B@B@B@B@B@B@BBB@B@B@BBB@B@B@DAD@D@B@B@B@B@B@@ABA@AB@B@@BB@B@B@@BB@@B@BBBBBB@BB@BBB@BB@@BB@BB@BB@D@BBB@B@BABA@AB@B@BAB@B@BA@AB@B@B@BAB@B@BAB@@A@AB@BA@A@C@ABCBABADAB@@ABAB@BAB@BABAB@BABA@ABAB@B@D@B@D@B@B@BB@BB@BBBBB@B@B@B@BAB@DAB@BAB@B@B@B@B@@ABC@AB@BABAB@@A@AAAAACAAAAA@AAA@ABA@A@AA@@A@ABA@A@AA@AA@AA@@AA@@ABA@ABA@AAA@A@A@A@AB@@AB@B@B@BABAB@@AB@B@B@B@@AB@B@B@@A@ABA@A@A@A@A@AB@@A@AB@@A@AB@@AB@@AB@@A@AB@B@B@B@B@B@B@BA@ABA@AB@B@B@BAB@BABAB@@A@AA@A@@AA@@A@AA@A@@AA@A@A@A@@AB@BABA@AB@@AAA@AA@AA@AAA@A@A@AAAA@@AA@AA@AA@@AA@KDEDC@G@EBC@GDADCBCB@B@D@F@DCBGHEBC@E@C@GBA@C@GBI@E@E@E@K@G@E@CBA@C@CBCBGBCDEBG@E@E@G@E@AACAAAAC@AACCICCAC@AAABABAB@D@B@DBBBB@DBD@D@BAB@@CAAAAAAGEGCAACBCBA@AAAA@A@A@A@CBABABCBABA@CAAACAAEAA@C@E@G@CBA@AAA@@CACCAAACAC@E@AAC@AACAAAEGACACAAC@A@A@CB@DA@@BCBA@ABA@A@A@AAAAACCECAAACA@CDCB@BE@A@AACAAGAEAACAA@ABCDAHAF@BABABAAE@CCGECCCA@A@AAIBC@A@E@E@GAGCAACCIGCAGEEEECCEAC@C@G@GCGCCAAEECCA@A@AAA@CBE@CBC@CAAA@AACAEEIAACAC@ABC@A@A@AACEEIGEIEAAA@GBA@C@CAAAA@OCEACAGCCAA@ABA@@BADABA@@AA@ACAA@AAAA@A@A@A@A@EBC@C@AAC@AAACAC@C@ABE@G@C@A@A@A@AB@B@@AB@B@BBB@DBB@B@B@BAB@@AB@@A@AAAAAA@@ABA@A@A@AA@AAA@EAA@EACAE@A@EAE@E@C@ABA@A@A@@AA@A@AAAA@A@A@ABABA@AB@BABCBAB@@ABAAA@AA@@AA@@A@AACBA@CBE@AAC@AA@AAA@A@AAAACAAAAAA@ABC@CBABCBABABE@ABC@ABABABABCBA@EBC@C@CAA@C@EAC@CAC@CAEAC@A@A@A@ABBDBB@BABA@E@E@A@ABABABA@A@ABAAC@C@A@C@CBCBABCBCBEBABE@EBE@C@C@C@A@ABA@AB@B@B@B@BBD@BBB@BBB@BAB@BABABA@CBA@G@EBA@AB@BAB@B@B@BA@@DCBADCBADCFAD@BABADABAB@BAD@B@B@F@DAB@BA@A@A@A@AAA@CACCAAA@AAAAC@CAC@C@AAC@CBC@E@C@A@A@AAA@CAA@AAAAAA@A@A@ABA@A@A@A@C@AACAAA@AAC@A@C@C@C@AACAAA@AA@AAA@CAAAA@A@AAC@A@CAA@AAAAAAAAA@AAA@A@AAA@A@ABA@CBCBCBABABC@A@ABC@A@CAA@AAC@CAC@AAA@A@A@ABA@ABAB@B@B@B@DBDBFBBBDBDBBBDDBDDD@BBBBBB@B@B@B@B@BABA@@B@B@D@D@B@BBBBDBB@BBB@BBDBD@BBB@BBB@BDBDBBBBBBBDDBDDFB@DFDDFDBDDF@DBFBD@B@BBBBNBD@J@D@F@BABADABCBCDC@ABCBE@CBA@A@ABABAB@D@D@BABABADAB@BAD@DAB@BCBABEBC@ABCBCDABAB@B@D@B@B@BCBABCDABABCDABAB@B@B@B@B@B@BBD@B@HBB@B@F@F@DAD@DAB@BABABABABABAFADABADBB@DAF@D@B@BBF@F@BBB@BBBDDBBBB@B@BBBBBBD@B@BADAB@BABABABA@@BA@A@A@AAA@@AAAAAAAA@@AC@@A@AAACC@AA@@ABA@AA@@AAABA@A@AA@AA@AA@@AA@@AA@A@AAA@A@@AA@@AA@@A@A@A@AA@@AA@@AA@A@AAA@C@A@AAAA@A@A@AAABAB@AAA@A@@AA@AAC@A@@BB@@BABCBA@A@A@AAAAA@C@A@CAC@A@AAABA@ADAB@DA@A@A@CACAA@A@A@CAC@C@A@A@A@C@AAA@A@A@C@C@C@AAC@A@AAAAAAABA@ABCBCBABA@A@ABA@ADABA@A@A@A@@BCBABA@AB@BABA@A@AAA@AAAA@AAAAAAAA@A@A@A@A@A@AAA@@AA@AAC@AAABA@A@A@A@CBA@@BA@A@C@AAC@AAA@@A@AAAA@AAA@@AAC@AA@@AABA@AAA@C@@A@AAAAAAAAAAAA@A@CDA@A@A@A@A@A@A@ABABABA@A@A@A@@BAB@BAB@BA@ABABA@ABABA@@B@BABA@A@C@@AAAA@@BA@A@AAA@@BA@ABA@ABA@A@@BA@ABA@A@A@A@A@A@ABA@A@@BA@A@C@C@CBC@C@AB@AA@@AAA@A@AAAAAA@A@A@A@A@A@A@A@A@A@A@A@A@A@A@A@A@A@ABA@A@A@AAA@A@A@A@AAA@A@A@@BA@A@A@A@@BABABA@ABA@AAA@A@AAA@A@A@@A@AAAA@@AA@AA@C@A@C@A@A@A@A@AB@@A@ABC@A@A@AA@A@A@@A@AA@A@A@A@A@A@A@A@@AA@A@A@A@A@AAA@@AA@A@@AA@ABA@A@A@@B@BA@ABA@A@A@A@AAA@A@C@A@A@A@CBA@ABA@A@A@A@CAA@A@AACAAAC@C@A@A@A@A@CA@AA@AAA@A@AACBCACBA@A@A@@A@A@AAA@A@AA@@AA@@A@A@AA@A@A@A@AAA@@A@ABABA@AAA@A@A@A@A@A@AA@@A@A@AA@A@AAA@BA@A@AA@AA@A@AAAA@A@AAA@@AAA@AA@@A@A@AA@@A@A@A@A@ABAB@@A@A@ABA@ABAB@@AB@@CBAB@B@B@B@@A@AA@@C@ABA@A@A@A@A@ABA@A@A@AAA@AAAAAAAA@A@A@A@A@A@A@C@A@AACAA@@AAA@AA@A@A@@AA@A@@AA@@AA@AC@AA@@A@A@A@A@A@A@AAA@AA@@AA@A@A@@AAA@AA@@AA@@A@A@AA@@AAA@AAAA@A@@AC@AAA@A@AAA@A@A@CAA@A@ABA@ABABABABA@A@A@A@@BABAB@BABABAB@BABADA@@DAB@BA@@BA@ABA@ABA@@B@D@B@DA@A@A@A@A@A@ABC@A@A@A@A@A@A@A@ABA@A@ABA@ABA@CBC@ABA@A@ABABA@@BA@AB@BA@A@A@A@A@A@ABA@A@A@A@A@A@@AA@A@@BA@ABAB@B@BB@@B@B@BA@@B@B@BA@A@@BA@AB@BA@A@A@AAA@AAA@AB@BA@A@A@@BA@A@@BA@@B@BA@AB@BA@ABA@@BA@A@AAA@A@A@A@A@ABA@@BA@@B@BAA@AA@AAAAAAA@@AA@@AA@@AA@A@A@A@@AA@@AA@@A@AA@@AAAA@@AA@A@A@@AA@@A@AA@A@A@A@ABA@A@CAA@AA@AA@@AC@AAA@AAAA@AA@AAA@A@A@A@A@AAA@@A@AA@@A@A@A@AA@A@@AA@AAA@A@@AA@@BA@A@A@A@A@A@A@A@A@A@A@A@A@@AA@@AA@A@A@AAC@AAAAA@@AA@@A@A@A@AAAA@A@A@A@@A@A@A@AA@@ABA@A@A@AACA@@AAA@ABAA@AAA@A@A@A@A@A@A@A@@AA@A@A@A@A@A@A@A@A@C@@AA@A@A@A@ABA@A@@BA@C@@BA@A@@BA@ADADAB@BA@@BAAA@A@CBABA@A@A@@BA@A@A@A@A@A@@BA@@B@BA@ABA@A@@BA@A@@AA@A@AAA@C@AB@AA@@AAAC@AAAAA@C@A@A@ABA@ADA@@B@BEAA@A@A@C@EAABAAAAA@ABA@AAC@AA@AC@A@AA@AA@C@E@C@A@A@A@@ACAA@EBAAA@C@C@AAAAABABCDABA@A@E@A@C@A@C@@BA@A@@BCBCBA@@BA@C@A@AB@BA@@BABA@@BA@@B@BABBBA@@BEBA@ABA@ABA@A@ABA@AAC@A@@B@BAB@B@BA@AB@B@B@BC@@B@BCBB@@BB@@B@BB@@B@BBB@B@BABB@DBBB@B@B@B@BABBB@B@B@BB@@B@B@B@BB@B@BBBBB@B@BBB@B@BBBB@BCB@BABAB@BB@AD@BABAB@BA@CD@BBB@BAB@BBBBBB@DDBD@BABA@ABC@AB@BAB@BABABBB@BA@@B@BAB@B@B@B@BA@@BDB@BB@@BB@@BAB@B@B@BBBBBBB@BBBB@@BB@@B@D@D@BAD@B@B@DABADCFABEDEBEBCBE@EAG@CACACCACEGCAA@CAC@A@C@C@CBC@ABQJCBCBA@ABA@@BC@K@A@ABC@CAC@CACACAACACCE@A@AAAAAAACACAGAGAC@C@CBA@C@C@EAEAAAAAAA@CAAAAACAACAAAA@A@C@A@A@A@AAA@C@ABA@CAA@A@@AAA@A@AB@@A@AA@AAA@CAAAC@A@A@A@C@ABA@@AA@A@A@@BA@@BA@A@A@A@@BA@@BA@@BA@@BB@BB@BA@A@@B@BA@@B@BA@A@A@A@A@A@A@A@@BABA@A@A@A@@BC@A@A@A@A@A@AB@BA@C@@AA@@AA@@AA@A@A@A@A@A@A@A@A@@BA@@AA@A@A@A@A@@AA@@AA@A@@AA@A@@AA@A@A@@BA@A@@BA@@AA@@BA@@B@BA@@BA@A@A@@AA@A@@BA@A@@BA@AA@AA@A@ABA@@B@BA@@AAB@BA@@BA@A@@AA@A@A@A@A@@AA@ABA@A@@AA@@AA@@A@AA@@BA@AA@AA@@AA@C@ABC@A@C@A@C@@AA@A@ABA@@ABAA@@AABA@A@A@@BA@A@A@A@A@AAAAAAABA@A@A@A@AA@B@BAA@B@BA@@AABA@A@@B@B@BA@A@A@@BA@AA@AABAAA@AAA@@B@BA@AA@ACB@A@AC@A@@BA@A@@BAB@AAB@AA@A@A@@BAA@BA@@AAB@A@A@AA@@BA@A@AAA@@AABAC@AABABA@A@A@@BB@@BA@ABE@CA@BA@A@ABA@A@A@A@AAA@CBC@A@@BE@BB@BAAA@AAA@A@@AA@ABABA@A@@BGBABA@BBA@@B@BA@A@A@@AA@@BA@@BA@@AA@E@A@A@@BB@AB@B@BA@@BA@A@BBABA@@BA@@B@BABA@ABA@AB@BB@@BA@@BA@AB@BA@@B@BA@A@A@@AA@A@A@AAA@AB@AA@ABA@A@@AA@@AC@A@@B@BAB@AA@@AC@@BA@A@AB@BA@@AABA@A@A@A@@B@BA@A@A@AA@BAB@AA@A@@BA@@BA@A@A@BBA@A@@BA@A@@B@BB@@BA@AAA@@BA@@BAA@BAB@AA@@BA@AB@AA@@AA@@BA@@BB@@BA@@BA@@AA@@BA@A@AA@B@BB@@BA@A@@B@BAB@BAB@BA@@BA@@BA@A@A@BB@BB@ABA@AB@BA@@BA@A@@B@BA@@BA@@BA@A@@BA@BBABABAB@B@BA@@BADA@@BA@A@A@BBA@BBBB@BA@@B@B@BB@@BAB@BB@@BA@@B@B@B@BABOA@B@B@DABCBD@@BBF@BA@@BB@@B@BBDA@ADA@A@BBB@BB@D@FABBB@BCB@BB@HACDB@EDABCBABCBCBCBA@CBEAA@A@CBABC@EBA@GDA@KDCBABEBABA@I@I@E@E@EBB@B@DDB@BBDB@B@BA@@B@BB@BDDD@BD@@BFDBBB@BB@BFBBBBBFBA@@BA@C@C@A@A@EDID@BDD@AB@H@B@B@F@B@D@@BB@AB@BB@@BA@@BA@@BA@A@A@A@AAE@C@A@CACBCBBBAB@BA@A@A@A@AB@BE@A@@BE@ABAB@BB@@DABADAD@BAB@FB@@B@BAB@BA@ABA@AD@BAB@BBB@BA@@BABC@@BAB@BCBA@CBA@AAA@AB@BAB@BA@C@A@CBABB@BBB@B@B@@BA@A@@BA@A@@AA@@BABA@@BA@A@ABC@ABA@CBA@ABA@ABA@ABC@A@C@A@ABA@A@ABA@@BA@ABA@@BA@A@A@A@A@AAA@A@AAA@A@AAA@CAA@AAA@A@A@AAA@A@A@A@A@@AA@A@@AA@A@A@A@A@A@@AA@A@@A@A@AAACAA@ABCDCBA@CBA@@FBBAD@B@F@BABABABC@ABEBA@ABC@A@CBAB@BA@CFA@A@A@ABA@A@A@ABA@A@A@A@ABA@CBA@ABA@ABABA@CBA@A@ABA@C@A@ABA@AB@BA@ABAB@BAB@BABABAB@BCBCBABABC@@BB@@BBD@B@B@B@B@B@BBB@B@B@B@BAB@BABABABB@D@BAB@BAB@@ABAB@@A@AB@@AB@@A@AB@BABAB@@ABAAAB@@AB@DABABAB@B@D@B@B@BAD@BBB@BBB@B@BAB@B@B@B@BA@AB@BABAB@B@B@B@BBB@B@BBB@BBD@B@BBB@B@@BB@B@BBB@B@BBB@B@BBB@B@B@B@B@@BB@B@B@BB@B@DBBBBB@BB@B@B@BBBA@A@A@ABA@ABAB@B@BA@@BABABA@@BA@@B@B@BB@@BB@@BBBBBB@B@DAB@BBB@BA@AB@BAB@@A@AB@@AB@@A@AB@B@B@B@B@B@B@B@@BB@B@@BB@B@B@BBB@B@B@BBB@@BB@B@@BB@B@B@B@B@BBB@B@B@BBB@@BB@BBB@B@BBB@BBB@B@@BB@B@@BB@B@@BB@@BB@ABABA@@BA@A@A@A@ABA@A@A@A@A@A@A@@B@B@B@B@B@B@BA@A@@BA@ADA@A@A@@B@BA@@BAB@B@BA@@BABA@@BA@@BA@@B@B@B@BA@@B@BABA@A@ABC@C@A@A@A@@AAAA@ABA@A@A@A@@AA@@AA@@AA@A@C@A@ABA@CAA@A@AAAAA@AAA@A@A@A@ABA@A@AAA@A@A@A@ABA@A@@B@BAB@BABA@ABABA@@B@B@B@B@B@B@BABA@@BAB@B@BA@A@@BA@@B@BBBA@@B@BABABAAA@@AA@A@@AA@A@@AA@@B@B@BA@@BAB@BB@@BA@@B@B@BAB@B@BA@@BABABA@@B@BA@@DABCDA@@B@B@B@B@BB@@B@BBB@BB@@B@BA@ABA@AB@BAB@B@B@BA@A@@AA@A@@BA@@BA@@BAB@B@B@BA@@BA@A@@BAB@B@B@BABA@A@A@A@A@A@A@A@A@A@A@AB@BAB@B@BABA@@BAB@B@B@BA@ABA@@BA@@B@BAB@B@B@B@BBB@B@BB@@BB@B@DBBBB@D@DBB@B@@B@B@B@BA@@B@BB@@BB@BBBB@BB@BBB@@BB@B@B@@BB@@BA@@BB@@BB@BBBBBBB@BBB@B@BBB@BBBBBDB@BBBBDBBBBBDB@BDBBBBBB@@BB@@BB@@BB@FBD@BBDBB@B@B@B@DBB@D@D@@B@B@BBB@B@B@B@BB@B@B@F@BBBAB@B@B@D@D@BBB@BBD@B@BBB@@BDBB@B@B@D@B@BBD@DBDBBBB@@BF@DBB@B@BBB@FBBBB@D@BBBBBBB@DBD@B@BB@BFDBDBBBDBBDBBBDBFDBBBB@BB@DBFBDBHDDBD@B@B@@A@ABADABA@ABADCDAD@BAB@@CBABABAB@DAD@F@BABCBADAB@D@B@B@DBB@B@DABBDBB@BBBBB@B@B@D@D@H@B@HBD@D@HBB@BBF@B@DBBBBBFDDBB@BBH@BBH@D@BBB@B@@B@B@BABAD@BB@BBF@D@B@BBB@BBB@B@BABAB@B@BBDBD@JDDBF@B@D@B@BBBB@BBBB@B@DBB@@D@BB@BBBB@B@B@BA@@BABB@@BD@BDDBDBD@@BDAFCFABABABA@A@ABBBB@BB@BBB@BBB@D@DBD@BBBBD@B@B@DBD@FDB@B@B@@B@BBB@BB@D@@AB@@BB@BBBBB@B@@BB@@BB@B@@BA@@B@B@B@BDD@BB@@BA@CDCDA@@B@B@B@B@BABA@CBABC@@BA@ABCAE@A@ABA@@B@BBBBB@BA@@BA@@BAB@B@BA@@BABB@@B@B@B@B@BABA@A@ABAB@B@B@BBB@BCBABABCBA@AB@B@BA@ABABAD@BA@@B@BA@A@A@A@@B@B@B@B@B@B@BCA@AAG@CA@@AGGA@A@EFGAC@@AA@A@CBCB@BABA@ABA@@BA@AB@B@B@B@BAB@BCBCB@BBBDD@BCBC@A@@B@D@D@BDB@BA@A@A@ACA@A@A@CBABABCBA@A@CCA@AB@D@BABA@CBC@@BCBABABABBBDD@BA@A@A@@AAAA@ABABA@A@G@G@CBC@ABA@ADCDA@ABA@A@CCA@ABA@@BBDBB@B@FA@A@@BABBD@B@BABABA@A@ADAB@BBB@B@B@BABAB@BABABA@AAA@AAA@@B@B@B@B@BBBB@BBA@@BA@C@A@A@ABA@@BA@@BA@ABC@A@A@ABAB@B@B@B@B@BD@@BB@BAB@@BDB@BDFBBDBB@@BB@@FBD@FAD@BBD@BB@D@B@B@@B@BA@CBC@CBC@AB@B@B@BC@C@A@A@@B@DA@@BA@@BDBBBB@BBB@DBHDB@BB@BBDBBABEBABA@BBDBBB@B@B@BAB@BBBBBBBD@B@B@B@B@D@BB@B@BA@@BBBDB@BA@A@A@A@A@A@@BAB@BB@B@B@B@D@BBBB@F@BABA@@BBBB@D@DB@DB@@D@BAF@B@D@BBB@BBBBBBBDDBDB@BBABABC@AD@B@BADAB@D@DABAB@DBBBBBBAB@DD@BAD@B@AD@DAFCDCBA@ABBBBF@BADBDBB@BABA@@BB@BBAB@BC@CBABA@AAA@AAA@AB@BA@@BB@BBB@BBBB@B@BA@A@ABA@@BA@@B@DBB@B@BABA@A@A@@BBBB@B@B@BB@BABABABA@A@ABA@@B@BABA@AB@BABB@ABABBBB@B@B@@BABA@@BBBB@BB@B@BA@A@A@A@AA@AA@ABA@AB@BA@@BCB@B@BA@A@ACAAA@@BA@CB@BCBABAB@B@BABBBB@BAB@@B@BAB@BAB@BA@C@AB@B@B@BB@ABABABAB@BDBBBA@@BABA@@B@B@BAB@BA@ABA@AB@BBB@BA@A@A@AA@AA@@B@BBB@BA@@B@B@B@BED@B@BBBB@@BADAB@B@BB@BB@BB@ABA@A@ABA@@BB@B@B@B@@B@BAB@BA@E@@AA@BAAAA@ABAB@BBBB@@BB@@BAB@BA@A@A@A@@AA@A@AB@BA@AABAA@@AA@@B@BBBAB@BB@B@@B@BBBAB@AA@@BBB@BA@@AA@AAA@ABAAA@@B@BBBB@@BBB@B@BB@D@BA@ABBBB@BB@B@ABAB@BB@@BA@A@A@A@@B@BA@AAA@AB@BABBBB@BABB@BABA@AAA@ABA@@BA@ABEB@BCBBBBB@B@B@B@B@BBBB@ABABA@A@AB@B@B@BBB@BB@AB@BB@@BB@B@@BA@@B@BB@B@BB@BB@B@BAB@B@@BA@ABAB@BABA@A@A@@BBB@DBBB@@B@BABA@@BA@C@C@@BBBB@DBDBDBBDBB@BBB@BBBBDDFBBDFBDBF@BBFBB@DBB@DBDB@B@F@B@B@BAB@B@D@B@B@B@B@B@B@B@@A@CD@BA@ABBB@BBB@B@B@B@B@B@@BB@B@BA@BB@B@@A@ABCBABABAB@B@D@DBBBDBDDBBBBDBB@B@D@BBBBD@D@D@B@DAB@@A@AAAAA@A@A@AFBFDFECA@ALFB@BBB@BBFBDBD@BBFAB@@AB@B@B@D@DAB@L@B@D@@AB@@AB@@AB@BAB@D@BAB@@AAAB@BAB@BABAD@D@D@F@B@B@B@BBFBB@B@@BD@D@B@BBB@@BCBFBFBB@@AB@B@B@B@B@@BAB@BABHB@D@D@B@BA@BDBDA@BBBD@BBBD@B@BBBBB@@AB@@AB@B@B@B@B@B@BBB@BBB@B@F@B@D@B@B@LBB@B@BBD@D@B@JFH@F@D@","@@BADAB@ABEFA@@ABA"],["@@BB@AA@"],["@@AAAAA@@BBBB@B@"],["@@BAA@@B"],["@@@AA@BB"]],"encodeOffsets":[[[129068,44936],[129746,45601]],[[129758,45602]],[[129751,45605]],[[129165,43817]],[[128993,43845]]]}}],"UTF8Encoding":true});}));