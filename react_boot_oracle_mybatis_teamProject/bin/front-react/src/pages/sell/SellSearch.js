import { Table, Button, Tabs, Message, Checkbox, ButtonToolbar, Modal } from 'rsuite';
import mock2 from '../../resource/sell_mock2';
import React, { useState, useCallback, useEffect } from "react";
import SellSearchModal from './sell_page/SellSearchModal';
import { Link, useNavigate } from "react-router-dom";

const { Column, HeaderCell, Cell } = Table;

const data = mock2(5);

const SellSearch = () => {

	const [itemList, setItemList] = useState([]);

	useEffect(()=> {
		fetch("http://localhost:8081/test", {
			method: "GET"
		})
		.then(res => res.json())
		.then(res => {
			console.log(1, res);
			setItemList(res);
		});
	}, []);

	// '물품 검색' 모달
	const [open1, setOpen1] = React.useState(false);
	const handleOpen1 = () => setOpen1(true);
	const handleClose1 = () => setOpen1(false);

	// // '판매 수정' 모달
	// const [open2, setOpen2] = React.useState(false);
	// const handleOpen2 = () => setOpen2(true);
	// const handleClose2 = () => setOpen2(false);

	return (
		<div> 
			 <Message type="warning" bordered showIcon className="main_title">
      			판매 물품 검색
    		</Message>

			<Tabs defaultActiveKey="1" className="search_title">
				<Tabs.Tab eventKey="1" title="전체" />
			</Tabs>
	
			<Table className="search_table"
			height={400}
			margin='0 auto'
			// data={data}
			// onRowClick={rowData => {
			// 	console.log(rowData);
			//}}
			>	
			
			{/* <Column width={50} className="search_text">
				<HeaderCell><Checkbox className="search_checkbox_all"  /></HeaderCell>
				<Cell><Checkbox className="search_checkbox" /></Cell>
			</Column> */}

			<Column width={100} className="search_text">
				<HeaderCell>품목코드</HeaderCell>
				<Cell dataKey="productNo" />
			</Column>

			<Column width={150} className="search_text">
				<HeaderCell>품목명</HeaderCell>
				<Cell dataKey="productName" />
			</Column>

			<Column width={100} className="search_text">
				<HeaderCell>규격</HeaderCell>
				<Cell dataKey="productSize" />
			</Column>

			<Column width={100} className="search_text">
				<HeaderCell>단가</HeaderCell>
				<Cell dataKey="price_origin" />
			</Column>

			<Column width={100} className="search_text">
				<HeaderCell>창고명</HeaderCell>
				<Cell dataKey="storage" />
			</Column>

			<Column width={100} className="search_text">
				<HeaderCell>창고수량</HeaderCell>
				<Cell dataKey="storage_num" />
			</Column>

			<Column width={100} className="search_text">
				<HeaderCell>거래처명</HeaderCell>
				<Cell dataKey="costumer" />
			</Column>

			<Column width={100} className="search_text">
				<HeaderCell>등록일자</HeaderCell>
				<Cell dataKey="date" />
			</Column>
			
			{/* <Column width={300} className="search_text">
				<HeaderCell></HeaderCell>
				
				<Cell >
				
					<Button appearance="link" onClick={handleOpen2} className="search_ED">
					Edit
					</Button>

					<Button appearance="link" onClick={() => alert("삭제")} className="search_ED">
					Delete
					</Button>
				
				</Cell> 
			</Column>*/}

			</Table>

			<div className="search_parent">
  				<div className="search_child">
					
					<ButtonToolbar>
						<Button appearance="primary" onClick={handleOpen1}>물품 검색</Button>
						<Link to="/SellRequest">
							<Button appearance="primary" >주문 요청</Button>
						</Link>
					</ButtonToolbar>
				</div>
			</div>
			
			{/* 판매 물품 검색 모달 */}
			<Modal open={open1} onClose={handleClose1} style={{ width: 700}}>
				<Modal.Header>
				<Modal.Title>판매 물품 찾기</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SellSearchModal /> 
				</Modal.Body>
				<Modal.Footer />
			</Modal>

			{/* 판매 수정 모달
			<Modal open={open2} onClose={handleClose2} style={{ width: 1300}}>
				<Modal.Header>
				<Modal.Title>판매 수정</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<SellEdit />
				</Modal.Body>
				<Modal.Footer />
			</Modal> */}

		</div>
		
	);
};


export default SellSearch;
