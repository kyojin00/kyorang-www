'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!form.name || !form.email || !form.message) {
      alert('모든 항목을 입력해주세요')
      return
    }
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
    } catch {
      alert('발송 중 오류가 발생했어요. 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <style>{`
        .contact-page{max-width:620px;margin:0 auto;padding:56px 28px 96px;}
        .contact-page .ct-head{text-align:center;margin-bottom:40px;}
        .contact-page h1{font-size:clamp(28px,4vw,38px);font-weight:800;letter-spacing:-.03em;color:var(--ink);}
        .contact-page .ct-sub{font-size:15px;line-height:1.8;color:var(--text-mid);margin-top:14px;}
        .contact-card{background:var(--paper);border:1px solid var(--line);border-radius:24px;padding:36px;box-shadow:0 8px 40px rgba(58,42,46,.07);}
        .ct-field{margin-bottom:18px;}
        .ct-field label{display:block;font-size:13px;font-weight:700;color:var(--text-mid);margin-bottom:8px;}
        .ct-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .ct-input{
          width:100%;border:1.5px solid var(--line);border-radius:13px;
          padding:13px 15px;font-size:14px;font-family:inherit;color:var(--text);
          background:var(--cream);outline:none;transition:border-color .2s,box-shadow .2s;
        }
        .ct-input:focus{border-color:var(--coral);box-shadow:0 0 0 4px rgba(236,138,110,.13);}
        .ct-input::placeholder{color:var(--text-dim);}
        textarea.ct-input{resize:none;}
        .ct-submit{
          width:100%;margin-top:8px;padding:15px;border:none;border-radius:13px;cursor:pointer;
          font-size:15px;font-weight:800;font-family:inherit;color:#fff;letter-spacing:.01em;
          background:linear-gradient(135deg,var(--coral),var(--coral-deep));
          box-shadow:0 10px 26px rgba(217,87,58,.26);transition:transform .2s,box-shadow .2s,opacity .2s;
        }
        .ct-submit:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 14px 34px rgba(217,87,58,.32);}
        .ct-submit:disabled{opacity:.6;cursor:not-allowed;}
        .ct-done{text-align:center;padding:40px 0;}
        .ct-done .nm{font-size:20px;font-weight:800;color:var(--ink);margin-bottom:10px;}
        .ct-done .ds{font-size:14px;line-height:1.7;color:var(--text-mid);}
        @media(max-width:560px){.ct-row{grid-template-columns:1fr;}}
      `}</style>

      <header className="legal-top">
        <div className="wrap">
          <a href="/" className="legal-home">
            <span className="mark"><img src="/kyorang-mark.png" alt="교랑 로고" /></span>
            <span className="brand-name">KYORANG</span>
          </a>
          <a href="/" className="legal-back">홈으로 →</a>
        </div>
      </header>

      <main className="contact-page">
        <div className="ct-head">
          <h1>무엇이든 물어보세요</h1>
          <p className="ct-sub">
            서비스 문의, 제휴 제안, 피드백 무엇이든 환영해요.<br />
            남겨주시면 빠른 시일 내에 답변드릴게요.
          </p>
        </div>

        <div className="contact-card">
          {sent ? (
            <div className="ct-done">
              <p className="nm">감사해요!</p>
              <p className="ds">메시지를 잘 받았어요.<br />곧 답변드릴게요.</p>
            </div>
          ) : (
            <div>
              <div className="ct-row">
                <div className="ct-field">
                  <label>이름</label>
                  <input
                    className="ct-input" type="text" placeholder="홍길동"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div className="ct-field">
                  <label>이메일</label>
                  <input
                    className="ct-input" type="email" placeholder="hello@email.com"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="ct-field">
                <label>메시지</label>
                <textarea
                  className="ct-input" rows={6} placeholder="문의 내용을 입력해주세요"
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                />
              </div>
              <button className="ct-submit" onClick={submit} disabled={loading}>
                {loading ? '발송 중...' : '보내기 →'}
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}