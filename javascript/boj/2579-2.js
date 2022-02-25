// 계단 오르기
// https://www.acmicpc.net/problem/2579

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs")
    .readFileSync(stdin)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const totalCnt = input[0];
let dp = [];
dp[0] = 0;
dp[1] = input[1];
if (totalCnt > 1) {
    dp[2] = dp[1] + input[2];
    dp[3] = Math.max(input[1], input[2]) + input[3];
}
for (let i = 4; i <= totalCnt; i++) {
    dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}

console.log(dp[totalCnt]);
