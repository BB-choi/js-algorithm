let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// let input = 3;
let star = "";
for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i - 1; j++) {
        star += " ";
    }
    for (let k = i; k < input * 2 - i + 1; k++) {
        star += "*";
    }
    star += "\n";
}
for (let i = 1; i <= input - 1; i++) {
    for (let j = 1; j < input - i; j++) {
        star += " ";
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);
