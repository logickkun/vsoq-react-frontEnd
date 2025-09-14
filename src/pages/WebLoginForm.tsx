// LoginPage.tsx
import { useSearchParams } from 'react-router-dom';

export default function WebLoginForm() {
  const [sp] = useSearchParams();
  const ret = sp.get('ret') ?? '/';

  return (
    <main style={{ maxWidth: 360, margin: '2rem auto', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>로그인</h2>

      {/* 표준 HTML 폼: /login 으로 POST (게이트웨이 → SAS 라우팅 전제) */}
      <form method="post" action="/web/login" style={{ display: 'grid', gap: 12 }}>
        {/* 필요 시 로그인 후 복귀 경로를 SAS에서 처리하도록 힌트 전달(서버에서 사용) */}
        <input type="hidden" name="ret" value={ret} />

        <label style={{ display: 'grid', gap: 6 }}>
          <span>아이디</span>
          <input
            name="username"
            type="text"
            required
            autoComplete="username"
            placeholder="아이디를 입력하세요"
          />
        </label>

        <label style={{ display: 'grid', gap: 6 }}>
          <span>비밀번호</span>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="비밀번호를 입력하세요"
          />
        </label>

        {/* 선택: 기억하기(스프링 시큐리티 remember-me 설정 시 동작) */}
        {/* <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" name="remember-me" />
          <span>로그인 상태 유지</span>
        </label> */}

        <button type="submit" style={{ padding: '10px 14px' }}>로그인</button>
      </form>
    </main>
  );
}
