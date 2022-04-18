// https://programmers.co.kr/learn/courses/30/lessons/70129

const solution = (s) => {
  let answer = [0, 0];

  while (s !== "1") {
    const newS = s.replace(/0/g, "");
    answer[0]++;
    answer[1] += s.length - newS.length;
    s = newS.length.toString(2);
  };

  return answer;
}; 