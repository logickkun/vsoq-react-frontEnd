// src/hooks/useOidcLogin.ts
import { useState, useCallback } from 'react';

export function useOidcLogin() {
  const [loading, setLoading] = useState(false);
  const [error] = useState<string>(''); // 필요 시 에러 상태도 확장

  const startLogin = useCallback((returnTo?: string) => {
    setLoading(true);
    const url =
      '/bff/web/login' +
      (returnTo ? `?return=${encodeURIComponent(returnTo)}` : '');
    // ★ 중요: XHR 금지. 브라우저 네비게이션으로 이동
    window.location.assign(url);
  }, []);

  return { startLogin, loading, error };
}
