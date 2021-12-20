//  1475 - 방 번호
let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
// let N = Number(require("fs").readFileSync("input.txt").toString().trim());

// 나오는 숫자들을 카운팅해서 넣을 배열
let nums = new Array(10).fill(0);
// N이 0인경우 1로 결과가 나오도록 1로 초기화
let answer = 1;

while (N) {
    nums[N % 10]++;
    N = parseInt(N / 10);
}

for (let i = 0; i < 10; i++) {
    if (i !== 6 && i !== 9) {
        answer = Math.max(answer, nums[i]);
    }
}
// 만들어진 배열 확인용
// console.log(nums);

// nums[6]과 nums[9]를 2로 나누어서 올려줘야 답이 나옴(ex.N===666)
answer = Math.max(answer, Math.round((nums[6] + nums[9]) / 2));

console.log(answer);
