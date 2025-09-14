import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useOidcLogin } from '../hooks/useOidcLogin';

const LoginPage: React.FC = () => {
  const [sp] = useSearchParams();
  const ret = sp.get('ret') ?? '/';
  const { startLogin, loading } = useOidcLogin();

  return (
    <main style={{ maxWidth: 360, margin: '3rem auto', padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>로그인</h2>
      <p style={{ opacity: 0.8, marginBottom: 12 }}>
        인증서버로 이동해 로그인합니다.
      </p>
      <button
        onClick={() => startLogin(ret)}
        disabled={loading}
        style={{ width: '100%', padding: 12 }}
      >
        {loading ? '이동 중…' : '로그인'}
      </button>

      <p style={{ marginTop: 12, fontSize: 12, opacity: 0.7 }}>
        이 버튼은 <code>window.location.assign('/bff/web/login')</code>으로
        전체 페이지 이동을 수행합니다.
      </p>
    </main>
  );
};

export default LoginPage;
