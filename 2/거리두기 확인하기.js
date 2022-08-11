// https://programmers.co.kr/learn/courses/30/lessons/81302

const solution = (places) => places.map((place) => {
    for (let i = 0; i < place.length; i++) {
      const seats = place[i];

      for (let j = 0; j < seats.length; j++) {
        const seat = seats[j];
        const arounds = [(place[i - 1] || "")[j], (place[i + 1] || "")[j], place[i][j - 1], place[i][j + 1]];

        if ((seat === "P" && arounds.some(around => around === "P")) || (seat === "O" && arounds.filter(around => around === "P").length > 1)) {
          return 0;
        };
      };
    };

    return 1;
  }
);