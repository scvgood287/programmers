// https://programmers.co.kr/learn/courses/30/lessons/70128

const solution = (a, b) => a.reduce((acc, curr, i) => acc + curr * b[i], 0)