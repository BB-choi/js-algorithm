let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
let arr = input[1].split(" ");
// let arr = ["1", "3", "5", "7"];
arr = arr.map(Number);
let arrLen = arr.length;
let count = 0;

const isPrime = function (n) {
    let i = 2;
    if (n < 2) {
        return 0;
    }
    while (i <= n / i) {
        if (n % i == 0) {
            return 0;
        }
        i++;
    }
    return 1;
};

for (let i = 0; i < arrLen; i++) {
    if (isPrime(arr[i])) count++;
}

console.log(count);
