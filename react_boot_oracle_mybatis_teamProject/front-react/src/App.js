/* eslint-disable react/react-in-jsx-scope */
import "rsuite/dist/rsuite.min.css";

import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';

import AppConfig from "./config/AppConfig";

import WhenEnter from "./pages/WhenEnter";
import Main from './pages/Main';
import Login from "./pages/Login";

import SellSearch from "./pages/sell/SellSearch"
import SellAll from "./pages/sell/SellAll"
import SellAdd from "./pages/sell/SellAdd"
import SellResult from "./pages/sell/SellResult"

import WarehouseMain from "./pages/WarehouseMain"
import WarehousingItemMain from "./logis/WarehousingItemMain"
import WarehousingList2 from "./logis/WarehousingList2"
import Detail from "./logis/Detail"
import ShippingItemMain from "./logis/ShippingItemMain"
import DeliveryItemList from "./components/DeliveryItemList"

import basic_hr from "./resources/basic_hr.png"
import basic_buyer from "./resources/basic_buyer.png"
import basic_product from "./resources/basic_product.png"

import finance_main from "./resources/finance_main.png"
import finance_sales_resume from "./resources/finance_sales_resume.png"
import BuyStatus from "./pages/buy/BuyStatus";
import BuySelect from "./pages/buy/BuySelect";
import BuyInsert from "./pages/buy/BuyInsert";



function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <WhenEnter />,
			children: [
				{
					path: "main/",
					element: <Main className="rs-theme-light" />,
					children: [
						// 관리운영
						{
							path: "basic_hr/",
							element: <img style={{ width: "auto", height: "100%" }} src={basic_hr} />
						},
						{
							path: "basic_buyer/",
							element: <img style={{ width: "auto", height: "100%" }} src={basic_buyer} />
						},
						{
							path: "basic_product/",
							element: <img style={{ width: "auto", height: "100%" }} src={basic_product} />
						},

						// 구매
						{
							path: "buy_search/",
							element: <BuySelect/>
						},
						{
							path: "buy_input/",
							element: <BuyInsert/>
						},
						{
							path: "buy_list/",
							element: <BuyStatus />
						},
						

						// 판매
						{
							path: "sell_search/",
							element: <SellSearch />
						},
						{
							path: "sell_all/",
							element: <SellAll />,
						},
						{
							path: "sell_add/",
							element: <SellAdd />
						},
						{
							path: "sell_result/",
							element: <SellResult />
						},

						// 물류
						{
							path: "warehouse_main/",
							element: <WarehouseMain />
						},
						{
							path: "warehouse_list/",
							element: <WarehousingItemMain />,
						},
						{
							path: "warehouse_list2/",
							element: <WarehousingList2 />
						},
						{
							path: "warehouse_detail/:l_code",
							element: <Detail />
						},
						{
							path: "warehouse_orderlist/",
							element: <ShippingItemMain />
						},
						{
							path: "warehouse_order_itemlist/:pi_ocode",
							element: <DeliveryItemList />
						},

						// 회계
						{
							path: "finance_main/",
							element: <img src={finance_main} />
						},
						{
							path: "finance_sales_resume/",
							element: <img src={finance_sales_resume} />
						},

						{
							path: "p/"
						},
					]
				},
				{
					path: "login/",
					element: <Login />
				},
				// {
				// 	path: "/admin",
				// 	element: <Admin />
				// },
			]
		},
		{
			path: "/easteregg/",
			element: (
				<div>
					<h1>헐, 여길 굳이?</h1>
					<Outlet />
				</div>
			),
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
