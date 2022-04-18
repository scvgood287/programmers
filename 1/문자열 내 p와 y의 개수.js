// https://programmers.co.kr/learn/courses/30/lessons/12916

// 왜인지 모르겠으나 replace가 아닌 match를 쓰니 2, 3, 29, 30번에서 런타임 에러가 남
const solution = (s) => s.replace(/p/ig, "").length === s.replace(/y/ig, "").length;