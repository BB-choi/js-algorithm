// 2630 - 색종이 만들기

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, ...arr] = input;
N = +N;
arr = arr.map((el) => el.split(" ").map(Number));

// [하양, 파랑]
let paper = [0, 0];

function isSame(row, col, num) {
    let start = arr[row][col];

    for (let i = row; i < row + num; i++) {
        for (let j = col; j < col + num; j++) {
            if (start !== arr[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function divide(row, col, num) {
    if (isSame(row, col, num)) {
        if (arr[row][col] === 0) {
            paper[0]++;
        } else if (arr[row][col] === 1) {
            paper[1]++;
        }
    } else {
        num /= 2;
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                divide(row + num * i, col + num * j, num);
            }
        }
    }
}

divide(0, 0, N);

console.log(paper.join("\n"));

// 1780 - 종이의 개수와 비슷하게 풀이
