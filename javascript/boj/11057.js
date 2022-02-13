// 오르막 수
// https://www.acmicpc.net/problem/11057

let filePath = "input.txt";
// filePath = "/dev/stdin"

const N = Number(require("fs").readFileSync(filePath).toString().trim());
let dp = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
let mod = 10007;

for (let i = 0; i <= 9; i++) {
    dp[1][i] = 1;
}

for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
        dp[i][j] = dp[i - 1][j] % mod;
        for (let k = j + 1; k <= 9; k++) {
            dp[i][j] += dp[i - 1][k] % mod;
        }
    }
}

let answer = dp[N].reduce((acc, cur) => acc + cur, 0);
console.log(answer % mod);
