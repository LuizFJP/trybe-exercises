SELECT "This is SQL Exercise, Practice and Solution";
SELECT 1 AS 'Number One', 2 AS 'Number Two', 3 AS 'Number Three';
SELECT 10 + 15;
SELECT (10 + 15) * 2;
SELECT * FROM Scientists;
SELECT Projects.Name, Hours FROM Projects;
SELECT Name FROM Scientists ORDER BY Scientists.Name ASC; 
SELECT Name FROM Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ' ,Hours, ' horas para ser concluído') FROM Projects;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Scientist FROM AssignedTo;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 100 OFFSET 1;
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existem ', COUNT(SSN),' cientistas na tabela Scientists.')
AS 'Número de cientistas'
FROM Scientists;