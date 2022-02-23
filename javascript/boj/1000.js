// 1000 - A+B

// 입출력 확인하기
let path = "/dev/stdin";
// path = "input.txt";

const [A, B] = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split(" ")
    .map(Number);

console.log(A + B);
