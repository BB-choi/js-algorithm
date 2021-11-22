let input = Number(require("fs").readFileSync("/dev/stdin").toString());

let num = input;
let star = "";
for (let i = 0; i < num; i++) {
    for (j = 0; j < i; j++) {
        star += " ";
    }
    for (j = i; j < num; j++) {
        star += "*";
    }
    star += "\n";
}
console.log(star);
