// 3986 - 좋은 단어

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 예제 입력
// let input = "3\nABAB\nAABB\nABBA".toString().trim().split("\n");
// let input = "3\nAAA\nAA\nAB".toString().trim().split("\n");
// let input = "1\nABBABB".toString().trim().split("\n");
const N = Number(input[0]);

input.shift();
// 체크할 문자 배열
let words = input;
// stack과 스택에서 pop한 것이 들어갈 popped 배열
let stack = [];
let popped = [];
// 좋은 문자를 카운팅할 count
let count = 0;

// words 배열 안에 있는 문자들을 모두 확인하기 위한 반복문
for (let i = 0; i < N; i++) {
    // 매 문자마다 새로운 빈 stack과 popped필요
    stack = [];
    popped = [];
    // 문자의 길이만큼 반복
    let abLen = words[i].length;
    // stack에 넣어두고 시작
    for (let j = 0; j < abLen; j++) {
        stack.push(words[i][j]);
    }
    // stack이 빌때까지 반복
    while (stack.length) {
        // popped에 아무것도 없는 경우에는
        if (!popped.length) {
            // stack에서 pop한 것을 popped에 넣어줌
            popped.push(stack.pop());
            // popped의 peek에 있는 요소와 stack의 peek에 있는 요소를 비교하여 일치하면
            // 두 배열에서 모두 pop
        } else if (popped[popped.length - 1] === stack[stack.length - 1]) {
            popped.pop();
            stack.pop();
            // 그렇지 않으면 stack에서 pop하여 popped에 push
        } else {
            popped.push(stack.pop());
        }
    }
    // popped의 peek와 stack의 peek가 같으면 popped에 남아있는 요소가 없을 것이므로
    // popped의 길이가 0이여야 좋은 문자이므로 count를 +1 해 준다.
    if (!popped.length) {
        count++;
    }
}

// count를 출력
console.log(count);
