let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let num = input;
// let num = 5;
let star = "";
for (let i = 1; i <= num; i++) {
    for (let j = num - 1; j >= i; j--) {
        star += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);
