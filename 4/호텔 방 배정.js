// https://programmers.co.kr/learn/courses/30/lessons/64063

const wrongSolution1 = (k, room_number) => {
  let checkRoom = [];

  return room_number.map(number => {
    let roomNumber;
    for (let i = number - 1; i < k; i++) {
      if (!checkRoom[i]) {
        roomNumber = i + 1;
        checkRoom[i] = true;
        break;
      };
    };

    return roomNumber;
  });
};

const solution = (k, room_number) => {
  let rooms = [];

  let result = [];
  for (let i = 0; i < room_number.length; i++) {
    let roomNumber = room_number[i];
    console.log(rooms);

    if (rooms[roomNumber - 1]) {
      let targetIndex = rooms.findIndex(number => number !== true);
      roomNumber = (targetIndex === -1 ? rooms.length : targetIndex) + 1;
    };

    rooms[roomNumber - 1] = true;
    result[i] = roomNumber;

    console.log(rooms);
  };

  return result;
};

const wrongSolution2 = (k, room_number) => {
  let rooms = new Array(k);

  let result = [];
  for (let i = 0; i < room_number.length; i++) {
    let roomNumber = room_number[i];

    if (rooms[roomNumber - 1]) { roomNumber = rooms.findIndex(number => number !== true) + 1; };

    rooms[roomNumber - 1] = true;
    result[i] = roomNumber;
  };

  return result;
};

// correctSolution

const findRoom = (roomNumber, rooms) => {
  if (!rooms.has(roomNumber)) {
    rooms.set(roomNumber, roomNumber + 1);

    return roomNumber;
  };

  let unusedRoomNumber = findRoom(rooms.get(roomNumber), rooms);
  rooms.set(roomNumber, roomNumber + 1);

  return unusedRoomNumber;
};

const solution = (k, room_number) => {
  let result = [];
  let usedRooms = new Map();

  for (let i = 0; i < room_number.length; i++) {
    result[i] = findRoom(room_number[i], usedRooms);
  };

  return result;
};

const k = 10;
const room_number = [1, 3, 4, 1, 3, 1];
const result = [1, 3, 4, 2, 5, 6];