// 1009 - 분산처리

let path = "/dev/stdin";
// path = "input.txt";

// aⁿ 과 같은 형태로는 연산할 수 없으므로 규칙찾기 (--> ^4 안에 규칙 반복)

let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [T, ...testCases] = input;
T = +T;
testCases = testCases.map((el) => el.split(" ").map(Number));

for (let i = 0; i < T; i++) {
    let [a, b] = testCases[i];
    let pow = b % 4;
    if (pow === 0) {
        pow = 4;
    }
    let result = a ** pow % 10;
    // % 0 이면, 10번째 컴퓨터
    let comNo = result === 0 ? 10 : result;

    console.log(comNo);
}
