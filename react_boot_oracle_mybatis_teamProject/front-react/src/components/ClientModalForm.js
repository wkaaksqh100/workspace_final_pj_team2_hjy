import React, { useEffect, useState } from "react";
import { Button, Checkbox, Modal, Table } from "rsuite";
import { Cell, HeaderCell } from "rsuite-table";
import Column from "rsuite/esm/Table/TableColumn";


const _clientModalForm = { // ModalForm's 이용중인 변수 : 멤버변수처럼 이용중
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
const ClientModalForm = ({ title, confirm, cancel } /* = props:속성 */) => {
	const [clientList, setClientList] = useState([]); // 초기값을 모르므로 빈배열로 buyList에 대입

	// fecth()를 통해 톰캣서버에세 데이터를 요청
	useEffect(() => {
		fetch("http://localhost:8081/main/findByClient", {
			method: "GET"
		})
			.then(res => res.json() // 응답이 오면 javascript object로 바꾸겠다.
			)
			.then(res => {
				console.log(1, res);
				setClientList(res); // 처음에는 비어있으므로 못가져온다. setBoardList(res);
			}
			)
	}, []); // []은 디펜던시인데, setState()로 렌더링될때 실행되면 안되고, 1번만 실행하도록 빈배열을 넣어둔다.
	// CORS 오류 : Controller 진입 직전에 적용된다. 외부에서 자바스크립트 요청이 오는 것을
	/* 이렇게 연결지어야지만, ModalForm안에서만 쓰겠다고 연결을 짓습니다. */
	const self = _clientModalForm; // this라는 이름을 쓸수 없어서, self로 지음.
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

	/*
	 *	Hook영역 : useEffect(이걸 쓰는순간, 직접만든 훅이라고 React에서 말합니다.)
	 */

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
					height={500}
					data={clientList}
					onRowClick={rowData => {
						console.log(rowData);
					}}
				>
					<Column width={40} align="center" fixed >
						<HeaderCell style={styles}></HeaderCell >
						<Cell dataKey="id" >
							<Checkbox />
						</Cell>
					</Column>

					<Column width={200} align="center" fixed >
						<HeaderCell style={styles}>거래처코드</HeaderCell >
						<Cell>{(rowData) => rowData.client_code}</Cell>

					</Column>

					<Column width={200}>
						<HeaderCell style={styles}>거래처명</HeaderCell>
						<Cell>{(rowData) => rowData.client_name}</Cell>
					</Column>

					{/* <Column width={100}>
						<HeaderCell style={styles}>상세내역</HeaderCell>
						<Cell style={{ padding: '6px' }}>
							{rowData => (
								<Button color="yellow" appearance='link'>
									내역
								</Button>
							)}
						</Cell>
					</Column> */}
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

ClientModalForm.defaultProps = {
	// props가 설정이 안되어있으면, 기본(default)으로 들어갑니다.
	title: "거래처 검색",
	confirm: "확인",
	cancel: "취소",
};

// 이렇게 해놓으면, 다른곳에서 불러올수있습니다. ex) import { _modalForm } from "./../components/ModalForm"
export { _clientModalForm /* ModalForm에서 사용중인 변수 */ }; // 주석처리하면, 다른곳에서 접근을 할수 없습니다.
export default ClientModalForm;
