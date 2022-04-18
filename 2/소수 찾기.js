// https://programmers.co.kr/learn/courses/30/lessons/42839

const solution = (numbers) => {
  const papers = [...numbers];

  const isPrime = (number) => {
    if (number === 0 || number === 1) return false;
    if (number === 2) return true;

    for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
      if (number % i === 0) return false;
    }

    return true;
  }

  let result = [];
  const getNumbers = (fixed, arr) => {
    if (arr.length >= 1) {
      for (let i = 0; i < arr.length; i++) {
        const newFixed = fixed + arr[i];
        const restArr = arr.slice();
        restArr.splice(i, 1);
        result.push(newFixed);

        getNumbers(newFixed, restArr);
      }
    }
  };
  getNumbers("", papers);

  result = new Set([...result].map((item) => Number(item)));

  return [...result].filter((number) => isPrime(number)).length;
}