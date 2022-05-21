// 메뉴 리뉴얼
// https://programmers.co.kr/learn/courses/30/lessons/72411

function getCombinations(arr, num) {
  const result = [];
  if (num === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });
  return result;
}

function solution(orders, course) {
  var answer = [];

  const courseLen = course.length;
  const ordersLen = orders.length;
  const 조합확인 = {};

  for (let i = 0; i < courseLen; i++) {
    const currentCourseLength = course[i];

    for (let j = 0; j < ordersLen; j++) {
      const 지금조합 = getCombinations(
        orders[j].split("").sort(),
        currentCourseLength
      );

      for (let k = 0; k < 지금조합.length; k++) {
        const 지금것 = 지금조합[k].join("");
        if (조합확인[지금것]) {
          조합확인[지금것] = 조합확인[지금것] + 1;
        } else {
          조합확인[지금것] = 1;
        }
      }
    }
  }

  const 조합배열 = Object.entries(조합확인);
  for (let i = 0; i < courseLen; i++) {
    const 확인 = 조합배열.filter(
      ([조합, count]) => 조합.length === course[i] && count > 1
    );
    const 최대값 = Math.max(...확인.map((el) => el[1]));
    answer.push(...확인.filter(([조합, count]) => count === 최대값));
  }

  return answer
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([조합, count]) => 조합);
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
