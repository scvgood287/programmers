// https://programmers.co.kr/learn/courses/30/lessons/42889

// Map
const solution = (N, stages) => {
  const failureRates = stages.reduce((rates, stage) => rates.set(stage, rates.has(stage) ? rates.get(stage) + 1 : 1), new Map());
  const allClear = N + 1;

  failureRates.set(allClear, {
    reach: failureRates.has(allClear) ? failureRates.get(allClear) : 0,
  });

  for (let currentStage = N; currentStage > 0; currentStage--) {
    const clear = failureRates.get(currentStage + 1).reach;
    const reach = clear + (failureRates.has(currentStage) ? failureRates.get(currentStage) : 0);

    failureRates.set(currentStage, {
      clear,
      reach,
      failureRate: reach ? 1 - (clear / reach) : 0,
    });
  };

  failureRates.delete(allClear);

  return [...failureRates]
    .sort(([ aStage, { failureRate: aFailureRate } ], [ bStage, { failureRate: bFailureRate } ]) => bFailureRate - aFailureRate || aStage - bStage)
    .map(([stage]) => stage);
};

// Object
const solution2 = (N, stages) => {
  const failureRates = stages.reduce((rates, stage) => {
    rates[stage] = rates[stage] ? rates[stage] + 1 : 1

    return rates;
  }, {});
  const allClear = N + 1;

  failureRates[allClear] = {
    reach: failureRates.hasOwnProperty(allClear) ? failureRates[allClear] : 0,
  }

  for (let currentStage = N; currentStage > 0; currentStage--) {
    const clear = failureRates[currentStage + 1].reach;
    const reach = clear + (failureRates.hasOwnProperty(currentStage) ? failureRates[currentStage] : 0);

    failureRates[currentStage] = {
      clear,
      reach,
      failureRate: reach ? 1 - (clear / reach) : 0,
    };
  };

  delete failureRates[allClear];

  return Object.entries(failureRates)
    .sort(([ aStage, { failureRate: aFailureRate } ], [ bStage, { failureRate: bFailureRate } ]) => bFailureRate - aFailureRate || aStage - bStage)
    .map(([stage]) => Number(stage));
};