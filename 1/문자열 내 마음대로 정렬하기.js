// https://programmers.co.kr/learn/courses/30/lessons/12915

const solution = (strings, n) => strings.sort().sort((a, b) => a[n] < b[n] ? -1 : 1);