// https://programmers.co.kr/learn/courses/30/lessons/67256

const solution = (numbers, hand) => {
  const { abs } = Math;
  const mainHand = hand[0].toUpperCase();
  let positions = {
    L: {
      x: 0,
      y: 3,
    },
    R: {
      x: 2,
      y: 3,
    },
  };

  return numbers.reduce((answer, number) => {
    const x = number === 0 ? 1 : (number - 1) % 3;
    const y = number === 0 ? 3 : parseInt((number - 1) / 3);
    let clickedBy = "";
    
    switch (x) {
      case 0:
        clickedBy = "L";
        break;
      case 2:
        clickedBy = "R";
        break;
      default:
        const { L: { x: leftX, y: leftY }, R: { x: rightX, y: rightY } } = positions;
        const leftDistance = abs(leftX - x) + abs(leftY - y);
        const rightDistance = abs(rightX - x) + abs(rightY - y);

        clickedBy = leftDistance === rightDistance ? mainHand : leftDistance > rightDistance ? "R" : "L";
    };

    positions[clickedBy] = { x, y };
    
    return answer + clickedBy;
  }, "");
};