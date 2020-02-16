DROP DATABASE IF EXISTS cleanr_db;
CREATE DATABASE cleanr_db;
USE cleanr_db;
CREATE TABLE Cleanings(
  id INT PRIMARY KEY,
  product_name VARCHAR(500),
  selling_price DEC(10, 2),
  image_src VARCHAR(999),
  tax_exempt BOOL,
  tax_percentage INT,
  category VARCHAR(500),
  barcode VARCHAR(30)
);
CREATE TABLE Users(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(500),
  last_name VARCHAR(500),
  email VARCHAR(500),
  password VARCHAR(70)
);
CREATE TABLE User_Cleanings(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cleaning_id INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (cleaning_id) REFERENCES Cleanings(id),
  FOREIGN KEY (user_id) REFERENCES Users(id)
);
