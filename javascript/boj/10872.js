let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const facto = function (n) {
    if (n === 1 || n === 0) {
        return 1;
    }
    return n * facto(n - 1);
};

let answer = facto(N);
console.log(answer);
