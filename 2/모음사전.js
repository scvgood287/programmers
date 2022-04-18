// https://programmers.co.kr/learn/courses/30/lessons/84512

const solution = (word) => {
  const alpabet = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const weights = {
    1: 1,
    2: 6,
    3: 31,
    4: 156,
    5: 781,
  };
  return word.split("").reduce((acc, curr, i) => acc + (alpabet[curr] * weights[5 - i]) + 1, 0);
};