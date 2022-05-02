// 좌표 압축
// https://www.acmicpc.net/problem/18870

let stdin = "input.txt";
// stdin = "/dev/stdin"

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const filteredNums = [...new Set(nums)].sort((a, b) => a - b);
const map = new Map();
for (let i = 0; i < filteredNums.length; i++) {
  map.set(filteredNums[i], binSearch(filteredNums[i], filteredNums));
}

function binSearch(n, arr) {
  let left = 0;
  let right = arr.length;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === n) {
      result = mid;
      break;
    } else if (arr[mid] < n) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return result;
}

console.log(nums.map((num) => map.get(num)).join(" "));
