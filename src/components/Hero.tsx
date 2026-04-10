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

  return (
    <>
      <style>{`
        .contact-input {
          width: 100%;
          border: 1.5px solid rgba(124,107,181,0.18);
          border-radius: 14px;
          padding: 13px 16px;
          font-size: 14px;
          outline: none;
          background: rgba(253,248,243,0.7);
          color: var(--text-dark);
          font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .contact-input:focus {
          border-color: var(--warm-purple);
          box-shadow: 0 0 0 4px rgba(124,107,181,0.1);
        }
        .contact-input::placeholder { color: rgba(100,90,130,0.4); }
        .submit-btn {
          padding: 15px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, var(--warm-purple), var(--deep-purple));
          color: white;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 0.01em;
          box-shadow: 0 6px 24px rgba(61,46,107,0.3);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(61,46,107,0.38);
        }
        .submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }
      `}</style>

      <section id="contact" style={{ padding: '120px 0', backgroundColor: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        {/* 배경 */}
        <div style={{
          position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(124,107,181,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

          {/* 섹션 헤더 */}
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{
              display: 'inline-flex', padding: '7px 16px', borderRadius: '999px',
              backgroundColor: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)',
              fontSize: '13px', fontWeight: 600, marginBottom: '20px',
              border: '1px solid rgba(124,107,181,0.15)', letterSpacing: '0.02em',
            }}>문의하기</div>
            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 52px)', color: 'var(--text-dark)',
              letterSpacing: '-0.03em', lineHeight: 1.2,
            }}>
              무엇이든 물어보세요
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '64px', alignItems: 'flex-start' }}>

            {/* 왼쪽 */}
            <div>
              <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--text-mid)', marginBottom: '48px' }}>
                서비스 관련 문의, 제휴 제안, 피드백<br />무엇이든 환영해요. 빠른 시일 내에 답변드릴게요.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
                {[
                  {
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                    label: '이메일', value: 'rywls123450@gmail.com',
                  },
                  {
                    icon: <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
                    label: '웹사이트', value: 'kyorang.com',
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    padding: '16px 20px', borderRadius: '16px',
                    background: 'white', border: '1px solid rgba(124,107,181,0.08)',
                    boxShadow: '0 4px 16px rgba(61,46,107,0.06)',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'linear-gradient(135deg, rgba(124,107,181,0.15), rgba(61,46,107,0.08))',
                      color: 'var(--warm-purple)',
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '11px', color: 'var(--text-light)', letterSpacing: '0.04em', marginBottom: '2px' }}>{item.label}</p>
                      <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-dark)' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 서비스 링크 빠른 접근 */}
              <div>
                <p style={{ fontSize: '12px', color: 'var(--text-light)', marginBottom: '12px', letterSpacing: '0.04em' }}>서비스 바로가기</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {[
                    { label: '교랑AI', href: 'https://kyorang.ai.kr', color: 'var(--deep-purple)' },
                    { label: '교랑 스토리', href: 'https://story.kyorang.com', color: '#2271A8' },
                    { label: '교랑톡', href: 'https://talk.kyorang.com', color: 'var(--warm-purple)' },
                    { label: '교랑샵', href: 'https://shop.kyorang.com', color: 'var(--pink)' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                      fontSize: '12px', padding: '6px 14px', borderRadius: '999px',
                      border: `1.5px solid ${s.color}22`,
                      color: s.color, textDecoration: 'none', fontWeight: 600,
                      background: `${s.color}0D`,
                      transition: 'opacity 0.2s',
                    }}>{s.label}</a>
                  ))}
                </div>
              </div>
            </div>

            {/* 오른쪽 폼 */}
            <div style={{
              backgroundColor: 'white', borderRadius: '28px', padding: '40px',
              boxShadow: '0 8px 48px rgba(61,46,107,0.1)',
              border: '1px solid rgba(124,107,181,0.06)',
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '20px',
                    background: 'linear-gradient(135deg, rgba(124,107,181,0.15), rgba(61,46,107,0.08))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <Image src="/logo.png" alt="교랑" width={44} height={44} />
                  </div>
                  <p style={{ fontWeight: 800, fontSize: '20px', color: 'var(--deep-purple)', marginBottom: '8px' }}>감사해요! 🙏</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.7 }}>메시지를 잘 받았어요.<br />곧 답변드릴게요.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '4px', letterSpacing: '-0.02em' }}>메시지 보내기</p>
                    <p style={{ fontSize: '13px', color: 'var(--text-light)' }}>모든 항목을 입력해주세요</p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-mid)', display: 'block', marginBottom: '7px', letterSpacing: '0.01em' }}>이름</label>
                      <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="홍길동" required className="contact-input" />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-mid)', display: 'block', marginBottom: '7px', letterSpacing: '0.01em' }}>이메일</label>
                      <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="hello@email.com" required className="contact-input" />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-mid)', display: 'block', marginBottom: '7px', letterSpacing: '0.01em' }}>메시지</label>
                    <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="문의 내용을 입력해주세요" required rows={5} className="contact-input" style={{ resize: 'none' }} />
                  </div>
                  <button type="submit" disabled={loading} className="submit-btn">
                    {loading ? '발송 중...' : '보내기 →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#16102E', padding: '60px 0 40px', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(124,107,181,0.4), transparent)',
      }} />
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '256px', height: '256px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,107,181,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '40px' }}>

          {/* 브랜드 */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Image src="/logo.png" alt="KYORANG" width={20} height={20} style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }} />
              </div>
              <span className="font-display" style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', letterSpacing: '-0.02em' }}>KYORANG</span>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.8 }}>
              말하지 못한 마음을 꺼낼 수 있는 곳.<br />교랑이 언제나 곁에 있을게요.
            </p>
          </div>

          {/* 서비스 링크 */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: '16px' }}>서비스</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: '교랑AI', href: 'https://kyorang.ai.kr' },
                { label: '교랑 스토리', href: 'https://story.kyorang.com' },
                { label: '교랑톡', href: 'https://talk.kyorang.com' },
                { label: '교랑샵', href: 'https://shop.kyorang.com' },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* 연락처 */}
          <div>
            <p style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', marginBottom: '16px' }}>연락처</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'rywls123450@gmail.com' },
                { label: 'kyorang.com' },
              ].map((item, i) => (
                <p key={i} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{item.label}</p>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '28px',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', alignItems: 'center',
        }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2026 KYORANG. All rights reserved.</p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>말하지 못한 마음을 꺼낼 수 있는 곳</p>
        </div>
      </div>
    </footer>
  )
}