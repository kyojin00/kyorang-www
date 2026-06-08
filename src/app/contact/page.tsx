'use client'

import { useState } from 'react'

// FAQ 내용은 임시 예시예요. 실제 정책/문구에 맞게 자유롭게 수정하세요.
const faqs = [
  {
    q: '교랑톡과 교랑무드는 어디서 받을 수 있나요?',
    a: '두 서비스 모두 안드로이드 앱으로 제공돼요. 스토어에서 "교랑톡", "교랑무드"를 검색해 설치하실 수 있어요.',
  },
  {
    q: '이용 요금이 있나요?',
    a: '기본 기능은 무료로 이용하실 수 있어요. 일부 부가 기능은 유료(구독)로 제공될 수 있으며, 가격은 앱 내 결제 화면에 안내돼요.',
  },
  {
    q: '교랑무드에 남긴 기록과 대화는 안전한가요?',
    a: '기록과 대화는 안전하게 보관되며, 자세한 처리 방식은 개인정보처리방침에서 확인하실 수 있어요. 민감한 정보 입력에는 유의해 주세요.',
  },
  {
    q: '계정 탈퇴나 데이터 삭제는 어떻게 하나요?',
    a: '앱 내 설정에서 직접 회원 탈퇴 및 데이터 삭제를 요청하실 수 있어요. 탈퇴 시 관련 데이터는 관련 법령이 정한 범위 내에서 파기돼요.',
  },
  {
    q: '문의하면 답변까지 얼마나 걸리나요?',
    a: '아래 문의 폼으로 남겨주시면 보통 영업일 기준 1~3일 내에 답변드려요.',
  },
]

export default function ContactPage() {
  const [open, setOpen] = useState<number | null>(0)
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
        .help-page{max-width:760px;margin:0 auto;padding:56px 28px 96px;}
        .help-head{text-align:center;margin-bottom:48px;}
        .help-head h1{font-size:clamp(28px,4vw,40px);font-weight:800;letter-spacing:-.03em;color:var(--ink);}
        .help-head p{font-size:15px;line-height:1.8;color:var(--text-mid);margin-top:14px;}

        .help-section-label{
          font-size:12.5px;font-weight:800;letter-spacing:.06em;color:var(--coral-deep);
          text-transform:uppercase;margin-bottom:18px;
        }

        /* FAQ */
        .faq-list{display:flex;flex-direction:column;gap:10px;margin-bottom:64px;}
        .faq-item{
          background:var(--paper);border:1px solid var(--line);border-radius:16px;
          overflow:hidden;transition:border-color .2s,box-shadow .2s;
        }
        .faq-item.on{border-color:rgba(236,138,110,.4);box-shadow:0 8px 26px rgba(58,42,46,.06);}
        .faq-q{
          width:100%;display:flex;align-items:center;justify-content:space-between;gap:16px;
          padding:18px 20px;background:none;border:none;cursor:pointer;text-align:left;
          font-size:15px;font-weight:700;color:var(--ink);font-family:inherit;
        }
        .faq-q .chev{
          flex-shrink:0;color:var(--coral-deep);transition:transform .25s;
        }
        .faq-item.on .chev{transform:rotate(180deg);}
        .faq-a{
          max-height:0;overflow:hidden;transition:max-height .3s ease;
        }
        .faq-item.on .faq-a{max-height:300px;}
        .faq-a-inner{padding:0 20px 20px;font-size:14px;line-height:1.8;color:var(--text-mid);}

        /* 문의 폼 */
        .help-form-card{background:var(--paper);border:1px solid var(--line);border-radius:24px;padding:36px;box-shadow:0 8px 40px rgba(58,42,46,.07);}
        .hf-field{margin-bottom:18px;}
        .hf-field label{display:block;font-size:13px;font-weight:700;color:var(--text-mid);margin-bottom:8px;}
        .hf-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .hf-input{
          width:100%;border:1.5px solid var(--line);border-radius:13px;
          padding:13px 15px;font-size:14px;font-family:inherit;color:var(--text);
          background:var(--cream);outline:none;transition:border-color .2s,box-shadow .2s;
        }
        .hf-input:focus{border-color:var(--coral);box-shadow:0 0 0 4px rgba(236,138,110,.13);}
        .hf-input::placeholder{color:var(--text-dim);}
        textarea.hf-input{resize:none;}
        .hf-submit{
          width:100%;margin-top:8px;padding:15px;border:none;border-radius:13px;cursor:pointer;
          font-size:15px;font-weight:800;font-family:inherit;color:#fff;letter-spacing:.01em;
          background:linear-gradient(135deg,var(--coral),var(--coral-deep));
          box-shadow:0 10px 26px rgba(217,87,58,.26);transition:transform .2s,box-shadow .2s,opacity .2s;
        }
        .hf-submit:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 14px 34px rgba(217,87,58,.32);}
        .hf-submit:disabled{opacity:.6;cursor:not-allowed;}
        .hf-done{text-align:center;padding:40px 0;}
        .hf-done .nm{font-size:20px;font-weight:800;color:var(--ink);margin-bottom:10px;}
        .hf-done .ds{font-size:14px;line-height:1.7;color:var(--text-mid);}
        @media(max-width:560px){.hf-row{grid-template-columns:1fr;}}
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

      <main className="help-page">
        <div className="help-head">
          <h1>고객센터</h1>
          <p>
            궁금한 점을 먼저 살펴보고, 해결되지 않으면 언제든 문의해 주세요.<br />
            최대한 빠르게 도와드릴게요.
          </p>
        </div>

        {/* FAQ */}
        <p className="help-section-label">자주 묻는 질문</p>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={'faq-item' + (open === i ? ' on' : '')} key={i}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 문의 폼 */}
        <p className="help-section-label">더 궁금한 점이 있나요?</p>
        <div className="help-form-card">
          {sent ? (
            <div className="hf-done">
              <p className="nm">감사해요!</p>
              <p className="ds">메시지를 잘 받았어요.<br />곧 답변드릴게요.</p>
            </div>
          ) : (
            <div>
              <div className="hf-row">
                <div className="hf-field">
                  <label>이름</label>
                  <input
                    className="hf-input" type="text" placeholder="홍길동"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  />
                </div>
                <div className="hf-field">
                  <label>이메일</label>
                  <input
                    className="hf-input" type="email" placeholder="hello@email.com"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="hf-field">
                <label>메시지</label>
                <textarea
                  className="hf-input" rows={6} placeholder="문의 내용을 입력해주세요"
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                />
              </div>
              <button className="hf-submit" onClick={submit} disabled={loading}>
                {loading ? '발송 중...' : '문의 보내기 →'}
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  )
}