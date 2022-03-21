// 부분수열의 합
// https://www.acmicpc.net/problem/1182

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

let answer = 0;
function find(cur, sum) {
  if (cur === N) {
    if (sum === S) {
      answer++;
    }
    return;
  }

  find(cur + 1, sum);
  find(cur + 1, sum + nums[cur]);
}

find(0, 0, 0);
if (S === 0) {
  answer -= 1;
}

console.log(answer);
