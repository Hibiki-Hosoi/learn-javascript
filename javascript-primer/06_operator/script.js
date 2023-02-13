//被演算子：オペランド（operand）

/*
以下のセクションはほぼ既知のため省略
- 文字列結合演算子
- 単項演算子
*/


//比較演算子

//厳密等価演算子（===）
console.log(1 === 1); // => true
console.log(1 === "1"); // => false

// {} は新しいオブジェクトを作成している
const objA = {};
const objB = {};
// 生成されたオブジェクトは異なる参照となる
console.log(objA === objB); // => false
// 同じ参照を比較している場合
console.log(objA === objA); // => true


//厳密不等価演算子（!==）
console.log(1 !== 1); // => false
console.log(1 !== "1"); // => true

//等価演算子
console.log(1 == 1); // => true
console.log("str" == "str"); // => true
console.log("JavaScript" == "ECMAScript"); // => false
// オブジェクトは参照が一致しているならtrueを返す
// {} は新しいオブジェクトを作成している
//const objA = {};
//const objB = {};
console.log(objA == objB); // => false
console.log(objA == objA); // => true


/*
==は暗黙的な型変換を実施してから比較するため、予測できない挙動が多く存在。
基本的には厳密等価演算子（===）を使うべき。
*/

// 文字列を数値に変換してから比較
console.log(1 == "1"); // => true
// "01"を数値にすると`1`となる
console.log(1 == "01"); // => true
// 真偽値を数値に変換してから比較
console.log(0 == false); // => true
// nullの比較はfalseを返す
console.log(0 == null); // => false
// nullとundefinedの比較は常にtrueを返す
console.log(null == undefined); // => true

//nullとundefinedの比較は例外的に==が使われる
const value = undefined;
// === では2つの値と比較しないといけない
if (value === null || value === undefined){
    console.log("valueがnullまたはundefinedである場合の処理");
}

// == では null と比較するだけでよい
if (value == null) {
    console.log("valueがnullまたはundefinedである場合の処理");
}

//不等価演算子（!=）
/*
===と==の関係性と同様。!=の場合は暗黙的な型変換が行われる。
仕組みを理解しないまでは非推奨
*/


//大なり演算子
console.log(42 > 23);// => true

//大なりイコール演算子
console.log(42 >= 21);// => true

//小なり演算子、小なりイコール演算子 → 省略


/**ビット演算子
 * ビット演算子では数値を符号付き32ビット整数（0と1からなる32個のビットの集合）として扱う。
 */

/**ビット論理積（＆）
*各オペランドのビットをAND演算
*/

console.log(15 & 9); // => 9
// 同じ位の各ビット同士をAND演算する（上位の`0`は省略）
// 1111
// 1001
// ----
// 1001

//上位の0は省略可能
console.log(0b1111 & 0b1001);

/**ビット論理和（|）
 * ビットごとのOR演算
 */

console.log(15 | 9); // => 15
console.log(0b1111 | 0b1001); // => 15

/**ビット排他的論理和（^）
 *ビットごとのXOR演算
 * 
 */

console.log(15 ^ 9); // => 6
// 同じ位の各ビット同士をXOR演算する（上位の`0`は省略）
// 1111
// 1001
// ----
// 0110

/**ビット否定（~）
 * 各ビットを反転
 * xをビット否定演算子で演算した結果は、-(x + 1)となる
 */
console.log(~15); // => -16

const str = "森森本森森"
console.log(str.indexOf("本"));// => 2
console.log(str.indexOf("火"));// => -1

//否定演算子（~）は1の補数を返すため、~(-1)は0となる
console.log(~(-1)); // => 0

// ES2015~ includesメソッドが導入された。

if (str.includes("本")){
    console.log("本を見つけました");
}


/**左シフト演算子（<<）
 * 数値をbitの数だけ左にシフトする
 * num << bit
 */
console.log(9 <<  2);
console.log(0b1001 << 2);

/**右シフト演算子（>>）
 * 数値をbitの数だけ左にシフトする
 */

console.log((-9) >> 2); // => -3
//    1111_1111_1111_1111_1111_1111_1111_0111 >> 2
// => 1111_1111_1111_1111_1111_1111_1111_1101

/**ゼロ埋め右シフト演算子（>>>）
 * 右にあふれたビットは破棄され、0のビットを左から詰める
 */

console.log((-9) >>> 2); // => 1073741821
//    1111_1111_1111_1111_1111_1111_1111_0111 >>> 2・
// => 0011_1111_1111_1111_1111_1111_1111_1101

//代入演算子（=）

//分割代入

array = [1,2]
const [a,b]  = [1,2]
console.log(a);
console.log(b);


//論理演算
/**AND演算子（&&）
 * 左辺の評価がtrueであれば右辺を返す。
 * falseの場合は左辺の値を返す
 */

console.log(true && "右辺の値");
console.log(false && "右辺の値");

// 左辺がtrueなので、右辺は評価される
true && console.log("このコンソールログは実行されます");
// 左辺がfalseなので、右辺は評価されない
false && console.log("このコンソールログは実行されません");

//短絡評価：値が決まった時点でそれ以上評価を実施しないこと
/**暗黙的な型変換によって以下の値はfalseへ変換される（falsyな値）
 * false
 * undefined
 * null
 * 0
 * 0n
 * NaN
 * ""（空文字列）
 */

//AND演算はif文と使われることが多い。String型で"かつ"値がstrである↓
const value2 = "str";
if (typeof value2 === "string" && value2 === "str"){
    console.log(`${value2} is string value`);
}

// if文のネストで書いた場合と結果は同じとなる
if (typeof value === "string") {
    if (value === "str") {
        console.log(`${value} is string value`);
    }
}

/**
 * valueがString型ではない場合は右辺の評価がされず、中身が実行されない
 */

/**OR演算子（||）
 * 左辺がtrueの場合、右辺は評価しない
 */

const value3 = 0;
if (value3 === 0 || value3 ===1){
    console.log("valueは0または1です。");
}

/**NOT演算子（!）
 * オペランドの評価結果がtrueの時、falseを返す。
 * 評価がfalseの時、trueを返す
 */

// falsyな値は`true`となる
console.log(!0); // => true
console.log(!""); // => true
console.log(!null); // => true
// falsyではない値は`false`となる
console.log(!42);  // => false
console.log(!"文字列");  // => false

/**条件（三項）演算子（?と:）
 * 条件演算子は条件式を評価した結果がtrueならば、Trueのとき処理する式の評価結果を返します。 
 * 条件式がfalseである場合は、Falseのとき処理する式の評価結果を返します。
 * 条件によって変数の初期値が違う場合などに使われます。
 */

const valueA = true ? "A" : "B";
console.log(valueA);// => "A"

const valueB = false ? "A" : "B";
console.log(valueB); // => "B"

//条件演算子の評価結果は値を返すので、constを使って宣言と同時に代入可能。
function addPrefix(text, prefix) {
    const pre = typeof prefix === "string" ? prefix : "デフォルト：";
    return pre + text;
}

console.log(addPrefix("テキスト"));
console.log(addPrefix("テキスト","タイトル："));

//if文を使った場合は、宣言と代入を分ける必要があるため、constを使えない
function addPrefix2(text2, prefix2){
    let pre2 = "デフォルト";
    if (typeof prefix2 === "string"){
        pre2 = prefix2;
    }
    return pre2 + "：" + text2;
}

console.log(addPrefix2("文字列"));
console.log(addPrefix2("文字列","タイトル"));
