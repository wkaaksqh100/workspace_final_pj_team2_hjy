import "rsuite/dist/rsuite.min.css";

import "rsuite/Container/styles/index.css";
import "rsuite/Header/styles/index.css";
import "rsuite/Content/styles/index.css";
import "rsuite/Footer/styles/index.css";
import "rsuite/Sidebar/styles/index.css";
import "rsuite/Drawer/styles/index.css";

import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import {
	Container,
	Footer,
	HStack,
	Text,
	Content,
	Stack,
	IconButton,
	Drawer,
	Button,
	Placeholder,
	Input,
	ButtonToolbar,
} from "rsuite";

import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import HistoryTaskIcon from "@rsuite/icons/HistoryTask";

import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";

import WarehousingList from "../logis/WarehousingList";
import StockItems from "../components/StockItems";
import DeliveryItemList from "../components/DeliveryItemList";
import WarehousingList2 from "../logis/WarehousingList2";
import WarehousingItemMain from "../logis/WarehousingItemMain";
import ShippingItemMain from "../logis/ShippingItemMain";
//import LogisCrawling from "../logis/LogisCrawling";
import Detail from "../logis/Detail";

const Home = () => {
	const [open, setOpen] = React.useState(false);

	// 물류 메인 뉴스용
	const [noticeopen, setNoticeOpen] = React.useState(false);
	const [noticeplacement, setNoticePlacement] = React.useState();

	const noticeOpen = (key) => {
		setNoticeOpen(true);
		setNoticePlacement(key);
	};

	return (
		<Container>
			<Content>
				<Routes>
					<Route path="/" element={
						<Container>
							<Text>물류관리에 접속하셨습니다</Text>
							<div className="flex_wrap_for_main">
								<div className="warp_for_left">
									<div className="main_components">
										<WarehousingItemMain />
									</div>
									<div className="main_components">
										<ShippingItemMain />
									</div>
								</div>
								<ButtonToolbar className="position_right">
									<IconButton className="right_drawer_btn" icon={<AngleLeftIcon />} onClick={() => noticeOpen('right')}>
										Right
									</IconButton>
								</ButtonToolbar>
								<Drawer placement={noticeplacement} open={noticeopen} onClose={() => setNoticeOpen(false)}>
									<Drawer.Header>
										<Drawer.Title>Drawer Title</Drawer.Title>
										<Drawer.Actions>
											<Button onClick={() => setNoticeOpen(false)}>Cancel</Button>
											<Button onClick={() => setNoticeOpen(false)} appearance="primary">
												Confirm
											</Button>
										</Drawer.Actions>
									</Drawer.Header>
									<Drawer.Body>
										<div>
											공지사항~
										</div>
									</Drawer.Body>
								</Drawer>
							</div>
						</Container>
					} />
					<Route path="/" element={<Home />} /> {/*리스트*/}
					<Route path="/stockList" element={<StockItems />} /> {/*리스트*/}
					<Route path="/warehouseList" element={<WarehousingList />} /> {/*리스트*/}
					<Route path="/warehouseList2" element={<WarehousingList2 />} /> {/*리스트*/}
					<Route path="/detail/:b_num" element={<Detail />} /> {/*리스트*/}
					<Route path="/orderItemList/" element={<DeliveryItemList />} /> {/*리스트*/}
					{/* <Route path="/orderItemList/:pi_ocode" element={<DeliveryItemList />} /> 리스트 */}
				</Routes>
			</Content>
			<Footer></Footer>
			<Drawer
				size="md"
				style={{ height: "calc(42% + 120px)" }}
				placement={noticeplacement}
				open={open}
				onClose={() => setOpen(false)}
			>
				<Drawer.Header>
					<Drawer.Title>Chatbot 상담</Drawer.Title>
					<Drawer.Actions></Drawer.Actions>
				</Drawer.Header>
				<Drawer.Body>
					<Placeholder.Paragraph rows={8} />
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
		</Container >
	);
};

const NavToggle = ({ expand, onChange }) => {
	return (
		<Stack
			className="nav-toggle"
			justifyContent={expand ? "flex-end" : "center"}
		>
			<IconButton
				onClick={onChange}
				appearance="subtle"
				size="lg"
				icon={expand ? <ArrowLeftLineIcon /> : <ArrowRightLineIcon />}
			/>
		</Stack>
	);
};

const Brand = ({ expand }) => {
	return (
		<HStack
			style={{ margin: 8 }}
			className="page-brand"
			justifyContent={"center"}
			spacing={12}
		>
			<HistoryTaskIcon width={28} height={28} />
			{expand && <Text size={24}>ERP닷</Text>}
		</HStack>
	);
};

export default Home;
