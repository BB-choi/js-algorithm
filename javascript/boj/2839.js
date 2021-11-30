// 설탕배달

let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let answer = -1;
let count = 0;

while (1) {
    if (N % 5 === 0) {
        answer = N / 5 + count;
        break;
    }
    if (N < 0) {
        answer = -1;
        break;
    }
    N -= 3;
    count++;
}

console.log(answer);
