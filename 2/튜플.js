// https://programmers.co.kr/learn/courses/30/lessons/64065

const solution = (s) => [...
  s
  .slice(2, s.length - 2)
  .split("},{")
  .sort((a, b) => a.length - b.length)
  .reduce((acc, curr) => {
      curr.split(",").forEach(el => acc.add(Number(el)));
      
      return acc;
  }, new Set())
]