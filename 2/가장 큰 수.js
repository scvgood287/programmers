// https://programmers.co.kr/learn/courses/30/lessons/42746

const solution = (numbers) => {
  const answer = numbers
  .map(n => n+'')
  .sort((a, b) => (b + a) * 1 - (a + b) * 1)
  .join("");

  return answer[0] === '0' ? '0' : answer;
}