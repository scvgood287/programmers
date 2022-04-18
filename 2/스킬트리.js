// https://programmers.co.kr/learn/courses/30/lessons/49993

const solution = (skill, skill_trees) => skill_trees.filter((skill_tree) => {
  let matchedSkills = "";
  
  for (let currentSkill of skill_tree) {
      if (matchedSkills.length === skill.length) {
          break;
      };
      
      if (skill.includes(currentSkill)) {
          matchedSkills += currentSkill;
      };
  };
  
  return skill.slice(0, matchedSkills.length) === matchedSkills;
}).length;

const solution = (skill, skill_trees) => skill_trees.filter((skillTree) => {
  const skillLength = skill.length;
  const skillTreeLength = skillTree.length;
  let skillIndex = 0;
  
  for (let i = 0; skillIndex < skillLength && i < skillTreeLength; i++) {
      const currentSkill = skillTree[i];
      
      if (skill.includes(currentSkill)) {
          if (skill[skillIndex] === currentSkill) {
              skillIndex++;
          } else {
              return false;
          };
      };
  };
  
  return true;
}).length;