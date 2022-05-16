// 수들의 합 2
// https://www.acmicpc.net/problem/2003

let path = "input.txt";
// path ="/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let answer = 0;
for (let i = 0; i < N; i++) {
  let sum = nums[i];

  for (let j = i + 1; j < N; j++) {
    if (sum >= M) {
      break;
    }
    sum += nums[j];
  }

  if (sum === M) {
    answer++;
  }
}

console.log(answer);
