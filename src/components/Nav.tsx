'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-size: 13px;
          padding: 7px 14px;
          border-radius: 999px;
          color: var(--text-mid);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.01em;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 999px;
          background: rgba(61,46,107,0.06);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-link:hover { color: var(--deep-purple); }
        .nav-link:hover::after { opacity: 1; }
        .nav-cta {
          font-size: 13px;
          padding: 9px 22px;
          border-radius: 999px;
          background: var(--deep-purple);
          color: white;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 0.01em;
          box-shadow: 0 4px 16px rgba(61,46,107,0.28);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(61,46,107,0.38);
        }
      `}</style>

      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        backgroundColor: scrolled ? 'rgba(253,248,243,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,107,181,0.1)' : 'none',
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '0 32px', height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--warm-purple), var(--deep-purple))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(61,46,107,0.25)',
            }}>
              <Image src="/logo.png" alt="KYORANG" width={20} height={20} />
            </div>
            <span className="font-display" style={{ fontSize: '18px', color: 'var(--deep-purple)', letterSpacing: '-0.02em' }}>KYORANG</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {[
              { label: '교랑AI', href: 'https://kyorang.ai.kr' },
              { label: '교랑 스토리', href: 'https://story.kyorang.com' },
              { label: '교랑톡', href: 'https://talk.kyorang.com' },
              ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="nav-link">
                {item.label}
              </a>
            ))}
            <div style={{ width: '1px', height: '16px', backgroundColor: 'rgba(124,107,181,0.2)', margin: '0 8px' }} />
            <a href="#contact" className="nav-cta">문의하기</a>
          </div>
        </div>
      </nav>
    </>
  )
}