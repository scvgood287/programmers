// https://programmers.co.kr/learn/courses/30/lessons/12931

const solution = (N) => String(N).split("").reduce((sum, n) => sum + Number(n), 0);