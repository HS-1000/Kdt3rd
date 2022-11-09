CREATE TABLE customer (
  id VARCHAR(10) NOT NULL PRIMARY KEY,
  name VARCHAR(10) NOT NULL,
  birthday DATE NOT NULL
);
DESC customer;

INSERT INTO customer (id, name, birthday) VALUES ('aaa', '김이현', '1990-03-17');
INSERT INTO customer (id, name, birthday) VALUES ('bbb', '최지율', '1992-11-01');
INSERT INTO customer (id, name, birthday) VALUES ('ccc', '이혜진', '1993-05-31');

SELECT * FROM customer;

CREATE TABLE orderlist (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  customer_id VARCHAR(10) NOT NULL,
  product_name VARCHAR(20) NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY(customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- * A의 PK를 B가 FK로 사용할때, A가 삭제되기 위해 B가 먼져 삭제되어야 된다
-- | FOREIGN KEY($(col)) REFERENCES $(baseTABLE)($(col));
-- | 
-- | ON UPDATE CASCADE : 기준테이블에서 데이터 변경이 있으면 참조 테이블도 변경
-- | ON DELETE CASCADE : 기준테이블에서 데이터 삭제이 있으면 참조 테이블도 삭제
-- | 

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);

-- | JOIN : 두 테이블을 하나의 테이블로 병합
-- | 
-- | 일대다관계(one to many)
-- | (1) A 테이블에 하나의 값이 존재
-- | (2) B 테이블에는 여러 개의 값이 존재
-- | ex) 한 회원(A)이 여러 주문정보(B)를 가질 수 있음
-- | 
-- | table을 mergy 하는게 아닌 조회시 모두 조희 하는것
-- | 
-- | SELECT $(col)
-- | FROM $(tableA)
-- |  INNER JOIN $(tableB)
-- |  ON (조인조건 ...)
-- | WHERE (검색조건 ...)
-- | 
-- | FROM customer 
-- |   INNER JOIN orderlist
-- |   ON customer.id = orderlist.customer_id
-- | WHERE quantity >= 5;
-- | -- >>> ON 라인 에서 이미 join된 table을 리턴 하는것처럼 보인다.; WHERE은 단순히 조건을 붙인거?
-- | 
-- | SELECT $(table).$(col1) as 'replaceName' FROM ...
-- | 
-- | 
-- | 

SELECT * FROM customer;
SELECT * FROM orderlist;

SELECT customer.id as user_id, customer.name , orderlist.product_name, orderlist.quantity, orderlist.id as order_id 
FROM customer 
  INNER JOIN orderlist
  ON customer.id = orderlist.customer_id;
