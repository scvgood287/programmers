// https://programmers.co.kr/learn/courses/30/lessons/12980

const solution = (N) => {
  let usage = 1;

  while (N > 1) {
    usage += N % 2;
    N = Math.trunc(N / 2);
  };

  return usage;
};

// 저 while 문 자체가 잘 생각해보면 2진수 구하는거랑 같기 때문에
// N.toString(2).match(/1/g).length 가 정답이다..

const solution = (N) => N.toString(2).match(/1/g).length;