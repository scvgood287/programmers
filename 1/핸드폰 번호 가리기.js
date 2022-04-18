// https://programmers.co.kr/learn/courses/30/lessons/12948

const solution = (phone_number) => "*".repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4);