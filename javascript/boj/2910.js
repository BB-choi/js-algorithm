// 빈도 정렬
// https://www.acmicpc.net/problem/2910

let stdin = "input.txt";
// stdin = "/dev/stdin";

let input = require("fs").readFileSync(stdin).toString().trim().split("\n");
const [N, C] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

const obj = {};
const order = [];

for (let i = 0; i < N; i++) {
  if (obj[nums[i]]) {
    obj[nums[i]] = obj[nums[i]] + 1;
  } else {
    obj[nums[i]] = 1;
    order.push(nums[i]);
  }
}

const arr = Object.entries(obj);
arr.sort((a, b) => {
  if (a[1] > b[1]) return -1;
  if (a[1] < b[1]) return 1;
  if (a[1] === b[1]) {
    if (order.indexOf(Number(a[0])) < order.indexOf(Number(b[0]))) {
      return -1;
    } else {
      return 1;
    }
  }
});

const len = arr.length;
answer = "";
for (let i = 0; i < len; i++) {
  let [char, cnt] = arr[i];
  while (cnt) {
    answer += char;
    answer += " ";
    cnt--;
  }
}

console.log(answer);
