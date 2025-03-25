import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
	   <BrowserRouter>
	   		<Home />
{/* 
		  <Routes>
			 <Route path='/' element={<Home />} />
			 <Route path='/purchaseList' element={<PurchaseList />} />
			 <Route path='/PurchaseInsert' element={<PurchaseInsert/>} />
			 <Route path='/PurchaseStatus' element={<PurchaseStatus/>} />
		  </Routes>
		   */}
	   </BrowserRouter>
	);
 }

export default App;
