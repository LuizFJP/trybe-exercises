SELECT * FROM Scientists
WHERE Name LIKE '%e%';
SELECT Name FROM Projects
WHERE Code LIKE 'A%'
ORDER BY Name ASC;
SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%'
ORDER BY Name ASC;
SELECT COUNT(Scientist) FROM AssignedTo
WHERE Project IN ('AeH3','Ast3','Che1');
SELECT * FROM Projects
WHERE Hours > 500;
SELECT * FROM Projects
WHERE Hours > 250 AND Hours < 800;