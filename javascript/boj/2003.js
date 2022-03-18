// 수들의 합 2
// https://www.acmicpc.net/problem/2003

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
let count = 0;

for (let i = 0; i < N; i++) {
  let sum = nums[i];
  let j = i + 1;
  while (sum < M && nums[j]) {
    sum += nums[j];
    j++;
  }
  if (sum === M) count++;
}

console.log(count);
