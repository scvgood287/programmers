// https://programmers.co.kr/learn/courses/30/lessons/1845

const solution = (nums) => Math.min(nums.length / 2, new Set(nums).size);