import 'rsuite/Form/styles/index.css';
import 'rsuite/FormControl/styles/index.css';
import 'rsuite/FormControlLabel/styles/index.css';
import 'rsuite/FormErrorMessage/styles/index.css';
import 'rsuite/FormHelpText/styles/index.css';
import 'rsuite/FormGroup/styles/index.css';


import React from "react";
import { Form, Button } from "rsuite";

const Login = () => {
	return (
		<Form style={{textAlign: "center"}} layout="inline">
			<Form.Group controlId="username-7">
				<Form.ControlLabel>사번</Form.ControlLabel>
				<Form.Control name="username" style={{ width: 160 }} />
				<Form.HelpText tooltip>Required</Form.HelpText>
			</Form.Group>

			<Form.Group controlId="password-7">
				<Form.ControlLabel>비밀번호</Form.ControlLabel>
				<Form.Control
					name="password"
					type="password"
					autoComplete="off"
					style={{ width: 160 }}
				/>
			</Form.Group>

			<Button href='/main'>로그인</Button>
		</Form>
	);
};

export default Login;
