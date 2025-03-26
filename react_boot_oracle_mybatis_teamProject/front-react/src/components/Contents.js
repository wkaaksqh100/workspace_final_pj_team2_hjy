import "rsuite/Container/styles/index.css";
import "rsuite/Content/styles/index.css";
import "rsuite/dist/rsuite.min.css";

import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Content } from 'rsuite';
import SelectMM from "../pages/purchase/SelectMM";
import InsertMM from "../pages/purchase/InsertMM";
import UpdateMM from "../pages/purchase/UpdateMM";
import StatusMM from "../pages/purchase/StatusMM";
import OrderMM from "../pages/purchase/OrderMM";
import StockStatus from "../pages/purchase/StockStatus";
import PageMM from "../pages/purchase/PageMM";
import OrderMMInsert from "../pages/purchase/OrderMMInsert";

const Contents = () => {
	return (
		<Content>
			<Routes>
				<Route path="/SelectMM" element={<SelectMM />} />
				<Route path="/InsertMM" element={<InsertMM />} />
				<Route path="/UpdateMM" element={<UpdateMM />} />
				<Route path="/StatusMM" element={<StatusMM />} />
				<Route path="/OrderMM" element={<OrderMM />} />
				<Route path="/StockStatus" element={<StockStatus />} />
				<Route path="/PageMM" element={<PageMM />} />
				<Route path="/OrderMMInsert" element={<OrderMMInsert />} />
			</Routes>
		</Content>
	);
};

export default Contents;