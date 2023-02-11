//console APIで評価結果を表示

console.log(1);

console.log(1+1);

const total = 42 + 42;

console.log(total);


//コードの評価とエラー


//構文エラー
//console.log(1; // => Uncaught SyntaxError: missing ) after argument list
//cosnt a = 1; // => Uncaught SyntaxError: Unexpected identifier 'a' (at script.js:17:7)


//実行時エラー
const value = "値";
console.log(x); //Uncaught ReferenceError: x is not defined

