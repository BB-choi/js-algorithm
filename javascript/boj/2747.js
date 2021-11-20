let input = Number(require("fs").readFileSync("/dev/stdin").toString());
let num = input;
let arr = [];
let answer;

/* function fibo(n) {
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else {
        return fibo(n - 1) + fibo(n - 2);
    }
} 

let answer = fibo(num);
*/
arr[0] = 0;
arr[1] = 1;
for (let i = 2; i <= 45; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
}
if (num == 0) answer = 0;
else if (num == 1) answer = 1;
else {
    answer = arr[num];
}
console.log(answer);
