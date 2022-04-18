// https://programmers.co.kr/learn/courses/30/lessons/12926

const decoding = (letter, n) => {
  if (letter === " ") {
      return " ";
  };
  
  const ascii = letter.charCodeAt();
  const decoded = ascii + n;
  const isBigLetter = ascii < 91;
  const zAscii = isBigLetter ? 90 : 122;
  
  return String.fromCharCode(decoded - (decoded > zAscii ? 26 : 0));
};

const solution = (s, n) => {
  let answer = "";
  
  for (let i = 0; i < s.length; i++) {
      answer += decoding(s[i], n);
  };
  
  return answer;
};