// 쉬운 계단 수
// https://www.acmicpc.net/problem/10844

let filePath = "/dev/stdin";
filePath = "input.txt";

const N = Number(require("fs").readFileSync(filePath).toString().trim());
let dp = Array.from(Array(N + 1), () => Array(9 + 1).fill(0));
let mod = 1000000000;

for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
    dp[i][0] = dp[i - 1][1] % mod;
    dp[i][9] = dp[i - 1][8] % mod;
    for (let j = 1; j < 9; j++) {
        // if (j === 0) {
        //     dp[i][j] = dp[i - 1][1];
        // } else if (j === 9) {
        //     dp[i][j] = dp[i - 1][8];
        // } else
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % mod;
    }
}

let answer = 0;
answer = dp[N].reduce((acc, cur) => acc + cur, 0);
console.log(answer % mod);
