import { useState } from 'react';
import { AuthVo } from '../model/AuthVo';
import auth from '../api/axiosClient';
import type { SessionVo } from '../model/SessionVo';
import type { ApiResponse } from '../model/ApiResponse';



export type LoginResult =
  | { success: true; session: SessionVo }
  | { success: false; message: string };

export function useLogin() {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function login(vo: AuthVo): Promise<LoginResult> {
    setError('');
    setLoading(true);

    try {
      // POST /auth/login, 제네릭으로 받을 타입 지정
      const resp = await auth.post<ApiResponse<SessionVo>>(
        'login',
        vo.toJSON()
      );

      const body = resp.data;

      if (body.success && body.data) {

        return { success: true, session: body.data };
      } else {
        // success=false인 경우
        return { success: false, message: body.message };
      }
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        err.message ||
        '로그인 실패';
      setError(message);
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  }

  return { login, error, loading };
}
