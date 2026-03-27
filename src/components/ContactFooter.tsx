'use client'

import { useState } from 'react'
import Image from 'next/image'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* 왼쪽 */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)' }}
            >
              문의하기
            </div>
            <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-dark)' }}>
              무엇이든<br />물어보세요
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-mid)' }}>
              서비스 관련 문의, 제휴 제안, 피드백 무엇이든 환영해요.
              빠른 시일 내에 답변드릴게요.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: '이메일',
                  value: 'help@kyorang.com',
                },
                {
                  icon: (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                    </svg>
                  ),
                  label: '웹사이트',
                  value: 'kyorang.com',
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--peach)', color: 'var(--warm-purple)' }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: 'var(--text-light)' }}>{item.label}</p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-dark)' }}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 오른쪽 폼 */}
          <div
            className="bg-white rounded-3xl p-8"
            style={{ boxShadow: '0 4px 32px rgba(61,46,107,0.09)' }}
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">
                  <Image src="/logo.png" alt="교랑" width={64} height={64} className="mx-auto" />
                </div>
                <p className="font-bold text-lg mb-1" style={{ color: 'var(--deep-purple)' }}>감사해요!</p>
                <p className="text-sm" style={{ color: 'var(--text-mid)' }}>곧 답변드릴게요.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-mid)' }}>이름</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      placeholder="홍길동"
                      required
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ borderColor: 'var(--peach)', backgroundColor: 'var(--cream)' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-mid)' }}>이메일</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      placeholder="hello@email.com"
                      required
                      className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ borderColor: 'var(--peach)', backgroundColor: 'var(--cream)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium block mb-1.5" style={{ color: 'var(--text-mid)' }}>메시지</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    placeholder="문의 내용을 입력해주세요"
                    required
                    rows={5}
                    className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none resize-none transition-colors"
                    style={{ borderColor: 'var(--peach)', backgroundColor: 'var(--cream)' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-white font-bold text-sm transition-all hover:opacity-90"
                  style={{
                    background: 'linear-gradient(135deg, var(--warm-purple), var(--deep-purple))',
                    boxShadow: '0 4px 16px rgba(61,46,107,0.3)',
                  }}
                >
                  보내기
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
    <footer style={{ backgroundColor: 'var(--deep-purple)' }} className="py-12 relative overflow-hidden">
      <div className="absolute top-0 right-[-60px] w-48 h-48 rounded-full opacity-10" style={{ backgroundColor: 'var(--warm-purple)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* 로고 */}
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="KYORANG" width={36} height={36} className="brightness-0 invert opacity-90" />
            <span className="font-display text-xl text-white opacity-90">KYORANG</span>
          </div>

          {/* 링크 */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { label: '교랑AI', href: 'https://kyorang.ai.kr' },
              { label: '교랑톡', href: 'https://talk.kyorang.com' },
              { label: '교랑샵', href: 'https://shop.kyorang.com' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-100 opacity-60 text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <p className="text-xs opacity-40 text-white">© 2026 KYORANG. All rights reserved.</p>
          <p className="text-xs opacity-40 text-white">말하지 못한 마음을 꺼낼 수 있는 곳</p>
        </div>
      </div>
    </footer>
  )
}