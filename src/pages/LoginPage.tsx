// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import LoginForm from '../form/LoginForm';
import { useLogin } from '../hooks/useLogin';
import { AuthVo } from '../model/AuthVo';

const LoginPage = () => {

  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login, error, loading } = useLogin();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const vo = new AuthVo(credentials.username, credentials.password);
    const result = await login(vo);
    console.log(result);
    if (result.success) {
      alert('로그인 성공!');
      // TODO: 화면 전환
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
