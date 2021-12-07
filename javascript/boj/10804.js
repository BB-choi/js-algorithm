// 10804번 - 카드 역배치

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "5 10\n9 13\n1 2\n3 4\n5 6\n1 2\n3 4\n5 6\n1 20\n1 20"
//     .toString()
//     .trim()
//     .split("\n");
// let input = "1 1\n2 2\n3 3\n4 4\n5 5\n6 6\n7 7\n8 8\n9 9\n10 10"
//     .toString()
//     .trim()
//     .split("\n");
// let input = "1 20\n2 19\n3 18\n4 17\n5 16\n6 15\n7 14\n8 13\n9 12\n10 11"
//     .toString()
//     .trim()
//     .split("\n");
let arr = [];
for (let i = 0; i < 21; i++) {
    arr[i] = i;
}

for (let x of input) {
    let section = x.toString().trim().split(" ").map(Number);
    let arr1 = arr.slice(0, section[0]);
    let arr2 = arr.slice(section[0], section[1] + 1);
    let arr3 = arr.slice(section[1] + 1);

    /* let turn = parseInt(arr2.length / 2);
    let end = arr2.length - 1;
    for (let i = 0; i < turn; i++) {
        let temp = arr2[i];
        arr2[i] = arr2[end];
        arr2[end] = temp;
        end--;
    } */

    arr2 = arr2.reverse();

    arr = [...arr1, ...arr2, ...arr3];
    // arr.shift();
    // console.log(arr.join(" "));
    // console.log(arr);
}

let str = "";
for (let i = 1; i < 21; i++) {
    str += arr[i];
    if (i !== 20) {
        str += " ";
    }
}
console.log(str);
