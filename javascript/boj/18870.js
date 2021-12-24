// 18870 - 좌표 압축

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

const N = Number(input[0].trim());
let x = input[1].trim().split(" ").map(Number);

// 이렇게 하면 여러번 과정을 거쳐야하고 원본 배열 x의 정렬이 변함
// let setX = new Set([...x.sort((a, b) => a - b)]);
// let uniqueX = [...setX];

// 한번에 처리 + 배열 x의 순서를 그대로 유지하면서
let uniqueX = [...new Set(x)].sort((a, b) => a - b);

// object 이용 5632ms
/* let obj = {};
uniqueX.forEach((el, idx) => (obj[el] = idx));

// console.log(N, x, setX, obj);
let answer = [];
for (let i = 0; i < N; i++) {
    // answer.push(uniqueX.indexOf(x[i]));
    answer.push(obj[x[i]]);
}

console.log(answer.join(" ")); */

// map이용 1432ms
/* let mapX = new Map();
for (let i = 0; i < uniqueX.length; i++) {
    mapX.set(uniqueX[i], i);
}

let answer = [];
for (let i = 0; i < N; i++) {
    answer.push(mapX.get(x[i]));
}

console.log(answer.join(" ")); */

// 배열 이용(이분탐색) 1408ms
function getNum(n) {
    let left = 0;
    let right = uniqueX.length;
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (uniqueX[mid] === n) {
            result = mid;
            break;
        } else if (uniqueX[mid] < n) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return result;
}

console.log(x.map((el) => getNum(el)).join(" "));
