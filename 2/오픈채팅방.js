// https://programmers.co.kr/learn/courses/30/lessons/42888

// 정방향 loop, users[uid] 체크 x, push
const solution = (record) => {
  let users = {};
  let messages = [];

  const recordLength = record.length;
  const CHANGE = "Change";
  const messageTypes = {
    "Enter": "님이 들어왔습니다.",
    "Leave": "님이 나갔습니다.",
  };

  for (let i = 0; i < recordLength; i++) {
    const [ action, uid, nickname ] = record[i].split(" ");

    // nickname update
    if (nickname) {
      users[uid] = nickname;
    };

    // add message
    if (action !== CHANGE) {
      messages.push([uid, messageTypes[action]]);
    };
  };

  return messages.map(([ uid, message ]) => `${users[uid]}${message}`);
};

// 역방향 loop, users[uid] 체크 o, unshift
const solution2 = (record) => {
  let users = {};
  let messages = [];

  const recordLength = record.length;
  const messageTypes = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  for (let i = recordLength - 1; i >= 0; i--) {
    const [ action, uid, nickname ] = record[i].split(" ");

    if (nickname && !users[uid]) {
      users[uid] = nickname;
    };

    if (action !== "Change") {
      messages.unshift([uid, messageTypes[action]]);
    };
  };

  return messages.map(([ uid, message ]) => `${users[uid]}${message}`);
};

// ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// {
//   Enter: "님이 들어왔습니다.",
//   Leave: "님이 나갔습니다.",
// };