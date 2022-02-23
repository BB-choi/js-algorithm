// 이모티콘
// https://www.acmicpc.net/problem/14226

let path = "input.txt";
// path = "/dev/stdin";
let input = require("fs").readFileSync(path).toString().trim();

let S = input;
let dp = [];
// dp[2] = 2;
// dp[4] = 4;
// dp[6] = 5;
// dp[8] = 6;
// dp[10] = 6;
// for (let i = 2; i <= S; i++) {
//     let n = 2;
//     if (i % 2) dp[i] = i;
//     else if (i % 2 === 0 && i > 11) {
//         let x = i / n;
//         let cnt = Number.MAX_SAFE_INTEGER;
//         while (n <= i / 2) {
//             if (Math.floor(x) === x) cnt = Math.min(cnt, dp[n] + x);
//             n++;
//             x = i / n;
//         }
//         dp[i] = cnt;
//     }
// }

dp[2] = 2;
dp[3] = 3;
for (let i = 4; i <= S; i++) {
    if (i % 2) {
        // dp[i] = dp[(i + 1) / 2] + 3;
        let n = 2;
        let x = Math.floor(i / n);
        let cnt = Number.MAX_SAFE_INTEGER;
        while (n <= (i + 1) / 2) {
            cnt = Math.min(cnt, dp[x] + 3);
            n++;
            x = Math.floor(i / n);
        }
        dp[i] = cnt;
    } else {
        let n = 2;
        let x = i / n;
        let cnt = Number.MAX_SAFE_INTEGER;
        while (n <= i / 2) {
            if (x === parseInt(x)) cnt = Math.min(cnt, dp[n] + x);
            n++;
            x = i / n;
        }
        dp[i] = cnt;
    }
}
console.log(dp);
console.log(dp[S]);
