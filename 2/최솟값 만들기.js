// https://programmers.co.kr/learn/courses/30/lessons/12941

const solution = (A, B) => {
  A.sort((a, b) => a - b);
  
  return B.sort((a, b) => b - a).reduce((acc, curr, i) => acc + curr * A[i], 0);
};