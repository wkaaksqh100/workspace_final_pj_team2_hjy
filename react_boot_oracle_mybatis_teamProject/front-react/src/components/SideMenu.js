import "rsuite/Sidebar/styles/index.css";

import HistoryTaskIcon from "@rsuite/icons/HistoryTask";

import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";

import GearIcon from "@rsuite/icons/Gear";

import Icon from "@rsuite/icons/esm/Icon";

import React, { useState } from "react";
import { Container, HStack, IconButton, Nav, Sidebar, Sidenav, Stack, Text } from "rsuite";


const SideMenu = () => {

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

export default SideMenu;
