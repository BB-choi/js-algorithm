// 1406 - 에디터

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n");

let str = input[0].trim();
let N = str.length;
let M = Number(input[1].trim());

let left = [];
let right = [];
for (let i = 0; i < N; i++) {
    left.push(str[i]);
}

// 배열 중간을 변경하거나 자르거나 붙이거나, shift, unshift등을 이용하면 시간 초과가 난다.
// push, pop만을 이용해서 구현
for (let i = 2; i < M + 2; i++) {
    let cur = input[i].trim().split(" ");
    if (!cur[1]) {
        if (cur[0] === "L") {
            if (left.length) {
                right.push(left.pop());
            }
        } else if (cur[0] === "D") {
            if (right.length) {
                left.push(right.pop());
            }
        } else if (cur[0] === "B") {
            if (left.length) {
                left.pop();
            }
        }
    } else {
        left.push(cur[1]);
    }
}

while (right.length) {
    left.push(right.pop());
}

let answer = left.join("");
console.log(answer);

// 시간초과
/* let cursor = N;
for (let i = 2; i < M + 2; i++) {
    let cur = input[i].trim().split(" ");
    if (!cur[1]) {
        if (cur[0] === "L") {
            if (cursor !== 0) {
                cursor--;
            }
        } else if (cur[0] === "D") {
            if (cursor !== str.length) {
                cursor++;
            }
        } else if (cur[0] === "B") {
            if (cursor !== 0) {
                str =
                    str.substring(0, cursor - 1) +
                    str.substring(cursor, str.length);
                cursor--;
            }
        }
    } else {
        str =
            str.substring(0, cursor) +
            cur[1] +
            str.substring(cursor, str.length);
        cursor++;
    }
}

console.log(str);
 */

// reference
// https://velog.io/@ptj1554/%EB%B0%B1%EC%A4%80-1406-%EC%97%90%EB%94%94%ED%84%B0-NodeJs
