// 11399 - ATM

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [N, p] = input;
N = +N;
let arrP = p.split(" ").map(Number);

// 오름차순
arrP.sort((a, b) => a - b);

let num = 0;
// 합을 push할 배열
let nums = [];
for (let i = 0; i < N; i++) {
    num += arrP[i];
    nums.push(num);
}

// 배열에 들어있는 값을 더해서 출력
console.log(nums.reduce((a, b) => a + b));
