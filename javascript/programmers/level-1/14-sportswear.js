// 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    var answer = 0;

    // 여벌 옷 있는 학생 중 잃어버린 학생있는 경우 처리
    let newLost = lost.filter((el) => reserve.indexOf(el) < 0);
    let newReserve = reserve.filter((el) => lost.indexOf(el) < 0);
    newLost.sort((a, b) => a - b);
    newReserve.sort((a, b) => a - b);

    for (let i = 0; i < newLost.length; i++) {
        let flag = 0;
        for (let j = 0; j < newReserve.length; j++) {
            if (newLost[i] === newReserve[j] - 1) {
                flag = 1;
                newReserve[j] = -1;
                break;
            }
            if (newLost[i] === newReserve[j] + 1) {
                newReserve[j] = -1;
                flag = 1;
                break;
            }
        }
        if (!flag) n--;
    }

    answer = n;

    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [5, 3]));
console.log(solution(5, [3, 5], [1, 3, 5]));
