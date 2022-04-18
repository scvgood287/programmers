// https://programmers.co.kr/learn/courses/30/lessons/17677

const solution = (str1, str2) => {
  const multipleSet1 = getMultipleSet(str1);
  const multipleSet2 = getMultipleSet(str2);
  let assembledSet = new Map();
  let union = 0;
  let intersection = 0;
  
  [multipleSet1, multipleSet2].forEach((multipleSet, i) => {
      multipleSet.forEach((element) => {
          if (!assembledSet.has(element)) {
              assembledSet.set(element, [0, 0]);
          };
          
          assembledSet.get(element)[i] += 1;
      });
  });
  
  assembledSet.forEach(([element1, element2]) => {
      union += Math.min(element1, element2);
      intersection += Math.max(element1, element2);
  });
  
  return union === 0 && intersection === 0 ? 65536 : Math.trunc(union / intersection * 65536);
};

const getMultipleSet = (str) => {
  const capitalized = str.toUpperCase();
  const capitalizedLength = capitalized.length;
  let multipleSet = [];
  
  for (let i = 0; i < capitalizedLength - 1; i++) {
      const element = capitalized[i] + capitalized[i + 1];
      
      if (element.match(/[^A-Z]/g) === null) {
          multipleSet.push(element);
      };
  };
  
  return multipleSet;
};