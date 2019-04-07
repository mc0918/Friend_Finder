DROP DATABASE IF EXISTS friend_finder_db;
CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE profiles (
    id int(11) NOT NULL auto_increment,
    name varchar(30) NOT NULL,
    image varchar(500) NOT NULL,
    description varchar(500) NOT NULL,
    scores varchar(30) NOT NULL,
    PRIMARY KEY(id) 
);

CREATE TABLE questions (
    question_id int(11) NOT NULL auto_increment,
    question varchar(150) NOT NULL,
    PRIMARY KEY(question_id) 
);

