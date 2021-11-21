let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = ["5", "5", "4", "3", "2", "1"];
input.shift();
let arr = input.map(Number);
arr.sort((a, b) => a - b);
console.log(arr.join("\n"));
