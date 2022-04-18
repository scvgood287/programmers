// https://programmers.co.kr/learn/courses/30/lessons/42628

const solution = (operations) => {
  const answer = operations.reduce((queue, operation) => {
    const [currOperation, currValue] = operation.split(' ');
    const data = Number(currValue);

    switch (currOperation) {
      case 'I':
        const targetIndex = queue.findIndex(value => data <= value);
        queue.splice(targetIndex === -1 ? queue.length : targetIndex, 0, data);
        break;
      case 'D':
        data === 1 ? queue.pop() : queue.shift();
        break;
    };

    return queue;
  }, []);

  return answer.length ? [answer[answer.length - 1], answer[0]] : [0, 0];
};