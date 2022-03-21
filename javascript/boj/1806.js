// 부분합
// https://www.acmicpc.net/problem/1806

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
// const visited = Array.from({ length: N }).fill(0);

let min = Number.MAX_SAFE_INTEGER;

let [left, right, sum] = [0, 0, 0];

while (left <= right) {
  // while(nums[left] && nums[right]) 조건은 틀림
  if (sum >= S) {
    if (right - left < min) {
      min = right - left;
    }
  }
  if (sum < S) {
    sum += nums[right];
    right++;
  } else {
    sum -= nums[left];
    left++;
  }
}
if (min === Number.MAX_SAFE_INTEGER) min = 0;
console.log(min);
/* 
// 시간초과
function find(cur, cnt, sum) {
  if (sum >= S) {
    if (cnt < min) {
      min = cnt;
    }
    return;
  }

  for (let i = cur; i < N; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      find(i, cnt + 1, sum + nums[i]);
      visited[i] = 0;
    }
  }
}

find(0, 0, 0); */
