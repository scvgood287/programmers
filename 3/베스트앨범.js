// https://programmers.co.kr/learn/courses/30/lessons/42579

const solution = (genres, plays) => {
  const songsLength = plays.length;
  let playCounts = {};
  let songs = {};
  let answer = [];

  for (let i = 0; i < songsLength; i++) {
    const genre = genres[i];
    const play = plays[i];
    const idAndPlay = [i, play];

    playCounts[genre] = (playCounts[genre] || 0) + play;

    switch ((songs[genre] || []).length) {
      case 0: songs[genre] = [idAndPlay]; break;
      case 1: {
        songs[genre].splice(songs[genre][0][1] < play ? 0 : 1, 0, idAndPlay);
        break;
      };
      default: {
        const targetIndex = songs[genre].findIndex(([, _play]) => play > _play);

        if (targetIndex !== -1) {
          songs[genre].splice(targetIndex, 0, idAndPlay);
          songs[genre].pop();
        };
      };
    };
  };

  Object.entries(playCounts).sort(([, a], [, b]) => b - a).forEach(([genre]) => {
    const [[aId], b] = songs[genre];
    answer = [ ...answer, ...(b ? [aId, b[0]] : [aId]) ];
  });
  
  return answer;
};