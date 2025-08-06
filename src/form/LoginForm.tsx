import React from 'react';

type LoginFormProps = {
  username: string;
  password: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  error?: string;
  loading?: boolean;
};

const LoginForm = ({username, password, onChange, onSubmit, error, loading, }: LoginFormProps) => (
  <form onSubmit={onSubmit} style={{ maxWidth: 320, margin: '2rem auto', padding: 16 }}>
    <h2 style={{ textAlign: 'center' }}>로그인</h2>
    <input
      name="username"
      value={username}
      onChange={onChange}
      placeholder="아이디"
      required
      style={{ width: '100%', padding: 8, margin: '8px 0' }}
    />
    <input
      type="password"
      name="password"
      value={password}
      onChange={onChange}
      placeholder="비밀번호"
      required
      style={{ width: '100%', padding: 8, margin: '8px 0' }}
    />
    {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
    <button type="submit" disabled={loading} style={{ width: '100%', padding: 10 }}>
      {loading ? '로딩중…' : '로그인'}
    </button>
  </form>
);

export default LoginForm;
