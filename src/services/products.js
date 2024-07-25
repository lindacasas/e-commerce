import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const getProductsService = async () => {
  const response = await axios.get(`${API_URL}/items`);
  return response.data;
}

const getProductByIdService = async (id) => {
  const response = await axios.get(`${API_URL}/items/${id}`);
  return response.data;
}

export { getProductsService, getProductByIdService};