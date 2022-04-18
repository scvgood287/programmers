// https://programmers.co.kr/learn/courses/30/lessons/76501

const solution = (absolutes, signs) => absolutes.reduce((acc, curr, i) => (acc + curr * (signs[i] ? 1 : -1)), 0);