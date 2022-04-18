// https://programmers.co.kr/learn/courses/30/lessons/17684?language=javascript

const solution = (msg) => {
  let dictionary = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  let msgIndex = 0;
  let answer = [];

  while (msgIndex < msg.length) {
    let w = msg[msgIndex];
    let wIndex = dictionary.indexOf(w);

    while (dictionary.includes(w)) {
      wIndex = dictionary.indexOf(w);
      w += msg[++msgIndex];
    };

    answer.push(wIndex + 1);

    if (msgIndex + 1 < msg.length) {
      dictionary.push(w);
    };
  };

  return answer;
};

const solution = (msg) => {
  let dictionary = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  let currentIndex = 0;
  let maxWordLength = 1;
  let answer = [];

  while (currentIndex < msg.length) {
    let wordLength = maxWordLength;

    while (wordLength > 0) {
      const wordIndex = dictionary.indexOf(msg.slice(currentIndex, currentIndex + wordLength));

      if (wordIndex !== -1) {
        const newWordLength = wordLength + 1;

        dictionary.push(msg.slice(currentIndex, currentIndex + newWordLength));
        maxWordLength = newWordLength;
        answer.push(wordIndex + 1);

        break;
      };

      wordLength--;
    };

    currentIndex += wordLength;
  };

  return answer;
};

// https://programmers.co.kr/learn/courses/30/lessons/17684
// 왜안됨 씨발