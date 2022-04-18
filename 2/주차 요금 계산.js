// https://programmers.co.kr/learn/courses/30/lessons/92341

const solution = (fees, records) => {
  const [basicTime, basicFee, unitTime, unitFee] = fees;
  const IN = "IN";
  const LAST_TIME = 60 * 23 + 59;

  const cars = records.reduce((acc, record) => {
    const [time, id, action] = record.split(" ");
    const [h, m] = time.split(":");
    const minutes = 60 * h + Number(m);

    if (!acc[id]) {
      acc[id] = {
        accumulateTime: 0,
        startTime: 0,
        isParked: false,
      };
    };

    if (action === IN) {
      acc[id] = {
        ...acc[id],
        startTime: minutes,
        isParked: true,
      };
    } else {
      const { accumulateTime, startTime } = acc[id];
      
      acc[id] = {
        accumulateTime: accumulateTime + minutes - startTime,
        startTime: 0,
        isParked: false,
      };
    };

    return acc;
  }, {});

  return Object.entries(cars).sort(([aId], [bId]) => Number(aId) - Number(bId)).map(([, result]) => {
    const { accumulateTime, startTime, isParked } = result;
    const additionalTime = accumulateTime + (isParked ? LAST_TIME - startTime : 0) - basicTime;

    return basicFee + (additionalTime > 0 ? Math.ceil(additionalTime / unitTime) * unitFee : 0);
  });
};