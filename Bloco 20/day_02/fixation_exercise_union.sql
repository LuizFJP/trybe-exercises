-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT CONCAT(first_name, ' ', last_name) AS Nome FROM (sakila.staff)
UNION
SELECT CONCAT(first_name, ' ', last_name) AS Nome FROM (sakila.actor);