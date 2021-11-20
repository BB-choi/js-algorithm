let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// let input = [5, ["4 1 5 2 3"], 5, ["1 3 7 9 5"]];

let firstArr = [];
let secArr = [];
firstArr = input[1]
    .toString()
    .split(" ")
    .map((e) => parseInt(e));
secArr = input[3]
    .toString()
    .split(" ")
    .map((e) => parseInt(e));
input[0] = Number(input[0]);
input[2] = Number(input[2]);

// for (let i = 0; i < input[0]; i++) {
//     firstArr[i] = Number(firstArr[i]);
// }
// for (let i = 0; i < input[2]; i++) {
//     secArr[i] = Number(secArr[i]);
// }

firstArr.sort((a, b) => a - b);

let start;
let end;
let mid;
let secArrLen = input[2];
let firstArrLastIndex = input[0] - 1;
let answer;

function seek(arr, start, end, target) {
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (target === arr[mid]) {
            return 1;
        } else if (target < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return 0;
}

answer = secArr.map((v) => seek(firstArr, 0, firstArrLastIndex, v)).join("\n");
console.log(answer);

// for (let i = 0; i < secArrLen; i++) {
//     let target = secArr[i];
//     start = 0;
//     end = firstArrLastIndex;
//     answer = seek(firstArr, start, end, target);
//     console.log(answer);
// }
