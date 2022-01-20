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

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
