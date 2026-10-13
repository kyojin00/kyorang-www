'use client'

import Link from 'next/link'
import { useState } from 'react'
import { track } from '@vercel/analytics'
import { won } from '@/data/studio'

type Done = { orderNo: string; bank: string | null; amount: number }

export default function OrderForm({ slug, price }: { slug: string; price: number }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', depositor: '', receipt: '', memo: '', website: '' })
  const [agree, setAgree] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState<Done | null>(null)

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!agree) return setError('환불 정책과 개인정보 수집에 동의해주세요')
    setLoading(true)
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, slug, agree }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || '주문 접수 중 오류가 발생했어요')
      track('템플릿 주문', { slug })
      setDone({ orderNo: data.orderNo, bank: data.bank, amount: data.amount ?? price })
    } catch (err) {
      setError(err instanceof Error ? err.message : '주문 접수 중 오류가 발생했어요')
    } finally {
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div className="hf-done">
        <p className="nm">주문이 접수됐어요</p>
        <p className="ds">
          주문번호 <b>{done.orderNo}</b>
        </p>
        {done.bank ? (
          <div className="bank-box">
            <div>{done.bank}</div>
            <b>{won(done.amount)}</b>
          </div>
        ) : null}
        <p className="ds">
          {done.bank
            ? '입금이 확인되면 영업일 1일 안에 메일로 파일을 보내드려요.'
            : '입금 계좌를 영업일 1일 안에 메일로 안내해 드릴게요.'}
          <br />
          같은 내용을 메일로도 보내드렸어요.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit}>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} aria-hidden="true" />
      <div className="hf-field">
        <label>이름 *</label>
        <input className="hf-input" required value={form.name} onChange={set('name')} placeholder="홍길동" />
      </div>
      <div className="hf-field">
        <label>이메일 * (파일을 받을 주소)</label>
        <input className="hf-input" type="email" required value={form.email} onChange={set('email')} placeholder="hello@email.com" />
      </div>
      <div className="hf-field">
        <label>연락처 *</label>
        <input className="hf-input" type="tel" required value={form.phone} onChange={set('phone')} placeholder="010-0000-0000" />
      </div>
      <div className="hf-field">
        <label>입금자명 (이름과 다르면)</label>
        <input className="hf-input" value={form.depositor} onChange={set('depositor')} />
      </div>
      <div className="hf-field">
        <label>현금영수증 (필요하면)</label>
        <input className="hf-input" value={form.receipt} onChange={set('receipt')} placeholder="휴대폰 번호 또는 사업자번호 (지출증빙)" />
      </div>
      <div className="hf-field">
        <label>요청사항</label>
        <textarea className="hf-input" rows={3} value={form.memo} onChange={set('memo')} />
      </div>
      <label className="hf-agree">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
        <span>
          <Link href="/refund" target="_blank">환불 정책</Link>을 확인했고, 주문 처리를 위한{' '}
          <Link href="/privacy" target="_blank">개인정보 수집·이용</Link>에 동의해요.
        </span>
      </label>
      {error ? <p className="hf-error">{error}</p> : null}
      <button className="hf-submit" disabled={loading}>
        {loading ? '접수 중...' : `${won(price)} 구매 신청`}
      </button>
      <p className="hf-hint">결제는 계좌이체로 진행돼요. 신청 후 입금 안내를 드려요.</p>
    </form>
  )
}
