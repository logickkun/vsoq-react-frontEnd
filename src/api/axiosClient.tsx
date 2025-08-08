// src/api/axiosClient.ts
import axios from 'axios';

const auth = axios.create({
  baseURL: '/auth',         // 공통 URL
  timeout: 5000,           // 5초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터: 예) 토큰 자동 주입
// api.interceptors.request.use(cfg => {
//   const token = localStorage.getItem('token');
//   if (token) cfg.headers.Authorization = `Bearer ${token}`;
//   return cfg;
// });

export default auth;
