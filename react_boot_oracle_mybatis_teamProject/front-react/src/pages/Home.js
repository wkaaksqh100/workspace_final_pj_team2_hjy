import "rsuite/dist/rsuite.min.css";

import "rsuite/Container/styles/index.css";
import "rsuite/Header/styles/index.css";
import "rsuite/Content/styles/index.css";
import "rsuite/Footer/styles/index.css";
import "rsuite/Sidebar/styles/index.css";
import "rsuite/Drawer/styles/index.css";

import React, { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
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
	ButtonToolbar,
} from "rsuite";

import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import HistoryTaskIcon from "@rsuite/icons/HistoryTask";

import TreemapIcon from "@rsuite/icons/Treemap";
import PeopleBranchIcon from "@rsuite/icons/PeopleBranch";
import SiteSettingIcon from "@rsuite/icons/SiteSetting";
import GearIcon from "@rsuite/icons/Gear";

import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";
import Icon from "@rsuite/icons/esm/Icon";

import SiteIcon from "@rsuite/icons/Site";
import PeopleRuleIcon from "@rsuite/icons/PeopleRule";
import HelpOutlineIcon from "@rsuite/icons/HelpOutline";
import WarehouseMain from "./WarehouseMain";
import WarehousingList from "../logis/WarehousingList";
import WarehousingList2 from "../logis/WarehousingList2";
import WarehousingItemMain from "../logis/WarehousingItemMain";
import ShippingItemMain from "../logis/ShippingItemMain";
import DeliveryItemList from "../components/DeliveryItemList";
//import LogisCrawling from "../logis/LogisCrawling";
import Detail from "../logis/Detail";

const Home = () => {
	const [open, setOpen] = React.useState(false);
	const [placement, setPlacement] = React.useState();
	const [expand, setExpand] = useState(true);

	// 물류 메인 뉴스용
	const [noticeopen, setNoticeOpen] = React.useState(false);
	const [noticeplacement, setNoticePlacement] = React.useState();

	const handleOpen = (key) => {
		setOpen(true);
		setPlacement(key);
	};

	const noticeOpen = (key) => {
		setNoticeOpen(true);
		setNoticePlacement(key);
	};

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
						<Nav defaultActiveKey="1">
							<Nav.Item
								eventKey="1"
								icon={<Icon as={TreemapIcon} />}
							>
								대시보드
							</Nav.Item>
							<Nav.Item
								eventKey="2"
								icon={<Icon as={PeopleBranchIcon} />}
							>
								부서연결
							</Nav.Item>
							<Nav.Menu
								eventKey="3"
								trigger="hover"
								title="고급"
								icon={<Icon as={SiteSettingIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="3-1">Geo</Nav.Item>
								<Nav.Item eventKey="3-2">Devices</Nav.Item>
								<Nav.Item eventKey="3-3">Brand</Nav.Item>
								<Nav.Item eventKey="3-4">Loyalty</Nav.Item>
								<Nav.Item eventKey="3-5">Visit Depth</Nav.Item>
							</Nav.Menu>
							<Nav.Menu
								eventKey="4"
								trigger="hover"
								title="설정"
								icon={<Icon as={GearIcon} />}
								placement="rightStart"
							>
								<Nav.Item eventKey="4-1">Applications</Nav.Item>
								<Nav.Item eventKey="4-2">Websites</Nav.Item>
								<Nav.Item eventKey="4-3">Channels</Nav.Item>
								<Nav.Item eventKey="4-4">Tags</Nav.Item>
								<Nav.Item eventKey="4-5">Versions</Nav.Item>
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
								icon={<Icon as={PeopleRuleIcon} />}
								title="HR"
							>
								<Nav.Item>인사관리</Nav.Item>
								<Nav.Item>근태관리</Nav.Item>
							</Nav.Menu>
							<Nav.Item>News</Nav.Item>
							<Nav.Item>Products</Nav.Item>
							<Nav.Menu
								icon={<Icon as={PeopleRuleIcon} />}
								title="물류"
							>
								<Nav.Item className='in_li text_center'>
									<Link to="/warehouseMain" className='nav-link'>물류메인</Link>
								</Nav.Item>
								<Nav.Item className='in_li text_center'>
									<Link to="/warehouseList" className='nav-link'>입고관리</Link>
								</Nav.Item>
								<Nav.Item className='in_li text_center'>
									<Link to="/orderList" className='nav-link'>출고관리</Link>
								</Nav.Item>
								<Nav.Item className='in_li text_center'>
									<Link to="/warehouseList2" className='nav-link'>창고관리</Link> {/*WarehousingList2*/}
								</Nav.Item>
							</Nav.Menu>
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
											뉴스 크롤링 또는 공지사항 안내
										</Drawer.Body>
									</Drawer>
								</div>
							</Container>
						} />
						<Route path="/" element={<Home />} /> 
						<Route path="/warehouseMain" element={<WarehouseMain />} /> 
						<Route path="/warehouseList" element={<WarehousingItemMain />} /> 
						<Route path="/warehouseList2" element={<WarehousingList2 />} /> 
						<Route path="/detail/:l_code" element={<Detail />} /> 
						<Route path="/orderList" element={<ShippingItemMain />} /> 
						<Route path="/orderItemList" element={<DeliveryItemList />} /> 
						{/* <Route path="/orderItemList/:p_code" element={<DeliveryItemList />} />  */}
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
