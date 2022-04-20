// https://programmers.co.kr/learn/courses/30/lessons/43165

const solution = (numbers, target) => {
  let answer = 0;

  const dfs = (depth = 0, sum = 0) => {
    if (depth === numbers.length) {
      if (sum === target) {
        answer++;
      };

      return;
    };

    dfs(depth + 1, sum + numbers[depth])
    dfs(depth + 1, sum - numbers[depth])
  };

  dfs();

  return answer;
};