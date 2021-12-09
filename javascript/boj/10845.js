// 10845 - 큐

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input =
//     "15\npush 1\npush 2\nfront\nback\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\nfront"
//         .toString()
//         .trim()
//         .split("\n");
let N = Number(input[0].trim());
let queue = [];
let answer = "";
let idx = 0;

function run(arr) {
    let queueLen = queue.length;
    let cmd = arr[0];
    let num;
    if (arr[1]) {
        num = Number(arr[1].trim());
    }

    if (cmd === "push") {
        queue.push(num);
    } else if (cmd === "pop") {
        if (queueLen - idx) {
            answer += `${queue[idx]}\n`;
            idx++;
        } else {
            answer += `-1\n`;
        }
    } else if (cmd === "size") {
        answer += queueLen - idx + "\n";
    } else if (cmd === "empty") {
        if (queueLen - idx < 1) {
            answer += "1\n";
        } else {
            answer += "0\n";
        }
    } else if (cmd === "front") {
        if (queueLen - idx) {
            answer += `${queue[idx]}\n`;
        } else {
            answer += "-1\n";
        }
    } else if (cmd === "back") {
        if (queueLen - idx) {
            answer += `${queue[queueLen - 1]}\n`;
        } else {
            answer += "-1\n";
        }
    }
}

for (let i = 1; i <= N; i++) {
    let cmd = input[i].trim().split(" ");
    run(cmd);
}

console.log(answer);
