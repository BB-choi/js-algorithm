// 김인천씨의 식료품가게 (Large)
// https://www.acmicpc.net/problem/12034

let path = "input.txt";
// path = "/dev/stdin";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const len = input.length;

const T = Number(input[0]);

let answer = "";
let caseIndex = 0;

const getDiscountedNums = (arr) => {
  const length = arr.length;
  const answer = [];

  for (let i = length - 1; i >= 0; i--) {
    if (!arr[i]) {
      continue;
    }

    const discountedIndex = arr.indexOf(arr[i] * 0.75);
    if (discountedIndex !== -1) {
      arr[i] = null;
      answer.push(arr[discountedIndex]);
      arr[discountedIndex] = null;
    }
  }

  return answer.reverse();
};

for (let i = 1; i <= T * 2; i += 2) {
  // const N = Number(input[i]);
  const nums = input[i + 1].split(" ").map(Number);
  const 결과배열 = getDiscountedNums(nums);
  answer += `Case #${++caseIndex}: ${결과배열.filter((el) => el).join(" ")}\n`;
}

console.log(answer);
