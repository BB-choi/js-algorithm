// Save the Prisoner!
// https://www.hackerrank.com/challenges/save-the-prisoner/problem

/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

// 1) 1자리부터 시작한다고 가정하면, (s === 1 로 가정)
// 2) m % n의 결과(나머지)가 마지막 캔디를 받게 된다.
// 3) 만약 주어진 s가 2라면 2)의 결과에 1을 더해주면 된다. 👉 (m % n) + (s - 1)
// 4) (m % n) + (s - 1)의 결과가 n을 넘어설 수 있으므로 (m % n) + (s - 1) % n
// 5) 4)의 결과는 0 ~ (n - 1) 범위의 값만 결과로 나오므로 4)의 결과가 0인 경우에는 n을 return

function saveThePrisoner(n, m, s) {
    // Write your code here
    // let prisoners = Array.from({ length: n }, (_, i) => i + 1);
    // let startIdx = (s - 1) % n;
    // return prisoners[(startIdx + m - 1) % n];

    // return ((m % n) + (s - 1)) % n || n;
    return (m + s - 1) % n || n;
}

console.log(saveThePrisoner(4, 6, 2));
console.log(saveThePrisoner(5, 2, 1));
console.log(saveThePrisoner(5, 2, 2));
console.log(saveThePrisoner(7, 19, 2));
console.log(saveThePrisoner(3, 7, 3));
console.log(saveThePrisoner(5, 3, 5));
