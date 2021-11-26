let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("");

// let input = ["W", "A"];
// let input = ["U", "N", "U", "C", "I", "C"];

let num = 0;
function dial(alpha) {
    switch (alpha) {
        case "A":
        case "B":
        case "C":
            num += 3;
            break;
        case "D":
        case "E":
        case "F":
            num += 4;
            break;

        case "G":
        case "H":
        case "I":
            num += 5;
            break;

        case "J":
        case "K":
        case "L":
            num += 6;
            break;

        case "M":
        case "N":
        case "O":
            num += 7;
            break;

        case "P":
        case "Q":
        case "R":
        case "S":
            num += 8;
            break;

        case "T":
        case "U":
        case "V":
            num += 9;
            break;

        case "W":
        case "X":
        case "Y":
        case "Z":
            num += 10;
            break;

        default:
            break;
    }
}
for (let x of input) {
    // console.log(x);
    dial(x);
}
console.log(num);
