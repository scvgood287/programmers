// https://programmers.co.kr/learn/courses/30/lessons/12930

const solution = (s) => s
  .split(" ")
  .map((word) => {
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
      newWord += (i % 2 ? word[i].toLowerCase() : word[i].toUpperCase());
    };

    return newWord;
  })
  .join(" ");