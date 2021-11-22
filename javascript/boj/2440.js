let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let num = input;
// let num = 5;
let star = "";
for (let i = num; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);
