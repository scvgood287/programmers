// https://programmers.co.kr/learn/courses/30/lessons/17683

const solution = (m, musicinfos) => {
  const codeReg = /[A-Z]#?/g;
  const mCodes = m.match(codeReg).join("/") + "/";
  
  const matchedMusic = musicinfos.reduce((matched, musicinfo) => {
      const [start, end, title, score] = musicinfo.split(",");
      const playTime = (end.slice(0, 2) - start.slice(0, 2)) * 60 + (end.slice(3) - start.slice(3));
      const codes = score.match(codeReg);
      const splitedScore = codes.join("/");
      const played = Math.trunc(playTime / codes.length);
      let playedCodes = "";
      
      for (let i = 0; i < played; i++) {
          playedCodes += splitedScore + "/";
      };
      
      playedCodes += codes.slice(0, playTime % codes.length).join("/") + "/";
      
      if (playedCodes.includes(mCodes)) {
          matched.push({
              title,
              playTime
          });
      };
      
      return matched;
  }, []);
  
  return matchedMusic.length ? matchedMusic.sort((a, b) => b.playTime - a.playTime)[0].title : "(None)";
};