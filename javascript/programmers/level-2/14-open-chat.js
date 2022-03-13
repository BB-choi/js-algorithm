// 오픈채팅방
// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  var answer = [];
  let ids = new Map();

  let i = 0;
  for (const x of record) {
    const [cmd, userId, curName] = x.split(" ");
    let msg = "";
    switch (cmd) {
      case "Enter":
        msg = "님이 들어왔습니다.";
        if (!ids.get(userId)) {
          ids.set(userId, curName);
        } else {
          if (ids.get(userId) !== curName) {
            ids.set(userId, curName);
          }
        }
        answer.push([userId, msg]);
        break;
      case "Leave":
        msg = "님이 나갔습니다.";
        answer.push([userId, msg]);
        break;
      case "Change":
        ids.set(userId, curName);
        break;

      default:
        break;
    }
  }

  answer = answer.map((el) => ids.get(el[0]) + el[1]);
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
