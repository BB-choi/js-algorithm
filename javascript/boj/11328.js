// 11328번 - Strfry

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");
// let input = require("fs")
//     .readFileSync("input.txt")
//     .toString()
//     .trim()
//     .split("\n");

const N = Number(input[0].trim());
for (let i = 1; i <= N; i++) {
    let [str1, str2] = input[i].trim().split(" ");

    let str1Len = str1.length;
    let str2Len = str2.length;

    let flag = 0;
    if (str1Len === str2Len) {
        for (let j = 0; j < str2Len; j++) {
            let idx = str1.indexOf(str2[j]);

            if (idx !== -1) {
                str1 = str1.replace(str2[j], "0");
                flag = 1;
            } else if (idx === -1) {
                flag = 0;
                break;
            }
        }
    }

    if (flag === 0) {
        console.log("Impossible");
    } else if (flag === 1) {
        console.log("Possible");
    }
}

// 2. sort().join("")사용
// 3. charCodeAt()사용
