// 포도주 시식
// https://www.acmicpc.net/problem/2156

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs")
    .readFileSync(stdin)
    .toString()
    .trim()
    .split("\n")
    .map(Number);
const n = input[0];

let dp = [];
dp[0] = 0;
dp[1] = input[1];
dp[2] = input[2] + input[1];
for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
    dp[i] = Math.max(dp[i - 1], dp[i]);
}

console.log(dp[n]);
