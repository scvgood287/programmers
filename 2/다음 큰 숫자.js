// https://programmers.co.kr/learn/courses/30/lessons/12911

// 내 풀이

const solution = (n) => {
  const binaryN = n.toString(2);
  let nextN = "";

  if (binaryN.includes("0")) {
    const lastOne = binaryN.lastIndexOf("1");
    let targetIndex = binaryN.lastIndexOf("0", lastOne);

    if (targetIndex === -1) {
      nextN = "1" + "0".repeat(binaryN.length - lastOne) + "1".repeat(lastOne);
    } else {
      nextN = binaryN.slice(0, targetIndex) + "1" + "0".repeat(binaryN.length - lastOne - 1) + binaryN.slice(targetIndex, lastOne);
    };
  } else {
    nextN = "10" + binaryN.slice(1);
  };

  return nextN;
};

// 단순 풀이

function solution(n,a=n+1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length ? a : solution(n,a+1);
}

// 시프트 연산자

function solution(n) {
  var i, j;
  for (i = 0; !(n & 1); i++) {n = n >> 1; }
  for (j = 0; n & 1; i++, j++) {n = n >> 1; }
  for (j--, n++; i !== j; i--) {n = n << 1; }
  for (i; i; i--, n++) {n = n << 1; }
  return n;
}