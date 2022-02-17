// 이친수
// https://www.acmicpc.net/problem/2193

let filePath = "input.txt";
// filePath = "/dev/stdin"

let N = Number(require("fs").readFileSync(filePath).toString().trim());
let dp = [];
dp[0] = BigInt(0);
dp[1] = BigInt(1);
// dp[2] = 1;
// dp[3] = 2;
// dp[4] = 3;

for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[N].toString());
