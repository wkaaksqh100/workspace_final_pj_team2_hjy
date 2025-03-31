import "rsuite/Container/styles/index.css";

import React from "react";
import { Container } from "rsuite";

import SideMenu from "../components/SideMenu";

import HeaderMenu from "../components/HeaderMenu";
import Contents from "../components/Contents";
import FooterInfo from "../components/FooterInfo";
import ModalForm from "../components/ModalForm";
import ComponentSnippet from "../components/ComponentSnippet";
import InchargeModalForm from "../components/InchargeModalForm";
import StorageModalForm from "../components/StorageModalForm";
import ClientModalForm from "../components/ClientModalForm";
import ProductCodeModalForm from "../components/ProductCodeModalForm";
import ChitModalForm from "../components/ChitModalForm";

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
			<ModalForm title="담당자 검색"/>
			<InchargeModalForm title="담당자 검색"/>
			<ClientModalForm title="거래처 검색"/>
			<StorageModalForm title="창고 검색" />
			<ProductCodeModalForm title="물품 검색" />
			<ChitModalForm title="전표 조회"/>
			
		</Container>
	);
};

export default Main;
