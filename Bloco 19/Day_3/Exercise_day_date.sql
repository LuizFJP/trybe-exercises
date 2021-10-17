SELECT COUNT(rental_id) FROM rental
WHERE DATE(return_date) LIKE '2005-05-25%';
SELECT COUNT(payment_id) FROM payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';