// https://programmers.co.kr/learn/courses/30/lessons/12945

// 요건 쫌 느린듯
const solution = (n) => getFibonacciNumber(n) % 1234567;

const getFibonacciNumber = (n, current = 2, prevprev = 0, prev = 1) => {
  if (current === n) {
    return prevprev + prev;
  } else {
    return getFibonacciNumber(n, current + 1, prev, prevprev + prev)
  };
};

// 그냥 요걸로
const solution = (n) => {
  let fibonacciSequence = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacciSequence[i] = (fibonacciSequence[i - 2] + fibonacciSequence[i - 1]) % 1234567;
  };

  return fibonacciSequence[n];
};