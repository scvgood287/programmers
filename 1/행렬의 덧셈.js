// https://programmers.co.kr/learn/courses/30/lessons/12950

const solution = (arr1, arr2) => arr1.map((arr, row) => arr.map((cell, column) => cell + arr2[row][column]));