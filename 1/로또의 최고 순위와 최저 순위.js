// https://programmers.co.kr/learn/courses/30/lessons/77484

const solution = (lottos, win_nums) => {
  const { matches, zeroCount } = lottos.reduce((acc, number) => {
    number ? acc.matches += (win_nums.includes(number) ? 1 : 0) : acc.zeroCount++;

    return acc;
  }, { matches: 0, zeroCount: 0 });

  return [getRank(matches + zeroCount), getRank(matches)];
};

const getRank = (matches) => matches ? 7 - matches : 6;

// 이전 풀이

const solution = (lottos, win_nums) => {
  const zeroIndex = lottos.sort((a, b) => b - a).indexOf(0);
  const zeroCount = zeroIndex !== -1 ? lottos.splice(zeroIndex).length : 0;

  const lowest = lottos.filter(num => win_nums.includes(num)).length;

  return [(lowest + zeroCount) !== 0 ? 7 - (lowest + zeroCount) : 6, lowest !== 0 ? 7 - lowest : 6];
}