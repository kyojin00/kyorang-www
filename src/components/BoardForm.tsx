'use client'

import { useState } from 'react'
import Link from 'next/link'
import { track } from '@vercel/analytics'

type Field = { key: string; label: string; type?: 'text' | 'email' | 'textarea' | 'rating'; placeholder?: string; required?: boolean; hint?: string }

// 리뷰·질문 공용 작성 폼. 접혀 있다가 버튼을 누르면 열린다.
export default function BoardForm({
  event,
  endpoint,
  open: openLabel,
  fields,
  done,
  note,
}: {
  event: string // 전환 이벤트 이름 (Vercel Analytics)
  endpoint: string
  open: string
  fields: Field[]
  done: string
  note: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState<Record<string, string>>({ website: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, rating: form.rating ? Number(form.rating) : undefined }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || '저장 중 오류가 발생했어요')
      track(event)
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : '저장 중 오류가 발생했어요')
    } finally {
      setLoading(false)
    }
  }

  if (sent) return <div className="bd-done">{done}</div>
  if (!open)
    return (
      <button className="btn btn-primary" onClick={() => setOpen(true)}>
        {openLabel}
      </button>
    )

  return (
    <form className="help-form-card bd-form" onSubmit={submit}>
      <input className="hp" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} aria-hidden="true" />
      {fields.map((f) => (
        <div className="hf-field" key={f.key}>
          <label>
            {f.label}
            {f.required ? ' *' : ''}
          </label>
          {f.type === 'textarea' ? (
            <textarea className="hf-input" rows={6} required={f.required} placeholder={f.placeholder} value={form[f.key] ?? ''} onChange={set(f.key)} />
          ) : f.type === 'rating' ? (
            <div className="bd-stars" role="radiogroup" aria-label={f.label}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  role="radio"
                  aria-checked={form[f.key] === String(n)}
                  aria-label={`${n}점`}
                  className={Number(form[f.key] ?? 0) >= n ? 'on' : ''}
                  onClick={() => setForm((p) => ({ ...p, [f.key]: String(n) }))}
                >
                  ★
                </button>
              ))}
            </div>
          ) : (
            <input className="hf-input" type={f.type ?? 'text'} required={f.required} placeholder={f.placeholder} value={form[f.key] ?? ''} onChange={set(f.key)} />
          )}
          {f.hint ? <p className="hf-hint">{f.hint}</p> : null}
        </div>
      ))}
      <p className="hf-hint">
        {note} <Link href="/privacy">개인정보처리방침</Link>
      </p>
      {error ? <p className="hf-error">{error}</p> : null}
      <button className="hf-submit" disabled={loading}>
        {loading ? '저장 중...' : '등록하기'}
      </button>
    </form>
  )
}
