// https://programmers.co.kr/learn/courses/30/lessons/64061

const solution = (board, moves) => {
  const boardLength = board.length;
  let initialBoardStatus = {};

  for (let i = 1; i <= boardLength; i++) {
    initialBoardStatus[i] = [];
  };

  const boardStatus = board.reduce((status, row) => {
    for (let i = 0; i < boardLength; i++) {
      const puppet = row[i];

      if (puppet) {
        const column = i + 1;

        status[column] = [ ...status[column], puppet ];
      };
    };

    return status; 
  }, initialBoardStatus);

  return moves.reduce(({ boardStatus, basket, answer }, move) => {
    let isRemoved = false;
    let currentBoardStatus = { ...boardStatus };
    let currentBasket = [ ...basket ];

    if (currentBoardStatus[move].length) {
      const pickedPuppet = currentBoardStatus[move].shift();

      if (currentBasket[currentBasket.length - 1] === pickedPuppet) {
        isRemoved = true;
        currentBasket.pop();
      } else {
        currentBasket = [ ...currentBasket, pickedPuppet ];
      };
    };
  
    return {
      boardStatus: currentBoardStatus,
      basket: currentBasket,
      answer: answer + (isRemoved ? 2 : 0),
    };
  }, {
    boardStatus,
    basket: [],
    answer: 0,
  }).answer;
};