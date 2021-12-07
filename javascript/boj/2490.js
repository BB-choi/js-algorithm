// 2490번 - 윷놀이

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "0 1 0 1\n1 1 1 0\n0 0 1 1\n1 1 1 1 ".toString().trim().split("\n");
for (let x of input) {
    let line = x.toString().trim().split(" ");
    let cnt0 = 0;
    let cnt1 = 0;
    line = line.map(Number);
    for (let i = 0; i < 4; i++) {
        if (line[i] === 0) {
            cnt0++;
        } else if (line[i] === 1) {
            cnt1++;
        }
    }

    if (cnt0 === 1) {
        console.log("A");
    } else if (cnt0 === 2) {
        console.log("B");
    } else if (cnt0 === 3) {
        console.log("C");
    } else if (cnt0 === 4) {
        console.log("D");
    } else if (cnt1 === 4) {
        console.log("E");
    }
}
