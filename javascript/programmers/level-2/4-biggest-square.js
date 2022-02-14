// 가장 큰 정사각형 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
    var answer = 0;
    let N = board.length;
    let M = board[0].length;

    for (let i = 1; i < N; i++) {
        for (let j = 1; j < M; j++) {
            if (board[i][j]) {
                board[i][j] =
                    Math.min(
                        board[i - 1][j - 1],
                        board[i - 1][j],
                        board[i][j - 1]
                    ) + 1;
            }
        }
    }

    // 위 for문으로는 0,0을 탐색하지 않으므로 따로 0,0부터 탐색하는 반복문으로 확인해야 함
    for (let i = 0; i < N; i++) {
        answer = Math.max(answer, ...board[i]);
    }

    return answer * answer;
}

console.log(
    solution([
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 0],
    ])
);

console.log(
    solution([
        [0, 0, 1, 1],
        [1, 1, 1, 1],
    ])
);
