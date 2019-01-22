DROP DATABASE IF EXISTS angelsdb;
CREATE DATABASE angelsdb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

USE angelsdb;
SELECT * FROM purchase_orders
ORDER BY projectName;
