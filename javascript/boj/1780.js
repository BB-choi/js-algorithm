// 1780 - 종이의 개수

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

let [N, ...arr] = input;
N = +N;
arr = arr.map((el) => el.split(" ").map(Number));

let checked = [0, 0, 0];

// num * num 안의 모든 숫자가 같은지 판별
function chkSameInNum(row, col, num) {
    // 체크시작하는 위치
    let start = arr[row][col];

    for (let i = row; i < row + num; i++) {
        for (let j = col; j < col + num; j++) {
            // 시작하는위치의 값과 같지 않다면 false
            if (start !== arr[i][j]) {
                return false;
            }
        }
    }
    // 같다면 true
    return true;
}

function divide(row, col, num) {
    if (chkSameInNum(row, col, num)) {
        // checked[0] -> -1
        // checked[1] -> 0
        // checked[2] -> 1
        checked[arr[row][col] + 1]++;
    } else {
        // 같지않으면 쪼갠다
        num /= 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                divide(row + num * i, col + num * j, num);
            }
        }
    }
}

divide(0, 0, N);
console.log(checked.join("\n"));

// reference
// https://chanhuiseok.github.io/posts/baek-13/
// https://tesseractjh.tistory.com/95?category=470361
