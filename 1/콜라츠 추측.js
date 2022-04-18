// https://programmers.co.kr/learn/courses/30/lessons/12943

const solution = (n) => {
  let answer = 0;

  while (n !== 1 && answer < 500) {
    n % 2 ? n = n * 3 + 1 : n /= 2;
    answer++;
  };

  return answer === 500 ? -1 : answer;
};