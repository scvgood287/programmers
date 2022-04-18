// https://programmers.co.kr/learn/courses/30/lessons/49994

const solution1 = (dirs) => {
  let coordinates = {
    x: 0,
    y: 0
  };

  const directions = {
    U: ({ x, y }) => {
      if (y === 5) return;
      coordinates.y++;
      return `${x}/${y + 0.5}`;
    },
    D: ({ x, y }) => {
      if (y === -5) return;
      coordinates.y--;
      return `${x}/${y - 0.5}`;
    },
    R: ({ x, y }) => {
      if (x === 5) return;
      coordinates.x++;
      return `${x + 0.5}/${y}`;
    },
    L: ({ x, y }) => {
      if (x === -5) return;
      coordinates.x--;
      return `${x - 0.5}/${y}`;
    },
  };

  return [...dirs.split("").reduce((acc, dir) => acc.add(directions[dir](coordinates)), new Set())].filter(Boolean).length;
};

solution("ULURRDLLU"); // 7
solution("LULLLLLLU"); // 7

const solution2 = (dirs) => {
  let coordinates = {
    x: 0,
    y: 0
  };

  return dirs.split("").reduce((acc, dir) => {
    let { x, y } = coordinates;

    switch (dir) {
      case "U":
        if (y === 5) break;
        acc.add(`${x}/${y + 0.5}`);
        coordinates.y++;
        break;
      case "D":
        if (y === -5) break;
        acc.add(`${x}/${y - 0.5}`);
        coordinates.y--;
        break; 
      case "R":
        if (x === 5) break;
        acc.add(`${x + 0.5}/${y}`);
        coordinates.x++;
        break;
      case "L":
        if (x === -5) break;
        acc.add(`${x - 0.5}/${y}`);
        coordinates.x--;
        break;
    };

    return acc;
  }, new Set()).size;
};