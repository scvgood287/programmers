--https://programmers.co.kr/learn/courses/30/lessons/59042

SELECT o.animal_id, o.name
FROM animal_outs o LEFT OUTER JOIN animal_ins i ON o.animal_id = i.animal_id
WHERE i.animal_id IS NULL
ORDER BY animal_id