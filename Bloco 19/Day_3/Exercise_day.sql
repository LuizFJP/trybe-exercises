SELECT * FROM Pecas
WHERE Name LIKE 'GR%';
SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor ASC;
SELECT peca, preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA';
SELECT COUNT(code) FROM Fornecedores
WHERE code LIKE '%F%';
SELECT * FROM Fornecimentos
WHERE preco > 15 AND preco < 40
ORDER BY preco ASC;