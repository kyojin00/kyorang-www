'use client'

import { useState } from 'react'
import { FAQS } from '@/data/studio'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="faq-list">
      {FAQS.map((f, i) => (
        <div className={'faq-item' + (open === i ? ' on' : '')} key={f.q}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
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
  )
}
