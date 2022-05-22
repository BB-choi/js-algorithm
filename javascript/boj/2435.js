// 기상청 인턴 신현수
// https://www.acmicpc.net/problem/2435

let stdin = "input.txt";
// stdin = "/dev/stdin";

const input = require("fs").readFileSync(stdin).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
let maxNum = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
  let sum = nums[i];
  let cnt = 1;
  for (let j = i + 1; j < i + K && j < N; j++) {
    sum += nums[j];
    cnt++;
  }
  if (cnt === K) {
    maxNum = Math.max(maxNum, sum);
  }
}

console.log(maxNum);
