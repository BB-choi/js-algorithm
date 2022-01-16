// function solution(M, product) {
//     let answer = 0;
//     let N = product.length;

//     let arr = [...product];
//     // 총 비용 적은 순으로 정렬 : 할인 받는 상품 선택후, 비용이 적게 드는 상품을 구매해야 최대한 많은 상품을 구매할 수 있음
//     product.sort(
//         (a, b) =>
//             a.reduce((acc, cur) => acc + cur) -
//             b.reduce((acc, cur) => acc + cur)
//     );
//     // console.log(arr);
//     // let cnt = [];
//     for (let i = 0; i < N; i++) {
//         let totalPrice = 0;
//         let totalGift = 0;
//         // arr[i][0]을 할인 받는다고 가정하기
//         let discounted = arr[i][0] / 2 + arr[i][1];
//         totalPrice += discounted;
//         totalGift++;
//         for (let j = 0; j < N; j++) {
//             if (i === j) continue;
//             if (totalPrice + arr[j][0] + arr[j][1] <= M) {
//                 totalPrice += arr[j][0] + arr[j][1];
//                 totalGift++;
//             }
//         }
//         // cnt.push(totalGift);
//         answer = Math.max(totalGift, answer);
//     }
//     // answer = Math.max(...cnt);

//     return answer;
// }

function solution(M, product) {
    let answer = 0;
    let N = product.length;
    product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

    for (let i = 0; i < N; i++) {
        let money = M - product[i][0] / 2 - product[i][1];
        let cnt = 1;
        for (let j = 0; j < N; j++) {
            if (i !== j && product[j][0] + product[j][1] > money) {
                break;
            }
            if (i !== j && product[j][0] + product[j][1] <= money) {
                money -= product[j][0] + product[j][1];
                cnt++;
            }
        }
        answer = Math.max(answer, cnt);
    }

    return answer;
}

// let arr = [
//     [6, 6],
//     [2, 2],
//     [4, 3],
//     [4, 5],
//     [10, 3],
// ];
// console.log(solution(28, arr));
let arr = [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
];
console.log(solution(41, arr));
