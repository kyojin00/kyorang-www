import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { isAdmin } from '@/lib/admin'

export const metadata: Metadata = { title: '관리자 로그인', robots: { index: false, follow: false } }

export default async function AdminLogin({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  if (await isAdmin()) redirect('/admin')
  const { e } = await searchParams
  const ready = (process.env.ADMIN_PASSWORD ?? '').length >= 8
  return (
    <main className="adm-login">
      <form method="post" action="/api/admin/login" className="help-form-card">
        <h1>관리자</h1>
        {ready ? (
          <>
            <div className="hf-field">
              <label htmlFor="pw">비밀번호</label>
              <input id="pw" className="hf-input" type="password" name="password" autoComplete="current-password" required autoFocus />
            </div>
            {e ? <p className="hf-error">비밀번호가 맞지 않아요.</p> : null}
            <button className="hf-submit">로그인</button>
          </>
        ) : (
          <p className="hf-hint">Vercel 환경 변수에 ADMIN_PASSWORD(8자 이상)를 등록하고 재배포하면 로그인할 수 있어요.</p>
        )}
      </form>
    </main>
  )
}
