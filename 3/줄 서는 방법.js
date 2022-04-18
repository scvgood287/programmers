// https://programmers.co.kr/learn/courses/30/lessons/12936

const solution = (n, k) => {
  let people = Array.from({ length: n }, (_, i) => i + 1);
  let answer = [];

  const getFactorial = (x) => {
    let temp = x;
    for (let i = 2; i < x; i++) temp *= i;
    return temp;
  };

  for (let i = 0; i < n; i++) {
    const factorial = getFactorial(n - i - 1);
    const remainder = k % factorial;

    answer.push(...people.splice(k / factorial - (remainder === 0 ? 1 : 0), 1));

    if (remainder === 0) {
      answer.push(...people.reverse());
      break;
    } else { k = remainder; };
  };

  return answer;
};