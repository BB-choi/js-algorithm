// 1966 - 프린터 큐

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "3\n1 0\n5\n4 2\n1 2 3 4\n6 0\n1 1 9 1 1 1"
//     .toString()
//     .trim()
//     .split("\n");
// let input =
//     "1\n38 29\n7 1 8 4 7 1 3 4 6 5 7 8 3 2 8 5 9 4 6 8 2 1 8 7 4 8 5 3 7 6 3 4 6 1 5 2 8 5"
//         .toString()
//         .trim()
//         .split("\n");
// let input = "1\n4 1\n2 1 3 1".toString().trim().split("\n");

let N = Number(input.shift());
let answer = 0;

for (let i = 0; i < N * 2; i = i + 2) {
    let arr1 = input[i].toString().trim().split(" ");
    arr1 = arr1.map(Number);
    answer = 0;

    let docs = arr1[0];
    let targetIdx = arr1[1];

    let print = input[i + 1].toString().trim().split(" ").map(Number);

    // 인쇄하는 수
    let cnt = 0;
    const idx = [];
    for (let i = 1; i <= docs; i++) {
        idx.push(i);
    }
    idx[targetIdx] = "targetIdx";

    while (1) {
        if (print[0] === Math.max(...print)) {
            // 앞에 가장 큰 수가왔을때는 인쇄한다 인쇄 cnt번째
            cnt++;

            // Math.max가 target숫자와 같을때만 종료하고
            if (idx[0] === "targetIdx") {
                console.log(cnt);
                break;
                // 아닐땐 최대값만 프린터열과 idx저장한 곳에서 빼낸다
            } else {
                print.shift();
                idx.shift();
            }
            // 앞에 가장 큰 수가 아니면 앞에서 빼고, 뒤로 넣는 것을 반복한다
        } else {
            print.push(print.shift());
            idx.push(idx.shift());
        }
    }
}

// reference
// https://sleepybird.tistory.com/167
