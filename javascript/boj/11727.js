let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// let N = 8;
// let N = 12;

// 점화식
let dp = [];
dp[1] = 1;
dp[2] = 3;

for (let i = 3; i <= N; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[N]);

// dp를 bottom-up 아래에서부터 쌓아간다 0부터 1,2,3,....
// 메모이제이션
/* let dp = new Array(N + 1).fill(0);
function dfs(n) {
    if (n <= 1) {
        return 1;
    }
    if (dp[n] === 0) {
        // let ret = (dfs(n - 1) + dfs(n - 2) + dfs(n - 2)) % 10007;
        // dp[n] = ret;
        dp[n] = (dfs(n - 1) + dfs(n - 2) + dfs(n - 2)) % 10007;
        return ret;
    } else {
        return dp[n];
    }
}

console.log(dfs(N));
 */
