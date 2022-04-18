// https://programmers.co.kr/learn/courses/30/lessons/42576

const solution = (participant, completion) => {
  const finishers = completion.reduce((acc, finisher) => {
    acc[finisher] = acc.hasOwnProperty(finisher) ? acc[finisher] + 1 : 1;

    return acc;
  }, {});

  return participant.find((el) => {
    const isFinisher = !!finishers[el];

    if (isFinisher) {
      finishers[el] -= 1;
    }

    return !isFinisher;
  });
};

// 2
function solution2(participant, completion) {
  participant.sort();
  completion.sort();

  let i = 0;
  for (i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[i];
}