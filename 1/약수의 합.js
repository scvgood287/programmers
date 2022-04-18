// https://programmers.co.kr/learn/courses/30/lessons/12928

const solution = (n) => {
  if (n < 2) {
    return n;
  };

  const limit = Math.sqrt(n);
  let answer = n + 1;

  for (let i = 2; i < limit; i++) {
    if (n % i === 0) {
      answer += (n / i + i);
    };
  };

  return answer + (limit % 1 ? 0 : limit);
};