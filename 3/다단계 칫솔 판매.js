// https://programmers.co.kr/learn/courses/30/lessons/77486

const solution = (enroll, referral, seller, amount) => {
  const pyramid = enroll.reduce((pyramid, member, i) => {
    pyramid[member] = {
      parent: referral[i],
      profit: 0,
    };

    return pyramid;
  }, {});

  const distribute = (member, gain) => {
    if (!gain || member === "-") {
      return;
    };

    const devote = Math.trunc(gain / 10);

    pyramid[member].profit += gain - devote;
    distribute(pyramid[member].parent, devote);
  };

  seller.forEach((member, i) => distribute(member, amount[i] * 100));

  return enroll.map(member => pyramid[member].profit);
};

// solution(
//   ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
//   ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
//   ["young", "john", "tod", "emily", "mary"],
//   [12, 4, 2, 5, 10]
// );

// solution(
//   ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
//   ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
//   ["sam", "emily", "jaimie", "edward"],
//   [2, 3, 5, 4]
// );