// https://programmers.co.kr/learn/courses/30/lessons/12899

const solution = (n) => {
  const units = {
    0: "4",
    1: "1",
    2: "2",
  };
  let answer = "";

  while (n) {
    const targetUnit = n % 3;

    answer = units[targetUnit] + answer;
    n = targetUnit ? (n - targetUnit) / 3 : n / 3 - 1;
  };

  return answer;
};

// 잠시 보류
const solution2 = (n) => {
  let answer = n % 3 ? n.toString(3) : String(Number((n - 1).toString(3)) + 2);

  while (answer.includes("0")) {
    const zeroIndex = answer.lastIndexOf("0");
    const unchanged = answer.slice(0, zeroIndex - 1);
    const changed = Number(answer[zeroIndex - 1]) - 1;
    const remain = answer.slice(zeroIndex + 1);

    answer = unchanged + (changed || "4") + remain;
  };

  return answer.replace("0", "");
};