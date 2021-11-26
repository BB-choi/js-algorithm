let input = require("fs").readFileSync("/dev/stdin").toString().trim();

// let input = ["l", "j", "e", "s", "=", "n", "j", "a", "k"];
// let input = ["d", "d", "z", "=", "z", "="];
// let input = ["n", "l", "j", "j"];
// let input = ["c", "=", "c", "="];
// let input = ["d", "z", "=", "a", "k"];
let strArr = input;
let len = strArr.length;
let count = 0;
let i = 0;
while (i < len) {
    if (strArr[i] == "c" && (strArr[i + 1] == "=" || strArr[i + 1] == "-")) {
        count++;
        i = i + 2;
    } else if (strArr[i] == "d" && strArr[i + 1] == "-") {
        count++;
        i = i + 2;
    } else if (
        strArr[i] === "d" &&
        strArr[i + 1] === "z" &&
        strArr[i + 2] === "="
    ) {
        count++;
        i = i + 3;
    } else if (strArr[i] === "l" && strArr[i + 1] === "j") {
        count++;
        i = i + 2;
    } else if (strArr[i] === "n" && strArr[i + 1] === "j") {
        count++;
        i = i + 2;
    } else if (strArr[i] === "s" && strArr[i + 1] === "=") {
        count++;
        i = i + 2;
    } else if (strArr[i] === "z" && strArr[i + 1] === "=") {
        count++;
        i = i + 2;
    } else {
        count++;
        i++;
    }
    // console.log(i, count);
}

console.log(count);
