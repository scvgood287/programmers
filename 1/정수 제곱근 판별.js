// https://programmers.co.kr/learn/courses/30/lessons/12934

const solution = (n) => {
  const x = Math.sqrt(n);

  return x % 1 ? -1 : (x + 1) ** 2;
};