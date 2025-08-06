// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import LoginForm from '../form/LoginForm';
import { useLogin } from '../hooks/useLogin';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login, error, loading } = useLogin();

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(credentials);
    if (result.success) {
      alert('로그인 성공!');
      // └ 여기에 라우팅이나 화면 전환 로직 추가
    }
  };

  return (
    <LoginForm
      username={credentials.username}
      password={credentials.password}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error}
      loading={loading}
    />
  );
};

export default LoginPage;
