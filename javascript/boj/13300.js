// 13300번 - 방 배정

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

let [N, K] = input[0].trim().split(" ").map(Number);

// 여학생
let stu0 = new Array(6).fill(0);
// 남학생
let stu1 = new Array(6).fill(0);
let rooms = 0;

for (let i = 1; i <= N; i++) {
    let [S, Y] = input[i].trim().split(" ").map(Number);

    if (S === 0) {
        stu0[Y - 1]++;
    } else if (S === 1) {
        stu1[Y - 1]++;
    }
}

// console.log(stu0, stu1);

// 여, 남학생 배열을 돌면서 rooms 수에 추가
for (let i = 0; i < 6; i++) {
    // 올림해줘야함
    rooms += Math.ceil(stu0[i] / K);
    rooms += Math.ceil(stu1[i] / K);
}

console.log(rooms);
