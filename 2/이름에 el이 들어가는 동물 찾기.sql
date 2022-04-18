--https://programmers.co.kr/learn/courses/30/lessons/59047

SELECT animal_id, name
FROM animal_ins
WHERE LOWER(name) LIKE LOWER('%el%') AND animal_type = 'Dog'
ORDER BY name ASC