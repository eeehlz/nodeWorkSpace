//js with server/05_spread_operator,js
let a = [1, 3, 5];
let b = [10, 20];

// let newList = [...b, ...a]; // 결과값 : [ 10, 20, 1, 3, 5 ] ----- 펼침 연산자.
let newList = [b, a]; // 결과값 : [ [ 10, 20 ], [ 1, 3, 5 ] ]
console.log(newList);

let str = "CD";
let strAry = [...str];
console.log(str[0]);
console.log(strAry);