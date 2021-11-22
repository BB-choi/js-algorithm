let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// let input = 5;
let star = "";

for (let i = 1; i <= input; i++) {
    for (let j = input; j >= i + 1; j--) {
        star += " ";
    }
    for (let k = 1; k <= i; k++) {
        star += "*";
    }
    star += "\n";
}
for (let i = 0; i < input - 1; i++) {
    for (let j = 0; j <= i; j++) {
        star += " ";
    }
    for (let k = input - 1; k > i; k--) {
        star += "*";
    }
    star += "\n";
}
console.log(star);
