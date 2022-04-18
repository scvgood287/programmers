// https://programmers.co.kr/learn/courses/30/lessons/49189

const solution = (n, edge) => {
  const graph = edge.reduce((acc, [a, b]) => {
    acc[a] = !acc[a] ? [b] : [...acc[a], b];
    acc[b] = !acc[b] ? [a] : [...acc[b], a];

    return acc;
  }, {});

  let visitedNodes = [1];
  let needVisitNodes = [1];

  while (visitedNodes.length !== n) {
    needVisitNodes = [...needVisitNodes.reduce((acc, needVisitNode) => new Set([ ...acc, ...graph[needVisitNode].filter(node => !visitedNodes.includes(node)) ]), new Set())];
    visitedNodes = [ ...visitedNodes, ...needVisitNodes ];
  };

  return needVisitNodes.length;
};