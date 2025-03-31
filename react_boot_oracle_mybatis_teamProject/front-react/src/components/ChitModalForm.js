import React from "react";
import { Button, Modal } from "rsuite";
import { Table } from "rsuite-table";

const _chitModalForm = { // ModalForm's 이용중인 변수 : 멤버변수처럼 이용중
	title: null,
	show: null, // useState[ state, stateSetter ] = show[0], show[1]
	buttons: {
		confirm: null,
		cancel: null,
	},
	getHandle: null,
	getFormData: null
};

/**
 * 모달에 Form양식이 들어간 컴포넌트(Component)입니다.
 *
 * @param {*} title 모달 제목
 * @param {*} confirm 확인 버튼 이름
 * @param {*} cancel 취소 버튼 이름
 */
const ChitModalForm = ({ title, confirm, cancel } /* = props:속성 */) => {
	/* 이렇게 연결지어야지만, ModalForm안에서만 쓰겠다고 연결을 짓습니다. */
	const self = _chitModalForm; // this라는 이름을 쓸수 없어서, self로 지음.
	/* 그래서, 왠만해서는 self.으로 변수를 다뤄주시는게 좋습니다. */

	/* ModalForm의 멤버변수처럼 연결 : 매개변수 생성자처럼 */
	self.title = title;
	self.buttons.confirm = confirm;
	self.buttons.cancel = cancel;
	const buttons = self.buttons;

	/*
	 *	Hook영역 : useState, useNavigate, useLocation...
	 */
	const show = React.useState(false);
	self.show = show;

	const handleOpen = () => show[1](true);
	const handleClose = () => show[1](false);
	self.getHandle = () => {
		return { open: handleOpen, close: handleClose };
	};

	const handler = self.getHandle();

	// const [ formData, setFormData ] = React.useState({
	// 	name: "",
	// 	email: "",
	// 	password: "",
	// 	textarea: "",
	// });
	// self.getFormData = () => { return formData };

	/*
	 *	Hook영역 : useEffect(이걸 쓰는순간, 직접만든 훅이라고 React에서 말합니다.)
	 */
	const { Column, HeaderCell, Cell } = Table;
	const data = [
		{ productCode: 'J1263', itemName: '두부', standard: '15*15*8', TotalAmount: 100, chit: '', chitDate: "2025-03-20" },
	];

	const styles = {
		//width: 960,
		//marginBottom: 10,
		backgroundColor: '#f8f9fa',

	};

	return (
		<Modal open={self.show[0]} onClose={handler.close} size="xs">
			<Modal.Header>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Table
					height={400}
					data={data}
					onRowClick={rowData => {
						console.log(rowData);
					}}
				>
					<Column width={100} align="center" fixed >
						<HeaderCell style={styles}>품목코드</HeaderCell >
						<Cell dataKey="productCode" />

					</Column>

					<Column width={100}>
						<HeaderCell style={styles}>품목명</HeaderCell>
						<Cell dataKey="itemName" />
					</Column>

					<Column width={100}>
						<HeaderCell style={styles}>규격</HeaderCell>
						<Cell dataKey="standard" />
					</Column>

					<Column width={80}>
						<HeaderCell style={styles}>수량</HeaderCell>
						<Cell dataKey="TotalAmount" />
					</Column>

					<Column width={100}>
						<HeaderCell style={styles}>불러온 전표</HeaderCell>
						<Cell dataKey="chit" />
					</Column>

					<Column width={150}>
						<HeaderCell style={styles}>불러온 전표일자-No.</HeaderCell>
						<Cell dataKey="chitDate" />
					</Column>

				</Table>

			</Modal.Body>
			<Modal.Footer>
				<Button /* href="/" */ onClick={handler.close /* 다른 이벤트를 넣어도 됩니다. */} appearance="primary">
					{buttons.confirm}
				</Button>
				<Button onClick={handler.close} appearance="subtle">
					{buttons.cancel}
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

ChitModalForm.defaultProps = {
	// props가 설정이 안되어있으면, 기본(default)으로 들어갑니다.
	title: "제목을 입력해주세요.",
	confirm: "확인",
	cancel: "취소",
};

// 이렇게 해놓으면, 다른곳에서 불러올수있습니다. ex) import { _modalForm } from "./../components/ModalForm"
export { _chitModalForm /* ModalForm에서 사용중인 변수 */ }; // 주석처리하면, 다른곳에서 접근을 할수 없습니다.
export default ChitModalForm;
