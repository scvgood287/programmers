// https://programmers.co.kr/learn/courses/30/lessons/12935

// 테스트 케이스 1번 3900(;;)
const solution = (arr) => arr.length === 1 ? [-1] : arr.filter(n => n !== Math.min(arr));
const solution = (arr) => arr.length === 1 ? [-1] : arr.filter(n => n !== Math.min.apply(null, arr));

// 테스트 케이스 1번 23.39
const solution = (arr) => {
  const arrLength = arr.length;

  if (arrLength === 1) {
    return [-1];
  };

  let min = arr[0];
  let minIndex = 0;

  for (let i = 1; i < arrLength; i++) {
    const current = arr[i];

    if (current < min) {
      min = current;
      minIndex = i;
    };
  };

  arr.splice(minIndex, 1);

  return arr;
};