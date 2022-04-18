--https://programmers.co.kr/learn/courses/30/lessons/59405

SELECT name FROM ANIMAL_INS
WHERE DATETIME = (SELECT min(DATETIME) FROM ANIMAL_INS);