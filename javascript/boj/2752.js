// 2752번 - 세수정렬

let numbers = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");
// let numbers = "3 1 2".toString().trim().split(" ");
numbers = numbers.map(Number);

numbers.sort((a, b) => a - b);
console.log(numbers.join(" "));
