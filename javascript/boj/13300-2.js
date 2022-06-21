// 방 배정
// https://www.acmicpc.net/problem/13300

let path = "input.txt";
// path = "/dev/stdin";

let [info, ...students] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.trim().split(" ").map(Number));

const [N, K] = info;

const arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

students.forEach(([gender, grade]) => {
  arr[gender][grade] += 1;
});

let count = 0;
for (let i = 1; i <= 6; i++) {
  const female = arr[0][i];
  const male = arr[1][i];
  if (female) {
    if (female < K) {
      count++;
    } else {
      count += Math.ceil(female / K);
    }
  }
  if (male) {
    if (male < K) {
      count++;
    } else {
      count += Math.ceil(male / K);
    }
  }
}

console.log(count);
