// 1, 2, 3 더하기
// https://www.acmicpc.net/problem/9095

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs")
    .readFileSync(stdin)
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const N = input[0];
const nums = [];
for (let i = 1; i <= N; i++) {
    nums[i - 1] = input[i];
}

let maxN = Math.max(...nums);

const dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= maxN; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

let answer = "";
for (let x of nums) {
    answer += dp[x] + "\n";
}
console.log(answer);

// reference
// https://jyami.tistory.com/15
