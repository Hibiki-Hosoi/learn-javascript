//const：再代入できない変数
const bookTitle = "JavaScript Primer";
const bookCategory = "programming";

//出力
console.log(bookTitle);
console.log(bookCategory);

/*
カンマでくぎって以下のように記述することも可能
const bookTitle = "JavaScript Primer",
      bookCategory = "programming";
*/

//再代入できない
//bookTitle = "New Title" // => Uncaught TypeError: Assignment to constant variable.


//let：再代入が可能な変数
let bookName = "JavaScript Primer"

//初期値を指定しないことも可能
let bookGenre

//出力
console.log(bookName);
console.log(bookGenre); // => undefined

//代入演算子(=)で値を代入可能
bookGenre = "programming";
console.log(bookGenre);

//代入は何回でも可能
let count = 0;
count = 1;
count = 2;
count = 3;

/*
var：再代入が可能
問題点：同じ名前の変数を再定義できてしまう → 変数の巻き上げ
*/

var x = 1;
var x = 2;

console.log(x);


//constは定数ではない
const TEN_NUMBER = 10;

//constでオブジェクトを宣言可能
const object = {
    key: "値"
};
// オブジェクトそのものは変更できてしまう
object.key = "新しい値";

console.log(object.key);


/*
- constは、再代入できない変数を宣言できる
- letは、再代入ができる変数を宣言できる
- varは、再代入ができる変数を宣言できるが、いくつかの問題が知られている
- 変数の名前（識別子）には利用できる名前のルールがある
*/
