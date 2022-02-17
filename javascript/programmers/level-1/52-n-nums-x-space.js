// x만큼 간격이 있는 n개의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12954

function solution(x, n) {
    var answer = [];
    answer[0] = x;
    let i = 1;
    while (i < n) {
        answer[i] = answer[i - 1] + x;
        i++;
    }

    return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
