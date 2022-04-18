// https://programmers.co.kr/learn/courses/30/lessons/77884

const solution = (left, right) => {
  let answer = 0;
  while (left <= right) {
    answer += left * (Number.isInteger(Math.sqrt(left)) || left === 1 ? -1 : 1);
    left++;
  }

  return answer;
}