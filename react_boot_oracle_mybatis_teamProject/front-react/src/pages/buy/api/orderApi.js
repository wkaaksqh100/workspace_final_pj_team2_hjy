// api/orderApi.js
import axios from 'axios';

export const saveOrder = async (orderData) => {
  const response = await axios.post('/api/orders', orderData);
  return response.data;
};