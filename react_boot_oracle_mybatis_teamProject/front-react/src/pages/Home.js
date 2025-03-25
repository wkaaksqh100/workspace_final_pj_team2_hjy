import "rsuite/dist/rsuite.min.css";

import "rsuite/Container/styles/index.css";
import "rsuite/Header/styles/index.css";
import "rsuite/Content/styles/index.css";
import "rsuite/Footer/styles/index.css";
import "rsuite/Sidebar/styles/index.css";
import 'rsuite/Drawer/styles/index.css';

import React, { useState } from "react";
import {
	Container,
	Header,
	Footer,
	Sidebar,
	Sidenav,
	Nav,
	HStack,
	Text,
	Navbar,
	Content,
	Stack,
	IconButton,
	Breadcrumb,
	Drawer,
	Button,
	Placeholder,
	Input,
} from "rsuite";

import HistoryTaskIcon from "@rsuite/icons/HistoryTask";
import GearIcon from "@rsuite/icons/Gear";
import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import Icon from "@rsuite/icons/esm/Icon";

import SiteIcon from "@rsuite/icons/Site";
import PeopleRuleIcon from "@rsuite/icons/PeopleRule";
import HelpOutlineIcon from "@rsuite/icons/HelpOutline";
import { Route, Routes } from "react-router-dom";
import StockStatus from "./purchase/StockStatus";
import SelectMM from "./purchase/SelectMM";
import InsertMM from "./purchase/InsertMM";
import OrderMM from "./purchase/OrderMM";
import UpdateMM from "./purchase/UpdateMM";
import StatusMM from "./purchase/StatusMM";
import PageMM from "./purchase/PageMM";
import OrderMMInsert from "./purchase/OrderMMInsert";

const Home = () => {

	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();

	const handleOpen = (key) => {
		setOpen(true);
		setPlacement(key);
	};

	const [expand, setExpand] = useState(true);

	return (
		<Container>
			<Sidebar
				style={{ display: "flex", flexDirection: "column" }}
				width={expand ? 260 : 56}
				collapsible
			>
				<Sidenav.Header>
					<Brand expand={expand} />
				</Sidenav.Header>
				<Sidenav
					expanded={expand}
					defaultOpenKeys={["3"]}
					appearance="subtle"
				>
					<Sidenav.Body>
						<br/>
						<Nav defaultActiveKey="1">
							{/* <Nav.Item
								eventKey="1"
								icon={<Icon as={TreemapIcon} />}
							>
								대시보드
							</Nav.Item> */}
							{/* <Nav.Item
								eventKey="2"
								icon={<Icon as={PeopleBranchIcon} />}
							>
								부서연결
							</Nav.Item> */}
							<Nav.Menu
								eventKey="3"
								trigger="hover"
								title="기초등록"
								// icon={<Icon as={PeopleBranchIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="3-1">기초등록</Nav.Item>
								
							</Nav.Menu>
							<Nav.Menu
								eventKey="4"
								trigger="hover"
								title="판매관리"
								//icon={<Icon as={PeopleBranchIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="4-1">판매관리</Nav.Item>
								
							</Nav.Menu>
							<Nav.Menu
								eventKey="5"
								trigger="hover"
								title="구매관리"
								//icon={<Icon as={PeopleBranchIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="5-1" href="/SelectMM">구매조회</Nav.Item>
								<Nav.Item eventKey="5-2" href="/InsertMM">구매입력</Nav.Item>
								<Nav.Item eventKey="5-3" href="/StatusMM">구매현황</Nav.Item>
								<Nav.Item eventKey="5-4" href="/OrderMM">발주서 관리</Nav.Item>
								
							</Nav.Menu>
							<Nav.Menu
								eventKey="6"
								trigger="hover"
								title="물류관리"
								//icon={<Icon as={PeopleBranchIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="6-1">물류관리</Nav.Item>
							
							</Nav.Menu>
							<Nav.Menu
								eventKey="7"
								trigger="hover"
								title="회계관리"
								//icon={<Icon as={PeopleBranchIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="7-1">회계관리</Nav.Item>
						
							</Nav.Menu>
							<Nav.Menu
								eventKey="8"
								trigger="hover"
								title="인사관리"
								//icon={<Icon as={PeopleBranchIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="8-1">인사관리</Nav.Item>
				
							</Nav.Menu>
							<Nav.Menu
								eventKey="9"
								trigger="hover"
								title="근태관리"
								//icon={<Icon as={PeopleBranchIcon} />}
								placement="rightStart"
							>
								
								<Nav.Item eventKey="9-1">근태관리</Nav.Item>
							</Nav.Menu>
					
							<Nav.Menu
								eventKey="10"
								trigger="hover"
								title="설정"
								icon={<Icon as={GearIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="10-1">로그인</Nav.Item>
								<Nav.Item eventKey="10-2">로그아웃</Nav.Item>
								{/* <Nav.Item eventKey="10-3">Channels</Nav.Item>
								<Nav.Item eventKey="10-4">Tags</Nav.Item>
								<Nav.Item eventKey="10-5">Versions</Nav.Item> */}
							</Nav.Menu>
						</Nav>
					</Sidenav.Body>
				</Sidenav>
				<NavToggle
					expand={expand}
					onChange={() => setExpand(!expand)}
				/>
			</Sidebar>
			<Container>
				<Header>
					<Navbar appearance="inverse">
						<Nav>
							<Nav.Item icon={<Icon as={SiteIcon} />}>
								Home
							</Nav.Item>
							<Nav.Menu
								title="구매관리"
							>
								<Nav.Item href="/SelectMM">구매조회</Nav.Item>
								<Nav.Item href="/InsertMM">구매입력</Nav.Item>
								<Nav.Item href="/StatusMM">구매현황</Nav.Item>
								<Nav.Item href="/OrderMM">발주서 관리</Nav.Item>			
							</Nav.Menu>
							<Nav.Menu
								icon={<Icon as={PeopleRuleIcon} />}
								title="HR"
							>
								<Nav.Item>인사관리</Nav.Item>
								<Nav.Item>근태관리</Nav.Item>
							</Nav.Menu>
							<Nav.Item>News</Nav.Item>
							<Nav.Item>Products</Nav.Item>
							<Nav.Menu
								icon={<Icon as={HelpOutlineIcon} />}
								title="문의"
							>
								<Nav.Item>Company</Nav.Item>
								<Nav.Item>Team</Nav.Item>
								<Nav.Item onClick={() => handleOpen("right")}>
									상담하기
								</Nav.Item>
							</Nav.Menu>
						</Nav>
						<Nav pullRight>
							<Nav.Item icon={<Icon as={GearIcon} />}>
								설정
							</Nav.Item>
						</Nav>
					</Navbar>
					<Breadcrumb>
						<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
						<Breadcrumb.Item href="##">Dashboard</Breadcrumb.Item>
						<Breadcrumb.Item active>Overview</Breadcrumb.Item>
					</Breadcrumb>
				</Header>
				<Content>
					<Routes>
						<Route path="/SelectMM" element={<SelectMM/>} />
						<Route path="/InsertMM" element={<InsertMM/>} />
						<Route path="/UpdateMM" element={<UpdateMM/>} />			
						<Route path="/StatusMM" element={<StatusMM/>} />
						<Route path="/OrderMM" element={<OrderMM/>} />	
						<Route path="/StockStatus" element={<StockStatus/>} />	
						<Route path="/PageMM" element={<PageMM/>} />
						<Route path="/OrderMMInsert" element={<OrderMMInsert/>} />	
												
					</Routes>
				</Content>

				<Footer></Footer>
			</Container>
			<Drawer
				size="md"
				style={{ height: "calc(42% + 120px)" }}
				placement={placement}
				open={open}
				onClose={() => setOpen(false)}
			>
				<Drawer.Header>
					<Drawer.Title>Chatbot 상담</Drawer.Title>
					<Drawer.Actions >
					</Drawer.Actions>
				</Drawer.Header>
				<Drawer.Body>
					<Placeholder.Paragraph rows={8} />
					<Drawer.Actions >
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
		</Container>
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
		<HStack style={{ margin: 8 }} className="page-brand" justifyContent={"center"} spacing={12}>
			<HistoryTaskIcon width={28} height={28} />
			{expand && <Text size={24}>ERP닷</Text>}
		</HStack>
	);
};

export default Home;
