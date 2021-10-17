SELECT * FROM payment
WHERE customer_id IN (269, 239, 126, 399, 142);
SELECT * FROM address;
SELECT CONCAT(first_name, ' ' ,last_name) AS Nome, email
FROM customer
WHERE last_name IN ('hicks','crawford','henry','boyd','mason','morales','kennedy'); 
SELECT email, address_id FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;