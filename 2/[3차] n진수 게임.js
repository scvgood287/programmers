// https://programmers.co.kr/learn/courses/30/lessons/17687

const solution = (n, t, m, p) => {
  const radixedNumbersMinimumLength = (t - 1) * m + p;
  let radixedNumbers = "";
  let answer = "";

  for (let number = 0; radixedNumbers.length < radixedNumbersMinimumLength; number++) {
    radixedNumbers += number.toString(n);
  };

  for (let i = p - 1; answer.length < t; i += m) {
    answer += radixedNumbers.charAt(i).toUpperCase();
  };

  return answer;
};