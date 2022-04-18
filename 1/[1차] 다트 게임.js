// https://programmers.co.kr/learn/courses/30/lessons/17682

const solution = (dartResult) => {
  const pows = {
      "S": 1,
      "D": 2,
      "T": 3,
  };
  const options = {
      "*": 2,
      "#": -1,
  };
  let scores = [];
  
  for (let i = 0; i < dartResult.length; i++) {
      const result = dartResult[i];
      const score = parseInt(result);
      const isBonus = pows.hasOwnProperty(result);
      const scoreIndex = scores.length - 1;
      
      if (!isNaN(score)) {
          if (dartResult[i - 1] == 1) {
              scores[scoreIndex] = 10;
          } else {
              scores.push(score);
          };
      } else if (isBonus) {
          scores[scoreIndex] **= pows[result];
      } else {
          const option = options[result];
          scores[scoreIndex] *= option;

          if (result === "*" && scoreIndex !== 0) {
              scores[scoreIndex - 1] *= option;
          };
      };
  };
  
  return scores.reduce((sum, score) => sum + score, 0);
};