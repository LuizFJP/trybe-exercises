SELECT f1.film_id, f1.replacement_cost, f2.film_id, f2.replacement_cost
FROM film AS f1, film AS f2
WHERE f1.replacement_cost = f2.replacement_cost;

