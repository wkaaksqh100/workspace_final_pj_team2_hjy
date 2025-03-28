
import React, { useState } from "react";
import { Table, Button, Tabs, Message, ButtonToolbar, Modal } from 'rsuite';

import mock3 from '../../resource/sell_mock3';
import "../../resource/Sell_maintitle.css";
import SellSlip from "./sell_page/SellSlip";

const { Column, HeaderCell, Cell } = Table;

const data = mock3(5);

const SellResult = () => {

	const [filteredData, setFilteredData] = useState(data); // 필터된 데이터를 상태로 관리
  
	const handleTabSelect = (key) => {
	  if (key === "2") {
		// "승인 전표" 탭이 선택되었을 때
		setFilteredData(data.filter(item => item.status === "승인"));
	  } else if (key === "3") {
		// "미승인 전표" 탭이 선택되었을 때
		setFilteredData(data.filter(item => item.status !== "승인"));
	  } else {
		// "전체" 탭이 선택되었을 때
		setFilteredData(data);
	  }
	};
	
	// '전표 입력' 모달
	const [open1, setOpen1] = React.useState(false);
	const handleOpen1 = () => setOpen1(true);
	const handleClose1 = () => setOpen1(false);
	
	
	return (
		<div> 
			<Message type="success" bordered showIcon className="main_title">
				<strong>판매 전표 관리</strong>
			</Message>

			<Tabs defaultActiveKey="1" className="all_title" onSelect={handleTabSelect}>
				<Tabs.Tab eventKey="1" title="전체">
				</Tabs.Tab>
				<Tabs.Tab eventKey="2" title="승인 전표">
				</Tabs.Tab>
				<Tabs.Tab eventKey="3" title="미승인 전표">
				</Tabs.Tab>
			</Tabs>

			<Table className="all_table"
			height={500}
			data={filteredData}
			onRowClick={rowData => {
				console.log(rowData);
			}}
			>	
			
			<Column width={130} className="all_text">
				<HeaderCell>전표번호</HeaderCell>
				<Cell dataKey="voucherNo" />
			</Column>

			<Column width={100}  className="all_text">
				<HeaderCell>전표종류</HeaderCell>
				<Cell dataKey="voucherType" />
			</Column>

			<Column width={150}  className="all_text">
				<HeaderCell>연결ID</HeaderCell>
				<Cell dataKey="connectID" />
			</Column>


			<Column width={100} className="all_text">
				<HeaderCell>등록일</HeaderCell>
				<Cell dataKey="voucher_date" />
			</Column>

			<Column width={150} className="all_text">
				<HeaderCell>승인상태</HeaderCell>
				<Cell dataKey="status" />
			</Column>

			<Column width={300} fixed="right">
				<HeaderCell></HeaderCell>
				
				<Cell className="all_ED">
				
					<Button appearance="link" onClick={() => alert("수정")}>
					Edit
					</Button>

					<Button appearance="link" onClick={() => alert("삭제")}>
					Delete
					</Button>
				
				</Cell>
			</Column>
			
			</Table>

			<div className="parent">
  				<div className="child">
					<ButtonToolbar>
							<Button appearance="primary" onClick={handleOpen1}>전표 등록</Button>

					</ButtonToolbar>
				</div>
			</div>

			<Modal open={open1} onClose={handleClose1}>
				<Modal.Header>
				<Modal.Title>전표 입력</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SellSlip />
				</Modal.Body>
				<Modal.Footer>
				<Button onClick={handleClose1} appearance="primary">
					저장
				</Button>
				<Button onClick={handleClose1} appearance="subtle">
					닫기
				</Button>
				</Modal.Footer>
			</Modal>

		</div>
		
	);
};


export default SellResult;
