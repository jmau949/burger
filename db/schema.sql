CREATE database burgers_db

use burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45), 
    devoured BOOLEAN default false, 
    PRIMARY key (id)
    )


INSERT INTO burgers (burger_name, devoured) VALUES ("Hawaiian", true)
INSERT INTO burgers (burger_name, devoured) VALUES ("Bacon", true)
INSERT INTO burgers (burger_name, devoured) VALUES ("Mushroom", true)
INSERT INTO burgers (burger_name, devoured) VALUES ("Pineapple", false)
INSERT INTO burgers (burger_name, devoured) VALUES ("Double", false)
INSERT INTO burgers (burger_name) VALUES ("All of the Above")
