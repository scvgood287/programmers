--https://programmers.co.kr/learn/courses/30/lessons/77487

SELECT *
FROM places origin
WHERE EXISTS (
    SELECT host_id
    FROM places heavies
    WHERE heavies.host_id = origin.host_id
    GROUP BY host_id
    HAVING COUNT(*) > 1
)
ORDER BY id ASC