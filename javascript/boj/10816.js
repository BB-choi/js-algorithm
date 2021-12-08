let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = "10\n6 3 2 10 10 10 -10 -10 7 3\n8\n10 9 -5 2 3 4 5 -10"
//     .toString()
//     .trim()
//     .split("\n");
let N = Number(input[0].toString().trim());
let M = Number(input[2].toString().trim());

let arrN = input[1].toString().trim().split(" ").map(Number);
let arrM = input[3].toString().trim().split(" ").map(Number);

let objN = {};

for (let i = 0; i < N; i++) {
    if (objN[arrN[i]]) {
        objN[arrN[i]] += 1;
    } else {
        objN[arrN[i]] = 1;
    }
}

let ans = "";
for (let i = 0; i < M; i++) {
    if (objN[arrM[i]]) {
        ans += objN[arrM[i]] + " ";
    } else {
        ans += "0 ";
    }
}
console.log(ans);
