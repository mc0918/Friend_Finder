DROP DATABASE IF EXISTS friend_finder_db;
CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE profiles (
    id int(11) NOT NULL auto_increment,
    name varchar(30) NOT NULL,
    image varchar(100) NOT NULL,
    scores varchar(30) NOT NULL,
    PRIMARY KEY(id) 
);

