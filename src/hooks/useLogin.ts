import { useState } from 'react';

type Credentials = { username: string; password: string };
type LoginResult = { success: boolean; message?: string };

export function useLogin() {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function login(creds: Credentials): Promise<LoginResult> {
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds),
      });
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || '로그인 실패');
      }
      return { success: true };
    } catch (e: any) {
      setError(e.message);
      return { success: false, message: e.message };
    } finally {
      setLoading(false);
    }
  }

  return { login, error, loading };
}
