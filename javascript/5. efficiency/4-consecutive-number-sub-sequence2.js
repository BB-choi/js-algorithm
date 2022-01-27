function solution(m, arr) {
    let answer = 0;
    let num = m;

    for (let i = 0; i < arr.length; i++) {
        num = m;
        num -= arr[i];
        let j = i;
        while (num >= 0) {
            answer++;
            num -= arr[j++];
        }
    }

    return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));
