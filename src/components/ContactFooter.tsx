'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    } catch {
      alert('메일 발송 중 오류가 발생했어요. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', border: '1.5px solid var(--peach)',
    borderRadius: '12px', padding: '12px 16px',
    fontSize: '14px', outline: 'none',
    backgroundColor: 'var(--cream)', color: 'var(--text-dark)',
    fontFamily: 'inherit',
  }

  return (
    <section id="contact" style={{ padding: '112px 0', backgroundColor: 'var(--cream)' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '64px', alignItems: 'flex-start' }}>

          {/* 왼쪽 */}
          <div>
            <div style={{
              display: 'inline-flex', padding: '8px 16px', borderRadius: '999px',
              backgroundColor: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)',
              fontSize: '14px', fontWeight: 500, marginBottom: '24px',
            }}>문의하기</div>

            <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--text-dark)', marginBottom: '16px' }}>
              무엇이든<br />물어보세요
            </h2>
            <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--text-mid)', marginBottom: '40px' }}>
              서비스 관련 문의, 제휴 제안, 피드백 무엇이든 환영해요.<br />
              빠른 시일 내에 답변드릴게요.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: '이메일', value: 'rywls123450@gmail.com' },
                { label: '웹사이트', value: 'kyorang.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: 'var(--peach)', color: 'var(--warm-purple)',
                  }}>
                    {i === 0
                      ? <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                      : <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                    }
                  </div>
                  <div>
                    <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>{item.label}</p>
                    <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-dark)', marginTop: '2px' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽 폼 */}
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '32px', boxShadow: '0 4px 32px rgba(61,46,107,0.09)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <Image src="/logo.png" alt="교랑" width={64} height={64} style={{ margin: '0 auto 16px' }} />
                <p style={{ fontWeight: 700, fontSize: '18px', color: 'var(--deep-purple)', marginBottom: '8px' }}>감사해요!</p>
                <p style={{ fontSize: '14px', color: 'var(--text-mid)' }}>곧 답변드릴게요.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-mid)', display: 'block', marginBottom: '6px' }}>이름</label>
                    <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="홍길동" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-mid)', display: 'block', marginBottom: '6px' }}>이메일</label>
                    <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="hello@email.com" required style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-mid)', display: 'block', marginBottom: '6px' }}>메시지</label>
                  <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="문의 내용을 입력해주세요" required rows={5} style={{ ...inputStyle, resize: 'none' }} />
                </div>
                <button type="submit" disabled={loading} style={{
                  padding: '16px', borderRadius: '16px', border: 'none',
                  background: 'linear-gradient(135deg, var(--warm-purple), var(--deep-purple))',
                  color: 'white', fontWeight: 700, fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 16px rgba(61,46,107,0.3)', fontFamily: 'inherit',
                  opacity: loading ? 0.7 : 1,
                }}>
                  {loading ? '발송 중...' : '보내기'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--deep-purple)', padding: '48px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '-60px', right: '-60px',
        width: '192px', height: '192px', borderRadius: '50%',
        backgroundColor: 'rgba(124,107,181,0.3)', pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image src="/logo.png" alt="KYORANG" width={36} height={36} style={{ filter: 'brightness(0) invert(1)', opacity: 0.9 }} />
            <span className="font-display" style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)' }}>KYORANG</span>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: '교랑AI', href: 'https://kyorang.ai.kr' },
              { label: '교랑톡', href: 'https://talk.kyorang.com' },
              { label: '교랑샵', href: 'https://shop.kyorang.com' },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                className="btn-hover">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>© 2026 KYORANG. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>말하지 못한 마음을 꺼낼 수 있는 곳</p>
        </div>
      </div>
    </footer>
  )
}