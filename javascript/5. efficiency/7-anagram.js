function solution(str1, str2) {
  let answer = "NO";

  const map1 = new Map();
  const map2 = new Map();
  for (const x of str1) {
    if (map1.has(x)) {
      map1.set(x, map1.get(x) + 1);
    } else {
      map1.set(x, 1);
    }
  }
  for (const x of str2) {
    if (map2.has(x)) {
      map2.set(x, map2.get(x) + 1);
    } else {
      map2.set(x, 1);
    }
  }

  if (map1.size === map2.size) {
    let arr1 = [...map1.entries()].sort();
    let arr2 = [...map2.entries()].sort();

    let filteredArr = arr1.filter(
      (el, idx) => el[0] === arr2[idx][0] && el[1] === arr2[idx][1]
    );
    if (filteredArr.length === map1.size) {
      answer = "YES";
    }
  }

  return answer;
}

function newSolution(str1, str2) {
  let answer = "YES";

  const map = new Map();
  for (const x of str1) {
    if (map.has(x)) {
      map.set(x, map.get(x) + 1);
    } else {
      map.set(x, 1);
    }
  }

  for (const x of str2) {
    if (!map.has(x) || map.get(x) <= 0) {
      answer = "NO";
      break;
    }
    map.set(x, map.get(x) - 1);
  }

  return answer;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
console.log(newSolution(a, b));

a = "abaCC";
b = "Caaab";
console.log(solution(a, b));
console.log(newSolution(a, b));
