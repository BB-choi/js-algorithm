// 2606 - 바이러스

let path = "/dev/stdin";
// let path = "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");

let length = input.length;
let num = Number(input[0].trim());
// let conn = Number(input[1].trim());

// 감염되는 컴퓨터들 모두 넣음
let virus = [];
// 연결된 컴퓨터를 key : value 형식으로 넣음
let com = {};
// 체크했던 컴퓨터인지 (체크할때마다 +1) 확인
let visited = [];
for (let i = 1; i <= num; i++) {
    // 오브젝트 com에 컴퓨터 번호인 i(key)를 배열로 지정
    // 연결되어있는 컴퓨터를 배열에 push하기 위함
    com[i] = [];
    // visited 배열의 해당 컴퓨터를 0으로 초기화
    visited[i] = 0;
}

// 인덱스 2부터 컴퓨터들 연결되어있는 정보이므로 2부터 탐색
for (let i = 2; i < length; i++) {
    let [com1, com2] = input[i].trim().split(" ").map(Number);

    // 연결 순서는 앞, 뒤 상관없으므로 모든 경우를 넣어야함
    com[com1].push(com2);
    com[com2].push(com1);
}
// 오브젝트 확인용
// console.log(com);

// com 오브젝트에서 key가 el인 컴퓨터와 연결된 컴퓨터를(해당 key의 value 배열) 돌면서 확인
function findInCom(el) {
    // com[el]이 있으면서, com[el]이 1이 아닌경우
    if (com[el] && com[el] !== 1) {
        // com[el] 배열의 길이만큼 탐색
        for (let i = 0; i < com[el].length; i++) {
            // visited에 해당 컴퓨터 방문횟수를 증가
            visited[com[el][i]]++;
            // 첫번째 방문인 경우에만
            if (visited[com[el][i]] < 2) {
                // virus배열에 추가
                virus.push(com[el][i]);
                // 해당 컴퓨터를 다시 findInCom 함수로 호출하여 탐색
                findInCom(com[el][i]);
            }
        }
    } else {
        return;
    }
}

// 컴퓨터1 을 체크하므로 visited[1]에 1을 더함
visited[1] = 1;
// com배열의 컴퓨터1 배열안에 있는 컴퓨터들을 모두 돌아야 함
for (let i = 0; i < com[1].length; i++) {
    // 1에 연결된 컴퓨터는 모두 바이러스 감염 --> virus 배열에 push
    virus.push(com[1][i]);
    // com배열에서 계속 감염된 컴퓨터를 찾아야 하므로 함수 호출
    findInCom(com[1][i]);
}

// 중복제거
let setVirus = [...new Set([...virus])];
console.log(setVirus.length);
