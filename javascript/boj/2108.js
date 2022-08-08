// 통계학
// https://www.acmicpc.net/problem/2108

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

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

console.log(`${avg}\n${center}\n${often}\n${diff}`);
