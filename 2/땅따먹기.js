// https://programmers.co.kr/learn/courses/30/lessons/12913

// 현재 조건에서 최적 (열은 4열, 행만 정해져 있지 않음)

const solution = (land) => Math.max(...land.reduce((scores, row) => [
  row[0] + Math.max(scores[1], scores[2], scores[3]),
  row[1] + Math.max(scores[0], scores[2], scores[3]),
  row[2] + Math.max(scores[0], scores[1], scores[3]),
  row[3] + Math.max(scores[0], scores[1], scores[2]),
], [0, 0, 0, 0]));

// 만약 열의 갯수 또한 정해져 있지 않다면...

// const solution = (land) => {
//   const rowLength = land.length;
//   const columnLength = land[0].length;
//   let rowIndex = 1;

//   while (rowIndex < rowLength) {
//     for (let columnIndex = 0; columnIndex < columnLength; columnIndex++) {
//       let prevRow = [...land[rowIndex - 1]];
//       prevRow.splice(columnIndex, 1);

//       land[rowIndex][columnIndex] += Math.max(...prevRow);
//     };
    
//     rowIndex++;
//   };

//   return Math.max(...land[rowIndex - 1]);
// };