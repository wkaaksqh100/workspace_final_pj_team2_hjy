import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

function App() {
	return (
		<BrowserRouter>
			<Main />

			{/* <Routes>
				<Route path="/SelectMM" element={<SelectMM />} />
				<Route path="/InsertMM" element={<InsertMM />} />
				<Route path="/UpdateMM" element={<UpdateMM />} />
				<Route path="/StatusMM" element={<StatusMM />} />
				<Route path="/OrderMM" element={<OrderMM />} />
				<Route path="/StockStatus" element={<StockStatus />} />
				<Route path="/PageMM" element={<PageMM />} />
				<Route path="/OrderMMInsert" element={<OrderMMInsert />} />

			</Routes> */}
		</BrowserRouter>
	);
}

export default App;
