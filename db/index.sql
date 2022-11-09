-- DDL
-- Data Definition Language

CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
-- >>> db 생성, 한글 인코딩, 정렬방식 utf8_general_ci;

SHOW databases;
-- >>> db목록 확인

USE kdt;
-- >>> kdt db를 사용하겟다

DROP DATABASE kdt;
-- >>> kdt db삭제
-- * 소문자로 써도 문제는 없지만 일반적으로 예약어는 대문자를 사용

-- CREATE TABLE table0 (
--   field1 type,
--   field2 type
-- )

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- >>> 제약조건   NOT NULL, AUTO_INCREMENT, PRIMARY KEY
  name VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  address VARCHAR(100)
);
-- | 조건
-- | NOT NULL : null값 금지
-- | AUTO_INCREMENT : 데이터 입력마다 자동 숫자 증가
-- | PRIMARY KEY : 기본키
-- | DEFAULT : 기본값
-- | UNIQUE : 중복 금지
DESC user;
-- >>> user의 구조 확인
DROP TABLE user;
-- >>> user삭제
TRUNCATE TABLE user;
-- >>> user초기화; 구조는 남아있음 모든 record삭제

ALTER TABLE user ADD new_column VARCHAR(10);
-- >>> ALTER : column 삭제, 변경, 추가
-- >>> new_column VARCHAR(10) 추가
ALTER TABLE user MODIFY new_column INT;
-- >>> user테이블의 new_column 의 자료형 INT 로변환
ALTER TABLE user DROP new_column;
-- >>> user테이블의 new_column 삭제

-- * 일반적으로 snake_case 사용

SELECT * FROM user;
-- >>> user 의 모든것 읽기(=조회)
SELECT name FROM user;
-- >>> user의 name만 읽기
SELECT age, name FROM user;
-- >>> age, name 읽기 (순서대로 출력)
SELECT * FROM user WHERE id = ti___;
-- >>> id(field)가 ti 로 시작하는 5글자; '_' 는 어떤문자
SELECT * FROM user WHERE age >= 19;
-- >>> age 가 19이상인 record만 조회
SELECT * FROM user ORDER BY age ASC;
-- >>> age 기준 오름차순 정렬
SELECT * FROM user ORDER BY name ASC;
-- >>> name 기준 오름차순 정렬
SELECT * FROM user WHERE age >= 23 ORDER BY age DESC;
-- >>> age가 23이상의 record 를 age로 내림차순 정렬
SELECT * FROM user WHERE address LIKE '서울%';
-- >>> address가 '서울' + '~' 인 record
SELECT * FROM user WHERE name LIKE '__희'; 
-- >>> name이 '어떤 두글자' + '희' 인record ; xx희x, x희 는 match 되지 않는다
SELECT * FROM user WHERE name LIKE '%희%'; 
-- >>> name에 '희'가 포함된 record
SELECT * FROM user WHERE address LIKE '%도%'; 
-- >>> address에 '도'가 포함된 record
SELECT * FROM user WHERE name Like '__희' ORDER BY age DESC;
-- >>> name이 '희'로 끝나는 record를 age의 내림차순으로 
SELECT * FROM user LIMIT 3;
-- >>> user 중에 3개만
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;
-- >>> address 가 '서울'로 시작되는 record 중 2개 까지
SELECT * FROM user WHERE age BETWEEN 25 AND 30;
-- >>> age 25이상 30이하의 record
SELECT * FROM user WHERE age IN (20, 21, 22, 23);
-- >>> age 가 20, 21, 22, 23 중 하나인것
SELECT * FROM user WHERE address IS NOT NULL;
SELECT * FROM user WHERE address IS NULL;
-- >>> address가 NULL이 아닌것, NULL 인것
SELECT * FROM uwer WHERE address IS NOT NULL AND age > 25;
-- >>> address가 NULL이 아니고 age 가 25 초과 인것

-- * 당연히 데이터를 읽는것은 저장 내용, 순서에 영향이없다
-- | WHERE 절 연산자
-- | =, >, >=, <, <= : 비교연산자
-- | !=, ^=, <> : 부정연산자
-- | NOT column = x : x와 같지 않다
-- | 
-- | ORDER BY: 데이터 정렬
-- | ASC : 오름차순(Default)
-- | DESC : 내림차순
-- | 
-- | SELECT $(target) FROM user WHERE $(무엇을) ORDER BY $(무엇으로 정렬) DESC;
-- | 
-- | LIKE: 데이터의 패턴 인식
-- | % : 0개 이상의 어떤 문자
-- | _ : 1개 의 어떤 문자
-- | 
-- | SELECT ... LIMIT n : 선택 된 결과중 n개만 출력
-- | 
-- | $(column) BETWEEN n1 AND n2 : $(column) 이 n1 이상 n2 이하
-- | 
-- | $(col) IS NULL, $(col) IS NOT NULL : $(col)이 NULL 인것, 아닌것
-- | 
-- | 논리연산
-- | AND, OR, NOT
-- | 


UPDATE user SET address = '서울시 강북구' WHERE name = '이한이';
-- >>> name이 이한이 인 record의 address를 '서울시 강북구'로 수정
-- >>> target 선택은 PRI-KEY로 기준 하는것이 정석이다
-- * ERROR를 만나면 해당 ERROR의 코드로 검색
UPDATE user SET address = '서울시 강북구' WHERE id = 1;
UPDATE user SET address = '제주도 제주시', name = '이지현' WHERE id = 2;
-- >>> id = 2 의 addres, name 동시 수정
-- * UPDATE 사용시 WHERE 을 사용하지 않으면 모든 record에 적용
DELETE FROM user WHERE address IS NULL;
-- >>> user의 address가 NULL인 record 삭제

-- | UPDATE $(table) SET $(col1) = XXX, $(col2) = YYY WHERE ...;
-- | $(table)의 WHERE로 선택된 대상으로 $(col1),$(col2)의 값을 각각 XXX, YYY로 수정
-- | 
-- | DELETE FROM $(table) WHERE ...;
-- | $(table) 의 선택된 대상을 삭제
-- | 

-- * mysql 의 저장위치는 SHOW VARIABLES LIKE 'datadir'; 명령 (window) 
-- |     +---------------+---------------------------------------------+
-- |     | Variable_name | Value                                       |
-- |     +---------------+---------------------------------------------+
-- |     | datadir       | C:\ProgramData\MySQL\MySQL Server 8.0\Data\ |
-- |     +---------------+---------------------------------------------+

INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울시 마포구');
-- >>> user에 (...) 에 각각 (...)에 해당되는 값 샵입; id 는 AUTO_INCREMENT
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울시 노원구');
INSERT INTO user (name, age, address) VALUES ('이한이', 23, '서울시 강서구');
INSERT INTO user (name, age, address) VALUES ('이지은', 32, '부산시 동구');
INSERT INTO user (name, age, address) VALUES ('윤세희', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('박수진', 26, '충정남도 공주시');
INSERT INTO user (name, age, address) VALUES ('박찬희', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울시 영등포구');
INSERT INTO user (name, age) VALUES ('서현승', 28);


-- * DDL 보다 DML 이 더 자주 쓰인다
-- * AUTO_INCREMENT를 지정하는 column은 반드시 PRIMARY KEY 이다.

-- * DCL은 거의 쓸일 없다. 
-- | 데이터 제어 언어
-- | DB에 접근, 읽거나 쓰는 권한을 부여/박탈
-- | GRANT : DB사용자에게 특정 작업에 대한 수행 권한 부여
-- | 
-- | REVOKE : DB사용자의 특정 작업에 대한 권한 박탈
-- | 

