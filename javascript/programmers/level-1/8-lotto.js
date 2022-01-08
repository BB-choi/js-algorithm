// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    let answer = [];

    let prize = [6, 6, 5, 4, 3, 2, 1];
    let zero = 0;
    let same = 0;
    for (let i = 0; i < 6; i++) {
        if (!lottos[i]) {
            zero++;
            continue;
        }
        if (win_nums.includes(lottos[i])) {
            same++;
        }
    }

    if (zero) {
        answer.push(prize[same + zero]);
    } else {
        answer.push(prize[same]);
    }
    answer.push(prize[same]);
    return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
