// https://programmers.co.kr/learn/courses/30/lessons/12901

const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

const solution = (a, b) => days[(months.slice(0, a - 1).reduce((acc, curr) => acc + curr, 0) + b - 1) % 7];