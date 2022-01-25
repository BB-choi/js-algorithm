// 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
    let answer = 0;
    let cpD = [...d];
    cpD.sort((a, b) => a - b);

    for (let i = 0; i < cpD.length; i++) {
        if (budget >= cpD[i]) {
            budget -= cpD[i];
            answer++;
        }
    }

    return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
