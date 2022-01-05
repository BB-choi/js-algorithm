// 1076 - 저항

let path = "/dev/stdin";
// path = "input.txt";

let colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];

let input = require("fs")
    .readFileSync(path)
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.trim());

let [color1, color2, color3] = input;
let a = Number(
    colors.indexOf(color1).toString() + colors.indexOf(color2).toString()
);
let b = 10 ** colors.indexOf(color3);

console.log(a * b);
