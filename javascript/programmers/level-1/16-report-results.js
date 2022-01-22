// 신고 결과 받기
// https://programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let reportResult = {};
    id_list.forEach(
        (el) => (reportResult[el] = { count: 0, report: new Set() })
    );

    for (let cur of report) {
        cur = cur.split(" ");
        let [reporter, reported] = cur;

        if (!reportResult[reported].report.has(reporter)) {
            reportResult[reported].count++;
            reportResult[reported].report.add(reporter);
        }
        // reportResult[reported].report.add(reporter);
        // 밖으로 빼도 결과는 같음 (Set이기 때문)
    }

    for (let cur in reportResult) {
        if (reportResult[cur].count >= k) {
            reportResult[cur].report.forEach(
                (el) => answer[id_list.indexOf(el)]++
            );
        }
    }

    return answer;
}

// console.log(solution(id_list, report, k));
console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
    )
);
console.log(
    solution(
        ["con", "ryan"],
        ["ryan con", "ryan con", "ryan con", "ryan con"],
        3
    )
);
