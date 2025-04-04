
import React from "react";
import { Button, ButtonToolbar, Message, DatePicker, Form, 
		 InputGroup, AutoComplete, HStack, Input, Table, 
		 IconButton, InputNumber} from "rsuite";
import { VscEdit, VscSave, VscRemove } from 'react-icons/vsc';
import { mockUsers } from '../../resource/sell_mock4';
import SearchIcon from '@rsuite/icons/Search';
import "../../resource/Sell_maintitle.css";

const styles = {
	width: 150,
	marginBottom: 5
  };

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockUsers(8);


const t_styles = `
  .table-cell-editing .rs-table-cell-content {
	padding: 4px;
  }
  .table-cell-editing .rs-input {
	width: 100%;
  }
  `;


const SellResult = () => {




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
			
			<Message type="success" bordered showIcon className="main_title">
				판매 현황 관리
			</Message>
			
			{/* 입력 상위 칸 */}
			
			<div className="final">
			
				<Form className="addForm" layout="inline">

				<div className="form_div">
					<Form.Group controlId="day">
						<Form.ControlLabel style={{ marginRight: 25, fontSize: 17 }}>등록일자</Form.ControlLabel>
						<DatePicker style={{ width: 145 }} /> ~ <DatePicker style={{ width: 145, marginRight: 70 }} />
					</Form.Group>

					<Form.Group controlId="customer_1">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 30, fontSize: 17 }}>거래처</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
										<SearchIcon />
									</InputGroup.Button>
							</InputGroup>
							<Form.Control name="customer_1" type="text" autoComplete="off" style={{ width: 150,  marginBottom: 5 }} />
						</HStack>
					</Form.Group>
					</div>
					<div className="form_div">
					<Form.Group controlId="customer_2">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 34, fontSize: 17 }}>담당자</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
										<SearchIcon />
									</InputGroup.Button>
							</InputGroup>
							<Form.Control name="customer_2" type="text" autoComplete="off" style={{ width: 150, marginBottom: 5, marginRight: 70 }} />
						</HStack>
					</Form.Group>
					
					<Form.Group controlId="storage">
						<HStack>
							<Form.ControlLabel style={{ marginRight: 15, fontSize: 17 }}>출하창고</Form.ControlLabel>
							<InputGroup style={styles}>
								<AutoComplete />
									<InputGroup.Button tabIndex={-1}>
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
							<Form.Control name="surtax" type="text" autoComplete="off" style={{ width: 305, marginRight: 70 }} />
						</HStack>
					</Form.Group>
					
					<style>{t_styles}</style>

						<Button style={{ width: 390 }} 
						onClick={() => {
							setData([
							{ id: data.length + 1, name: '', age: 0, birthdate: null, status: 'EDIT' },
							...data
							]);
						}}
						>
						조회하기
						</Button></div>
						<hr />


						{/* 입력 하위 칸 */}
						<div className="addTabel">
						<Table height={400} data={data}>

						<Column width={150}>
							<HeaderCell>일자</HeaderCell>
							<Cell
							//dataKey="date"
							dataType="date"
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>품목명</HeaderCell>
							<Cell
							//dataKey="age"
							dataType="string"
							/>
						</Column>

						<Column width={100}>
							<HeaderCell>수량</HeaderCell>
							<Cell
							//dataKey="birthdate"
							dataType="number"
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>단가</HeaderCell>
							<Cell
							//dataKey="birthdate"
							dataType="number"
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>공급가액</HeaderCell>
							<Cell
							//dataKey="birthdate"
							dataType="number"
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>부가세</HeaderCell>
							<Cell
							//dataKey="birthdate"
							dataType="number"
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>합계</HeaderCell>
							<Cell
							//dataKey="birthdate"
							dataType="number"
							/>
						</Column>

						<Column width={150}>
							<HeaderCell>거래처명</HeaderCell>
							<Cell
							//dataKey="birthdate"
							dataType="String"
							/>
						</Column>

					</Table>
					</div>
					
					<ButtonToolbar >
						<div className="addBtn">
						<Button appearance="primary" className="addBtn_">인쇄</Button>
						</div>
					</ButtonToolbar>
					<hr></hr>

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

export default SellResult;
