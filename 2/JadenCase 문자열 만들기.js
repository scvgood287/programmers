// https://programmers.co.kr/learn/courses/30/lessons/12951

const solution = (s) => s
  .split(" ")
  .reduce((str, word) => str + (word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : " ") + " ", "")
  .slice(0, -1);