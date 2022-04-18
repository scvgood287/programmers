// https://programmers.co.kr/learn/courses/30/lessons/43238

const solution = (n, times) => {
  let min = 1;
  let max = n * Math.max(...times);
  let answer = 1;

  while (min <= max) {
    let mid = parseInt((min + max) / 2);

    if (times.reduce((acc, time) => acc += parseInt(mid / time), 0) >= n) {
      max = mid - 1;
      answer = mid;
    } else { min = mid + 1; };
  };

  return answer;
};