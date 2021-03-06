SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT first_name FROM customer
WHERE active IS FALSE
AND store_id = 2
AND first_name NOT LIKE 'KENNETH%'
ORDER BY first_name;
SELECT title, description, release_year, replacement_cost
FROM film
WHERE NOT rating = 'NC-17'
AND replacement_cost >= 18 
ORDER BY replacement_cost DESC,
title ASC;
SELECT COUNT(customer_id) FROM customer
WHERE active is TRUE
AND store_id = 1;
SELECT * FROM customer
WHERE active is FALSE
AND store_id = 1;
SELECT * FROM film 
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title ASC
LIMIT 50; 

