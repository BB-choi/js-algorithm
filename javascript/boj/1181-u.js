let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = [
//     "13",
//     "but",
//     "i",
//     "wont",
//     "hesitate",
//     "no",
//     "more",
//     "no",
//     "more",
//     "it",
//     "cannot",
//     "wait",
//     "im",
//     "yours",
// ];
// input = ["4", "asdf", "qwer", "asdf", , "qwer"];
input.shift();
let arr = [...new Set(input)];
// let arr = Array.from(new Set(input));
arr.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
    // 아래는 작동하지 않음, 확인 필요
    // if (a.length > b.length) return 1;
    // else if (a.length == b.length) {
    //     a.localeCompare(b);
    // } else if (a.length < b.length) return -1;
});
console.log(arr.join("\n"));
