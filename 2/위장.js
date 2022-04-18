// https://programmers.co.kr/learn/courses/30/lessons/42578

const solution = (clothes) => [...
  clothes.reduce((types, [, type]) => types.set(type, types.has(type) ? types.get(type) + 1 : 1), new Map())
].reduce((answer, [, type]) => answer * (type + 1), 1) - 1;