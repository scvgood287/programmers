--https://programmers.co.kr/learn/courses/30/lessons/59414

SELECT
    animal_id,
    name,
    TO_CHAR(datetime, 'YYYY-MM-DD') AS 날짜
FROM animal_ins
ORDER BY animal_id ASC