let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 입력테스트
// let input =
//     "15\npush 1\npush 2\nfront\nback\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\nfront"
//         .toString()
//         .trim()
//         .split("\n");
// 큰 수 push 테스트
// let input = "6\npush 100000\npush 90002200\nback\nfront\npop\nempty"
//     .toString()
//     .trim()
//     .split("\n");
let len = Number(input.shift());
let queue = [];
let str = "";
let idx = 0;
for (let i = 0; i < len; i++) {
    let arr = input[i].toString().trim().split(" ");
    // arr.length가 2인경우에만 push
    if (arr.length > 1) {
        queue.push(arr[1]);
    } else {
        if (arr[0] === "pop") {
            // shift()하면 인덱스0을 제거하고 모든 요소를 앞으로 당겨와야함(시간이 소요됨)
            // 인덱스0 처럼 사용할 변수를 선언하고 pop할때마다 +1 해 줘서 사용
            if (queue[idx]) {
                str += queue[idx] + "\n";
                idx++;
            } else {
                str += -1 + "\n";
            }
        } else if (arr[0] === "front") {
            if (queue[idx]) {
                str += queue[idx] + "\n";
            } else {
                str += -1 + "\n";
            }
        } else if (arr[0] === "back") {
            if (queue[idx]) {
                str += queue[queue.length - 1] + "\n";
            } else {
                str += -1 + "\n";
            }
        } else if (arr[0] === "size") {
            // idx++를 이용해서 queue[0]처럼 이용하면, queue.length한 값이 다르게 나오므로
            // size의 경우 queue.length - idx로 변경
            // 혹시나 음수를 나올 경우를 대비해서 if (queue.length - idx < 0)
            if (queue.length - idx < 0) {
                str += 0 + "\n";
            } else {
                str += queue.length - idx + "\n";
            }
        } else if (arr[0] === "empty") {
            if (queue[idx]) {
                str += 0 + "\n";
            } else {
                str += 1 + "\n";
            }
        }
    }
}
// for of
// shift()이용시 배열을 재배치하는데 시간이 걸리므로 시간초과
/* for (let x of input) {
    let arr = x.toString().trim().split(" ");
    if (arr[0] === "push") {
        queue.push(Number(arr[1]));
    } else if (arr[0] === "pop") {
        if (queue[0]) {
            str += queue.shift() + "\n";
        } else {
            str += -1 + "\n";
        }
    } else if (arr[0] === "front") {
        if (queue[0]) {
            str += queue[0] + "\n";
        } else {
            str += -1 + "\n";
        }
    } else if (arr[0] === "back") {
        if (queue[0]) {
            str += queue[queue.length - 1] + "\n";
        } else {
            str += -1 + "\n";
        }
    } else if (arr[0] === "size") {
        str += queue.length + "\n";
    } else if (arr[0] === "empty") {
        if (queue[0]) {
            str += 0 + "\n";
        } else {
            str += 1 + "\n";
        }
    }
} */

console.log(str);
