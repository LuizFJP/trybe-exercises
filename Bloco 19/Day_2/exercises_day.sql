SELECT "This is SQL Exercise, Practice and Solution";
SELECT 1 AS 'Number One', 2 AS 'Number Two', 3 AS 'Number Three';
SELECT 10 + 15;
SELECT (10 + 15) * 2;
SELECT * FROM Scientists;
SELECT Projects.Name, Hours FROM Projects;
SELECT Name FROM Scientists ORDER BY Scientists.Name ASC; 
SELECT Name FROM Projects ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ' ,Hours, ' horas para ser concluído') FROM Projects;