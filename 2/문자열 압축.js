// https://programmers.co.kr/learn/courses/30/lessons/60057

const getCompressedLength = (str, length) => {
  let currentStr = str.slice(0, length);
  let repeat = 1;
  let compressedLength = str.length;

  for (let start = length; start <= str.length; start += length) {
    const curr = str.slice(start, start + length);

    if (currentStr === curr) {
      repeat++;
    } else {
      if (repeat > 1) {
        compressedLength -= (repeat * length - (String(repeat).length + length));
      };

      repeat = 1;
      currentStr = curr;
    };
  };

  return compressedLength;
};

const solution = (s) => {
  let answer = s.length;

  for (let compressionLength = 1; compressionLength <= s.length / 2; compressionLength++) {
    const compressedLength = getCompressedLength(s, compressionLength);
    console.log(compressedLength);

    if (compressedLength < answer) {
      answer = compressedLength;
    };
  };

  return answer;
};