let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input =
//     "6\n(())())\n(((()())()\n(()())((()))\n((()()(()))(((())))()\n()()()()(()()())()\n(()((())()("
//         .toString()
//         .trim()
//         .split("\n");
// let input = "3\n((\n))\n())(()".toString().trim().split("\n");
let rep = Number(input[0]);
input.shift();
let answer = "YES";
for (let i = 0; i < rep; i++) {
    let arr = input[i].toString().trim().split("");
    let len = arr.length;
    let stack = [];
    answer = "YES";
    for (let j = 0; j < len; j++) {
        if (arr[j] === "(") stack.push("(");
        else if (arr[j] === ")") {
            if (!stack.pop()) {
                answer = "NO";
                break;
            }
        }
    }

    if (stack.length !== 0) answer = "NO";
    console.log(answer);
}
