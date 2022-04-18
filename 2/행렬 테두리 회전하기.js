// https://programmers.co.kr/learn/courses/30/lessons/77485

const solution = (rows, columns, queries) => {
  let tree = Array.from({ length: rows * columns }, (_, i) => i + 1);
  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [x1, y1, x2, y2] = queries[i];
    const prevTree = [...tree];

    let smallest = Number.MAX_SAFE_INTEGER;

    const moveHorizontal = y2 - y1;
    const moveVertical = x2 - x1;

    const initialGoRight = (x1 - 1) * columns + y1;
    const initialGoDown = x1 * columns + y2 - 1;
    const initialGoLeft = (x2 - 1) * columns + y2 - 2;
    const initialGoUp = (x2 - 2) * columns + y1 - 1;

    for (let goRightCount = 0; goRightCount < moveHorizontal; goRightCount++) {
      const currentIndex = initialGoRight + goRightCount;
      const prevValue = prevTree[currentIndex - 1];

      if (smallest > prevValue) {
        smallest = prevValue;
      };

      tree[currentIndex] = prevValue;
    };

    for (let goDownCount = 0; goDownCount < moveVertical; goDownCount++) {
      const currentIndex = initialGoDown + goDownCount * columns;
      const prevValue = prevTree[currentIndex - columns];

      if (smallest > prevValue) {
        smallest = prevValue;
      };

      tree[currentIndex] = prevValue;
    };

    for (let goLeftCount = 0; goLeftCount < moveHorizontal; goLeftCount++) {
      const currentIndex = initialGoLeft - goLeftCount;
      const prevValue = prevTree[currentIndex + 1];

      if (smallest > prevValue) {
        smallest = prevValue;
      };

      tree[currentIndex] = prevValue;

    };

    for (let goUpCount = 0; goUpCount < moveVertical; goUpCount++) {
      const currentIndex = initialGoUp - goUpCount * columns;
      const prevValue = prevTree[currentIndex + columns];

      if (smallest > prevValue) {
        smallest = prevValue;
      };

      tree[currentIndex] = prevValue;
    };

    console.log([...tree]);
    answer[i] = smallest;
  };

  return answer;
};