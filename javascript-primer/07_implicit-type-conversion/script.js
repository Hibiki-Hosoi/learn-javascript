// `===`では、異なるデータ型の比較結果はfalse
console.log(1 === "1"); // => false

// `==`では、異なるデータ型は暗黙的な型変換をしてから比較される
// 暗黙的な型変換によって 1 == 1 のように変換されてから比較される
console.log(1 == "1"); // => true

// 暗黙的な型変換が行われ、数値の加算として計算される
1 + true; // => 2
// 次のように暗黙的に変換されてから計算される
1 + 1; // => 2

/**
 * 暗黙的な型変換とはどのようなものなのか
 * 暗黙的ではない明示的な型変換の方法
 * 明示的な変換だけでは解決しないこと
 */

//暗黙的な型変換 = ある処理において、その処理過程で行われる明示的ではない型変換のこと

// 異なる型である場合に暗黙的な型変換が行われる
console.log(1 == "1"); // => true
console.log(0 == false); // => true
console.log(10 == ["10"]); // => true


//等価演算子（==）の暗黙的な型変換を避ける方法 = 常に厳密等価演算子（===）を使うこと


//様々な暗黙的型変換

//プラス演算子
1 + "2"; // => "12"
// 演算過程で次のように暗黙的な型変換が行われる
"1" + "2"; // => "12"

//マイナス演算子
1 - "2"; // => -1
// 演算過程で次のように暗黙的な型変換が行われる
1 - 2; // => -1


//3つ以上の値を扱う場合、結果を予測するのが難しくなる
const x = 1, y = "2", z = 3;
console.log(x + y + z);
console.log(y + x + z);
console.log(x + z + y);


//解決方法...明示的な型変換を行う

//任意の値→真偽値
Boolean("string"); // => true
Boolean(1); // => true
Boolean({}); // => true
Boolean(0); // => false
Boolean(""); // => false
Boolean(null); // => false
//falsyな値はfalseに変換される

let x2;
if(!x2){
    console.log("falsyな値なら表示",x);
}


let x3;
if (x3 === undefined){
    console.log("xがundefinedなら表示",x);
}

//数値 → 文字列
String(1); // => "1"

String("str"); // => "str"
String(true); // => "true"
String(null); // => "null"
String(undefined); // => "undefined"
String(Symbol("シンボルの説明文")); // => "Symbol(シンボルの説明文)"
// プリミティブ型ではない値の場合
String([1, 2, 3]); // => "1,2,3"
String({ key: "value" }); // => "[object Object]"
String(function() {}); // "function() {}"


//シンボル → 文字列
//"文字列と" + Symbol("シンボルの説明"); // => TypeError: can't convert symbol to string
"文字列と" + String(Symbol("シンボルの説明")); // => "文字列とSymbol(シンボルの説明)"


//文字列 → 数値
// ユーザー入力を文字列として受け取る
//const input = window.prompt("数字を入力してください", "42");
// 文字列を数値に変換する
// const num = Number(input);
// console.log(typeof num); // => "number"
// console.log(num); // 入力された文字列を数値に変換したもの


// "1"をパースして10進数として取り出す
console.log(Number.parseInt("1", 10)); // => 1
// 余計な文字は無視してパースした結果を返す
console.log(Number.parseInt("42px", 10)); // => 42
console.log(Number.parseInt("10.5", 10)); // => 10
// 文字列をパースして浮動小数点数として取り出す
console.log(Number.parseFloat("1")); // => 1
console.log(Number.parseFloat("42.5px")); // => 42.5
console.log(Number.parseFloat("10.5")); // => 10.5

// 数字ではないため、数値へは変換できない
Number("文字列"); // => NaN
// 未定義の値はNaNになる
Number(undefined); // => NaN


// const userInput = "任意の文字列";
// const num2 = Number.parseInt(userInput, 10);
// if (Number.isNaN(num2)) {
//     console.log("パースした結果NaNになった", num2);
// }

const a = 10;
const b = a + NaN;
const c = b + 20;
console.log(a); // => 10
console.log(b); // => NaN
console.log(c); // => NaN

console.log(typeof NaN);


//値がNaNかを判定する
Number.isNaN(NaN); // => true


/**
 * NaNは暗黙的な型変換で最も避けたい。
 * 計算していた値がどこでNaNになったかがわかりにくく、デバッグが難しい
 */

// 任意の個数の数値を受け取り、その合計値を返す関数
function sum(...values) {
    return values.reduce((total, value) => {
        return total + value;
    }, 0);
}
const x4 = 1, z4 = 10;
let y4 // `y`はundefined
console.log(sum(x4, y4, z4)); // => NaN

/**意図しないNaNへの変換を避ける方法
 * - sum関数側でNumber型の値以外を受け付けなくする
 * - sum関数を呼び出す側で、Number型の値のみを渡すようにする
 * どちらも行うことが推奨。
 */



/**
 * 数値を合計した値を返します。
 * 1つ以上の数値と共に呼び出す必要があります。
 * @param {...number} values
 * @returns {number}
 **/

function sum(...values) {
    return values.reduce((total, value4) => {
        // 値がNumber型ではない場合に、例外を投げる
        if (typeof value4 !== "number") {
            throw new Error(`${value4}はNumber型ではありません`);
        }
        return total + Number(value4);
    }, 0);
}
const x5 = 1, z5 = 10;
let y5; // `y`はundefined
console.log(x5, y5, z5);
// Number型の値ではない`y`を渡しているため例外が発生する
//console.log(sum(x5, y5, z5)); // => Error



/**
 * 
 * 暗黙的な型変換は意図しない結果となりやすいため避ける
 * 比較には等価演算子（==）ではなく、厳密等価演算子（===）を利用する
 * 演算子による暗黙的な型変換より、明示的な型変換をする関数を利用する
 * 真偽値を得るには、明示的な型変換以外の方法もある
 */
