USE sakila;
DELIMITER $$

CREATE PROCEDURE showByCategory(IN categoryChoosed VARCHAR(100))
BEGIN
	SELECT f.film_id, f.title, c.category_id, c.name
    FROM film AS f
    INNER JOIN film_category fc
    ON fc.film_id = f.film_id
	INNER JOIN category c
	ON c.category_id = fc.category_id
    WHERE c.name = categoryChoosed;
END $$

DELIMITER ;

CALL showByCategory('Action');