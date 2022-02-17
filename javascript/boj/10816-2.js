// 숫자 카드 2
// https://www.acmicpc.net/problem/10816

let path = "input.txt";
// path ="/dev/stdin"

let input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input[0]);
const M = Number(input[2]);

let arrN = input[1].split(" ").map(Number);
let arrM = input[3].split(" ").map(Number);
let lenN = arrN.length;
let lenM = arrM.length;

let cards = {};
let answer = "";

arrN.forEach((el) => (cards[el] ? (cards[el] += 1) : (cards[el] = 1)));
arrM.forEach((el) =>
    cards[el] ? (answer += cards[el] + " ") : (answer += "0 ")
);

console.log(answer);
