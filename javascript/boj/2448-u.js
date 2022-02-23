let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let N = 3;
let str = "";
while (N > 1) {
    for (let i = 0; i < N; i++) {
        str += " ".repeat(N - i + 1);
        str += "*";
        str += "\n";
        str += " ".repeat(N - 2);
        str += "* *";
        str += "\n";
        str += "*****";
        str += " ".repeat(i);
        str += "\n";
    }

    N /= 6;
}

function star(n) {
    console.log(n);
}

console.log(str);
