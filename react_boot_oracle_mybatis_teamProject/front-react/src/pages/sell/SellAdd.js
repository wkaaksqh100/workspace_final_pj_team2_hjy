
import React, { useState } from "react";
import { Button, ButtonToolbar, Message, DatePicker, Form, 
		 InputGroup, AutoComplete, HStack, Input, Table, 
		 IconButton, InputNumber, SelectPicker } from "rsuite";
import { VscEdit, VscSave, VscRemove } from 'react-icons/vsc';
import { mockUsers } from '../../resource/sell_mock4';
import SearchIcon from '@rsuite/icons/Search';
import "../../resource/Sell_maintitle.css";
import ClientSearchModal from "../../components/ClientSearchModal";
import EmployeeSearchModal from "../../components/EmployeeSearchModal";

const styles = {
	width: 150,
	marginBottom: 5
  };

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockUsers(8);

/* 거래유형 - 선택 데이터 */
const sellType = ["부과세율 적용", "부가세율 미적용"].map(
	(item) => ({ // 이렇게 하면, 둘다 같게 들어가서, 라벨따로 값따로 안넣어줘도 됩니다.
		label: item, // Eugenia
		value: item, // Eugenia
	})
);

const SellAdd = () => {
	// 거래처 모달 관리
	const [selectedClient, setSelectedClient] = useState(null);
	const [selectedClientName, setSelectedClientName] = useState(null);
	const [isClientModalOpen, setClientModalOpen] = useState(false);

	const handleClientSelect = (client_code, client_name) => {
        setSelectedClient(client_code);
		setSelectedClientName(client_name);
        setClientModalOpen(false);
    };

    const handleOpenClientModal = () => {
        setClientModalOpen(true);
    };

	// 담당자 모달 관리
	const [selectedIncharge, setSelectedIncharge] = useState(null);
	const [selectedInchargeName, setSelectedInchargeName] = useState(null);
	const [isInchargeModalOpen, setInchargeModalOpen] = useState(false);

	const handleInchargeSelect = (emid, incharge) => {
        setSelectedIncharge(emid);
		setSelectedInchargeName(incharge);
        setClientModalOpen(false);
    };

    const handleOpenInchargeModal = () => {
        setInchargeModalOpen(true);
    };


	const [data, setData] = React.useState(defaultData);

	const handleChange = (id, key, value) => {
		const nextData = Object.assign([], data);
		nextData.find(item => item.id === id)[key] = value;
		setData(nextData);
	};
	const handleEdit = id => {
		const nextData = Object.assign([], data);
		const activeItem = nextData.find(item => item.id === id);

		activeItem.status = activeItem.status ? null : 'EDIT';

		setData(nextData);
	};

	const handleRemove = id => {
		setData(data.filter(item => item.id !== id));
	};

	return (
		<div>
			
			<Message type="info" bordered showIcon className="main_title">
      			판매입력
    		</Message>
			
			{/* 입력 상위 칸 */}
			
			<div className="final">
			
				<Form className="addForm" layout="inline">

				<div className="form_div">
					<Form.Group controlId="day">
						<Form.ControlLabel style={{ marginRight: 9, fontSize: 17 }}>출하지시일</Form.ControlLabel>
						<DatePicker style={{ width: 310, marginRight: 70 }} />
					</Form.Group>

					<Form.Group controlId="customer_1">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 30, fontSize: 17 }}>거래처</Form.ControlLabel>
							<InputGroup style={styles}>
							<Input
								placeholder='거래처'
								value={selectedClient || ""} readOnly
							/>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1} >
										{/* 모달 열기 버튼 */}
										<SearchIcon onClick={handleOpenClientModal} />
									</InputGroup.Button>
							</InputGroup>
							<Input name="customer_1" type="text" autoComplete="off" style={{ width: 150,  marginBottom: 5 }}
								value={selectedClientName || ""} readOnly />
						</HStack>
					</Form.Group>
					</div>
					<div className="form_div">
					<Form.Group controlId="customer_2">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 34, fontSize: 17 }}>담당자</Form.ControlLabel>
							<InputGroup style={styles}>
							<Input
								placeholder='담당자'
								value={selectedIncharge || ""} readOnly
							/>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
										{/* 모달 열기 버튼 */}
										<SearchIcon onClick={handleOpenInchargeModal}/>
									</InputGroup.Button>
							</InputGroup>
							{/* <Form.Control name="customer_2" type="text" autoComplete="off" style={{ width: 150, marginBottom: 5, marginRight: 70 }} /> */}
							<Input name="customer_1" type="text" autoComplete="off" style={{ width: 150,  marginBottom: 5 }}
								value={selectedInchargeName || ""} readOnly />
						</HStack>
					</Form.Group>
					
					<Form.Group controlId="storage">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 15, fontSize: 17 }}>출하창고</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1} >
										<SearchIcon />
									</InputGroup.Button>
							</InputGroup>
							<Form.Control name="storage" type="text" autoComplete="off" style={{ width: 150, marginBottom: 5 }} />
						</HStack>
					</Form.Group>
					</div>
					<div className="form_div">
					<Form.Group controlId="surtax">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 20, fontSize: 17 }}>거래유형</Form.ControlLabel>
							{/* <Form.Control name="surtax" type="text" autoComplete="off" style={{ width: 305, marginRight: 70 }} /> */}
							<Form.Control style={{width: 305}}
							name="sellType"
							data={sellType}
							accepter={SelectPicker}
							/>
						</HStack>
					</Form.Group></div>
					<div className="addPlus">
					{/* <style>{t_styles}</style> */}
					
						<Button style={{ width: 850 }} 
						onClick={() => {
							setData([
							{ id: data.length + 1, name: '', age: 0, birthdate: null, status: 'EDIT' },
							...data
							]);
						}}
						>
						입력 추가하기
						</Button></div>
						<hr />

						{/* 입력 하위 칸 */}
						<div className="addTabel">
						<Table height={400} data={data}>

						<Column width={150}>
							<HeaderCell>품목코드</HeaderCell>
							<EditableCell
							//dataKey="name"
							dataType="number"
							onChange={handleChange}
							onEdit={handleEdit}
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>품목명</HeaderCell>
							<EditableCell
							//dataKey="age"
							dataType="string"
							onChange={handleChange}
							onEdit={handleEdit}
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>규격</HeaderCell>
							<EditableCell
							//dataKey="birthdate"
							dataType="string"
							onChange={handleChange}
							onEdit={handleEdit}
							/>
						</Column>

						<Column width={100}>
							<HeaderCell>수량</HeaderCell>
							<EditableCell
							//dataKey="birthdate"
							dataType="number"
							onChange={handleChange}
							onEdit={handleEdit}
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>단가</HeaderCell>
							<EditableCell
							//dataKey="birthdate"
							dataType="number"
							onChange={handleChange}
							onEdit={handleEdit}
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>공급가액</HeaderCell>
							<EditableCell
							//dataKey="birthdate"
							dataType="number"
							onChange={handleChange}
							onEdit={handleEdit}
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>부가세</HeaderCell>
							<EditableCell
							//dataKey="birthdate"
							dataType="number"
							onChange={handleChange}
							onEdit={handleEdit}
							/>
						</Column>


						<Column width={100}>
							<HeaderCell>Action</HeaderCell>
							<ActionCell dataKey="id" onEdit={handleEdit} onRemove={handleRemove} />
						</Column>
					</Table>
					</div>
					
					<ButtonToolbar >
						<div className="addBtn">
						<Button appearance="primary" className="addBtn_">저장</Button>
						<Button type="reset" appearance="primary" className="addBtn_">다시 작성</Button>
						</div>
					</ButtonToolbar>
					<hr></hr>
				
				<ClientSearchModal
					title="거래처 선택"
					confirm="확인"
					cancel="취소"
					onClientSelect={handleClientSelect}	// client_code, client_name 받기
					handleOpen={isClientModalOpen}
					handleColse={() => setClientModalOpen(false)}
				/>

				<EmployeeSearchModal
					title="담당자 선택"
					confirm="확인"
					cancel="취소"
					onInchargeSelect={handleInchargeSelect}	// emid, Incharge 받기
					handleOpen={isInchargeModalOpen}
					handleColse={() => setInchargeModalOpen(false)}
				/>

				</Form>
			</div>
			{/* <hr></hr> */}

		</div>
		
	);
};

function toValueString(value, dataType) {
	return dataType === 'date' ? value?.toLocaleDateString() : value;
  }
  
  const fieldMap = {
	string: Input,
	number: InputNumber,
	date: DatePicker
  };
  
  const EditableCell = ({ rowData, dataType, dataKey, onChange, onEdit, ...props }) => {
	const editing = rowData.status === 'EDIT';
  
	const Field = fieldMap[dataType];
	const value = rowData[dataKey];
	const text = toValueString(value, dataType);
  
	return (
	  <Cell
		{...props}
		className={editing ? 'table-cell-editing' : ''}
		onDoubleClick={() => {
		  onEdit?.(rowData.id);
		}}
	  >
		{editing ? (
		  <Field
			defaultValue={value}
			onChange={value => {
			  onChange?.(rowData.id, dataKey, value);
			}}
		  />
		) : (
		  text
		)}
	  </Cell>
	);
  };
  
  const ActionCell = ({ rowData, dataKey, onEdit, onRemove, ...props }) => {
	return (
	  <Cell {...props} style={{ padding: '6px', display: 'flex', gap: '4px' }}>
		<IconButton
		  appearance="subtle"
		  icon={rowData.status === 'EDIT' ? <VscSave /> : <VscEdit />}
		  onClick={() => {
			onEdit(rowData.id);
		  }}
		/>
		<IconButton
		  appearance="subtle"
		  icon={<VscRemove />}
		  onClick={() => {
			onRemove(rowData.id);
		  }}
		/>
	  </Cell>
	);
  };


export default SellAdd;
