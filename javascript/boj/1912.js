// 연속합
// https://www.acmicpc.net/problem/1912

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let dp = [];

dp[0] = arr[0];
// dp[1] = dp[0] > 0 ? dp[0] : 0 + arr[1];
let max = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < n; i++) {
    dp[i] = (dp[i - 1] > 0 ? dp[i - 1] : 0) + arr[i];
}

console.log(Math.max(...dp));
