// https://programmers.co.kr/learn/courses/30/lessons/42748

const solution = (array, commands) => commands.map((command) => {
  const [begin, end, index] = command;

  return array
    .slice(begin-1, end)
    .sort((a, b) => (a - b))[index-1];
});