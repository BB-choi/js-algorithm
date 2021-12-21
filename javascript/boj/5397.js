// 5397 - 키로거
// 실버3, 연결 리스트

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

let N = Number(input[0].trim());

for (let i = 1; i <= N; i++) {
    let keylog = input[i];
    let L = keylog.length;
    // 커서 움직임에 따라 left, right 배열에 넣고, 빼고
    let left = [];
    let right = [];

    // let idx = 0;
    for (let j = 0; j < L; j++) {
        if (keylog[j] === "<") {
            if (left.length) {
                // 왼쪽으로 커서 이동시(이동 가능-left배열에 들어있는 것이 있을 경우) right로 보낸다
                right.push(left.pop());
            }
        } else if (keylog[j] === ">") {
            if (right.length) {
                // 오른쪽으로 커서 이동시(이동 가능 - right배열에 들어있는 것이 있을 경우) left로 보낸다
                // right는 반대방향으로 들어가므로 pop()으로 빼내고 마지막에 reverse().join("")
                left.push(right.pop());
            }
        } else if (keylog[j] === "-") {
            if (left.length) {
                left.pop();
            }
        } else {
            left.push(keylog[j]);
        }
        // console.log(left, right);
    }
    console.log(left.join("") + right.reverse().join(""));
}
