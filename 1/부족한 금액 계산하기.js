// https://programmers.co.kr/learn/courses/30/lessons/82612

const solution = (price, money, count) => {
  const answer = price * (count + 1) * (count / 2) - money;
  
  return answer > 0 ? answer : 0;
}