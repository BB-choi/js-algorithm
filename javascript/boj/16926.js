// 16926 - 배열 돌리기 1
// https://www.acmicpc.net/problem/16926

let stdin = "input.txt";
// stdin = "/dev/stdin"
let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

let [N, M, R] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr[i - 1] = input[i].split(" ").map(Number);
}

// 회전시키기
while (R) {
  for (let count = 0; count < Math.min(N, M) / 2; count++) {
    let maxN = N - 1 - count;
    let maxM = M - 1 - count;

    let tmp = arr[count][count];

    // 왼쪽으로 당기기
    for (let i = count; i < maxM; i++) {
      arr[count][i] = arr[count][i + 1];
    }

    // 위로 올리기
    for (let i = count; i < maxN; i++) {
      arr[i][maxM] = arr[i + 1][maxM];
    }

    // 오른쪽으로 밀기
    for (let i = maxM; i > count; i--) {
      arr[maxN][i] = arr[maxN][i - 1];
    }

    // 아래로 내리기
    for (let i = maxN; i > count; i--) {
      arr[i][count] = arr[i - 1][count];
    }

    arr[count + 1][count] = tmp;
  }

  R--;
}

console.log(arr.join("\n").replace(/,/g, " "));

// reference
// https://dkanxmstmdgml.tistory.com/731
