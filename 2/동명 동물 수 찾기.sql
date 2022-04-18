--https://programmers.co.kr/learn/courses/30/lessons/59041

SELECT NAME, count(NAME) as COUNT FROM ANIMAL_INS
GROUP BY NAME
HAVING count(NAME) >= 2
ORDER BY NAME;