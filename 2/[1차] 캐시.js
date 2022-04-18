// https://programmers.co.kr/learn/courses/30/lessons/17680

const solution = (cacheSize, cities) => {
  let cache = [];

  return cities.reduce((runtime, city) => {
    const capitalizedCity = city.toUpperCase();
    const cacheIndex = cache.indexOf(capitalizedCity);

    if (cacheIndex !== -1) {
      runtime++;

      cache.push(...cache.splice(cacheIndex, 1));
    } else {
      runtime += 5;

      if (cache.length === cacheSize) {
        cache.shift();
      };

      if (cache.length < cacheSize) {
        cache.push(capitalizedCity);
      };
    };

    return runtime;
  }, 0);
};