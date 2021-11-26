let input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

// 입력받은 원판의 개수
let rings = input;

// let rings = 3;
// let cnt = 0;
let str = "";
function move(rings, from, by, to) {
    if (rings === 1) {
        str += `${from} ${to}\n`;
        // console.log(from, to);
    } else {
        move(rings - 1, from, to, by);
        // console.log(from, to);
        str += `${from} ${to}\n`;
        move(rings - 1, by, from, to);
    }
    return str;
}

str = move(rings, 1, 2, 3);
// \n 줄바꿈의 갯수로 총 이동 수 확인
// 1) "\n" 갯수 찾기 방법 1
/* let result = str.match(/\n/g);
if (result != null) console.log(result.length); */
// console.log(move(rings, 1, 2, 3));

// 2) "\n"갯수 찾기 방법2
let count = 0;
let targetStr = "\n";
// 0번째로 나타나는 타겟문자열의 위치를 pos에 저장
let pos = str.indexOf(targetStr, 0);
// indexOf로 찾아서, 타겟 문자열이 없는 경우에는 -1 반환
while (pos !== -1) {
    // while문 안으로 들어오는 경우 count + 1
    count++;
    // 찾은 위치 다음으로 나타나는 타겟 문자열을 찾기
    pos = str.indexOf(targetStr, pos + 1);
}
console.log(count);
console.log(str);
