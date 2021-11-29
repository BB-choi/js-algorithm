let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// input이 3인경우, 9인 경우
// blank
// 3인 경우 - (1, 1)
// 9인 경우 - (3, 3) (3, 4) (3, 5), (4, 3) (4, 4) (4, 5), (5, 3) (5, 4) (5, 5)
// (1, 1), (3, 3) ==> i, j 가 %3 했을 때 1이 되는 경우

// 배열에 추가 : 1132ms
// 문자열에 추가 : 1960ms
// let arr = [];
let star = "";
for (let i = 0; i < input; i++) {
    for (let j = 0; j < input; j++) {
        // arr.push("*"); // 2차원 배열 만들기 테스트
        // printStar(i, j, input);
        addStar(i, j, input);
    }
    // arr.push("\n");
    star += "\n";
}

// function printStar(i, j, n) {
function addStar(i, j, n) {
    // console.log(i, j, n);
    if (i % 3 === 1 && j % 3 === 1) {
        // arr.push(" ");
        star += " ";
    } else if (n / 3 === 0) {
        // } else if (n === 1) {
        star += "*";
        // arr.push("*");
    } else {
        // printStar(Math.floor(i / 3), Math.floor(j / 3), n / 3);
        addStar(Math.floor(i / 3), Math.floor(j / 3), n / 3);
    }
}

// console.log(arr.join(""));
console.log(star);
