// Longest Common Substring
// https://www.acmicpc.net/problem/21592

let path = "input.txt";
// path = "/dev/stdin";

let [n, ...strings] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim());
let max = 0;
n = Number(n);

strings.sort((a, b) => a.length - b.length);
const minLengthStr = strings[0];
const minLength = minLengthStr.length;

for (let i = 0; i <= minLength - 1; i++) {
  for (let j = i + 1; j <= minLength; j++) {
    const currentString = minLengthStr.slice(i, j);
    const curLength = currentString.length;

    let flag = true;
    for (let k = 1; k < n; k++) {
      if (!strings[k].includes(currentString)) {
        flag = false;
        break;
      }
    }
    if (flag && max < curLength) {
      max = curLength;
    }
  }
}

console.log(max);
