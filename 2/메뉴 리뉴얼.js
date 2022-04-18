// https://programmers.co.kr/learn/courses/30/lessons/72411

const solution = (orders, course) => {
  let candidates = {};
  let answer = [];

  course.forEach((amount) => {
    candidates[amount] = {};

    orders.forEach((order) => {
      if (order.length >= amount) {
        const selectedMenus = selectMenu(order.split("").sort(), amount);

        selectedMenus.forEach(menu => candidates[amount][menu] = candidates[amount].hasOwnProperty(menu) ? candidates[amount][menu] + 1 : 1);
      };
    });
  });

  Object.values(candidates).forEach(setMenus => {
    const most = Math.max(...Object.values(setMenus));

    if (most > 1) {
      Object.entries(setMenus).forEach(([setMenu, n]) => {
        if (n === most) {
          answer.push(setMenu);
        };
      });
    };
  });

  return answer.sort();
};

const selectMenu = (order, amount) => {
  let result = [];

  if (amount === 1) {
    return order;
  };

  order.forEach((fixed, i) => {
    const rest = order.slice(i + 1);
    const others = selectMenu(rest, amount - 1);
    const setMenuCandidate = others.map(other => fixed + other);

    result.push(...setMenuCandidate);
  });

  return result;
};