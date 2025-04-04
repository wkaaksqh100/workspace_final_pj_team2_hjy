-- 창고, 회계, 직원, 부서, 거래처 테이블 정보

show databases;

show tables;

SET foreign_key_checks = 0;  -- 외래 키 제약 비활성화
DROP TABLE approval_tbl_hjy;  -- 테이블 삭제
SET foreign_key_checks = 1;  -- 외래 키 제약 활성화

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

-----------------------------------------------------------------------------------
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

----------------------------------------------------------------------------------

drop table department_tbl_hjy;
CREATE TABLE department_tbl_hjy (
	d_code VARCHAR(100),          -- 부서코드 (중복 허용)
	department VARCHAR(255) NOT NULL,      -- 부서명
	incharge VARCHAR(255) NOT null,         -- 담당자명
	emid INT(10),
	constraint fk_e FOREIGN KEY (emid) REFERENCES employee_tbl_hjy(emid)ON DELETE cascade ON update CASCADE
);

select * from department_tbl_hjy;

-- 데이터 insert

-- 부서 등록
INSERT INTO department_tbl_hjy 
VALUES ('M500', '구매팀', '소지섭', 501);

INSERT INTO department_tbl_hjy 
VALUES ('M500', '구매팀', '이동욱', 502);

INSERT INTO department_tbl_hjy 
VALUES ('M500', '구매팀', '유재석', 503);

--------------------------------------------------------------------------------
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
------------------------------------------------------------------------------

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

delete from order_tbl_hjy where order_id = 1;

INSERT INTO order_tbl_hjy 
VALUES (1, '2025-04-02', 502, 1, 3, '부가세율 적용', '2025-04-12', null, 1, 2);

INSERT INTO order_tbl_hjy 
VALUES (2, '2025-04-03', 503, 1, 3, '부가세율 적용', '2025-04-12', null, 1, 2);

-- -----------------------------------------------------------------------------

drop table approval_tbl_hjy;

-- 테이블 생성
CREATE TABLE approval_tbl_hjy (
    approval_id INT(10) AUTO_INCREMENT PRIMARY KEY,  -- 물품코드
    department VARCHAR(255) NOT NULL,                -- (담당)부서
    quantity DECIMAL(12,2) NOT NULL,                       -- 수량
    price DECIMAL(12,2) NOT NULL,                         -- 단가
    vat DECIMAL(12,2) NOT NULL,                           -- 부가세
    supply DECIMAL(12,2) NOT NULL,                        -- 공급가액
    total DECIMAL(12,2) NOT NULL                          -- 금액합계
)ENGINE=InnoDB; 


SELECT * 
FROM order_tbl_hjy
WHERE order_id = order_id;

-- 데이터 insert
INSERT INTO approval_tbl_hjy 
VALUES (1 , '구매팀', 30, 250000, 25000, 100000, 7500000);

-- 테이블 조회
select * from approval_tbl_hjy;
------------------------------------------------------------------------------

-- 구매/판매 주문 테이블
drop table order_detail_tbl_hjy; 

-- [구매/판매 - 주문상세]
CREATE TABLE order_detail_tbl_hjy(
	order_id  			INT(10),     
	order_status        VARCHAR(20),
	closing_status       VARCHAR(20),
	chit 				VARCHAR(255),
	approval_id 		INT(10),
	constraint fk_order_tbl FOREIGN KEY (order_id) REFERENCES order_tbl_hjy (order_id) ON DELETE cascade ON update CASCADE,
	constraint fk_approval FOREIGN KEY (approval_id) REFERENCES approval_tbl_hjy(approval_id) ON DELETE cascade ON update CASCADE
)ENGINE=InnoDB; 

-- 걸럼명 변경
ALTER TABLE order_detail_tbl_hjy 
RENAME COLUMN closing_staus TO closing_status;

delete 
from order_detail_tbl_hjy
where order_id= '1';

-- 데이터 insert
insert into order_detail_tbl_hjy (order_id, order_status, closing_status, chit, approval_id) 
values( 1, '결재중', '진행중', null, 1);

SELECT * FROM order_detail_tbl_hjy;

------------------------------------------------------------------------------------------------
-- [물품 정보- 규격]
drop table item_info_tbl_hjy; 
DROP TABLE IF EXISTS item_info_tbl_hjy;
CREATE TABLE item_info_tbl_hjy (
    item_code INT,
    item_name VARCHAR(255) NOT NULL,
    item_standard VARCHAR(255),
    CONSTRAINT fk_order_item FOREIGN KEY (item_code) REFERENCES order_item_tbl_hjy (item_code)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

SELECT * FROM item_info_tbl_hjy;

-- 데이터 insert
insert into item_info_tbl_hjy
values(1,	'삼성 스마트 TV',	'65인치 OLED');

insert into item_info_tbl_hjy
values(2,	'LG 올레드 TV',	'55인치 4K');

------------------------------------------------------------------------------------------------
-- [물품 정보]​
drop table order_item_tbl_hjy; 
CREATE TABLE order_item_tbl_hjy (
    order_id INT NOT NULL,
    item_code INT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    quantity INT CHECK (quantity > 0),
    price  DECIMAL(12,2),
    supply DECIMAL(12,2),
    vat DECIMAL(12,2),
    total DECIMAL(12,2),
    CONSTRAINT fk_order FOREIGN KEY (order_id) REFERENCES order_tbl_hjy (order_id)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

SELECT * FROM order_item_tbl_hjy;

insert into order_item_tbl_hjy 
values(1, 1, '삼성 스마트 TV' ,10, 800000, 8000000, 800000, 8800000);

--------------------------------------------------------------------------------------
-- [물품 금액 - 이력용] 테이블 생성 (사용안함)
drop table item_price_history_tbl​_hjy; 
create table item_price_history_tbl​_hjy(
	order_id INT(10), 
	item_code INT(10), 				
	price  DECIMAL(12,2),			
	supply DECIMAL(12,2),
	vat DECIMAL(12,2),
	total DECIMAL(12,2),
	created_at DATETIME,
    constraint fk_o_item FOREIGN KEY (item_code) REFERENCES order_item_tbl_hjy (item_code) ON DELETE cascade ON update CASCADE,
    constraint fk_o FOREIGN KEY (order_id) REFERENCES order_tbl_hjy (order_id) ON DELETE cascade ON update CASCADE
)ENGINE=InnoDB;

SELECT * FROM item_price_history_tbl​_hjy;

delete 
from item_price_history_tbl​_hjy
where order_id= '1';

INSERT INTO item_price_history_tbl​_hjy 
VALUES (1 , 1011, 250000, 100000, 25000, 7500000);

-------------------------------------------------------------------------------------------
-- 구매조회 뷰테이블
DROP VIEW IF EXISTS buy_order_view;

CREATE VIEW buy_order_view AS
SELECT 
    o.order_date AS order_date,
    o.order_id AS order_id,
    c.client_code AS client_code,
    c.client_name AS client_name,
    i.item_name AS item_name,
    i.total AS total,
    o.transaction_type AS transaction_type,
    w.storage_code AS storage_code,
    w.storage AS storage,
    d.closing_status AS closing_status,
    d.chit AS chit
FROM order_tbl_hjy o
LEFT JOIN order_item_tbl_hjy i ON o.order_id = i.order_id
LEFT JOIN order_detail_tbl_hjy d ON o.order_id = d.order_id
LEFT JOIN client_tbl_hjy c ON o.client_code = c.client_code
LEFT JOIN warehouse_tbl_hjy w ON o.storage_code = w.storage_code;

SELECT * FROM buy_order_view;

DROP VIEW IF EXISTS buy_search_view;

CREATE VIEW b_search_incharge_view AS
SELECT 
    o.order_date AS order_date,
    o.order_id AS order_id,
    c.client_code AS client_code,
    c.client_name AS client_name,
    i.item_name AS item_name,
    i.total AS total,
    o.transaction_type AS transaction_type,
    w.storage_code AS storage_code,
    w.storage AS storage,
    d.closing_status AS closing_status,
    d.chit AS chit
FROM order_tbl_hjy o
LEFT JOIN order_item_tbl_hjy i ON o.emid = i.emid
LEFT JOIN employee_tbl_hjy e ON o.order_id = ip.order_id AND i.item_code = ip.item_code
LEFT JOIN order_detail_tbl_hjy d ON o.order_id = d.order_id
LEFT JOIN client_tbl_hjy c ON o.client_code = c.client_code
LEFT JOIN warehouse_tbl_hjy w ON o.storage_code = w.storage_code;

SELECT * FROM buy_order_view;

DROP VIEW IF EXISTS b_search_incharge_view;

CREATE VIEW b_search_incharge_view AS
SELECT
    e.emid       AS emid,
    e.em_name     AS em_name,
    d.department    AS department,
FROM
    employee_tbl_hjy e
left join department_tbl_hjy d ON e.emid = d.emid;
    
SELECT * FROM b_search_incharge_view;

select * from item_tbl_mhj;
