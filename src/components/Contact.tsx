'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 px-6" style={{ background: 'var(--peach)' }}>
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--warm-purple)' }}>Contact</p>
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Noto Serif KR', color: 'var(--deep-purple)' }}>함께해요</h2>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--soft-brown)' }}>제휴, 투자, 채용 등 어떤 이야기든 환영해요.</p>
        </div>
        {sent ? (
          <div className="text-center py-16 rounded-3xl" style={{ background: 'rgba(255,255,255,0.6)' }}>
            <span className="text-5xl block mb-4">🐱</span>
            <p className="font-medium" style={{ color: 'var(--deep-purple)' }}>메시지를 받았어요!</p>
            <p className="text-sm mt-2" style={{ color: 'var(--soft-brown)' }}>빠른 시일 내에 답변 드릴게요.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl p-8 flex flex-col gap-4" style={{ background: 'rgba(255,255,255,0.6)' }}>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium" style={{ color: 'var(--soft-brown)' }}>이름</label>
              <input type="text" required placeholder="홍길동" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'var(--cream)', border: '1px solid rgba(124,107,181,0.2)', color: 'var(--text-dark)' }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium" style={{ color: 'var(--soft-brown)' }}>이메일</label>
              <input type="email" required placeholder="hello@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="px-4 py-3 rounded-xl text-sm outline-none" style={{ background: 'var(--cream)', border: '1px solid rgba(124,107,181,0.2)', color: 'var(--text-dark)' }} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-medium" style={{ color: 'var(--soft-brown)' }}>문의 내용</label>
              <textarea required rows={5} placeholder="어떤 이야기를 나누고 싶으신가요?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="px-4 py-3 rounded-xl text-sm outline-none resize-none" style={{ background: 'var(--cream)', border: '1px solid rgba(124,107,181,0.2)', color: 'var(--text-dark)' }} />
            </div>
            <button type="submit" className="py-4 rounded-xl font-medium text-white transition-opacity hover:opacity-80" style={{ background: 'var(--deep-purple)' }}>보내기 🐱</button>
          </form>
        )}
        <p className="text-center text-xs mt-6" style={{ color: 'var(--soft-brown)', opacity: 0.7 }}>
          또는 <a href="mailto:hello@kyorang.com" style={{ color: 'var(--warm-purple)' }}>hello@kyorang.com</a> 으로 직접 연락주세요
        </p>
      </div>
    </section>
  )
}