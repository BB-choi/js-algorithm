let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// 배열에 추가 : 1132ms
// 문자열에 추가 : 1960ms
// let arr = [];
let star = "";
for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        // arr.push("*");
        // printStar(i, j, input);
        addStar(i, j, input);
    }
    // arr.push("\n");
    star += "\n";
}

// function printStar(i, j, n) {
function addStar(i, j, n) {
    // console.log(i, j, n);
    if (i % 3 === 1 && j % 3 === 1) {
        // arr.push(" ");
        star += " ";
    } else if (n / 3 === 0) {
        // } else if (n === 1) {
        star += "*";
        // arr.push("*");
    } else {
        // printStar(Math.floor(i / 3), Math.floor(j / 3), n / 3);
        addStar(Math.floor(i / 3), Math.floor(j / 3), n / 3);
    }
}

// console.log(arr.join(""));
console.log(star);
