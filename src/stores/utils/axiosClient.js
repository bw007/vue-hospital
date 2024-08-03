import { default as axios } from 'axios'
import { tokenStore } from '../auth/token'
import { storeToRefs } from 'pinia'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
})

axiosClient.interceptors.request.use(
  config => {
    const token_store = tokenStore();
    const { token } = storeToRefs(token_store);
    
    if (token.value) {
      config.headers['Authorization'] = `Bearer ${token.value}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient