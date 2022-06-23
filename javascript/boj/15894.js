// 수학은 체육과목 입니다
// https://www.acmicpc.net/problem/15894

let path = "input.txt";
// path = "/dev/stdin";

let [n] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 맨 아래에 쌓이는 상자의 개수의 아랫변 + 층 수 만큼 쌓이는 윗변 + 층마다 양 옆 변 (왼쪽 오른쪽이므로 * 2)
let answer = n + n + n * 2;
console.log(answer);
