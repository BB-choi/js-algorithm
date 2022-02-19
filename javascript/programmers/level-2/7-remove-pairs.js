// 짝지어 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
    let answer = 0;
    const len = s.length;

    let stack = [];
    for (let i = 0; i < len; i++) {
        if (stack.length) {
            if (stack[stack.length - 1] === s[i]) {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else stack.push(s[i]);
    }

    if (!stack.length) answer = 1;

    return answer;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
