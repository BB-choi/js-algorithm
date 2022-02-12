// 1로 만들기
// https://www.acmicpc.net/problem/1463

let filePath = "/dev/stdin";
// filePath = "input.txt";

const N = Number(require("fs").readFileSync(filePath).toString().trim());
let dp = [];

dp[0] = 0;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i <= N; i++) {
    let temp = [];
    if (i % 3 === 0) {
        temp.push(dp[Math.floor(i / 3)] + 1);
    }
    if (i % 2 === 0) {
        temp.push(dp[Math.floor(i / 2)] + 1);
    }
    temp.push(dp[i - 1] + 1);

    dp[i] = Math.min(...temp);
}

console.log(dp[N]);
