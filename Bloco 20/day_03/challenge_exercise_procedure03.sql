USE sakila;
DELIMITER $$

CREATE PROCEDURE activeCustomerByEmail(
IN customer_email VARCHAR(200),
OUT active_customer VARCHAR(3)) 
BEGIN
	SELECT customer.active INTO active_customer FROM customer
    WHERE email = customer_email;
END $$

DELIMITER ;

CALL activeCustomerByEmail('JENNIFER.DAVIS@sakilacustomer.org', @is_active);
SELECT @is_active;