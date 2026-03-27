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
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 50,
      transition: 'all 0.4s ease',
      backgroundColor: scrolled ? 'rgba(253,248,243,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(124,107,181,0.12)' : 'none',
    }}>
      <div style={{
        maxWidth: '1152px', margin: '0 auto',
        padding: '0 24px', height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image src="/logo.png" alt="KYORANG" width={36} height={36} />
          <span className="font-display" style={{ fontSize: '20px', color: 'var(--deep-purple)' }}>KYORANG</span>
        </Link>

        {/* 데스크탑 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {[
            { label: '교랑AI', href: 'https://kyorang.ai.kr' },
            { label: '교랑톡', href: 'https://talk.kyorang.com' },
            { label: '교랑샵', href: 'https://shop.kyorang.com' },
          ].map(item => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '14px', padding: '8px 16px', borderRadius: '999px', color: 'var(--text-mid)', textDecoration: 'none' }}
              className="btn-hover"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact"
            style={{
              fontSize: '14px', padding: '10px 20px', borderRadius: '999px',
              backgroundColor: 'var(--deep-purple)', color: 'white',
              textDecoration: 'none', marginLeft: '8px',
              boxShadow: '0 4px 12px rgba(61,46,107,0.25)',
            }}
            className="btn-hover"
          >
            문의하기
          </a>
        </div>
      </div>
    </nav>
  )
}