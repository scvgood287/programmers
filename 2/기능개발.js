// https://programmers.co.kr/learn/courses/30/lessons/42586

const solution = (progresses, speeds) => {
  let answer = [];

  for (let i = 0; progresses.length > 0; i++) {
    const howLongDoesItTake = Math.ceil((100 - progresses[0]) / speeds[0]);
    let isDeployable = true;
  
    progresses = progresses.reduce((acc, progress, j) => {
      const updatedProgress = progress + howLongDoesItTake * speeds[j];
  
      if (updatedProgress < 100) { isDeployable = false; };
  
      if (isDeployable) { answer[i] = answer[i] ? answer[i] + 1 : 1; }
      else { acc = [ ...acc, updatedProgress ]; };
  
      return acc;
    }, []);
  
    speeds.splice(0, answer[i]);
  };

  return answer;
};