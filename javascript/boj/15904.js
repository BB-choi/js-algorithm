// UCPC는 무엇의 약자일까?
// https://www.acmicpc.net/problem/15904

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim();
const result = input.replace(/[^UCPC]/g, "").split("");

let start = 0;
let uPosition = result.indexOf("U", start);
let answer = "I hate UCPC";

if (uPosition !== -1) {
  start = uPosition + 1;
  let c1Position = result.indexOf("C", start);
  if (c1Position !== -1) {
    start = c1Position + 1;
    let pPosition = result.indexOf("P", start);
    if (pPosition !== -1) {
      start = pPosition + 1;
      let c2Position = result.indexOf("C", start);
      if (c2Position !== -1) {
        answer = "I love UCPC";
      }
    }
  }
}

console.log(answer);
