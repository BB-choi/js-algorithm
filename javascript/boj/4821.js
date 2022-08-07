// 페이지 세기
// https://www.acmicpc.net/problem/4821

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let len = input.length;

let answer = "";
for (let i = 0; i < len; i += 2) {
  const cur = Number(input[i].trim());

  if (cur === 0) {
    console.log(answer);
    break;
  }

  const nums = input[i + 1]
    .trim()
    .split(",")
    .map((el) => el.split("-").map(Number));

  const p = Array.from({ length: cur + 1 }).fill(0);

  nums.forEach(([l, h]) => {
    if (l <= cur) {
      if (l <= h) {
        for (let i = l; i < h + 1; i++) {
          if (i > cur) {
            break;
          }
          p[i] = 1;
        }
      } else if (!h) {
        p[l] = 1;
      }
    }
  });
  answer += `${p.filter((el) => el).length}\n`;
}
