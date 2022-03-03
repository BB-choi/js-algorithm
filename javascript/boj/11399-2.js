// ATM
// https://www.acmicpc.net/problem/11399

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const N = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let answer = 0;
let cur = 0;
for (let i = 0; i < N; i++) {
    cur += arr[i];
    answer += cur;
}
console.log(answer);
