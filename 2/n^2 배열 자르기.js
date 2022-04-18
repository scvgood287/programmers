// https://programmers.co.kr/learn/courses/30/lessons/87390?language=javascript

// 빠름, 정답
const solution = (n, left, right) => {
  let answer = [];

  for (let i = left; i <= right; i++) {
    const quotient = Math.trunc(i / n);
    const remainder = i % n;

    answer.push((quotient > remainder ? quotient : remainder) + 1);
  };

  return answer;
};

// 느림
const solution = (n, left, right) => {
  const startQuotient = Math.trunc(left / n);
  const startRemainder = left % n;
  const endQuotient = Math.trunc(right / n);
  const endRemainder = right % n;

  let answer = [];

  for (let i = startRemainder; i < n; i++) {
    answer.push((i > startQuotient ? i : startQuotient) + 1);
  };

  for (let i = startQuotient + 1; i < endQuotient; i++) {
    for (let j = 0; j < n; j++) {
      answer.push((i > j ? i : j) + 1);
    };
  };

  for (let i = 0; i <= endRemainder; i++) {
    answer.push((i > endQuotient ? i : endQuotient) + 1);
  };

  return answer;
};

// 결과물도 같고, push 횟수도 같지만 속도차이가 꽤나 난다.