--https://programmers.co.kr/learn/courses/30/lessons/59409

SELECT
    animal_id,
    name,
    CASE
        WHEN LOWER(sex_upon_intake) LIKE LOWER('%Neutered%') THEN 'O'
        WHEN LOWER(sex_upon_intake) LIKE LOWER('%Spayed%') THEN 'O'
        ELSE 'X'
        END AS 중성화
FROM animal_ins
ORDER BY animal_id ASC