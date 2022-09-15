// 성격 유형 검사하기
// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

const curType = (survey, choice, cur) => {
  const [t1, t2] = survey;

  const arr = [0, t1, t1, t1, "t", t2, t2, t2];

  if (arr[choice] !== "t") {
    if (choice === 1 || choice === 7) {
      cur[arr[choice]] += 3;
    }

    if (choice === 2 || choice === 6) {
      cur[arr[choice]] += 2;
    }

    if (choice === 3 || choice === 5) {
      cur[arr[choice]] += 1;
    }
  }
};

function solution(survey, choices) {
  var answer = "";

  const cur = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < choices.length; i++) {
    curType(survey[i], choices[i], cur);
  }

  if (cur.R > cur.T) {
    answer += "R";
  } else if (cur.R < cur.T) {
    answer += "T";
  } else {
    answer += "R";
  }

  if (cur.C > cur.F) {
    answer += "C";
  } else if (cur.C < cur.F) {
    answer += "F";
  } else {
    answer += "C";
  }

  if (cur.J > cur.M) {
    answer += "J";
  } else if (cur.J < cur.M) {
    answer += "M";
  } else {
    answer += "J";
  }

  if (cur.A > cur.N) {
    answer += "A";
  } else if (cur.A < cur.N) {
    answer += "N";
  } else {
    answer += "A";
  }

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));
