SELECT * FROM payment
WHERE customer_id IN (269, 239, 126, 399, 142);
SELECT * FROM address;
SELECT CONCAT(first_name, last_name) AS Nome, email
FROM customer
WHERE last_name IN ('hicks','crawford','henry','boyd','mason','morales','kennedy') 
  