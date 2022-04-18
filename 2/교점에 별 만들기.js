// https://programmers.co.kr/learn/courses/30/lessons/87377

const solution = (line) => {
  const { MAX_SAFE_INTEGER, MIN_SAFE_INTEGER, isInteger } = Number;
  const lineLength = line.length;
  let minX = MAX_SAFE_INTEGER;
  let minY = MAX_SAFE_INTEGER;
  let maxX = MIN_SAFE_INTEGER;
  let maxY = MIN_SAFE_INTEGER;
  let intersectionPoints = new Map();
  let answer = [];

  for (let i = 0; i < lineLength; i++) {
    const [A, B, E] = line[i];

    for (let j = i + 1; j < lineLength; j++) {
      const [C, D, F] = line[j];
      const ADBC = A * D - B * C;

      if (ADBC) {
        const x = (B * F - E * D) / ADBC;
        const y = (E * C - A * F) / ADBC;

        if (isInteger(x) && isInteger(y)) {
          if (minX > x) { minX = x; };
          if (maxX < x) { maxX = x; };
          if (minY > y) { minY = y; };
          if (maxY < y) { maxY = y; };
          if (!intersectionPoints.has(y)) { intersectionPoints.set(y, new Set()); };
          
          intersectionPoints.set(y, intersectionPoints.get(y).add(x));
        };
      };
    };
  };

  for (let i = 0; i < maxY - minY + 1; i++) {
    let points = Array.from({ length: maxX - minX + 1 }, () => ".");
    const y = maxY - i;

    if (intersectionPoints.has(y)) {
      const xs = [...intersectionPoints.get(y)];
      const xsLength = xs.length;

      for (let j = 0; j < xsLength; j++) { points[xs[j] - minX] = "*"; };
    };

    answer[i] = points.join("");
  };

  return answer;
};