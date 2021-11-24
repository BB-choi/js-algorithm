let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// let input = 3;
let star = "";
for (let i = 0; i < input; i++) {
    for (let j = input - 1; j > i; j--) {
        star += " ";
    }
    star += "*";
    if (i >= 1) {
        star += " ";
        star += "*";
        for (let k = 0; k < i - 1; k++) {
            star += " ";
            star += "*";
        }
    }
    star += "\n";
}
console.log(star);
