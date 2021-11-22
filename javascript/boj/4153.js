let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = ["6 8 10", "25 52 60", "5 12 13", "0 0 0"];
input.pop();

let len = input.length;
for (let e of input) {
    let max = 0;
    let arr = e.split(" ").map(Number);
    // console.log(arr);
    // for (let i = 0; i < 3; i++)
    // {
    //     if(arr[i] > max) max = arr[i];
    // }
    let a = arr[0] * arr[0];
    let b = arr[1] * arr[1];
    let c = arr[2] * arr[2];
    // console.log(a, b, c);

    if (a + b === c || a + c === b || c + b === a) {
        console.log("right");
    } else {
        console.log("wrong");
    }
}
