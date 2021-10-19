DELETE FROM film_actor
WHERE actor_id = 12;
DELETE FROM actor
WHERE first_name = 'KARL';
DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);
DELETE FROM actor
WHERE first_name = 'MATTHEW';
DELETE FROM film_text
WHERE `description` LIKE '%saga%'; 
SELECT * FROM film_text;