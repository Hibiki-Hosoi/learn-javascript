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


