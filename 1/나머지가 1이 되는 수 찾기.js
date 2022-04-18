// https://programmers.co.kr/learn/courses/30/lessons/87389

const solution = (n) => {
  let x = 2;

  while (n % x !== 1) {
    x++;
  };

  return x;
};