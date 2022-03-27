// 스킬트리
// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  var answer = 0;

  let skillArr = skill.split("");
  const len = skill_trees.length;

  for (let i = 0; i < len; i++) {
    const curSkillTree = skill_trees[i]
      .split("")
      .filter((el) => skillArr.includes(el));

    const curLen = curSkillTree.length;
    let flag = true;
    for (let j = 0; j < curLen; j++) {
      if (skillArr[j] !== curSkillTree[j]) {
        flag = false;
        break;
      }
    }
    if (!flag) continue;
    if (flag) answer++;
  }
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
