// 2×n 타일링
// https://www.acmicpc.net/problem/11726

let filePath = "input.txt";
// filePath = "/dev/stdin";

const n = Number(require("fs").readFileSync(filePath).toString().trim());

let dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
