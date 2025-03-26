import "rsuite/Container/styles/index.css";

import React from "react";
import { Container } from "rsuite";

import SideMenu from "../components/SideMenu";
import HeaderMenu from "../components/HeaderMenu";
import Contents from "../components/Contents";
import FooterInfo from "../components/FooterInfo";

const Main = ({ className }) => {

	const chatState = {
		show: React.useState(false),  /* state, setter */
		placement: React.useState('')  /* state, setter */
	};

	return (
		<Container className={className} style={{ display: 'flex', height: '100vh' }}>
			{/* 사이드바 고정 */}
			<div style={{
				position: 'fixed',
				top: 0,
				left: 0,
				height: '100vh',
				width: '250px',  // 사이드바 너비 조정
				zIndex: 1000,
				overflowY: 'auto',  // 스크롤 가능하도록
				//borderRight: '1px solid #ddd' // 사이드바 라인추가
			}}>
				<SideMenu />
			</div>

			{/* 메인 컨텐츠 영역 (사이드바 공간만큼 padding) */}
			<Container style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
				{/* 헤더 고정 */}
				<div style={{
					position: 'fixed',
					top: 0,
					left: '250px',  // 사이드바 너비 고려
					width: 'calc(100% - 250px)',
					zIndex: 999,
				}}>
					<HeaderMenu chat={chatState} />	
				</div>
				
				{/* 컨텐츠 & 푸터 (헤더 높이 고려) */}
				<div style={{ paddingTop: '90px',  paddingLeft: '20px', overflowY: 'auto', height: 'calc(100vh - 70px)' }}> {/* 헤더 높이만큼 여백 추가 */}
					<Contents />
					<FooterInfo />
				</div>
			</Container>
		</Container>
	);
};

export default Main;
