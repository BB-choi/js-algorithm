// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    let answer = 0;
    if (s.length === 1) return 1;
    let strings = [];

    for (let i = 1; i <= s.length / 2; i++) {
        let count = 1;
        let string = "";
        for (let j = 0; j < s.length; j += i) {
            let cur = s.substr(j, i);
            let next = s.substr(j + i, i);
            /* let cur = s.substring(j, j+i);
            let next = s.substring(j + i, j+i+i); */
            if (cur === next) count++;
            else {
                string = count > 1 ? string + count + cur : string + cur;
                count = 1;
            }
        }
        strings.push(string.length);
    }

    answer = Math.min(...strings);
    return answer;
}
