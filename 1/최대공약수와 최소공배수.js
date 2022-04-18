// https://programmers.co.kr/learn/courses/30/lessons/12940

const solution = (n, m) => {
  let big = n > m ? n : m;
  let small = n + m - big;
  let gcd = small;

  while (big % small) {
    gcd = big % small;
    big = small;
    small = gcd;
  };

  return [gcd, n * m / gcd];
};