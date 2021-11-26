let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

let [size, ...board] = input;
const [n, m] = size.split(" ");
board = board.map((x) => x.trim().split(""));

const whiteBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];
const blackBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];
let count = 0;
let result = [];
for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
        for (let k = 0; k < 8; k++) {
            for (let l = 0; l < 8; l++) {
                if (board[i + k][j + l] !== whiteBoard[k][l]) {
                    count++;
                }
            }
        }
        result.push(count);
        count = 0;
        for (let k = 0; k < 8; k++) {
            for (let l = 0; l < 8; l++) {
                if (board[i + k][j + l] !== blackBoard[k][l]) {
                    count++;
                }
            }
        }
        result.push(count);
        count = 0;
    }
}

console.log(Math.min(...result));
