INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, `active`, username)
VALUES ('Luiz', 'Portela', 7, 2, 1, 'luizportel4');
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, `active`, username)
VALUES 
('Bruno', 'Ramos', 3, 1, 1, 'brunoRamos@'),
('Maria', 'Angelica', 4, 2, 1, 'mariacraque');
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;
INSERT INTO sakila.category (`name`)
VALUES
('Objects'),
('Animals'),
('Fun');
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES
(4,3);
