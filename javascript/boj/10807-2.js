// 개수 세기
// https://www.acmicpc.net/problem/10807

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

const nums = input[1].split(" ").map(Number);
const v = Number(input[2]);

console.log(nums.filter((el) => el === v).length);
