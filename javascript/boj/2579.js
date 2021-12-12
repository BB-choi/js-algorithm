// 2579 - 계단 오르기

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 테스트코드
// let input = "6\n10\n20\n15\n25\n10\n20".toString().trim().split("\n");
let N = Number(input[0].trim());
input.shift();
input = input.map(Number);
// input 배열이 계단의 값이 저장된 배열
// 1번째 계단이 인덱스 1이 될 수 있도록 인덱스 0에 임의의 값 넣기
input.unshift(0);

// 계산된결과를 저장
let dp = [];

dp[1] = input[1];
// 계단 2까지 가는 최대값
dp[2] = input[1] + input[2];
// 계단 3까지 가는 최대값 1, 2, 3은 안되므로 1, 3 혹은 2, 3
dp[3] = input[3] + Math.max(input[2], input[1]);

// 계단 4부터
for (let i = 4; i <= N; i++) {
    // 마지막 계단은 밟아야 하므로 input[i] +
    // 3개 계단을 연속하여 밟을 수 없으므로
    // 1. input[i - 1]을 밟는다면, input[i-2]는 밟을 수 없다. -> input[i - 1] + dp[i - 3]
    // 2. input[i - 2]를 밟는다면, dp[i - 2]와 같다.
    // 1. 과 2. 중 큰 값을 input[i]에 더해준다.
    dp[i] = input[i] + Math.max(input[i - 1] + dp[i - 3], dp[i - 2]);
}

console.log(dp[N]);
