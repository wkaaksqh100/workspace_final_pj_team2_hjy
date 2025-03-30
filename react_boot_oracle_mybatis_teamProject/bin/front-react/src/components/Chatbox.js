/* eslint-disable react/prop-types */
import "rsuite/Stack/styles/index.css";

import "rsuite/Drawer/styles/index.css";
import "rsuite/Placeholder/styles/index.css";
import "rsuite/Input/styles/index.css";
import "rsuite/Button/styles/index.css";

import React from "react";
import { Button, Drawer, HStack, Input, Message, Placeholder } from "rsuite";

const Chatbox = (props) => {

	const [open, setOpen] = props.state.show;

	return (
		<Drawer
			size="md"
			style={{ height: "calc(42% + 120px)" }}
			placement={props.state.placement}
			open={open}
			onClose={() => setOpen(false)}
		>
			<Drawer.Header>
				<Drawer.Title>Chatbot 상담</Drawer.Title>
				<Drawer.Actions></Drawer.Actions>
			</Drawer.Header>
			<Drawer.Body>
				<Placeholder.Paragraph rows={8} />
				<Message>
					<strong>상담!</strong> 무엇을 도와드릴까요?
				</Message>
				<Drawer.Actions>
					<HStack spacing={32}>
						<Input placeholder="상담을 시작하세요..."></Input>
						<Button
							onClick={() => setOpen(false)}
							appearance="primary"
						>
							Confirm
						</Button>
					</HStack>
				</Drawer.Actions>
			</Drawer.Body>
		</Drawer>
	);
};

export default Chatbox;
