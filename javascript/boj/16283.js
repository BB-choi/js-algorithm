// let input = require("fs")
//     .readFileSync("/dev/stdin")
//     .toString()
//     .trim()
//     .split(" ");
// let arr = [];
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.on("line", function (line) {
//     arr.push(line);

//     rl.close();
// }).on("close", function () {
//     process.exit();
// });

// // let input = "3 4 9 32".toString().trim().split(" ");
// let arr = arr.toString().trim().split(" ");
// arr = arr.map(Number);
// input = input.map(Number);

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
    input = line.toString().trim().split(" ").map(Number);

    rl.close();
}).on("close", function () {
    // a 양이 먹는 그램수 b 염소가 먹는 그램수 n 양수 + 염소수 w 총 사료양
    let [a, b, n, w] = input;
    // let [a, b, n, w] = input;

    let countA = 0;
    let countB = 0;
    // 최소 1마리는 있다.
    countA++;
    countB++;
    w -= a;
    w -= b;
    let big = a > b ? a : b;
    let small = a > b ? b : a;
    while (w) {
        if (w % big === 0) {
            w -= big;
            big === a ? countA++ : countB++;
            // countA++;
        } else if (w % small === 0) {
            w -= small;
            small === a ? countA++ : countB++;
            // countB++;
        } else if (w > big) {
            w -= big;
            big === a ? countA++ : countB++;
            // a > b ? countA++ : countB++;
        } else if (w > small) {
            w -= small;
            small === a ? countA++ : countB++;
            // a > b ? countB++ : countA++;
        } else {
            break;
        }
    }

    if (countA + countB === n) {
        console.log(countA, countB);
    } else {
        console.log(-1);
    }
    process.exit();
});

// // a 양이 먹는 그램수 b 염소가 먹는 그램수 n 양수 + 염소수 w 총 사료양
// let [a, b, n, w] = input;
// // let [a, b, n, w] = input;

// let countA = 0;
// let countB = 0;
// // 최소 1마리는 있다.
// countA++;
// countB++;
// w -= a;
// w -= b;
// while (w) {
//     if (w % big === 0) {
//         w -= big;
//         big === a ? countA++ : countB++;
//         // countA++;
//     } else if (w % small === 0) {
//         w -= small;
//         small === a ? countA++ : countB++;
//         // countB++;
//     } else if (w > big) {
//         w -= big;
//         big === a ? countA++ : countB++;
//         // a > b ? countA++ : countB++;
//     } else if (w > small) {
//         w -= small;
//         small === a ? countA++ : countB++;
//         // a > b ? countB++ : countA++;
//     } else {
//         break;
//     }
// }

// if (countA + countB === n) {
//     console.log(countA, countB);
// } else {
//     console.log(-1);
// }
