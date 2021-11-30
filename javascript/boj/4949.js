let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 입력예시
// let input =
//     "So when I die (the [first] I will see in (heaven) is a score list).\n[ first in ] ( first out ).\nHalf Moon tonight (At least it is better than no Moon at all].\nA rope may form )( a trail in a maze.\nHelp( I[m being held prisoner in a fortune cookie factory)].\n([ (([( [ ] ) ( ) (( ))] )) ]).\n .\n."
//         .toString()
//         .trim()
//         .split("\n");
// let input = "]. ".toString().trim().split("\n");
// let input = "[()][.\n.".toString().trim().split("\n");
let arr = [];
let answer = "";
for (let x of input) {
    // 매 문장(x)마다 새로 빈 arr를 가지고 시작
    arr = [];
    for (let i = 0; i < x.length; i++) {
        answer = "yes";
        // pop 해 줄때 비교(pop된 요소와, 각 char가 같은지 비교)하기 위해 반대모양 괄호(닫는괄호)를 push
        if (x[i] === "(") {
            arr.push(")");
        } else if (x[i] === "[") {
            arr.push("]");
            // 만약에 괄호가 닫는 괄호이면 pop()으로 꺼내면서 temp 변수에 저장
        } else if (x[i] === "]" || x[i] === ")") {
            let temp = arr.pop();
            if (temp === x[i]) {
                answer = "yes";
                // pop()으로 꺼내진 것이 기존의 닫는 괄호 순서와 어긋나거나
            } else if (temp !== x[i]) {
                answer = "no";
                break;
                // pop()으로 꺼내진 것이 없거나
            } else if (temp === undefined) {
                answer = "no";
                break;
            }
        }
        // for문으로 x의 마지막 인덱스까지 반복했는데도 arr에 남은 요소가 있다면 "no"
        if (arr.length) {
            answer = "no";
        }
        // i++;
        // console.log(arr);
    }
    if (x.length !== 1 && x[0] !== ".") {
        console.log(answer);
    }
}
// console.log(answer);
