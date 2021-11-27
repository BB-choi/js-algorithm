let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("");

// let input = "2143".toString().trim().split("");
// let input = "999998999".toString().trim().split("");
// let input = "61423".toString().trim().split("");
// let input = "500613009".toString().trim().split("");
let numArr = input.map(Number);
numArr = numArr.sort((a, b) => b - a);

console.log(numArr.join(""));
