// 배열 합치기
// https://www.acmicpc.net/problem/11728

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);
const answer = [];

let pointerA = 0;
let pointerB = 0;
while (pointerA < N && pointerB < M) {
    // answer[i]
    let curA = arrA[pointerA];
    let curB = arrB[pointerB];
    if (curA < curB) {
        answer.push(curA);
        pointerA++;
    } else {
        answer.push(curB);
        pointerB++;
    }
}

while (pointerA < N) {
    answer.push(arrA[pointerA++]);
}
while (pointerB < M) {
    answer.push(arrB[pointerB++]);
}

console.log(answer.join(" "));
