import "rsuite/Sidebar/styles/index.css";

import HistoryTaskIcon from "@rsuite/icons/HistoryTask";

import TreemapIcon from "@rsuite/icons/Treemap";
import PeopleBranchIcon from "@rsuite/icons/PeopleBranch";
import SiteSettingIcon from "@rsuite/icons/SiteSetting";

import ArrowLeftLineIcon from "@rsuite/icons/ArrowLeftLine";
import ArrowRightLineIcon from "@rsuite/icons/ArrowRightLine";

import GearIcon from "@rsuite/icons/Gear";

import Icon from "@rsuite/icons/esm/Icon";

import React, { useState } from "react";
import { HStack, IconButton, Nav, Sidebar, Sidenav, Stack, Text } from "rsuite";

const SideMenu = () => {

	const [expand, setExpand] = useState(true);

	return (
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
						<Nav.Item eventKey="1" icon={<Icon as={TreemapIcon} />}>
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
			<NavToggle expand={expand} onChange={() => setExpand(!expand)} />
		</Sidebar>
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


export default SideMenu;
