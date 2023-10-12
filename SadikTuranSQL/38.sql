DROP TABLE employee_performans;

CREATE TABLE IF NOT EXISTS  employee_performans(employee_id SERIAL PRIMARY KEY,
								 fullname VARCHAR(30) NOT NULL,
								 email VARCHAR(50) NOT NULL,
								 satis_adet INTEGER NOT NULL);
INSERT INTO employee_performans(employee_id,fullname,email,satis_adet)
SELECT e.employee_id,CONCAT(e.first_name,' ',e.last_name) as fullname,LOWER(CONCAT(e.first_name,'.',e.last_name,'@gmail.com')) as email,COUNT(orders.order_id) as satis_adet FROM employees as e
LEFT JOIN orders  ON e.employee_id=orders.employee_id
LEFT JOIN order_details on orders.order_id=order_details.order_id
GROUP BY e.employee_id
	