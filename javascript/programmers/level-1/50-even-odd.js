// 짝수와 홀수
// https://programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
    var answer = "";

    if (num % 2) {
        answer = "Odd";
    } else {
        answer = "Even";
    }

    return answer;
}
