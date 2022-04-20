// https://programmers.co.kr/learn/courses/30/lessons/12973?language=javascript

const solution = (s) => {
  let letters = [];

  for (let letter of s) {
    letters[letters.length - 1] === letter ? letters.pop() : letters.push(letter);
  };

  return letters.length === 0 ? 1 : 0;
};