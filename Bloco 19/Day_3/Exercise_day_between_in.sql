SELECT * FROM payment
WHERE customer_id IN (269, 239, 126, 399, 142);
SELECT * FROM address;
SELECT CONCAT(first_name, ' ' ,last_name) AS Nome, email
FROM customer
WHERE last_name IN ('hicks','crawford','henry','boyd','mason','morales','kennedy'); 
SELECT email, address_id FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;
SELECT COUNT(payment_id) FROM payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';
SELECT title, release_year, rental_duration
FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;
SELECT title, rating FROM film
WHERE rating IN ('G','PG','PG-13')
ORDER BY title ASC LIMIT 500;