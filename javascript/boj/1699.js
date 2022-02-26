// 제곱수의 합
// https://www.acmicpc.net/problem/1699

let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let dp = Array.from({ length: N + 1 }, (el, i) => i);

for (let i = 1; i <= N; i++) {
    for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
}

console.log(dp[N]);

// reference
// https://chanhuiseok.github.io/posts/baek-10/
