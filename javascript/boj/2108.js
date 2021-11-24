let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = ["5", "1", "3", "8", "-2", "2"];
// let input = ["1", "4000"];
// let input = ["5", "-1", "-2", "-3", "-1", "-2"];
let arr = input.map(Number);
arr.shift();
let [avg, center, diff] = [0, 0, 0];
let len = arr.length;

let sum = 0;
for (let i = 0; i < len; i++) {
    sum += arr[i];
}
avg = Math.round(sum / len);

let arrSort = arr.sort((a, b) => a - b);
diff = arrSort[arrSort.length - 1] - arrSort[0];
center = arrSort[Math.floor(len / 2)];

const numMap = new Map();
for (let n of arrSort) {
    if (numMap.has(n)) {
        numMap.set(n, numMap.get(n) + 1);
    } else numMap.set(n, 1);
}

let getOften = [];
let maxOftenValue = 0;
numMap.forEach((val, key) => {
    if (val > maxOftenValue) {
        maxOftenValue = val;
        // 기존 maxOftenValue보다 큰 것을 발견했으므로 배열을 비워준다
        getOften = [];
        getOften.push(key);
    } else if (maxOftenValue === numMap.get(key)) {
        getOften.push(key);
    }
});

let often = getOften.length > 1 ? getOften[1] : getOften[0];

console.log(avg, center, often, diff);
