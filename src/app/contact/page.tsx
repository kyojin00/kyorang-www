'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { track } from '@vercel/analytics'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Faq from '@/components/Faq'
import { BUDGETS, INQUIRY_TYPES, PACKAGES, TEMPLATES } from '@/data/studio'

type InquiryType = (typeof INQUIRY_TYPES)[number]

const empty = {
  type: INQUIRY_TYPES[0] as InquiryType,
  name: '',
  email: '',
  phone: '',
  budget: BUDGETS[0] as string,
  deadline: '',
  message: '',
  coupon: '',
  website: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(empty)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // 패키지·템플릿 버튼에서 넘어오면 유형과 첫 줄을 미리 채운다.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const type = INQUIRY_TYPES.find((t) => t === q.get('type'))
    const pkg = PACKAGES.find((p) => p.id === q.get('pkg'))
    const tpl = TEMPLATES.find((t) => t.slug === q.get('tpl'))
    const first = pkg ? `[${pkg.name}] 패키지 문의드려요.\n` : tpl ? `[${tpl.name}] 템플릿 문의드려요.\n` : ''
    if (type || first) setForm((p) => ({ ...p, type: type ?? p.type, message: first }))
  }, [])

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || '발송 중 오류가 발생했어요')
      track('문의 보냄', { type: form.type, coupon: form.coupon ? 'y' : 'n' })
      setSent(true)
      setForm(empty)
    } catch (err) {
      setError(err instanceof Error ? err.message : '발송 중 오류가 발생했어요. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  const isBuild = form.type === '웹사이트 제작 견적' || form.type === '프로그램 · 자동화 견적'

  return (
    <>
      <Nav />
      <main className="page-top">
        <div className="wrap narrow">
          <div className="sec-head center">
            <h1>문의하기</h1>
            <p>
              제작 견적, 템플릿, 교랑 앱 문의 모두 여기서 받아요.
              <br />
              보통 영업일 기준 1~2일 안에 메일로 답변드려요.
            </p>
          </div>

          <div className="help-form-card">
            {sent ? (
              <div className="hf-done">
                <p className="nm">감사해요!</p>
                <p className="ds">
                  문의를 잘 받았어요.
                  <br />
                  곧 메일로 답변드릴게요.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} aria-hidden="true" />
                <div className="hf-field">
                  <label>문의 유형</label>
                  <div className="hf-chips">
                    {INQUIRY_TYPES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        className={'hf-chip' + (form.type === t ? ' on' : '')}
                        onClick={() => setForm((p) => ({ ...p, type: t }))}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="hf-row">
                  <div className="hf-field">
                    <label>이름 *</label>
                    <input className="hf-input" required placeholder="홍길동" value={form.name} onChange={set('name')} />
                  </div>
                  <div className="hf-field">
                    <label>이메일 *</label>
                    <input className="hf-input" type="email" required placeholder="hello@email.com" value={form.email} onChange={set('email')} />
                  </div>
                </div>
                <div className="hf-field">
                  <label>연락처 (선택)</label>
                  <input className="hf-input" type="tel" placeholder="010-0000-0000" value={form.phone} onChange={set('phone')} />
                </div>
                {isBuild ? (
                  <div className="hf-field">
                    <label>쿠폰번호 (선택)</label>
                    <input
                      className="hf-input"
                      inputMode="numeric"
                      placeholder="카카오톡 채널 쿠폰 12자리"
                      value={form.coupon}
                      onChange={set('coupon')}
                    />
                  </div>
                ) : null}
                {isBuild ? (
                  <div className="hf-row">
                    <div className="hf-field">
                      <label>예산</label>
                      <select className="hf-input" value={form.budget} onChange={set('budget')}>
                        {BUDGETS.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                    <div className="hf-field">
                      <label>희망 오픈 시기</label>
                      <input className="hf-input" placeholder="예: 12월 초" value={form.deadline} onChange={set('deadline')} />
                    </div>
                  </div>
                ) : null}
                <div className="hf-field">
                  <label>내용 *</label>
                  <textarea
                    className="hf-input"
                    rows={7}
                    required
                    placeholder={
                      isBuild
                        ? '무엇을 만들고 싶으신가요? 지금 하는 방식(엑셀·수작업 등), 참고하는 사이트, 필요한 기능을 적어주시면 견적이 정확해져요.'
                        : '문의 내용을 입력해주세요'
                    }
                    value={form.message}
                    onChange={set('message')}
                  />
                </div>
                <p className="hf-hint">
                  보내주신 이름·이메일·연락처는 문의 답변에만 써요.{' '}
                  <Link href="/privacy">개인정보처리방침</Link>
                </p>
                {error ? <p className="hf-error">{error}</p> : null}
                <button className="hf-submit" disabled={loading}>
                  {loading ? '보내는 중...' : '문의 보내기 →'}
                </button>
              </form>
            )}
          </div>

          <p className="help-section-label">자주 묻는 질문</p>
          <Faq />
        </div>
      </main>
      <Footer />
    </>
  )
}
