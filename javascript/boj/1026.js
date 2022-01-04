// 1026 - 보물

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

let N = +input[0];
let A = input[1].split(" ").map(Number);
let B = input[2].split(" ").map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let result = A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);

console.log(result);
