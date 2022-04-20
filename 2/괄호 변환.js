// https://programmers.co.kr/learn/courses/30/lessons/60058

const solution = (p) => {
  if (!p) {
    return "";
  };

  let isPaired = 0;
  let vStartIndex = 0;

  do {
    isPaired += p[vStartIndex++] === "(" ? 1 : -1;
  } while (isPaired !== 0);

  const u = p.slice(0, vStartIndex);
  const v = solution(p.slice(vStartIndex));
  
  return u[0] === "(" ? u + v : `(${v})${[...u.slice(1, u.length - 1)].map(l => l === "(" ? ")" : "(").join("")}`;
};