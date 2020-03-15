DROP TABLE IF EXISTS relationship10;
DROP TABLE IF EXISTS person10;

CREATE TABLE person10
( id SERIAL NOT NULL PRIMARY KEY
, first_name VARCHAR(255) NOT NULL
, last_name VARCHAR(255) NOT NULL
, birth_date DATE NOT NULL
);

CREATE TABLE relationship10
( id SERIAL NOT NULL PRIMARY KEY
, parent_id INT NOT NULL REFERENCES person10(id)
, child_id INT NOT NULL REFERENCES person10(id)
);

\echo 'INSERTING INTO person10';
INSERT INTO person10 (first_name, last_name, birth_date)
    VALUES ('John', 'Doe', 'January 8, 1993');
INSERT INTO person10 (first_name, last_name, birth_date)
    VALUES ('Jane', 'Doe', 'February 3, 1994');
INSERT INTO person10 (first_name, last_name, birth_date)
    VALUES ('Jerry', 'Doe', 'March 18, 2017');

\echo 'INSERTING INTO relationship10';
INSERT INTO relationship10 (parent_id, child_id) VALUES (1, 3);
INSERT INTO relationship10 (parent_id, child_id) VALUES (2, 3);
