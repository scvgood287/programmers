// https://programmers.co.kr/learn/courses/30/lessons/42587

const solution = (priorities, location) => {
  const prioritiesLength = priorities.length;
  let editedPriorities = priorities.map((priority, i) => ({ priority, location: location === i }));
  const sortedPriorities = [...new Set(priorities)].sort((a, b) => b - a);

  let j = 0;
  for (let i = 0; i < sortedPriorities.length - 1; i++) {
    let targetPriority = sortedPriorities[i];

    while (editedPriorities.slice(j, prioritiesLength).some(({ priority }) => priority === targetPriority)) {
      const targetIndex = editedPriorities.slice(j, prioritiesLength).findIndex(({ priority }) => priority === targetPriority);

      if (targetIndex !== 0) { editedPriorities.push(...editedPriorities.splice(j, targetIndex)); };

      j++;
    };
  };

  return editedPriorities.findIndex(({ location }) => location) + 1;
};