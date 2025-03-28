/* eslint-disable react/prop-types */
import "rsuite/Header/styles/index.css";

import GearIcon from "@rsuite/icons/Gear";

import SiteIcon from "@rsuite/icons/Site";
import PeopleRuleIcon from "@rsuite/icons/PeopleRule";
import HelpOutlineIcon from "@rsuite/icons/HelpOutline";

import ArrowRightIcon from '@rsuite/icons/ArrowRight';

import Icon from "@rsuite/icons/esm/Icon";

import React, { useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { Breadcrumb, Header, Nav, Navbar } from "rsuite";

const HeaderMenu = ({ chat }) => {

	const location = useLocation();
	let crumbs = location.pathname.split('/');
	let prevPage = "";
	crumbs.shift();

	const navigate = useNavigate();

	const [open, setOpen] = chat.show;
	const [placement, setPlacement] = chat.placement;

	useEffect(() => {
		if (open)
			console.log("상담시작");
		else console.log("상담종료");
	}, [open, placement]);

	const handleOpen = (key) => {
		setOpen(true);
		setPlacement(key);
	};

	if (crumbs.length > 0)
		prevPage = crumbs.shift();

	return (
		<Header>
			<Navbar appearance="inverse">
				<Nav>
					<Nav.Item icon={<Icon style={{ margin: 0 }} as={SiteIcon} />} />
					<Nav.Menu icon={<Icon as={PeopleRuleIcon} />} title="관리운영">
						<Nav.Item onSelect={() => {navigate("basic_hr")}}>인사등록</Nav.Item>
						<Nav.Item onSelect={() => {navigate("basic_buyer")}}>거래처등록</Nav.Item>
						<Nav.Item onSelect={() => {navigate("basic_product")}}>상품등록</Nav.Item>
						<Nav.Item onSelect={() => alert("😓")}>인사관리</Nav.Item>
						<Nav.Item onSelect={() => alert("😓")}>근태관리</Nav.Item>
					</Nav.Menu>
					<Nav.Menu title="구매관리">
						<Nav.Item onSelect={() => {navigate("buy_search")}}>구매조회</Nav.Item>
						<Nav.Item onSelect={() => {navigate("buy_input")}}>구매입력</Nav.Item>
						<Nav.Item onSelect={() => {navigate("buy_list")}}>구매현황</Nav.Item>
					</Nav.Menu>
					<Nav.Menu title="판매관리">
						<Nav.Item onSelect={() => {navigate("sell_search")}}>판매물품 검색</Nav.Item>
						<Nav.Item onSelect={() => {navigate("sell_all")}}>판매조회</Nav.Item>
						<Nav.Item onSelect={() => {navigate("sell_add")}}>판매입력</Nav.Item>
						<Nav.Item onSelect={() => {navigate("sell_result")}}>판매현황</Nav.Item>
					</Nav.Menu>
					<Nav.Menu
						icon={<Icon as={PeopleRuleIcon} />}
						title="물류"
					>
						<Nav.Item onSelect={() => { navigate("warehouse_main") }}>물류메인</Nav.Item>
						<Nav.Item onSelect={() => { navigate("warehouse_list") }}>입고관리</Nav.Item>
						<Nav.Item onSelect={() => { navigate("warehouse_orderlist") }}>출고관리</Nav.Item>
						<Nav.Item onSelect={() => { navigate("warehouse_list2") }}>창고관리</Nav.Item>
					</Nav.Menu>
					<Nav.Menu
						icon={<Icon as={PeopleRuleIcon} />}
						title="회계"
					>
						<Nav.Item onSelect={() => { navigate("finance_main") }}>회계메인</Nav.Item>
						<Nav.Item onSelect={() => { navigate("finance_sales_resume") }}>매출매입거래</Nav.Item>
						<Nav.Item onSelect={() => alert("😓")}>전자계산서</Nav.Item>
						<Nav.Item onSelect={() => alert("😓")}>전표관리</Nav.Item>
					</Nav.Menu>
					<Nav.Menu icon={<Icon as={HelpOutlineIcon} />} title="문의">
						<Nav.Item>Company</Nav.Item>
						<Nav.Item>Team</Nav.Item>
						<Nav.Item onClick={() => handleOpen("right")}>
							상담하기
						</Nav.Item>
					</Nav.Menu>
				</Nav>
				<Nav pullRight>
					<Nav.Item icon={<Icon as={GearIcon} />}>설정</Nav.Item>
				</Nav>
			</Navbar>

			<Breadcrumb style={{margin: 4}} separator={<ArrowRightIcon />}>
				<Breadcrumb.Item href="/main" ><SiteIcon /></Breadcrumb.Item>
				{crumbs[0] != null && crumbs[0].length > 0 ? crumbs.map((value, index) =>
					<Breadcrumb.Item key={index} href={value}>{value}</Breadcrumb.Item>
				) : null}
			</Breadcrumb>
		</Header>
	);
};

export default HeaderMenu;
