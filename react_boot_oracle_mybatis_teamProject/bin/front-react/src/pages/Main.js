import "rsuite/Container/styles/index.css";

import React from "react";
import { Container } from "rsuite";

import SideMenu from "../components/SideMenu";

import HeaderMenu from "../components/HeaderMenu";
import Contents from "../components/Contents";
import FooterInfo from "../components/FooterInfo";
import ModalForm from "../components/ModalForm";
import ComponentSnippet from "../components/ComponentSnippet";

const Main = ({ className }) => {

	const chatState = {
		show: React.useState(false),  /* state, setter */
		placement: React.useState('')  /* state, setter */
	};

	return (
		<Container className={className}>
			<SideMenu />

			<Container>
				<ComponentSnippet /* text="여기로 전달도 가능하답니다." */ />
				
				<HeaderMenu chat={chatState} />
				<Contents />
				<FooterInfo />
			</Container>

			<ModalForm title="모달입니다." />
		</Container>
	);
};

export default Main;
