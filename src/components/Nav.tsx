'use client'

import Link from 'next/link'
import { useState } from 'react'

const LINKS = [
  { href: '/#packages', label: '제작 패키지' },
  { href: '/templates', label: '템플릿' },
  { href: '/#works', label: '만든 것들' },
  { href: '/#faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav id="nav" className={open ? 'open' : ''}>
      <div className="wrap nav-in">
        <Link href="/" className="brand" onClick={close}>
          <span className="mark">
            <img src="/kyorang-mark.png" alt="교랑 로고" />
          </span>
          <span className="brand-name">KYORANG</span>
        </Link>
        <div className="nav-menu">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="nav-cta">
            견적 문의
          </Link>
        </div>
        <button
          className="burger"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="ico" width="26" height="26" viewBox="0 0 24 24">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <div className="nav-sheet">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={close}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="nav-sheet-cta" onClick={close}>
          견적 문의
        </Link>
      </div>
    </nav>
  )
}
