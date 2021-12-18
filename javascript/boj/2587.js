// 2587 - 대표값2

let nums = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
// let nums = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n")
//     .map(Number);

nums.sort((a, b) => a - b);

let sum = 0;
for (let i = 0; i < 5; i++) {
    sum += nums[i];
}

console.log(parseInt(sum / 5));
console.log(nums[2]);
