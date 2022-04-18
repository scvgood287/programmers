// https://programmers.co.kr/learn/courses/30/lessons/12947

const solution = (x) => !(x % String(x).split("").reduce((sum, n) => sum + Number(n), 0));