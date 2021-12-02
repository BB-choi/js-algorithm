// 17298 - 오큰수
// Reference
// https://cocoon1787.tistory.com/347
// https://takeknowledge.tistory.com/81

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// let input = "4\n3 5 2 7".toString().trim().split("\n");
// let input = "4\n9 5 4 8".toString().trim().split("\n");
let len = Number(input[0]);
input.shift();

let arrA = input.toString().trim().split(" ");
arrA = arrA.map(Number);

// 스택
let stack = [];
// 답을 입력할 배열
let answer = [];

// 인덱스를 stack에 넣어서 탐색
// pop할때 나오는 인덱스를 answer배열의 인덱스로 사용
/* 
// 인덱스0을 stack에 넣어두기
stack.push(0);

// 1번 인덱스부터, 마지막 인덱스까지 반복
for (let i = 1; i < len; i++) {
    // 스택이 비어있으면 인덱스를 push
    if (!stack.length) {
        stack.push(i);
    }
    // 스택에 들어있는 것이 있고
    // arrA[스택의peek] 이 인덱스가 arrA[현재탐색하는i]의 값보다 크다면
    while (stack.length && arrA[stack[stack.length - 1]] < arrA[i]) {
        // 오큰수를 찾았으므로 스택에서 pop해주면서 return받은 인덱스를 answer배열의 인덱스로 사용한다.
        answer[stack.pop()] = arrA[i];
    }
    // 이번 인덱스를 stack에 푸시
    stack.push(i);
}
while (stack.length) {
    // 반복문을 다 돌았는데 스택에 무언가 남아있다면
    // 오큰수를 발견하지 못했으므로 해당 인덱스를 answer에서 -1로 만들어줌
    answer[stack.pop()] = -1;
}

//출력
console.log(answer.join(" "));


*/

// 거꾸로 탐색하기
// arrA의 마지막인덱스부터 탐색
for (let i = len - 1; i >= 0; i--) {
    // 스택에 무언가 들어있으면서
    // 스택의 peek가 arrA의 현재 탐색하는 인덱스보다 작다면 (계속 반복하여, 큰 것을 발견할 때까지
    // --> 작아야 반복문 탈출,
    // --> else 문에서 answer[i]에 값을 입력할 수 있다.
    while (stack.length && stack[stack.length - 1] < arrA[i]) {
        // pop을 반복한다(while)
        stack.pop();
    }
    // 스택에 들어있는 것이 없다면
    if (!stack.length) {
        // answer배열 해당인덱스에 -1 이라는 값을 넣어준다(비교할 대상 없음)
        answer[i] = -1;
        // 그 외의 경우에는
    } else {
        answer[i] = stack[stack.length - 1];
    }
    // 탐색했던 인덱스에 들어있는 값을 stack에 푸시 (다음 탐색을 위해)
    stack.push(arrA[i]);
}
// 출력
console.log(answer.join(" "));

// function nge(n) {
// for (let i = n + 1; i < len; i++) {
//     if (arrA[i] > arrA[n]) {
//         return arrA[i];
//     }
// }
// return -1;
// }

// for (let i = 0; i < len; i++) {
// console.log(nge(i));
// }
