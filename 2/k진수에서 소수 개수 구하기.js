// https://programmers.co.kr/learn/courses/30/lessons/92335

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  };

  if (num % 2 === 0) {
    return num === 2;
  };

  const { floor, sqrt } = Math;
  const limit = floor(sqrt(num));

  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    };
  };

  return true;
};

const solution = (n, k) => n.toString(k).split("0").filter(number => isPrime(Number(number))).length;