USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowTop10PopularActors()
BEGIN
	SELECT CONCAT(a.first_name, ' ', a.last_name) AS Nome, COUNT(f.actor_id) AS Filmes
		FROM actor a
        INNER JOIN film_actor f
        ON a.actor_id = f.actor_id
        GROUP BY Nome
        ORDER BY Filmes DESC
        LIMIT 10;
END $$

DELIMITER ;

CALL ShowTop10PopularActors();