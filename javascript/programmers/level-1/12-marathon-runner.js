// 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    let answer = "";
    participant.sort();
    completion.sort();

    while (1) {
        if (
            participant[participant.length - 1] !==
            completion[completion.length - 1]
        ) {
            answer = participant[participant.length - 1];
            break;
        } else {
            participant.pop();
            completion.pop();
        }
    }

    return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

console.log(
    solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
    )
);

console.log(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
