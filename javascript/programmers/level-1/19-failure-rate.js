// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    // N + 1까지 도착한 경우에는 모든 스테이지를 클리어하였음
    let answer = Array.from({ length: N }, (_, i) => i + 1);
    let arrived = new Array(N).fill(0);
    let arrivedNotCleard = new Array(N).fill(0);

    for (const stage of stages) {
        let temp = stage - 1; // 인덱스로 사용
        let i = 0;
        // 모든 스테이지를 클리어 한 경우는 배열에서 처리할 필요 없음 (i < N)
        while (i <= temp && i < N) {
            arrived[i]++;
            i++;
        }
        // 도착했지만 클리어하지 못한 못한 경우
        arrivedNotCleard[temp]++;
    }
    let rate = answer.map((el, i) => {
        // return {index:i, value:el, rate :}
        return {
            index: i,
            value: el,
            rate: arrivedNotCleard[i] / arrived[i],
        };
    });

    rate.sort((a, b) => b.rate - a.rate || a.value - b.value);
    answer = rate.map((el) => el.value);

    return answer;
}

// N : 스테이지의 개수
// stages(Array) : 사용자가 현재 멈춰있는 스테이지의 번호
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
