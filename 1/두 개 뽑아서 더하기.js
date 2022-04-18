// https://programmers.co.kr/learn/courses/30/lessons/68644

const solution = (numbers) => [...numbers.reduce((acc, curr, i, origin) => {
  origin.slice(i + 1).forEach(n => acc.add(curr + n));

  return acc;
}, new Set())].sort((a, b) => a - b);