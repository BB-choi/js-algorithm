// 11726 - 2×N 타일링

// dp[n] = dp[n-1] + dp[n-2]

let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// let n = Number("2 ".toString().trim());
let dp = [];
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[n]);
