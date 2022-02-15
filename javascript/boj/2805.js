// 나무 자르기
// https://www.acmicpc.net/problem/2805

let filePath = "input.txt";
// filePath = "/dev/stdin"

let input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let trees = input[1].split(" ");
let max = 0;

for (let i = 0; i < N; i++) {
    trees[i] = Number(trees[i]);
    if (trees[i] > max) max = trees[i];
}

let first = 0;
let mid = 0;
let answer = 0;
let last = max;

while (first <= last) {
    mid = Math.floor(first + (last - first) / 2);
    mid = Math.floor((first + last) / 2);

    // let cutted = trees.filter((el) => el - mid > 0).map((el) => el - mid);
    // let length = cutted.reduce((acc, cur) => acc + cur, 0);

    /* let length = trees.reduce((prev, cur) => {
        if (cur - mid > 0) {
            return prev + (cur - mid);
        } else {
            return prev;
        }
    }, 0); */

    let length = 0;
    for (let i = 0; i < N; i++) {
        if (trees[i] > mid) {
            length += trees[i] - mid;
        }
    }

    if (length >= M) {
        answer = mid;
        first = mid + 1;
    } else {
        last = mid - 1;
    }
}
console.log(answer);
