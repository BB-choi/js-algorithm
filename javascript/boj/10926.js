// ??!
// https://www.acmicpc.net/problem/10926

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim();
let answer = input + "??!";

console.log(answer);
