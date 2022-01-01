// 11660 - 구간 합 구하기 5

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let [_, ...arr] = input;
arr = arr.map((el) => el.split(" ").map(Number));

// arr을 표와 좌표로 나누기
let tbl = arr.slice(0, N);
let pos = arr.slice(-M);

// 좌표((1,1)부터 시작)와 같게 N+1개 요소로 만든다
let dp = new Array(N + 1);
for (let i = 0; i <= N; i++) {
    // x혹은 y가 0인 곳은 0으로 채워질 수 있도록 모든 곳을 0으로 채운다
    dp[i] = new Array(N + 1).fill(0);
}

// dp[i][j] 를 dp[0][0]에서 dp[i][j]까지 더한 값으로 채운다.
for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        // 표의 [i][j]값
        let cur = tbl[i - 1][j - 1];

        if (i === 1) {
            // x가 1일 경우 dp(x,y-1)에 현재 표의[i][j]값을 더해줌으로 끝난다.
            dp[i][j] = dp[i][j - 1] + cur;
        } else if (j === 1) {
            // y가 1일 경우
            dp[i][j] = dp[i - 1][j] + cur;
        } else {
            // 자신의 왼쪽(dp[i - 1][j]), 위쪽 값(dp[i][j - 1])을 더하고 중복된 값을 제거(dp[i - 1][j - 1])해 준 후 현재 표[i][j]값을 더해준다.
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + cur;
        }
    }
}

let answer = "";

for (let i = 0; i < M; i++) {
    let sum = 0;
    let [x1, y1, x2, y2] = pos[i];

    // dp[x2][y2] 는 (0,0)부터 (x2,y2)까지 더한 값이므로
    // (x1, y1) 이전부분을 빼 줘야 한다(- dp[x1 - 1][y2] - dp[x2][y1 - 1)
    // 이렇게 빼 줄경우 두 번 빠지는 부분(dp[x1 - 1][y1 - 1])이 있으므로 이 부분을 더해주면 sum을 구할 수 있다.
    sum = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];

    // console.log로 매번 찍으면 시간초과
    answer += sum + "\n";
}

console.log(answer);

// reference
// https://szcode.tistory.com/99
// https://donggoolosori.github.io/2020/10/13/boj-11660/
