// 10866 - 덱

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input =
//     "15\npush_back 1\npush_front 2\nfront\nback\nsize\nempty\npop_front\npop_back\npop_front\nsize\nempty\npop_back\npush_front 3\nempty\nfront"
//         .toString()
//         .trim()
//         .split("\n");
let N = Number(input[0].trim());
let deque = [];
let ans = "";

const runCmd = (arr) => {
    let dequeLen = deque.length;
    let cmd = arr[0];
    let num;
    if (arr[1]) {
        num = Number(arr[1].trim());
    }
    if (cmd == "push_front") {
        deque.unshift(num);
    } else if (cmd === "push_back") {
        deque.push(num);
    } else if (cmd === "pop_front") {
        if (dequeLen) {
            ans += deque.shift() + "\n";
        } else {
            ans += "-1\n";
        }
    } else if (cmd === "pop_back") {
        if (dequeLen) {
            ans += deque.pop() + "\n";
        } else {
            ans += "-1\n";
        }
    } else if (cmd === "size") {
        ans += dequeLen + "\n";
    } else if (cmd === "empty") {
        if (!dequeLen) {
            ans += "1\n";
        } else {
            ans += "0\n";
        }
    } else if (cmd === "front") {
        if (dequeLen) {
            ans += deque[0] + "\n";
        } else {
            ans += "-1\n";
        }
    } else if (cmd === "back") {
        if (dequeLen) {
            ans += deque[dequeLen - 1] + "\n";
        } else {
            ans += "-1\n";
        }
    }
};

for (let i = 1; i <= N; i++) {
    let cmd = input[i].toString().trim().split(" ");
    runCmd(cmd);
}

console.log(ans);
