// 30
// https://www.acmicpc.net/problem/10610

let stdin = "input.txt";
// stdin ="/dev/stdin"

let N = require("fs").readFileSync(stdin).toString().trim();
let answer = [-1];

if (N.includes(0)) {
    let nums = N.split("").map(Number);
    let sum = nums.reduce((a, b) => a + b);
    if (sum % 3 === 0) {
        answer = nums.sort((a, b) => b - a);
    }
}

console.log(answer.join(""));

// reference
// 배수판정법
// https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%88%98_%ED%8C%90%EC%A0%95%EB%B2%95
