// https://programmers.co.kr/learn/courses/30/lessons/12939

const solution = (s) => s
  .split(" ")
  .reduce(([min, max], n) => [min > n ? Number(n) : min, max < n ? Number(n) : max], [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER])
  .join(" ");