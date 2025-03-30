import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import AppConfig from "../config/AppConfig";

const WhenEnter = () => {

	const location = useLocation();
	const nav = useNavigate();

	useEffect(() => {
		if (location.pathname === "/") {
			nav("/login", { replace: true });
		}
		// eslint-disable-next-line
	}, []);

	return (
		/* 여기에 적용하면, 하위에 스타일이 다 적용됩니다. */
		<div style={{ display: "flex", flexDirection: "column" }}>
			<span style={{ textAlign: "center", fontWeight: "bold", color: "royalblue" }}>
				개발버전입니다.
			</span>
			{/* Oulet을 호출하면, children(자식)을 불러옵니다. */}
			{AppConfig.showChildren ? <Outlet /> : null}
		</div>
	);
};

export default WhenEnter;
