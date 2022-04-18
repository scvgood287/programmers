// https://programmers.co.kr/learn/courses/30/lessons/81301

const solution = (s) => {
  const dic = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let answer = s;
  for (let i = 0; i < dic.length; i++) {
    if (!isNaN(Number(s))) break;

    while (answer.includes(dic[i])) answer = answer.replace(dic[i], i);
  }

  return Number(answer);
}