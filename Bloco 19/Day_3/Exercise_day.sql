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
SELECT order_date FROM Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';