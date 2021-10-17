SELECT COUNT(rental_id) FROM rental
WHERE DATE(return_date) LIKE '2005-05-25%';