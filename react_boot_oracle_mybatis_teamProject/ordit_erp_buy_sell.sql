-- 1. database jaedb 생성
create database buy character set utf8;
-- alter database jaedb default character set utf8;

-- 생성된 테이블 조회
show tables;

-- database jiyeondb로 이동
use jiyeondb; -- use <db명>;

-- 데이터 타입 조회
DESCRIBE order_tbl;

-- 인사-사원 테이블 생성
create table employee_tbl(
	emid INT(10) auto_increment primary KEY, 	-- 사원코드
);	


-- 데이터 insert
insert into employee_tbl (emid)
values(1);

-- 물품 테이블 생성
drop table item_tbl; 
create table item_tbl(
	item_code INT(10) auto_increment primary KEY, 	-- 물품코드
	item_name VARCHAR(255) not NULL,				-- 물품명
	item_standard VARCHAR(255) not NULL			-- 규격
);

-- 데이터 insert
insert into item_tbl (item_code, item_name, item_standard)
values(1, '에어팟 3', '30*18*19');

-- 물품 테이블 조회
SELECT * FROM item_tbl;

-- 물품 테이블 FK 컬럼 추가
ALTER TABLE item_tbl 
ADD order_id INT(10), 
ADD FOREIGN key (order_id) references order_tbl(order_id);

-- 물품 금액 테이블 생성
drop table item_price_tbl; 
create table item_price_tbl(
	item_code INT(10) auto_increment primary KEY, 	
	quantity  INT(10) CHECK (quantity > 0),				
	price  DECIMAL(12,2),			
	supply DECIMAL(12,2),
	vat DECIMAL(12,2),
	total DECIMAL(12,2)
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
	FOREIGN KEY (item_code) REFERENCES item_tbl(item_code)
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
	item_code 			INT(10)
); 

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

CREATE TABLE order_detail_tbl(
	order_id  			INT(10) AUTO_INCREMENT PRIMARY KEY,     
	order_status        VARCHAR(255),
	closing_staus       VARCHAR(255),
	chit 				VARCHAR(255),
	approval_id 		INT(10) 		
); 

-- 데이터 insert
insert into order_detail_tbl (order_id, order_status, closing_staus, chit, approval_id) 
values( 1, '결재중', '진행중', null, 1);

SELECT * FROM order_detail_tbl;
	