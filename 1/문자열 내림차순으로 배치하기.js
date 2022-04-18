// https://programmers.co.kr/learn/courses/30/lessons/12917

const solution = (s) => [...s].sort((a, b) => a > b ? -1 : 1).join("");