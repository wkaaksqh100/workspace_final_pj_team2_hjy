## install

CSS-in-JS 사용하기 (styled-components 라이브러리)
# npm install styled-components

입력테이블 추가할때
# npm install react-icons

# npm install @faker-js/faker

## <<< React Query 사용하기 >>> ##
(1) 설치하기
# npm install @tanstack/react-query axios

(2) index.js에 추가

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

(3)
buy 폴더 하위에 api폴더 생성후
orderApi.js 파일 생성
// api/orderApi.js
import axios from 'axios';

export const saveOrder = async (orderData) => {
  const response = await axios.post('/api/orders', orderData);
  return response.data;
};