// https://programmers.co.kr/learn/courses/30/lessons/42840

const solution = (answers) => {
  const firstRepeat = [1, 2, 3, 4, 5];
  const secondRepeat = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdRepeat = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const [stupids, bestScore] = createStupids([firstRepeat, secondRepeat, thirdRepeat], answers);

  const stupidsInfo = stupids.map((stupid, index) => ({
    name: index,
    correctAnswerCount: stupid,
  }));

  return stupidsInfo
    .filter(({ correctAnswerCount }) => correctAnswerCount === bestScore)
    .map(({ name }) => (name + 1));
};

const createStupids = (repeats, answers) => {
  const stupids = repeats.map((repeat) => {
    const repeatLength = repeat.length;
    const answersLength = answers.length;
    let stupidAnswers = [];
    let correctAnswerCount = 0;

    for (let i = 0; i < (answersLength / repeatLength); i++) {
      stupidAnswers.push(...repeat);
    };

    stupidAnswers.push(repeat.slice(0, (answersLength % repeatLength)));

    for (let i = 0; i < stupidAnswers.length; i++) {
      if (stupidAnswers[i] === answers[i]) correctAnswerCount++;
    };

    return correctAnswerCount;
  });

  return [stupids, Math.max(...stupids)];
};