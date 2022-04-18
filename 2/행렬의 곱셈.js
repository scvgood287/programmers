// https://programmers.co.kr/learn/courses/30/lessons/12949

const solution = (arr1, arr2) => arr1.map(row => arr2[0].map((_, columnCell) => row.reduce((answerCell, rowCell, columnIndex) => answerCell + rowCell * arr2[columnIndex][columnCell], 0)));