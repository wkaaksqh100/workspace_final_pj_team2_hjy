/* eslint-disable react/prop-types */
import "rsuite/Header/styles/index.css";

import GearIcon from "@rsuite/icons/Gear";

import SiteIcon from "@rsuite/icons/Site";
import PeopleRuleIcon from "@rsuite/icons/PeopleRule";
import HelpOutlineIcon from "@rsuite/icons/HelpOutline";

import Icon from "@rsuite/icons/esm/Icon";

import React from "react";

import { Breadcrumb, Button, Drawer, Header, HStack, Input, Nav, Navbar, Placeholder } from "rsuite";

const HeaderMenu = () => {

     const [open, setOpen] = React.useState(false);
        const [placement, setPlacement] = React.useState();
    
        const handleOpen = (key) => {
            setOpen(true);
            setPlacement(key);
        };

	return (
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
    </Header>
	);
};

export default HeaderMenu;
