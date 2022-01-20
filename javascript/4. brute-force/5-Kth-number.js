function solution(n, k, card) {
    let answer;
    let sums = [];

    for (let i = 0; i < n; i++) {
        let card1 = card[i];
        for (let j = i + 1; j < n; j++) {
            let card2 = card[j];
            for (let k = j + 1; k < n; k++) {
                let card3 = card[k];
                sums.push(card1 + card2 + card3);
            }
        }
    }
    answer = [...new Set(sums.sort((a, b) => b - a))][k - 1];

    return answer;
}

function new_solution(n, k, cards) {
    let answer;
    let tmp = new Set();

    for (let i = 0; i < n; i++) {
        // i < n -2
        for (let j = i + 1; j < n; j++) {
            // j < n - 1
            for (let k = j + 1; k < n; k++) {
                // k = j + 1는 이 스코프안에서만 유효
                tmp.add(cards[i] + cards[j] + cards[k]);
            }
        }
    }

    let arr = Array.from(tmp).sort((a, b) => b - a);
    answer = arr[k - 1];
    return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
console.log(solution(9, 1, [5, 5, 5, 4, 4, 3, 3, 2, 1]));

console.log(new_solution(10, 3, arr));
console.log(new_solution(9, 1, [5, 5, 5, 4, 4, 3, 3, 2, 1]));
