// https://programmers.co.kr/learn/courses/30/lessons/12910

const solution = (arr, divisor) => {
  const answer = arr.filter(num => num % divisor === 0);
  
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
};