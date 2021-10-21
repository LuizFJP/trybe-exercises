-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM actor a
INNER JOIN film f
ON a.actor_id = f.film_id;