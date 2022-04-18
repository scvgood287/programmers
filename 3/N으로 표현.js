// https://programmers.co.kr/learn/courses/30/lessons/42895

const solution = (N, number) => {
  if (N === number) {
    return 1;
  };
  
  let combinations = [new Set(), new Set([N])];

  for (let used = 2; used < 9; used++) {
    let makeableNumbers = new Set([Number(String(N).repeat(used))]);

    for (let i = 1; i <= used / 2; i++) {
      const combination1 = [...combinations[i]];
      const combination2 = [...combinations[used - i]];

      combination1.forEach((number1) => {
        combination2.forEach((number2) => {
          makeableNumbers.add(number1 + number2);
          makeableNumbers.add(number1 - number2);
          makeableNumbers.add(number1 * number2);
          makeableNumbers.add(number1 / number2);
        });
      });

      combination2.forEach((number1) => {
        combination1.forEach((number2) => {
          makeableNumbers.add(number1 + number2);
          makeableNumbers.add(number1 - number2);
          makeableNumbers.add(number1 * number2);
          makeableNumbers.add(number1 / number2);
        });
      });
    };

    if (makeableNumbers.has(number)) {
      return used;
    };

    combinations[used] = makeableNumbers;
  };

  return -1;
};