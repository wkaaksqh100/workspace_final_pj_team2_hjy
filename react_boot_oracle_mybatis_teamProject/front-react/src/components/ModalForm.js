import React from "react";
import { Button, Form, Modal } from "rsuite";

// /* 선택상자 데이터 */
// const selectData = ["Eugenia", "Bryan", "Linda", "Nancy", "Lloyd", "Alice"].map(
// 	(item) => ({ // 이렇게 하면, 둘다 같게 들어가서, 라벨따로 값따로 안넣어줘도 됩니다.
// 		label: item, // Eugenia
// 		value: item, // Eugenia
// 	})
// );

const _modalForm = { // ModalForm's 이용중인 변수 : 멤버변수처럼 이용중
	title: '담당자 검색',
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
const ModalForm = ({ title, confirm, cancel } /* = props:속성 */) => {
	/* 이렇게 연결지어야지만, ModalForm안에서만 쓰겠다고 연결을 짓습니다. */
	const self = _modalForm; // this라는 이름을 쓸수 없어서, self로 지음.
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

	// const [formData, setFormData] = React.useState({
	// 	name: "",
	// 	email: "",
	// 	password: "",
	// 	textarea: "",
	// });
	// self.getFormData = () => { return formData };

	/*
	 *	Hook영역 : useEffect(이걸 쓰는순간, 직접만든 훅이라고 React에서 말합니다.)
	 */


	return (
		<Modal open={self.show[0]} onClose={handler.close} size="xs">
			<Modal.Header>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				
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

ModalForm.defaultProps = {
	// props가 설정이 안되어있으면, 기본(default)으로 들어갑니다.
	title: "제목을 입력해주세요.",
	confirm: "확인",
	cancel: "취소",
};

// 이렇게 해놓으면, 다른곳에서 불러올수있습니다. ex) import { _modalForm } from "./../components/ModalForm"
export { _modalForm /* ModalForm에서 사용중인 변수 */ }; // 주석처리하면, 다른곳에서 접근을 할수 없습니다.
export default ModalForm;
