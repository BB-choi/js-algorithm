let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = ["121", "1231", "12421", "0"];
input.pop();
let arr = input.map(Number);

for (let x of arr) {
    let num = x.toString().split("").map(Number);
    let len = num.length;
    let flag = false;
    for (let i = 0, chk = len - 1; i < len; i++, chk--) {
        // console.log(i, chk);
        if (num[i] === num[chk]) flag = true;
        else {
            flag = false;
            break;
        }
    }
    if (flag) console.log("yes");
    else console.log("no");
}
