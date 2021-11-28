let answer = "";

function d(n) {
    let num = n;
    let res = 0;

    for (let i = 0; i < n.toString().length; i++) {
        res += num % 10;
        num = Math.floor(num / 10);
    }
    return n + res;
}
// 생성자가 있는 경우 담기는 Array
// Array[생성자있는 숫자] index로 담기도록 함
// 0이 아닌 값이면 생성자 있음, false(0)면 셀프넘버
let arr = new Array(11000).fill(0);

for (let i = 1; i <= 10000; i++) {
    arr[d(i)] = d(i);
}

for (let i = 1; i <= 10000; i++) {
    if (!arr[i]) {
        answer += `${i}\n`;
    }
}

// 1 - true(생성자있음), false(생성자없음, 셀프넘버)로 담는경우
// for (let i = 1; i <= 10000; i++) {
//     arr[d(i)] = 1;
// }

// for (let i = 1; i <= 10000; i++) {
//     if (!arr[i]) {
//         answer += `${i}\n`;
//     }
// }

console.log(answer);
