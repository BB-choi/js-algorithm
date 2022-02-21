// H-Index
// https://programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    var answer = 0;
    let len = citations.length;

    citations.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (citations[i] >= len - i) {
            answer = len - i;
            break;
        }
    }
    return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
