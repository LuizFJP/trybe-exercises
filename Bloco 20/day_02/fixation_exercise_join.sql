-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM actor a
INNER JOIN film f
ON a.actor_id = f.film_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT CONCAT(s.first_name,' ',s.last_name) AS Nome, a.address
FROM staff s
INNER JOIN address a
ON s.address_id = a.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o endereço onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer c
INNER JOIN address a 
ON c.address_id = a.address_id
WHERE a.district = 'California' AND
c.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT c.first_name, COUNT(a.address_id) AS `Qtd de endereços`
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY c.first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT CONCAT(s.first_name, ' ', s.last_name), AVG(p.amount)
FROM staff s
INNER JOIN payment p
ON s.staff_id = p.staff_id 
WHERE YEAR(p.payment_date) = 2006
GROUP BY CONCAT(s.first_name, ' ', s.last_name);