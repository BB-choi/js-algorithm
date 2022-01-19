// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

// function solution(board, moves) {
//     var answer = 0;
//     let box = [];
//     let boardN = board[0].length;
//     let cnt = 0;

//     for (let n of moves) {
//         let doll = -1;
//         n--;
//         for (let i = 0; i < boardN; i++) {
//             if (board[i][n]) {
//                 doll = board[i][n];
//                 board[i][n] = 0;
//                 break;
//             } else {
//             }
//         }

//         if (box.length && box[box.length - 1] === doll) {
//             box.pop();
//             cnt += 2;
//         } else if (doll !== -1) {
//             box.push(doll);
//         }
//     }
//     answer = cnt;
//     return answer;
// }

function solution(board, moves) {
    let basket = [];
    let answer = 0;
    for (let i = 0; i < moves.length; i++) {
        // 현재 크레인의 위치
        let pos = moves[i] - 1;
        // 인형이 들어있는 가장 윗 행 찾기
        let n = 0;
        let doll = null;
        while (n < board.length && !board[n][pos]) {
            n++;
        }
        if (!board[n] || !board[n][pos]) {
            break;
        }
        doll = board[n][pos];
        board[n][pos] = 0;
        if (basket.length && basket[basket.length - 1] === doll) {
            basket.pop();
            answer += 2;
        } else if (doll) {
            // else
            basket.push(doll);
        }
    }
    return answer;
}

console.log(
    solution(
        [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 3],
            [0, 2, 5, 0, 1],
            [4, 2, 4, 4, 2],
            [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4]
    )
);
