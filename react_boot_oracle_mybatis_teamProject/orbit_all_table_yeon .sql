-- 창고, 회계, 직원, 부서, 거래처 테이블 정보

show databases;

---------------------------------------------------------------------------
-- 창고 테이블
drop table warehouse_tbl;

-- 창고테이블 생성
create table warehouse_tbl_hjy(
	storage_code INT(10) primary key,					-- 창고코드
	storage VARCHAR(255) not null						-- 창고명
);

-- 데이터 insert
INSERT INTO warehouse_tbl_hjy(storage_code, storage)
VALUES (1 , '안산');

INSERT INTO warehouse_tbl_hjy(storage_code, storage)
VALUES (2 , '파주');

INSERT INTO warehouse_tbl_hjy(storage_code, storage)
VALUES (3 , '본사');

-- 테이블 조회
select * from warehouse_tbl_hjy;
----------------------------------------------------------------------------------
drop table approval_tbl_hjy;

-- 테이블 생성
CREATE TABLE approval_tbl_hjy (
    approval_id INT(10) AUTO_INCREMENT PRIMARY KEY,  -- 물품코드
    department VARCHAR(255) NOT NULL,                -- (담당)부서
    quantity INT(10) NOT NULL,                       -- 수량
    price INT(10) NOT NULL,                          -- 단가
    vat INT(10) NOT NULL,                            -- 부가세
    supply INT(10) NOT NULL,                         -- 공급가액
    total INT(10) NOT NULL,                          -- 금액합계
    order_id INT(10),
	CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES order_tbl_hjy(order_id) ON DELETE CASCADE
)ENGINE=InnoDB; 

-- 데이터 insert
INSERT INTO approval_tbl_hjy (department, quantity, price, vat, supply, total)
VALUES ('물류팀' , 100, 500, 50, 550, 55000);

-- 테이블 조회
select * from approval_tbl_hjy;
------------------------------------------------------------------------------
drop table employee_tbl_hjy;

-- 테이블 생성
create table employee_tbl_hjy(
	emid INT(10) primary KEY, 		-- 사번
	em_name VARCHAR(255) not NULL,					-- 담당자
	department VARCHAR(255) not null,		-- (담당)부서
	d_code VARCHAR(100)
);

-- CONSTRAINT fk_department FOREIGN KEY (d_code) REFERENCES department_tbl(d_code) ON DELETE CASCADE

select * from employee_tbl_hjy;

select emid
  	 , em_name 
  from employee_tbl_hjy;

-- 사원 등록 (동일 부서 코드 반복 사용)
INSERT INTO employee_tbl_hjy
VALUES(501, '소지섭', '구매팀', 'M500');

INSERT INTO employee_tbl_hjy
VALUES(502, '이동욱', '구매팀', 'M500');

INSERT INTO employee_tbl_hjy
VALUES(503, '유재석', '구매팀', 'M500');


ALTER TABLE employee_tbl_hjy 
RENAME COLUMN incharge TO em_name;

--------------------------------------------------------------------------------
drop table department_tbl_hjy;
create table department_tbl_hjy(
	d_code VARCHAR(100)PRIMARY KEY, 				-- 부서코드
	department VARCHAR(255) not null UNIQUE,		-- (담당)부서
	incharge VARCHAR(255) not NULL					-- 담당자
);

select * from department_tbl;

-- 데이터 insert

-- 부서 등록
INSERT INTO department_tbl 
VALUES ('M001', '구매팀', '소지섭');

INSERT INTO department_tbl (d_code, department, incharge)
VALUES (500 , '구매관리', '소지섭');

INSERT INTO department_tbl (d_code, department, incharge)
VALUES (500 , '구매관리', '이동욱');

------------------------------------------------------------------------------
-- 거래처 테이블
drop table client_tbl_hjy;

-- 테이블 생성
create table client_tbl_hjy(
	client_code INT(10) auto_increment primary key,	-- 거래처
	client_name VARCHAR(255) not NULL		-- 거래처
);

-- 외래 키 제약 확인
SHOW CREATE TABLE client_tbl;

-- 외래 키 제약 삭제 (예시: 외래 키 이름이 fk_client_code)
ALTER TABLE client_tbl
DROP FOREIGN KEY fk_client_code;

alter table client_tbl 
modify column client_code VARCHAR(255);

-- 데이터 insert
INSERT INTO client_tbl_hjy(client_code, client_name)
VALUES (1, '삼성');

INSERT INTO client_tbl_hjy(client_code, client_name)
VALUES (2, 'LG');

INSERT INTO client_tbl_hjy(client_code, client_name)
VALUES (3, '애플');

-- 테이블 조회
select * from client_tbl_hjy;

-----------------------------------------------------------------------------------
-- 구매/판매 주문 테이블
drop table order_tbl_hjy; 
CREATE TABLE order_tbl_hjy(
	order_id  			INT(10) AUTO_INCREMENT PRIMARY KEY,       			
    order_date          DATE NOT NULL,   
    emid  				INT(10),					 
	client_code  		INT(10),						  				   	 
	storage_code	    INT(10),   	
	transaction_type 	VARCHAR(255) NOT NULL,  
	delivery_date 		DATE, 			 				   	 
	shipment_order_date DATE,     				  	 		
	order_code 			INT(10),
	order_type 			INT(10),
	constraint fk_employee FOREIGN KEY (emid) REFERENCES employee_tbl_hjy(emid)ON DELETE cascade ON update CASCADE,
	constraint fk_client FOREIGN KEY (client_code) REFERENCES client_tbl_hjy(client_code)ON DELETE cascade ON update CASCADE,
	constraint fk_warehouse FOREIGN KEY (storage_code) REFERENCES warehouse_tbl_hjy(storage_code)ON DELETE cascade ON update CASCADE
)ENGINE=InnoDB; 
select * from order_tbl_hjy;


-- -----------------------------------------------------------------------------
-- 구매/판매 주문 테이블
drop table order_detail_tbl_hjy; 

-- [구매/판매 - 주문상세]
CREATE TABLE order_detail_tbl_hjy(
	order_id  			INT(10),     
	order_status        VARCHAR(20),
	closing_staus       VARCHAR(20),
	chit 				VARCHAR(255),
	approval_id 		INT(10),
	constraint fk_order_tbl FOREIGN KEY (order_id) REFERENCES order_tbl_hjy (order_id)ON DELETE CASCADE,
	constraint fk_approval FOREIGN KEY (approval_id) REFERENCES approval_tbl_hjy(approval_id)ON DELETE CASCADE
)ENGINE=InnoDB; 

-- 데이터 insert
insert into order_detail_tbl_hjy (order_id, order_status, closing_staus, chit, approval_id) 
values( 1, '결재중', '진행중', null, 1);

SELECT * FROM order_detail_tbl_hjy;
------------------------------------------------------------------------------------------------
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
------------------------------------------------------------------------------------------------
-- [물품 정보- 수량]​
drop table order_item_tbl_hjy; 
create table order_item_tbl_hjy(
	order_id  INT(10), 	-- 물품코드
	item_code  INT(10) not NULL,				-- 물품코드
	item_name VARCHAR(255) not null,			-- 물품명
	quantity INT(10) CHECK (quantity > 0),		-- 물품수량
	CONSTRAINT fk_quantity_tbl FOREIGN KEY (order_id) REFERENCES order_tbl_hjy (order_id) ON DELETE CASCADE,
    CONSTRAINT fk_item_info_tbl FOREIGN KEY (item_code) REFERENCES item_info_tbl_hjy (item_code) ON DELETE CASCADE
) ENGINE=InnoDB;

SELECT * FROM order_item_tbl_hjy;

insert into order_item_tbl_hjy 
values(1, 100, '에어팟2' ,28);
--------------------------------------------------------------------------------------
-- 물품 금액 테이블 생성
drop table item_price_history_tbl_hjy​; 
create table item_price_history_tbl​_hjy(
	order_id INT(10), 
	item_code INT(10), 				
	price  DECIMAL(12,2),			
	supply DECIMAL(12,2),
	vat DECIMAL(12,2),
	total DECIMAL(12,2),
    constraint fk_item_info FOREIGN KEY (item_code) REFERENCES item_info_tbl_hjy (item_code)ON DELETE CASCADE,
    constraint fk_order_tbl_price FOREIGN KEY (order_id) REFERENCES order_tbl_hjy (order_id)ON DELETE CASCADE
)ENGINE=InnoDB;

SELECT * FROM item_price_tbl;