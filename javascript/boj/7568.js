let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "5\n55 185\n 58 183\n88 186\n60 175\n46 155"
//     .toString()
//     .trim()
//     .split("\n");
let N = Number(input[0]);
input.shift();

let count = 0;
let result = "";

let p = input.map((x) => x.trim().split(" "));
for (let i = 0; i < N; i++) {
    count = 0;
    let kg = Number(p[i][0]);
    let cm = Number(p[i][1]);
    for (let j = 0; j < N; j++) {
        if (j == i) {
            continue;
        }
        if (kg < Number(p[j][0]) && cm < Number(p[j][1])) {
            count++;
        }
    }
    result += `${count + 1} `;
}
console.log(result);
