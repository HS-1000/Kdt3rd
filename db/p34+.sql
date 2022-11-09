CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
USE kdt;
CREATE TABLE user (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  pw VARCHAR(20) NOT NULL,
  name VARCHAR(5) NOT NULL,
  gender ENUM('F', 'M', '') DEFAULT '',
  birthday DATE NOT NULL,
  age INT(3) NOT NULL DEFAULT 0
);

INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hong1234' ,'8o4bkg' ,'홍길동' ,'M' ,'1990-01-31' ,33);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('sexysung' ,'87awjkdf' ,'성춘향' ,'F' ,'1992-03-31' ,31);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('power70' ,'qxur8sda' ,'변사또' ,'M' ,'1970-05-02' ,53);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('hanjo' ,'jk48fn4' ,'한조' ,'M' ,'1984-10-18' ,39);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('widowmaker' ,'38ewifh3' ,'위도우' ,'F' ,'1976-06-27' ,47);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('dvadva' ,'k3f3ah' ,'송하나' ,'F' ,'2001-06-03' ,22);
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES ('jungkrat' ,'4ifha7f' ,'정크렛' ,'M' ,'1999-11-11' ,24);

SELECT * FROM user ORDER BY birthday ASC; --1
SELECT * FROM user WHERE gender = 'M' ORDER BY name DESC; --2
SELECT id, name FROM user WHERE birthday LIKE '197%'; --3
SELECT * FROM user WHERE birthday LIKE '%-06-%' ORDER BY birthday ASC; --4
SELECT * FROM user WHERE birthday LIKE '197%' AND gender = 'M'; --5
SELECT * FROM user ORDER BY age DESC LIMIT 3; --6
SELECT * FROM user WHERE age BETWEEN 25 AND 50; --7
UPDATE user SET pw = '12345678' WHERE id = 'hong1234'; --8
DELETE FROM user WHERE id = 'jungkrat'; --9