let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
// let input = 10;
let star = "";
for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    for (let k = input - i - 1; k >= 0; k--) {
        star += " ";
    }
    for (let k = input - i - 1; k >= 0; k--) {
        star += " ";
    }
    for (let j = 1; j <= i; j++) {
        star += "*";
    }
    star += "\n";
}
for (let i = 1; i < input; i++) {
    for (let j = input - 1; j >= i; j--) {
        star += "*";
    }
    for (let k = 1; k <= i; k++) {
        star += " ";
    }
    for (let k = 1; k <= i; k++) {
        star += " ";
    }
    for (let j = input - 1; j >= i; j--) {
        star += "*";
    }
    star += "\n";
}

console.log(star);
