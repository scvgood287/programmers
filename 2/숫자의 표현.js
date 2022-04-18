// https://programmers.co.kr/learn/courses/30/lessons/12924

const getSumOfConsecutiveNumber = (start, end) => (start + end) * (end - start + 1) / 2;

const solution = (n) => {
  let answer = 1;

  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = getSumOfConsecutiveNumber(i, j);

      if (sum > n) {
        break;
      };

      if (sum === n) {
        answer++;
        break;
      };
    };
  };

  return answer;
};

// 연속된 수의 합이란 결국 홀수와 홀수의 곱 or 홀수와 짝수의 곱으로 나타낼 수 있으므로,
// n 의 약수 중 홀수의 개수를 구하면 된다.
// 다만 홀수 제곱은 두개가 아닌 하나로 생각해야 하는 점 주의
// 약수는 n 의 제곱근 까지만 확인하여 루프를 최소화 한다.

const solution = (n) => {
  const limit = Math.sqrt(n);
  let answer = 0;

  for (let i = 1; i <= limit; i++) {
    if (n % i === 0) {
      const quotient = n / i;

      if (i % 2 === 1) {
        answer++;
      };

      // 홀수 제곱일때는 더하지 않음
      if (i !== quotient && quotient % 2 === 1) {
        answer++;
      };
    };
  };

  return answer;
};