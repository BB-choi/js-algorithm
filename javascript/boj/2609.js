// Reference
// https://nanarin.tistory.com/101
// https://imkh.dev/algorithm-gcd-lcm/

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

// let input = "24 18".toString().trim().split(" ");
input = input.map(Number);
let num1 = input[0];
let num2 = input[1];

// 최대공약수 구하기
const getGcd = function (a, b) {
    while (b !== 0) {
        let c = a;
        a = b;
        b = c % b;
    }
    return a;
};

let gcd = getGcd(num1, num2);

// 최소공배수 : a * b를 최대공약수로 나눈 값과 같다.
const getLcm = function (a, b) {
    // return (a * b) / getGcd(a, b);
    return (a * b) / gcd;
};

let lcm = getLcm(num1, num2);

console.log(gcd);
console.log(lcm);
