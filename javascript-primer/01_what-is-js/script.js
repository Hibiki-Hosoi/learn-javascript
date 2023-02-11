//大文字と小文字を区別
const name = 'AZU';
const NAME = 'azu';

console.log(NAME);
console.log(name); //非推奨


//文はセミコロンで区切られる
1 + 1;
1   +   1;


//strict mode
"use strict"; //ファイルor関数の先頭に置くと、そのスコープはstrict modeで実行される
mistypedVariable = 42;
console.log(mistypedVariable); // => Uncaught ReferenceError: mistypedVariable is not defined
