// 2309 - 일곱 난쟁이

let dwarfs = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
// let dwarfs = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n")
//     .map(Number);

let dwarfsHeight = 0;

// for (let i = 0; i < 9; i++) {
//     dwarfsHeight += dwarfs[i];
// }
dwarfsHeight = dwarfs.reduce((a, b) => a + b);

let flag = 0;
let d1, d2;
let answer = [];
for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
        if (dwarfsHeight - (dwarfs[i] + dwarfs[j]) === 100) {
            d1 = i;
            d2 = j;
            flag = 1;
            break;
        }
    }
    if (flag) {
        break;
    }
}

for (let i = 0; i < 9; i++) {
    if (i !== d1 && i !== d2) {
        answer.push(dwarfs[i]);
    }
}

answer.sort((a, b) => a - b);
console.log(answer.join("\n"));
