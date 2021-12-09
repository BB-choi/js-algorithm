// 1021 - 회전하는 큐
let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

// 예제 테스트
// let input = "10 3\n1 2 3".toString().trim().split("\n");
// let input = "10 3\n2 9 5".toString().trim().split("\n");
// let input = "32 6\n27 16 30 11 6 23".toString().trim().split("\n");
// let input = "10 10\n1 6 3 2 7 9 8 4 10 5".toString().trim().split("\n");
let line1 = input[0].trim().split(" ").map(Number);
let line2 = input[1].trim().split(" ").map(Number);

const [N, M] = line1;
let queue = [];
let cnt = 0;
let answer = 0;

// N 이 5라면, [1, 2, 3, 4, 5]의 배열 만들기
for (let i = 0; i < N; i++) {
    queue[i] = i + 1;
}

// 문제의 연산 1번
function a(arr) {
    arr.shift();
}

// 2, 3번 연산의 최소값을 구하므로 2, 3번 연산을 할 때만 cnt값을 증가시킨다.
// 문제의 연산 2번
function b(arr) {
    let temp = arr.shift();
    arr.push(temp);
    cnt++;
}

// 문제의 연산 3번
function c(arr) {
    let temp = arr.pop();
    arr.unshift(temp);
    cnt++;
}

for (let i = 0; i < M; i++) {
    // i마다 cnt를 세어줘야 하므로 초기화
    cnt = 0;
    while (1) {
        // line2[i]가 현재 찾아야 하는 대상이므로 queue의 몇번째 인덱스인지 저장
        let targetIdx = queue.indexOf(line2[i]);
        if (queue[0] === line2[i]) {
            a(queue);
            break;
            // 타겟인 인덱스가 배열의 중간보다 작거나 같으면 b()실행
        } else if (targetIdx <= parseInt(queue.length / 2)) {
            b(queue);
            // 타겟인 인덱스가 배열의 중간보다 크면(뒤쪽에 있으면) c()실행
        } else if (targetIdx > parseInt(queue.length / 2)) {
            c(queue);
        }
    }
    answer += cnt;
}

console.log(answer);
