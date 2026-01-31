import axios from 'axios';

const api = axios.create({
  baseURL: [ 'http://localhost:3000', 'https://online-store-7c9e.onrender.com']
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (
    token &&
    !config.url.includes("/auth/login") &&
    !config.url.includes("/auth/signup")
  ) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
