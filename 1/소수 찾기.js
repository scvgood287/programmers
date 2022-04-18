// https://programmers.co.kr/learn/courses/30/lessons/12921

const isPrime = (num) => {
  if (num % 2 === 0) {
      return num === 2;
  };
  
  const limit = Math.sqrt(num);
  
  for (let i = 3; i <= limit; i += 2) {
      if (num % i === 0) {
          return false;
      };
  };
  
  return true;
};

const solution = (n) => {
  let answer = 1;
  
  for (let i = 3; i <= n; i += 2) {
      if (isPrime(i)) {
          answer++;
      };
  };
  
  return answer;
};