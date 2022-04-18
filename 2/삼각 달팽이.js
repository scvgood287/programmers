// https://programmers.co.kr/learn/courses/30/lessons/68645

const solution = (n) => {
  let answer = Array.from({ length: n }, (_, i) => Array.from({ length: i + 1 }, () => 0));
  let row = -1;
  let column = 0;
  let cell = 0;

  for (let i = n; i > 0; i -= 3) {
    for (let j = 0; j < i; j++) answer[++row][column] = ++cell;
    for (let j = 0; j < i - 1; j++) answer[row][++column] = ++cell;
    for (let j = 0; j < i - 2; j++) answer[--row][--column] = ++cell;
  };

  return answer.flat();
};

solution(4); // [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]
solution(5); // [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]
solution(6); // [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]