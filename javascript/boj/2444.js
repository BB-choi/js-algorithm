let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// let N = 5;
let str = "";
for (let i = N - 1; i >= 0; i--) {
    str += " ".repeat(i);
    str += "*".repeat(N - i);
    str += "*".repeat(N - i - 1);
    str += "\n";
}
for (let j = 1; j < N; j++) {
    str += " ".repeat(j);
    str += "*".repeat(N - j);
    str += "*".repeat(N - j - 1);
    str += "\n";
}
console.log(str);
