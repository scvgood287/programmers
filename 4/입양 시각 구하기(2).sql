--https://programmers.co.kr/learn/courses/30/lessons/59413

SELECT l.hour, nvl(r.count, 0) as count
FROM (
    SELECT LEVEL-1 AS hour
    FROM dual
    CONNECT BY LEVEL <= 24
) l
LEFT OUTER JOIN
(
    SELECT hour, COUNT(*) count
    FROM (
        SELECT EXTRACT(HOUR FROM CAST(datetime AS TIMESTAMP)) hour
        FROM ANIMAL_OUTS
    )
    GROUP BY hour
) r
ON l.hour = r.hour
ORDER BY hour ASC