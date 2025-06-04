import axios from 'axios';

const baseURL = process.env.BACKEND_API_URL || 'http://localhost:3000';

console.log('baseURL', baseURL);

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// basic error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance; 