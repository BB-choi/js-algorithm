// 9095 - 1, 2, 3 더하기

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "3\n4\n7\n10".toString().trim().split("\n");
let dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
dp[4] = 7;

for (let i = 5; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

let T = Number(input[0].trim());
input.shift();

let answer = "";
for (let i = 0; i < T; i++) {
    let num = Number(input[i].trim());
    answer += dp[num] + "\n";
}

console.log(answer);
