let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
// 카드 수, 남는카드
// 1 1
// 2 2  -> 2의1승
// 3 2
// 4 4  -> 2의 2승
// 5 2
// 6 4 : 6 => 2의 2승 + 2 --> 2 * 2 = 4
// 7 6
// 8 8 -> 2의 3승
// 9 2
// 10 4
// 11 6 : 11 => 2의 3승 + 3 --> 3 * 2 = 6
// ... 16 16 -> 2의 4승
// 2의 n승 + x
// --> x가 0인경우에는 2의 n승, 0이 아닌 경우에는 x * 2

let pow, chkNum;
// if (input === 1) {
//     console.log(1);
// } else
// {
pow = 0;
chkNum = 0;
while (pow < 26) {
    chkNum = 2 ** pow;
    if (chkNum >= input) break;
    pow++;
}
pow--;
let num = input - Math.pow(2, pow);
if (num) {
    console.log(2 * num);
} else {
    console.log(Math.pow(2, pow));
}
// }

// 시간초과
// let arr = [];
// for (let i = 1; i <= input; i++) {
//     arr.push(i);
//     // arr[i] = i + 1;
// }

// while (arr.length > 1) {
//     // arr.shift();
//     arr = arr.slice(1);
//     arr.push(arr[0]);
//     // arr.shift();
//     arr = arr.slice(1);
// }
// console.log(arr[0]);
