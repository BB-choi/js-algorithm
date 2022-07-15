// koukyoukoukokukikou
// https://www.acmicpc.net/problem/22524

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

const len = input.length;
const left = "qwertasdfgzxcvb";
const right = "yuiophjklnm";

let answer = "";

const getCount = (str) => {
  let count = 0;
  const strLen = str.length;

  let current;
  if (left.includes(str[0])) {
    current = left;
  } else {
    current = right;
  }
  for (let i = 1; i < strLen; i++) {
    if (current.includes(str[i])) {
      continue;
    } else {
      count++;
      if (current === left) {
        current = right;
      } else {
        current = left;
      }
    }
  }
  return count;
};

for (let i = 0; i < len; i++) {
  if (input[i] === "#") {
    break;
  }

  const current = input[i].trim();
  answer += getCount(current) + "\n";
}

console.log(answer);
