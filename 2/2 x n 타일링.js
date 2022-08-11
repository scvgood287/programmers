// https://programmers.co.kr/learn/courses/30/lessons/12900?language=javascript

const solution = (n) => {
  const fibonacci = [1, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]) % 1000000007;
  };

  return fibonacci[n];
};