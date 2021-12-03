// 10757 - 큰 수 A+B
// 15740 - A+B - 9

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

// let input = "-999999999 1000000000".toString().trim().split(" ");
// let input = "123456789123456789123456789 987654321987654321987654321"
//     .toString()
//     .trim()
//     .split(" ");

input[0] = BigInt(input[0]);
input[1] = BigInt(input[1]);

let result = input[0] + input[1];
result = result.toString();
console.log(result);
