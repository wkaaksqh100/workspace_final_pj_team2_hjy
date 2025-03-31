show databases;

-- 재고 테이블
drop table item_tbl;

-- 테이블 생성
create table item_tbl(
	item_code INT(10) auto_increment primary KEY, 	-- 물품코드
	item_name VARCHAR(255) not NULL,				-- 물품명
	item_standard VARCHAR(255) not NULL			-- 규격
);

-- 데이터 insert
INSERT INTO item_tbl (item_name, item_standard, quantity, price, vat, supply, total)
VALUES ('딤채', '1500mm*1200mm*1200mm' , 100, 500, 50, 550, 55000);

-- 테이블 조회
select * from item_tbl;

-- 창고 테이블
drop table warehouse_tbl;

-- 창고테이블 생성
create table warehouse_tbl(
	storage_code INT(10) primary key,					-- 창고코드
	storage VARCHAR(255) not null						-- 창고명
);

-- 데이터 insert
INSERT INTO warehouse_tbl (storage)
VALUES ('안산');

-- 테이블 조회
select * from warehouse_tbl;

-- 결재 테이블
drop table approval_tbl;

-- 테이블 생성
CREATE TABLE approval_tbl (
    approval_id INT(10) AUTO_INCREMENT PRIMARY KEY,  -- 물품코드
    department VARCHAR(255) NOT NULL,                -- (담당)부서
    quantity INT(10) NOT NULL,                       -- 수량
    price INT(10) NOT NULL,                          -- 단가
    vat INT(10) NOT NULL,                            -- 부가세
    supply INT(10) NOT NULL,                         -- 공급가액
    total INT(10) NOT NULL,                          -- 금액합계
	CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES employee_tbl (department)
);
-- 	CONSTRAINT fk_department FOREIGN key(department) references employee_tbl (department)

-- 데이터 insert
INSERT INTO approval_tbl (department, quantity, price, vat, supply, total)
VALUES ('물류팀' , 100, 500, 50, 550, 55000);

-- 테이블 조회
select * from approval_tbl;

-- 사원 테이블
drop table employee_tbl;

-- 테이블 생성
create table employee_tbl(
	emid INT(10) auto_increment primary KEY, 		-- 사번
	em_name VARCHAR(255) not NULL,					-- 담당자
	department VARCHAR(255) unique not null,		-- (담당)부서
	d_code VARCHAR(100),
	FOREIGN KEY (d_code) REFERENCES department_tbl(d_code)
);

ALTER TABLE employee_tbl 
RENAME COLUMN incharge TO em_name;

create table department_tbl(
	d_code VARCHAR(100) primary KEY, 		-- 사번
	department VARCHAR(255) unique not null,				-- (담당)부서
	incharge VARCHAR(255) not NULL					-- 담당자
);

-- 데이터 insert
INSERT INTO employee_tbl (emid, incharge, department)
VALUES (1 , '소지섭' , '구매관리');

-- 데이터 insert
INSERT INTO employee_tbl (incharge, department)
VALUES ('이알피', '물류팀');

-- 테이블 생성
drop table department_tbl;
create table department_tbl(
	d_code VARCHAR(255) primary KEY, 						
	department VARCHAR(255) unique not NULL			
	incharge VARCHAR(255) not NULL,	
);

-- 테이블 조회
select * from employee_tbl;

-- 거래처 테이블
drop table client_tbl;

-- 테이블 생성
create table client_tbl(
	client_code INT(10) auto_increment primary key,	-- 거래처
	client_name VARCHAR(255) not NULL		-- 거래처
);

-- 외래키에 CASCADE 추가 예시
ALTER TABLE employee_tbl
ADD CONSTRAINT fk_department_code
FOREIGN KEY (d_code)
REFERENCES department_tbl(d_code)
ON DELETE CASCADE;

-- 외래 키 제약 확인
SHOW CREATE TABLE client_tbl;

-- 외래 키 제약 삭제 (예시: 외래 키 이름이 fk_client_code)
ALTER TABLE client_tbl
DROP FOREIGN KEY fk_client_code;

alter table client_tbl 
modify column client_code VARCHAR(255);

-- 데이터 insert
INSERT INTO client_tbl (client_code, client_name)
VALUES (1, '삼성');

INSERT INTO client_tbl (client_code, client_name)
VALUES (2, 'LG');

INSERT INTO client_tbl (client_code, client_name)
VALUES (3, '애플');

-- 테이블 조회
select * from client_tbl;