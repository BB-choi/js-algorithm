// 자릿수 더하기
// programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
    let answer = 0;
    while (n) {
        answer += n % 10;
        n = Math.floor(n / 10);
    }
    return answer;
}

console.log(solution(123));
console.log(solution(987));
