// 10817 - 세 수

let path = "/dev/stdin";
// let path = "input.txt";

let nums = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

nums.sort((a, b) => a - b);
console.log(nums[1]);
