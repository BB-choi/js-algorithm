let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 아래 코드 토대로 다시 고쳐봄
// https://www.acmicpc.net/source/30171110
// https://www.acmicpc.net/source/35936614

// let input = "8\n4\n3\n6\n8\n7\n5\n2\n1".toString().trim().split("\n");
// let input = "5\n1\n2\n5\n3\n4".toString().trim().split("\n");
// let input = "5\n4\n2\n3\n1\n5".toString().trim().split("\n");
// let input = "5\n3\n2\n1\n4\n5".toString().trim().split("\n");
const N = input[0];
input.shift();
// 목표 수열
const targetArr = input.map(Number);

// N까지의 숫자를 num을 이용해서 targetArr과 비교
let num = 1;
let stack = [];
// let answer = "";
let answer = [];

function peek(targetArr) {
    return targetArr[targetArr.length - 1];
}

let i = 0;

// if (!stack.length) {
//     stack.push(num++);
//     // answer += "+\n";
//     answer.push("+");
// }

while (1) {
    if (!stack.length || peek(stack) < targetArr[i]) {
        stack.push(num++);
        // answer += "+\n";
        answer.push("+");
        // console.log(1, peek(stack), targetArr[i]);
    } else if (peek(stack) === targetArr[i]) {
        // console.log(2, peek(stack), targetArr[i]);

        stack.pop();
        // answer += "-\n";
        answer.push("-");
        i++;
    } else {
        // console.log(3, peek(stack), targetArr[i]);
        // answer = "NO";
        console.log("NO");
        break;
    }
    if (answer.length === 2 * N) {
        console.log(answer.join("\n"));
        break;
    }
}
// if (answer.length === 2 * N) {
//     console.log(answer.join("\n"));
// }

// 기존 작성 코드(속도 : 4000ms 이상)
/* 
targetArr.reverse();
// 가지고있는 숫자들(오름차순)
let numArr = [];
// 목표수열과 같게 만들 배열(stack에 담았다가 result에 넣음)
let stack = [];
// let result = [];

// console.log로 찍을 결과
let answer = "";

// 처음에 가지고 시작하는 오름차순 숫자
for (let i = 0; i < N; i++) {
    numArr[i] = i + 1;
}

let numLen = numArr.length;
let tLen = targetArr.length;

function peek(targetArr) {
    return targetArr[targetArr.length - 1];
}

let i = 0;
// let T = 100;
while (1) {
    if (!numArr.length && !stack.length) {
        break;
    }
    if (
        // stack[stack.length - 1] === peek(targetArr) ||
        peek(stack) === peek(targetArr) ||
        numArr[i] <= peek(targetArr)
    ) {
        if (stack.length) {
            // if (stack[stack.length - 1] === peek(targetArr)) {
            if (peek(stack) === peek(targetArr)) {
                answer += `-\n`;
                targetArr.pop();
                stack.pop();
                // result.push(stack.pop());
            }
        }
        if (numArr[i] <= peek(targetArr)) {
            answer += `+\n`;
            stack.push(numArr.splice(0, 1)[0]);
        }
    } else {
        answer = "NO";
        break;
    }
}
console.log(answer);
 */
