// 巻物 (Scroll)
// https://www.acmicpc.net/problem/22016

let path = "input.txt";
// path = "/dev/stdin";

let [nums, str] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

let [n, k] = nums.split(" ").map(Number);
k--;

const check = (char) => {
  if (char.toUpperCase() === char) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
};

const str2 = str.split("");

let answer = str2
  .slice(0, k)
  .concat(str2.slice(k).map((el) => check(el)))
  .join("");

console.log(answer);
