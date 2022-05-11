// 로또
// https://www.acmicpc.net/problem/6603

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const len = input.length;
const cnt = 6;

let answer = "";

let p = [];
for (let i = 0; i < len; i++) {
  if (input[i] === "0") {
    break;
  }

  const [k, ...S] = input[i].trim().split(" ").map(Number);
  DFS(0, 0, S);
  answer += "\n";
}

function DFS(L, num, arr) {
  if (L === cnt) {
    answer += [...p].join(" ") + "\n";
    return;
  }

  for (let i = num; i < arr.length; i++) {
    p[L] = arr[i];
    DFS(L + 1, i + 1, arr);
  }
}

console.log(answer);
