// https://programmers.co.kr/learn/courses/30/lessons/17676

const START = "START";
const END = "END";

const logToMsInfo = (log, id) => {
    const [, S, T] = log.split(" ");
    
    const end = S.split(":").reduce((acc, curr, i) => acc + Number(curr) * (60 ** (2 - i)) * 1000, 0);
    const start = end - Number(T.replace("s", "")) * 1000 + 1;
    
    return [{ status: START, ms: start, id }, { status: END, ms: end + 999, id }];
};

const solution = (lines) => {
    const times = lines
        .reduce((times, log, i) => [...times, ...logToMsInfo(log, i)], [])
        .sort((a, b) => a.ms !== b.ms ? a.ms - b.ms : b.id - a.id);
    const timesLength = times.length;
    let answer = 0;
    let count = 0;
    
    for (let i = 0; i < timesLength; i++) {
        const { status } = times[i];
        
        if (status === START) {
            count += 1;
            
            if (count > answer) {
                answer = count;
            };
        } else {
            count -= 1;
        };
    };
    
    return answer;
};