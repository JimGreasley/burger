-- Drops the burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger varchar(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

-- Insert a set of records.
-- INSERT INTO wishes (wish) VALUES ('Pick up milk.');
-- INSERT INTO wishes (wish) VALUES ('Mow the lawn.');
-- INSERT INTO wishes (wish) VALUES ('Call Shannon back.');