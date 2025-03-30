-- 1. database jaedb 생성
create database jiyeon character set utf8;
-- alter database jaedb default character set utf8;

-- 생성된 테이블 조회
show tables;

-- database jiyeondb로 이동
use jiyeondb; -- use <db명>;

-- 데이터 타입 조회
DESCRIBE order_tbl;

-- 물품 테이블 생성
create table item_tbl(
	item_code INT(10) auto_increment primary KEY, 	-- 물품코드
	item_name VARCHAR(255) not NULL,				-- 물품명
	item_standard VARCHAR(255) not NULL			-- 규격
);

-- 물품 테이블 조회
SELECT * FROM item_tbl;

-- 물품 테이블 FK 컬럼 추가
ALTER TABLE item_tbl 
ADD order_id INT(10), 
ADD FOREIGN key (order_id) references order_tbl(order_id);

-- 테이블 구조확인 (oracle의 desc와 같은 기능)
DESC item_tbl;

-- 데이터 insert
insert into dept_MM_tbl (mm_partner_no, mm_partner_name, mm_input_date, mm_manager_no, mm_manager_name, mm_warehouse, mm_transaction_type, mm_item_no)
values('J00798', '잭슨카멜레온', '2025-03-27', 'M00231', '이루피', '본사창고', '부가세율 적용', 'S00091');

-- 삭제
delete   
from dept_MM_tbl 
where mm_partnerNo = 'J00798';

-- 구매/판매 주문 테이블
drop table order_tbl; 
CREATE TABLE order_tbl(
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
	FOREIGN KEY (emid) REFERENCES employee_tbl(emid),
	FOREIGN KEY (client_name) REFERENCES client_tbl(client_name),
	FOREIGN KEY (storage_code) REFERENCES warehouse_tbl(storage_code),
	FOREIGN KEY (approval_id) REFERENCES approval_tbl(approval_id),
	FOREIGN KEY (item_code) REFERENCES item_tbl(item_code)
); 

SELECT * FROM order_tbl;

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
