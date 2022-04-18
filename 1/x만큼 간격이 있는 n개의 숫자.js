// https://programmers.co.kr/learn/courses/30/lessons/12954

const solution = (x, n) => {
  let answer = [x];

  for (let i = 1; i < n; i++) {
    answer[i] = x * (i + 1);
  };

  return answer;
};