let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let numArr = input;

let answer = Number(numArr[0]) + Number(numArr[1]);
console.log(answer);
