// https://programmers.co.kr/learn/courses/30/lessons/42747

const solution = (citations) => {
  citations.sort((a, b) => (b - a));

  let i = 0;
  while (i < citations.length) {
    if (citations[i] <= (i + 1)) return i;
    i++;
  }
  
  return i;
}