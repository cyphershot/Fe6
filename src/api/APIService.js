import axios from 'axios';
import { toast } from 'react-toastify';

const APIService = axios.create({
  baseURL: process.env.REACT_API_URL,
});

APIService.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (axios.isCancel(error)) {
    } else if (error.response) {
      console.log('API ERROR');
      const errorMessage = error.response.data.response;
      toast.error(errorMessage);
    } else {
      const errorMessage = error.response.data.response;
      toast.error(errorMessage);
    }

    throw error;
  }
);

export const makeApiRequest = async (method, url, data = null, config = {}) => {
  try {
    const token = localStorage.getItem('token');
    let headers;
    if (token) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
    }

    const response = await APIService.request({
      method,
      url,
      data,
      headers,
      ...config,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default APIService;
