/* function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function reverseNum(num) {
    let result = 0;
    while (num) {
        result = result * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return result;
}

function solution(arr) {
    let answer = [];
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let num = reverseNum(arr[i]);
        if (isPrime(num)) {
            answer.push(num);
        }
    }
    return answer;
} */

function isPrime(num) {
    if (num === 1) return false;
    // for (let i = 2; i <= Math.floor(num / 2); i++) {
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function solution(arr) {
    let answer = [];
    for (let x of arr) {
        // let res = 0;
        // while (x) {
        //     let temp = x % 10;
        //     res = res * 10 + temp;
        //     x = parseInt(x / 10);
        // }
        let res = Number(x.toString().split("").reverse().join(""));
        if (isPrime(res)) answer.push(res);
    }
    return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
