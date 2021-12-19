// 1676 - 팩토리얼 0의 개수

let num = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
// let num = Number(require("fs").readFileSync("input.txt").toString().trim());

let answer = 0;
// if (num < 5) {
//     answer = 0;
// } else {
//     while (num > 0) {
//         num = parseInt(num / 5);
//         answer += num;
//     }
// }

// 0의 개수
// 5가 몇 번 곱해지는지 찾기
while (num > 0) {
    num = parseInt(num / 5);
    answer += num;
}

console.log(answer);

// references
// https://onlinemschool.com/math/formula/factorial_table/
// https://bba-jin.tistory.com/32
// https://velog.io/@po4tion/%EB%B0%B1%EC%A4%80-node.js-boj-1676-%ED%92%80%EC%9D%B4
