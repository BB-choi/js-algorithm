// 로또
// https://www.acmicpc.net/problem/6603

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");

let answer = "";
const lottoCnt = 6;

for (let i = 0; i < input.length; i++) {
  const cur = input[i].split(" ").map(Number);
  if (cur[0] === 0) {
    break;
  }

  const [k, ...nums] = cur;
  let visited = Array.from({ length: k }).fill(0);

  function find(cur, cnt) {
    if (cnt === lottoCnt) {
      let selectedNums = [];
      for (let i = 0; i < k; i++) {
        if (visited[i]) {
          selectedNums.push(nums[i]);
        }
      }
      answer += selectedNums.join(" ") + "\n";
      return;
    }

    for (let i = cur; i < k; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        find(i, cnt + 1);
        visited[i] = 0;
      }
    }
  }

  find(0, 0);
  answer += "\n";
}

console.log(answer.slice(0, -1));
