// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    var answer = "";
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = new Date(`2016-${a}-${b}`);
    answer = days[day.getDay()];

    return answer;
}

function newSolution(a, b) {
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const getDayFromremainder = [
        "THU",
        "FRI",
        "SAT",
        "SUN",
        "MON",
        "TUE",
        "WED",
    ];

    let res = 0;
    while (a--) {
        res += month[a];
    }
    res += b;
    return getDayFromremainder[res % 7];
}

console.log(solution(5, 24));
console.log(newSolution(5, 24));
