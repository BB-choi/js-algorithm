// IOIOI
// https://www.acmicpc.net/problem/5525

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const N = Number(input[0]);
// const len = Number(input[1]);
const str = input[2];

let result = 0;
// let target = "";

// for (let i = 0; i < N; i++) {
//   target += "IO";
// }
// target += "I";
// const targetLen = target.length;

// for (let i = 2; i < len - targetLen; i++) {
//   let temp = str.slice(i - 2, i + 1);
//   if (temp === "IOI") {
//     const cur = str.slice(i - 2, i - 2 + targetLen);
//     if (cur === target) {
//       result++;
//     }
//   }
// }

let patternCount = 0;
for (let i = 1; i < str.length - 1; i++) {
  if (str[i - 1] === "I" && str[i] === "O" && str[i + 1] === "I") {
    patternCount++;
    if (patternCount === N) {
      patternCount--;
      result++;
    }
    i++;
  } else {
    patternCount = 0;
  }
}

console.log(result);
