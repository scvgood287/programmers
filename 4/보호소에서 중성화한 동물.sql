--https://programmers.co.kr/learn/courses/30/lessons/59045

SELECT i.animal_id, i.animal_type, i.name
FROM
    animal_ins i
    LEFT OUTER JOIN
    animal_outs o
    ON i.animal_id = o.animal_id
WHERE
    LOWER(i.sex_upon_intake) LIKE LOWER('%Intact%') AND
    LOWER(o.sex_upon_outcome) NOT LIKE LOWER('%Intact%')
ORDER BY animal_id ASC