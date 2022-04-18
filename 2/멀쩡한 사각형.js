// https://programmers.co.kr/learn/courses/30/lessons/62048

const getGCD = (a, b) => b === 0 ? a : getGCD(b, a%b);

const solution = (w, h) => w * h - (w + h - getGCD(w, h));