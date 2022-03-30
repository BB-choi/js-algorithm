// 소수의 연속합
// https://www.acmicpc.net/problem/1644

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim();
const N = Number(input);
let answer = 0;

// 에라토스테네스의 체로 소수 구하기
const primeArr = Array.from({ length: N + 1 }).fill(true);
primeArr[0] = false;
primeArr[1] = false;
for (let i = 2; i * i <= N; i++) {
  if (primeArr[i]) {
    for (let j = i * i; j <= N; j += i) {
      primeArr[j] = false;
    }
  }
}

for (let i = 2; i < N + 1; i++) {
  if (primeArr[i]) {
    let sum = i;
    let j = i + 1;
    if (sum === N) {
      answer++;
      continue;
    }
    while (sum <= N && j < N + 1) {
      if (sum === N) {
        answer++;
        break;
      }
      if (primeArr[j]) {
        sum += j;
      }
      if (sum > N) break;
      j++;
    }
  }
}

console.log(answer);
