// Reference
// How do you "loop an array in a circle"?
// https://www.reddit.com/r/learnjavascript/comments/61fiwv/how_do_you_loop_an_array_in_a_circle/

let input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ");

input = input.map(Number);

// 총 인원 M
let people = input[0];
// 삭제하는 순서 N번째
let targetNum = input[1];
// 모든 사람 담을 배열
let arr = [];
// 삭제된사람 담을 배열
let popped = [];

// const getValue = function (i) {
//     let remainder = i % arr.length;
//     return arr[remainder === 0 ? array.length - 1 : remainder - 1];
// };

// const getValue = function (i) {
//     return arr[(i - 1) % arr.length];
// };

// 배열의 길이가 목표로 하는 i번호보다 짧을 때, 현재 배열에서 i를 구하기 위한 함수
const getIdx = function (i) {
    return i % arr.length;
};

for (let i = 0; i < people; i++) {
    arr[i] = i + 1;
}
let curIdx = 0;
while (popped.length < people) {
    // targetNum(N)은 1, 2, 3 순서로 시작하므로 -1
    let idx = getIdx(curIdx + targetNum - 1);
    // 현재 위치에서 N번째를 찾아야 하므로 curIdx에 저장해준 뒤 curIdx로부터 N번째 사람을 찾기
    curIdx = idx;
    // 빠질 사람을 미리 담은후
    popped.push(arr[idx]);
    // idx번째로부터 1개만 splice함수로 arr배열에서 삭제
    arr.splice(idx, 1);
    // console.log(arr, popped);
}
console.log(`<${popped.join(", ")}>`);
