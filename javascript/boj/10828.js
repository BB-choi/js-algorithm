let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input =
//     "14\npush 1\npush 2\ntop\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\ntop"
//         .toString()
//         .trim()
//         .split("\n");
input.shift();
const len = input.length;
let stack = [];
let answer = "";

for (let i = 0; i < len; i++) {
    let arr = input[i].toString().trim().split(" ");
    let command = arr[0];
    let sLen = stack.length;
    if (command === "push") {
        stack[sLen] = Number(arr[1]);
        // stack.push(Number(arr[1]));
    } else if (command === "top") {
        if (sLen) {
            answer += `${stack[sLen - 1]}\n`;
        } else {
            answer += `-1\n`;
        }
    } else if (command === "size") {
        answer += `${sLen}\n`;
    } else if (command === "pop") {
        if (sLen) {
            answer += `${stack[sLen - 1]}\n`;
            // slice(시작 인덱스, 마지막 -1 번째까지) : 맨 뒤의 것 제외하고 잘라냄
            // 원본은 수정하지 않으므로 stack에 다시 넣어준다.
            stack = stack.slice(0, -1);
            // console.log(stack.pop());
        } else {
            answer += `-1\n`;
        }
    } else if (command === "empty") {
        if (!sLen) {
            answer += `1\n`;
        } else {
            answer += `0\n`;
        }
    }
}
console.log(answer);

// 시간초과
// 반복문 안에서 console.log 매번 찍어주는것
// push(), pop()
/* if (command === "push") {
        stack.push(Number(arr[1]));
    } else if (command === "top") {
        if (sLen) {
            console.log(stack[sLen - 1]);
        } else {
            console.log(-1);
        }
    } else if (command === "size") {
        console.log(sLen);
    } else if (command === "pop") {
        if (sLen) {
            console.log(stack.pop());
        } else {
            console.log(-1);
        }
    } else if (command === "empty") {
        if (!sLen) {
            console.log(1);
        } else {
            console.log(0);
        }
    } */
