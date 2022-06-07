// 오븐 시계
// https://www.acmicpc.net/problem/2525

let path = "input.txt";
// path = "/dev/stdin";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [h, m] = input[0].split(" ").map(Number);
const c = Number(input[1]);

let resultMin = m + c;
if (resultMin > 59) {
  let tempHour = 0;
  while (resultMin > 59) {
    resultMin -= 60;
    tempHour++;
  }
  h += tempHour;
}

if (h > 23) {
  let currentHour = h;
  while (currentHour > 23) {
    currentHour -= 24;
  }
  h = currentHour;
}

console.log(h, resultMin);
