import { NextRequest, NextResponse } from 'next/server'
import { COOKIE, checkPassword, makeToken } from '@/lib/admin'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const pw = String(form.get('password') ?? '')
  const url = new URL('/admin', req.url)

  if (!checkPassword(pw)) {
    // 비밀번호 대입을 느리게 만든다.
    await new Promise((r) => setTimeout(r, 1200))
    return NextResponse.redirect(new URL('/admin/login?e=1', req.url), 303)
  }
  const t = makeToken()
  const res = NextResponse.redirect(url, 303)
  res.cookies.set(COOKIE, t.value, { httpOnly: true, secure: true, sameSite: 'strict', path: '/', maxAge: t.maxAge })
  return res
}
