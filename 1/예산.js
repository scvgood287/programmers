// https://programmers.co.kr/learn/courses/30/lessons/12982

const solution = (d, budget) => {
  d
    .sort((a, b) => a - b)
    .reduce((acc, curr, i, arr) => {
      if (acc + curr > budget) arr.splice(i);
      
      return acc + curr;
    }, 0);

  return d.length;
}