// 2156 - 포도주 시식
// 2579 계단오르기와 유사하지만 다르다. (반드시 마셔야 하는 경우가 없고, 연속한 3잔을 마실 수 없는 것만 같다)
// 연속한 컵 3개를 건너뛰고 다음 컵에 든 포도주를 마실수도 있음.

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "6\n6\n10\n13\n9\n8\n1".toString().trim().split("\n");
// let input = "6\n100\n100\n1\n1\n100\n100".toString().trim().split("\n");
let n = Number(input[0].trim());
input = input.map((e) => Number(e.trim()));
input[0] = 0;

// dp[N]은 N번째 잔을 마시면서, 최대 와인을 마시는 경우
let dp = [];
dp[0] = input[0];
dp[1] = input[1];
if (n > 1) {
    dp[2] = dp[1] + input[2];
}
if (n > 2) {
    dp[3] = input[3] + Math.max(input[1], input[2]);
}
if (n > 3) {
    for (let i = 4; i <= n; i++) {
        dp[i] =
            input[i] +
            Math.max(
                dp[i - 2],
                input[i - 1] + dp[i - 3],
                // 여기까지만 하면, 두 단계를 건너 뛰는 경우는 찾을 수 없으므로 틀리게된다.

                // 이 경우를 추가해줌으로써 해결
                input[i - 1] + dp[i - 4]
            );
    }
}
// 배열에서 최대값을 찾는다. n번째 잔을 무조건 마셔야 하는 것이 아니므로
// n번째 잔을 무조건 마셔야 한다면 dp[n]이 됨
console.log(Math.max(...dp));

// reference
// https://www.acmicpc.net/board/view/64747
