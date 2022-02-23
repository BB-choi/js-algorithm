let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

const N = Number(input[0].trim());
input.shift();

// heap에 배열을 넣어줄 건데, [원래값, 절대값] 형식으로 넣는다.
let heap = [];
let answer = "";

function printDelete() {
    if (!heap.length) {
        answer += "0\n";
    } else {
        // 절대값을 비교해서 작은 수를 출력하고, heap배열에서 삭제한다.
    }
}

for (let i = 0; i < N; i++) {
    let cmd = Number(input[i].trim());

    if (!cmd) {
        heap.push([cmd, cmd > 0 ? cmd : -cmd]);
    } else {
        printDelete();
    }
}
