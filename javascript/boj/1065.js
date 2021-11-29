let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

const chkNum = function (n) {
    let nLen = String(n).length;
    let nArr = n.toString().split("");
    nArr = nArr.map(Number);

    // 현재 비교하고 있는 앞, 뒤의 차이를 저장
    let diff = 0;
    // 직전 앞, 뒤의 차이 저장
    let prevDiff = 0;
    // nArr를 돌면서, 앞-뒤 차이를 비교하기
    for (let i = 0; i + 1 < nLen; i++) {
        // 현재 i와 i+1인덱스의 차이를 diff에 저장
        diff = nArr[i] - nArr[i + 1];
        // 첫번째 비교대상(i === 0)이 아니면서, 직전 차이값(prevDiff)와 현재 차이값(diff)가 다르다면, 0을 리턴하고 반복문(과 함수)을(를) 탈출
        // (한수가 아님)
        if (i > 0 && prevDiff !== diff) {
            return 0;
        }
        // 직전차이값과 현재 차이값이 같다면 계속 비교하기 위해서 diff를 prevDiff에 저장
        prevDiff = diff;
    }
    // 등차수열이 맞다면(한수라면), 1을 리턴
    return 1;
};

let sum = 0;
for (let i = 1; i <= N; i++) {
    // i에서 N까지 for문으로 돌면서 chkNum함수로 한수여부 확인
    if (chkNum(i)) {
        // 한수라면(1을 리턴 받았다면 sum에 1을 더한다)
        sum++;
    }
}

// 최종 sum값을 출력하여 한수 갯수를 확인
console.log(sum);
