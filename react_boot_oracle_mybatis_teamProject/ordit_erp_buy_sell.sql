-- 1. database jaedb 생성
create database jiyeondb character set utf8;
-- alter database jaedb default character set utf8;

-- 생성된 테이블 조회
show tables;

SHOW TABLES FROM jiyeondb;

-- database jiyeondb로 이동
use jiyeondb; -- use <db명>;

-- 데이터 타입 조회
DESCRIBE order_tbl;

-- 외래 키 제약 비활성화
SET foreign_key_checks = 0;

-- 외래 키 제약 확인
SHOW CREATE TABLE employee_tbl;

-- 외래 키 제약 삭제
ALTER TABLE employee_tbl
DROP FOREIGN KEY employee_tbl_ibfk_1;

-- 외래키에 CASCADE 추가 예시
ALTER TABLE employee_tbl
ADD CONSTRAINT fk_department_code
FOREIGN KEY (d_code)
REFERENCES department_tbl(d_code)
ON DELETE CASCADE;

-- 해당 부서에 속한 직원들을 먼저 삭제
DELETE FROM employee_tbl WHERE d_code = <department_code>;

-- 이제 부서 데이터를 안전하게 삭제할 수 있습니다
DELETE FROM department_tbl WHERE department_code = <department_code>;

SELECT TABLE_NAME, COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME 
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE
WHERE TABLE_NAME = 'employee_tbl' AND REFERENCED_TABLE_NAME IS NOT NULL;

ALTER TABLE employee_tbl DROP FOREIGN KEY d_code;

-- 컬럼명 변경
ALTER TABLE employee_tbl 
RENAME COLUMN incharge TO em_name;

-- [물품 정보- 수량]​
drop table order_item_tbl_hjy; 
create table order_item_tbl_hjy(
	order_id  INT(10), 	-- 물품코드
	item_code  INT(10) not NULL,				-- 물품코드
	item_name VARCHAR(255) not null,			-- 물품명
	quantity INT(10) CHECK (quantity > 0),		-- 물품수량
	CONSTRAINT fk_order_item FOREIGN KEY (order_id) REFERENCES order_tbl(order_id) ON DELETE CASCADE,
    CONSTRAINT fk_item_info FOREIGN KEY (item_code) REFERENCES item_info_tbl(item_code) ON DELETE CASCADE
) ENGINE=InnoDB;

CONSTRAINT fk_department FOREIGN KEY (d_code) REFERENCES department_tbl(d_code) ON DELETE CASCADE

describe order_item_tbl;

FOREIGN KEY (order_id) REFERENCES order_tbl(order_id),
    FOREIGN KEY (item_code) REFERENCES item_info_tbl(item_code)    

-- 외래키에 CASCADE 추가 예시
ALTER TABLE order_item_tbl
ADD CONSTRAINT fk_order_id
FOREIGN KEY (order_id)
REFERENCES order_tbl(order_id)
ON DELETE CASCADE;

insert into order_item_tbl (order_id, item_code, item_name, quantity)
values(1, 001, '에어팟3', 30);

SELECT * FROM order_item_tbl;

-- [물품 정보- 규격]
drop table item_info_tbl_hjy; 
create table item_info_tbl_hjy(
	item_code INT(10) auto_increment primary KEY, 	-- 물품코드
	item_standard VARCHAR(255) not NULL			-- 규격
);

SELECT * FROM item_info_tbl;

-- 데이터 insert
insert into item_tbl (item_code, item_name, item_standard)
values(1, '에어팟 3', '30*18*19');

-- 물품 테이블 조회


-- 물품 테이블 FK 컬럼 추가
ALTER TABLE item_tbl 
ADD order_id INT(10), 
ADD FOREIGN key (order_id) references order_tbl(order_id);

-- 물품 금액 테이블 생성
drop table item_price_history_tbl_hjy​; 
create table item_price_history_tbl​_hjy(
	order_id INT(10), 
	item_code INT(10), 				
	price  DECIMAL(12,2),			
	supply DECIMAL(12,2),
	vat DECIMAL(12,2),
	total DECIMAL(12,2),
	constraint PRIMARY KEY (item_code, order_id),
    constraint FOREIGN KEY (item_code) REFERENCES item_info_tbl(item_code),
    constraint FOREIGN KEY (order_id) REFERENCES order_tbl(order_id)
);

SELECT * FROM item_price_tbl;

-- 테이블 구조확인 (oracle의 desc와 같은 기능)
DESC item_tbl;

-- 데이터 insert
insert into item_price_tbl (item_code, quantity, price, supply, vat, total)
values(1, 30, 250000, 100000, 25000, 7500000);

-- 삭제
delete   
from dept_MM_tbl 
where mm_partnerNo = 'J00798';

-- 구매/판매 주문 테이블
drop table order_tbl_hjy; 
CREATE TABLE order_tbl_hjy(
	order_id  			INT(10) AUTO_INCREMENT PRIMARY KEY,       			
    order_date          DATE NOT NULL,   
    emid  				INT(10),					 
	client_name  		VARCHAR(255),						 
	transaction_type 	VARCHAR(255) NOT NULL,   				   	 
	storage_code	    INT(10),   				   	
	delivery_date 		DATE, 			 				   	 
	shipment_order_date DATE,     				  	 		
	order_code 			VARCHAR(255),      			        
	order_status        VARCHAR(255),
	closing_staus       VARCHAR(255),
	chit 				VARCHAR(255),
	approval_id 		INT(10), 			       			 			
	item_code 			INT(10),
	constraint FOREIGN KEY (emid) REFERENCES employee_tbl(emid),
	constraint FOREIGN KEY (client_name) REFERENCES client_tbl(client_name),
	constraint FOREIGN KEY (storage_code) REFERENCES warehouse_tbl(storage_code),
	constraint FOREIGN KEY (approval_id) REFERENCES approval_tbl(approval_id),
	constraint FOREIGN KEY (item_code) REFERENCES item_tbl(item_code)
); 

SELECT * FROM order_tbl_hjy;

-- 데이터 insert
insert into order_tbl (order_id, order_date, emid, client_name, transaction_type, storage_code, delivery_date, shipment_order_date, order_code, order_status, closing_staus, chit, approval_id, item_code) 
values( 1, '2025-03-27', 00231, '애플', '부가세율 적용', 12, '2025-04-07', '2025-04-08', 14543, '확인', '입고O-회계x', '',24523, 42534);

-- 테이블 구조확인 (oracle의 desc와 같은 기능)
DESC employee_tbl;
DESC client_tbl;
DESC warehouse_tbl;
DESC approval_tbl;
DESC item_tbl;
DESC order_tbl;
DESC order_item_tbl;

-- 구매/판매 주문 테이블
drop table order_tbl; 
CREATE TABLE order_tbl(
	order_id  			INT(10) AUTO_INCREMENT PRIMARY KEY,       			
    order_date          DATE NOT NULL,   
    emid  				INT(10),					 
	client_code  		VARCHAR(255),						 
	transaction_type 	VARCHAR(255) NOT NULL,   				   	 
	storage_code	    INT(10),   				   	
	delivery_date 		DATE, 			 				   	 
	shipment_order_date DATE,     				  	 		
	order_code 			VARCHAR(255),      			        
	order_status        VARCHAR(255),
	closing_staus       VARCHAR(255),
	chit 				VARCHAR(255),
	approval_id 		INT(10), 			       			 			
	item_code 			INT(10),
	FOREIGN KEY (emid) REFERENCES employee_tbl(emid),
	FOREIGN KEY (client_name) REFERENCES client_tbl(client_name),
	FOREIGN KEY (storage_code) REFERENCES warehouse_tbl(storage_code),
	FOREIGN KEY (approval_id) REFERENCES approval_tbl(approval_id),
	FOREIGN KEY (item_code) REFERENCES item_tbl(item_code)
); 

-- 구매/판매 주문 테이블
drop table order_tbl; 
CREATE TABLE order_tbl(
	order_id  			INT(10) AUTO_INCREMENT PRIMARY KEY,       			
    order_date          DATE NOT NULL,   
    emid  				INT(10),					 
	client_code  		INT(10),						  				   	 
	storage_code	    INT(10),   	
	transaction_type 	VARCHAR(255) NOT NULL,  
	delivery_date 		DATE, 			 				   	 
	shipment_order_date DATE,     				  	 		
	order_code 			INT(10),     			        	       			 			
	item_code 			INT(10),
	FOREIGN KEY (emid) REFERENCES employee_tbl(emid),
	FOREIGN KEY (client_code) REFERENCES client_tbl(client_code),
	FOREIGN KEY (storage_code) REFERENCES warehouse_tbl(storage_code),
); 

CREATE TABLE order_detail_tbl(
	order_id  			INT(10) AUTO_INCREMENT PRIMARY KEY,     
	order_status        VARCHAR(255),
	closing_staus       VARCHAR(255),
	chit 				VARCHAR(255),
	approval_id 		INT(10), 		
	FOREIGN KEY (approval_id) REFERENCES approval_tbl(approval_id)
); 

--------------------------------------------------------------------------------



drop table order_tbl; 

select o.order_id
	 , o.order_date
	 , o.emid
	 , o.client_code
	 , o.storage_code
	 , o.transaction_type
	 , o.delivery_date
	 , o.shipment_order_date
	 , o.order_code
	 , o.item_code
	 , od.order_id
	 , od.order_status
	 , od.closing_staus
	 , od.chit
	 , od.approval_id
from o.order_tbl
join od.order_detail_tbl
on o.order_id = od.order_id;

# inner join
select * 
from order_tbl
join order_detail_tbl 
on order_tbl.order_id = order_detail_tbl.order_id;

-- 데이터 insert
insert into order_tbl (order_id, order_date, emid, client_code, storage_code, transaction_type, delivery_date, shipment_order_date, order_code, item_code) 
values( 1, '2025-04-07', 1, 1, 2, '부가세율 적용', '2025-04-15', '2025-04-16', 1, 1);

SELECT * FROM order_tbl;

-- 구매/판매 주문 테이블
drop table order_detail_tbl; 

-- [구매/판매 - 주문상세]
CREATE TABLE order_detail_tbl_hjy(
	order_id  			INT(10),     
	order_status        VARCHAR(20),
	closing_staus       VARCHAR(20),
	chit 				VARCHAR(255),
	approval_id 		INT(10),
	constraint fk_order FOREIGN KEY (order_id) REFERENCES order_tbl_hjy (order_id),
	constraint fk_approval FOREIGN KEY (approval_id) REFERENCES approval_tbl(approval_id)
); 

-- 데이터 insert
insert into order_detail_tbl (order_id, order_status, closing_staus, chit, approval_id) 
values( 1, '결재중', '진행중', null, 1);

SELECT * FROM order_detail_tbl;
	