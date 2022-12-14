CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

USE kdt;
CREATE TABLE member (
  id VARCHAR(20) NOT NULL PRIMARY KEY,
  name VARCHAR(5) NOT NULL,
  age TINYINT(2),
  genter VARCHAR(2) NOT NULL,
  email VARCHAR(50),
  promotion VARCHAR(2) DEFAULT 'x'
);
-- >>> p32

ALTER TABLE member MODIFY id VARCHAR(10);
ALTER TABLE member DROP age;
ALTER TABLE member ADD interest VARCHAR(100);
-- >>> p33