// RGB거리
// https://www.acmicpc.net/problem/1149

let path = "input.txt";
path = "/dev/stdin";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
let N = Number(input[0]);
for (let i = 1; i <= N; i++) {
    input[i] = input[i].split(" ").map(Number);
}
let cost = input;
let dp = new Array(N + 1);
for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(3).fill(0);
}
let r = [];
let g = [];
let b = [];
for (let i = 1; i <= N; i++) {
    r[i] = cost[i][0];
    g[i] = cost[i][1];
    b[i] = cost[i][2];
}
dp[1][0] = r[1];
dp[1][1] = g[1];
dp[1][2] = b[1];
for (let i = 2; i <= N; i++) {
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + r[i];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + g[i];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + b[i];
}
console.log(Math.min(dp[N][0], dp[N][1], dp[N][2]));

// reference
// https://blog.encrypted.gg/974
