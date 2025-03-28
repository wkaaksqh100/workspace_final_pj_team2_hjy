import { Table, Button, Tabs, Message, ButtonToolbar, Checkbox, Modal, InputPicker } from 'rsuite';
import mock from '../../resource/sell_mock';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SalesInvoice from './sell_page/SalesInvoice';
import SellSlipAll from './sell_page/SellSlipAll';
import "../../resource/Sell_maintitle.css";

const { Column, HeaderCell, Cell } = Table;

const data = mock(5);

const confirm = ['미확인', '결재중', '완료'].map(
	confirmChk => ({ label: confirmChk, value: confirmChk })
  );

const confirmStyles = { width: 100, display: 'block', marginBottom: 0 };

const SellAll = () => {

	// '거래명세서' 모달
	const [open1, setOpen1] = React.useState(false);
	const handleOpen1 = () => setOpen1(true);
	const handleClose1 = () => setOpen1(false);

	// '불러온 전표' 모달
	const [open2, setOpen2] = React.useState(false);
	const handleOpen2 = () => setOpen2(true);
	const handleClose2 = () => setOpen2(false);


	return (
		<div>
			<Message type="success" bordered showIcon className="main_title">
				판매조회
			</Message>

			{/* 검색 바 넣기!!! */}

			<Tabs defaultActiveKey="1" className="all_title">
				<Tabs.Tab eventKey="1" title="전체">
				</Tabs.Tab>
				<Tabs.Tab eventKey="2" title="결재중">
				</Tabs.Tab>
				<Tabs.Tab eventKey="3" title="미확인">
				</Tabs.Tab>
				<Tabs.Tab eventKey="4" title="확인">
				</Tabs.Tab>
			</Tabs>

			<Table className="all_table"
			height={500}
			data={data}
			onRowClick={rowData => {
				console.log(rowData);
			}}
			>	
			
			<Column width={50} className="all_text">
				<HeaderCell>선택</HeaderCell>
				<Cell><Checkbox className="all_checkbox" /></Cell>
			</Column>
			
			<Column width={130} className="all_text">
				<HeaderCell>등록일자</HeaderCell>
				<Cell dataKey="date" />
			</Column>

			<Column width={130} className="all_text">
				<HeaderCell>출하지시일</HeaderCell>
				<Cell dataKey="date" />
			</Column>

			<Column width={100}  className="all_text">
				<HeaderCell>거래처명</HeaderCell>
				<Cell dataKey="comName" />
			</Column>

			<Column width={150}  className="all_text">
				<HeaderCell>품목명</HeaderCell>
				<Cell dataKey="productName" />
			</Column>

			<Column width={100} className="all_text">
				<HeaderCell>금액 합계</HeaderCell>
				<Cell dataKey="price" />
			</Column>

			<Column width={150} className="all_text">
				<HeaderCell>거래유형</HeaderCell>
				<Cell dataKey="surtax" />
			</Column>

			<Column width={100} className="all_text">
				<HeaderCell>창고명</HeaderCell>
				<Cell dataKey="storage" />
			</Column>

			<Column width={100} className="all_text">
				<HeaderCell>회계반영 여부</HeaderCell>
				<Cell dataKey="accountancy" />
			</Column>

			<Column width={150} className="all_text">
				<HeaderCell>결재</HeaderCell>
				<Cell>
					<InputPicker placeholder="미확인" data={confirm} style={confirmStyles} />
				</Cell>
			</Column>

			<Column width={100} className="all_text">
				<HeaderCell>거래명세서</HeaderCell>
				<Cell>
					<Button appearance="link" onClick={handleOpen1}>
					조회
					</Button>
				</Cell>
			</Column>

			<Column width={100} className="all_text">
				<HeaderCell>불러온 전표</HeaderCell>
				<Cell>
					<Button appearance="link" onClick={handleOpen2}>
					조회
					</Button>
				</Cell>
			</Column>
			</Table>

			<Modal open={open1} onClose={handleClose1} style={{ width:800 }}>
				<Modal.Header>
				<Modal.Title>거래명세서</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SalesInvoice />
				</Modal.Body>
				<Modal.Footer>
				<Button onClick={handleClose1} appearance="primary">
					인쇄
				</Button>
				<Button onClick={handleClose1} appearance="subtle">
					닫기
				</Button>
				</Modal.Footer>
			</Modal>

			<Modal open={open2} onClose={handleClose2} style={{ width:800 }}>
				<Modal.Header>
				<Modal.Title>불러온 전표</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SellSlipAll />
				</Modal.Body>
				<Modal.Footer>
				<Button onClick={handleClose2} appearance="subtle">
					닫기
				</Button>
				</Modal.Footer>
			</Modal>

			<div className="parent">
  				<div className="child">
					<ButtonToolbar>
						<Link to="/SellAdd">
							<Button appearance="primary">판매 입력</Button>
						</Link>
						<Button appearance="primary">저장</Button>
						<Button appearance="primary">선택 삭제</Button>
					</ButtonToolbar>
				</div>
			</div>
		</div>
  );
};


export default SellAll;
