// https://programmers.co.kr/learn/courses/30/lessons/62048

const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);

const solution = (w, h) => w * h - (w + h - getGCD(w, h));
