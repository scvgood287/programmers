// https://programmers.co.kr/learn/courses/30/lessons/42842

const solution = (brown, yellow) => {
  const size = brown + yellow;
  const maxWidth = size / 3;
  let width, height;

  for (let i = 3; i <= maxWidth; i++) {
    const widthOrHeight = size / i;
    if (size % i === 0 && (widthOrHeight + i) * 2 - 4 === brown) {
      [width, height] = widthOrHeight > i ? [widthOrHeight, i] : [i, widthOrHeight];
      break;
    };
  };

  return [width, height];
};