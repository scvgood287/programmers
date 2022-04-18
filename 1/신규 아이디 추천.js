// https://programmers.co.kr/learn/courses/30/lessons/72410

const solution = (new_id) => {
  const answer = new_id
      .toLowerCase()
      .replace(/[^\w-_.]/g, "")
      .replace(/\.{2,}/g, ".")
      .replace(/^\.|\.$/g, "")
      .replace(/^$/, "a")
      .slice(0, 15)
      .replace(/\.$/, "");
  const answerLength = answer.length;
  
  return answerLength > 2 ? answer : answer + answer[answerLength - 1].repeat(3 - answerLength);
};