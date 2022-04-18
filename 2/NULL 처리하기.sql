--https://programmers.co.kr/learn/courses/30/lessons/59410

SELECT animal_type, nvl(name, 'No name') name, sex_upon_intake
FROM animal_ins
ORDER BY animal_id ASC