// https://programmers.co.kr/learn/courses/30/lessons/92334

const solution1 = (id_list, report, k) => {
  const userReports = report.reduce((acc, info) => {
    const [user, report] = info.split(" ");

    if (acc[report]) {
      acc[report].add(user);
    } else {
      acc[report] = new Set([user]);
    };

    return acc;
  }, {});

  const users = Object.values(userReports).reduce((acc, reportedBy) => {
    if (reportedBy.size >= k) {
      [...reportedBy].forEach((user) => {
        acc[user] = acc[user] ? acc[user] + 1 : 1;
      });
    };

    return acc;
  }, {});

  return id_list.map((id) => users[id] || 0);
};

const solution2 = (id_list, reports, k) => {
  const userReports = [...new Set(reports)].reduce((acc, info) => {
    const [user, report] = info.split(" ");

    acc[report] = acc[report] ? [...acc[report], user] : [user];

    return acc;
  }, {});

  const users = Object.values(userReports).reduce((acc, reportedBy) => {
    if (reportedBy.length >= k) {
      [...reportedBy].forEach((user) => {
        acc[user] = acc[user] ? acc[user] + 1 : 1;
      });
    };

    return acc;
  }, {});

  return id_list.map((id) => users[id] || 0);
};