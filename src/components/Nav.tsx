'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(253,248,243,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,107,181,0.12)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt="KYORANG"
            width={36}
            height={36}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <span className="font-display text-xl" style={{ color: 'var(--deep-purple)' }}>
            KYORANG
          </span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden md:flex items-center gap-1">
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
              className="text-sm px-4 py-2 rounded-full transition-all hover:bg-purple-50"
              style={{ color: 'var(--text-mid)' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm px-5 py-2.5 rounded-full text-white font-medium ml-2 transition-all hover:opacity-90 hover:shadow-lg"
            style={{ backgroundColor: 'var(--deep-purple)' }}
          >
            문의하기
          </a>
        </div>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: 'var(--deep-purple)' }}
        >
          {menuOpen ? (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 pt-2 space-y-2"
          style={{ backgroundColor: 'rgba(253,248,243,0.98)', backdropFilter: 'blur(16px)' }}
        >
          {[
            { label: '교랑AI', href: 'https://kyorang.ai.kr' },
            { label: '교랑톡', href: 'https://talk.kyorang.com' },
            { label: '교랑샵', href: 'https://shop.kyorang.com' },
            { label: '문의하기', href: '#contact' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2.5 text-sm font-medium"
              style={{ color: 'var(--text-dark)' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}