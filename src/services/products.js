import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const getProductsService = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};


const getProductByIdService = async (id) => {
  const response = await axios.get(`${API_URL}/items/${id}`);
  return response.data;
}

export { getProductsService, getProductByIdService };