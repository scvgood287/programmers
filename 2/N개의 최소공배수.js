// https://programmers.co.kr/learn/courses/30/lessons/12953

const getGCD = (a, b) => b ? getGCD(b, a % b) : a;
const getLCM = (a, b) => a * b / getGCD(a, b);

const solution = (arr) => arr.reduce((acc, curr) => getLCM(acc, curr));