// 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    var answer = "";
    let numLen = numbers.length;

    // 현재 손의 위치 저장
    let curL = "*";
    let curR = "#";

    for (let i = 0; i < numLen; i++) {
        let num = numbers[i];
        if (num === 1 || num === 4 || num === 7) {
            // 1, 4, 7 인 경우
            answer += "L";
            curL = num;
        } else if (num === 3 || num === 6 || num === 9) {
            // 3, 6, 9인 경우
            answer += "R";
            curR = num;
        } else if (num === 2 || num === 5 || num === 8 || num === 0) {
            // 2, 5, 8, 0 인 경우

            // 현재 num의 좌표
            let targetKey = getXY(num);
            // 왼손 좌표
            let curLKey = getXY(curL);
            // 오른손 좌표
            let curRKey = getXY(curR);
            // console.log(num, curL, curR, targetKey, curLKey, curRKey);

            // getXY()함수에서 올바르게 좌표를 반환받은 경우
            if (curLKey && curRKey) {
                // 왼손위치 에서 num까지의 거리 L
                let L =
                    Math.abs(targetKey[0] - curLKey[0]) +
                    Math.abs(targetKey[1] - curLKey[1]);
                // 오른손 위치에서 num까지의 거리 R
                let R =
                    Math.abs(targetKey[0] - curRKey[0]) +
                    Math.abs(targetKey[1] - curRKey[1]);
                // console.log(L, R);

                // 모든 경우 L, R 지정시 curL, curR을 지정해줘야함
                if (L === R) {
                    if (hand === "left") {
                        answer += "L";
                        curL = num;
                    } else if (hand === "right") {
                        answer += "R";
                        curR = num;
                    }
                } else if (L < R) {
                    answer += "L";
                    curL = num;
                } else if (L > R) {
                    answer += "R";
                    curR = num;
                }
            }
        }
    }

    return answer;
}

// 좌표 찾기
function getXY(num) {
    for (let i = 0; i < 4; i++) {
        if (keypad[i].indexOf(num) !== -1) {
            return [i, keypad[i].indexOf(num)];
        }
    }
    return 0;
}

// 이중 배열로 키패드 정보 넣기
const keypad = new Array(4);
for (let i = 0; i < 4; i++) {
    keypad[i] = new Array(3);
}

let num = 9;
for (let i = 0; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
        if (i === 0) {
            if (j === 0) {
                // 0,0 *
                keypad[i][j] = "*";
            } else if (j === 1) {
                // 0,1 0
                keypad[i][j] = 0;
            } else if (j === 2) {
                // 0,2 #
                keypad[i][j] = "#";
            }
        } else {
            // 9,8,7,6,5,4,3,2,1 순서로 넣기
            keypad[i][j] = num--;
        }
    }
}

// console.log(keypad);
// [ [ '*', 0, '#' ], [ 7, 8, 9 ], [ 4, 5, 6 ], [ 1, 2, 3 ] ]

// console.log(keypad[1][2]);

let answer = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
console.log(answer);
answer = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
console.log(answer);
answer = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right");
console.log(answer);
