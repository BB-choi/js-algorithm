// 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    var answer = n.toString().split("");
    answer = answer.reverse().map(Number);
    return answer;
}

console.log(solution(12345));
