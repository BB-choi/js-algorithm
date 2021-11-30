let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let N = input;

// 입력테스트
// let N = 8;
let str = "";
for (let i = 0; i < N; i++) {
    str += " ".repeat(i);
    str += "*".repeat(2 * N - (2 * i + 1));
    str += "\n";
}
console.log(str);
