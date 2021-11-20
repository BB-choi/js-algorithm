let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let num = input;
let answer;

function fibo(n) {
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

answer = fibo(num);

console.log(answer);
