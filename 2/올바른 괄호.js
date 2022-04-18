// https://programmers.co.kr/learn/courses/30/lessons/12909

const solution = (s) => {
  let unPaired = 0;

  for (let i = 0; i < s.length; i++) {
    if (unPaired < 0) {
      return false;
    };

    unPaired += s[i] === "(" ? 1 : -1;
  };

  return !unPaired;
};