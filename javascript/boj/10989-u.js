// 메모리초과
// https://www.acmicpc.net/board/view/71957

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = ["10", "5", "2", "3", "1", "4", "2", "3", "5", "1", "7"];
input.shift();
input = input.map(Number);
// let arr = input.map((x) => Number(x));
// arr.sort((a, b) => a - b);
// console.log(arr.join("\n"));
input.sort((a, b) => a - b);
const len = input.length;
let answer = "";
for (let i = 0; i < len; i++) {
    // console.log(input[i]);
    answer += input[i];
    answer += "\n";
}

console.log(answer);
