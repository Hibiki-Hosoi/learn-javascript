/*
- 動的型付け言語のため、変数の型はない。
- 値の型はある（文字列、数値、真偽値、etc）
- プリミティブ型
    - 基本的な値の型
    - 一度作成したらその値は変更できない...immutable
- オブジェクト
    - プリミティブ型でないもの
    - 複合型
    - 一度作成した後も値を変更できる...mutable
    - オブジェクト、配列、関数、クラス、正規表現、Dateなど

*/


console.log(typeof true);// => "boolean"
console.log(typeof 42); // => "number"
console.log(typeof 9007199254740992n); // => "bigint"
console.log(typeof "JavaScript"); // => "string"
console.log(typeof Symbol("シンボル"));// => "symbol"
console.log(typeof undefined); // => "undefined"
console.log(typeof null); // => "object"
console.log(typeof ["配列"]); // => "object"
console.log(typeof { "key": "value" }); // => "object"
console.log(typeof function() {}); // => "function"　関数は例外

//typeof...値の型を判別する演算子



//オブジェクトリテラル
const obj = {
    "key":"value"
};

console.log(obj.key);


//ドット記法でオブジェクトのプロパティを参照できないことがある

// プロパティ名は文字列の"123"
const object = {
    "123": "value"
};

console.log(object["123"]);


//配列

const emptyArray = [];
const array = [1, 2, 3];

console.log(array[1]);


//ラッパーオブジェクト。明示的に使う必要はない。常にリテラルでプリミティブ型のデータを表現することを推奨
const str = new String("文字列");
console.log(typeof str);
console.log(str.length);

