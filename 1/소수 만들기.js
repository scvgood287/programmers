// https://programmers.co.kr/learn/courses/30/lessons/12977

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  };

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

const solution = (nums) => {
  let answer = 0;
  
  const { odds, evens } = nums.reduce(({ odds, evens }, num) => (
    num % 2 ? {
      odds: [ ...odds, num ],
      evens,
    } : {
      odds,
      evens: [ ...evens, num ],
    }
  ), {
    odds: [],
    evens: [],
  });

  const oddsLength = odds.length;
  const evensLength = evens.length;

  if (oddsLength) {
    odds.forEach((odd) => {
      for (let i = 0; i < evensLength - 1; i++) {
        for (let j = i + 1; j < evensLength; j++) {
          if (isPrime(odd + evens[i] + evens[j])) {
            answer++;
          };
        };
      };
    });

    if (oddsLength >= 3) {
      for (let i = 0; i < oddsLength - 2; i++) {
        for (let j = i + 1; j < oddsLength - 1; j++) {
          for (let k = j + 1; k < oddsLength; k++) {
            if (isPrime(odds[i] + odds[j] + odds[k])) {
              answer++;
            };
          };
        };
      };
    };
  };

  return answer;
};

const solution2 = (nums) => {
  const numsLength = nums.length;
  let answer = 0;

  for (let i = 0; i < numsLength - 2; i++) {
    for (let j = i + 1; j < numsLength - 1; j++) {
      for (let k = j + 1; k < numsLength; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        };
      };
    };
  };

  return answer;
};

[...document.querySelectorAll(".result.passed")].reduce((acc, curr) => acc + Number(curr.innerText.slice(4, 8)), 0);