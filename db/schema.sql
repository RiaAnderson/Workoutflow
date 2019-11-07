DROP DATABASE IF EXISTS workout_flow;

CREATE DATABASE workout_flow;
USE workout_flow;

CREATE TABLE muscle_building
(
    id INT NOT NULL AUTO_INCREMENT,
    ex_name VARCHAR(200) NOT NULL,
    body_part VARCHAR(200) NOT NULL,
    intervals VARCHAR(200) NOT NULL,
    day INT(100) NOT NULL,
    completed BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
