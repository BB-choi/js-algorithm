// 알파벳 개수
// https://www.acmicpc.net/problem/10808

let path = "input.txt";
// path = "/dev/stdin";

let words = require("fs").readFileSync(path).toString().trim().split("");
const map = new Map();
const len = words.length;

for (let i = 0; i < len; i++) {
  if (map.has(words[i])) {
    map.set(words[i], map.get(words[i]) + 1);
  } else {
    map.set(words[i], 1);
  }
}

const a = 97;
const z = 122;
const answer = [];

for (let i = a; i <= z; i++) {
  if (map.has(String.fromCharCode(i))) {
    answer.push(map.get(String.fromCharCode(i)));
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
