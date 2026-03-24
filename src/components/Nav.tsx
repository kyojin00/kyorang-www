'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? 'rgba(253,246,238,0.92)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(124,107,181,0.1)' : 'none' }}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="교랑" width={120} height={40} style={{ objectFit: 'contain' }} />
        </Link>
        <div className="flex items-center gap-6">
          <a href="#services" className="text-sm" style={{ color: 'var(--soft-brown)' }}>서비스</a>
          <a href="#mission" className="text-sm" style={{ color: 'var(--soft-brown)' }}>미션</a>
          <a href="#contact" className="text-sm" style={{ color: 'var(--soft-brown)' }}>문의</a>
          <a href="https://kyorang.ai.kr" target="_blank" className="text-sm px-4 py-2 rounded-full transition-all" style={{ background: 'var(--deep-purple)', color: 'white', fontWeight: 500 }}>털어놓으러 가기</a>
        </div>
      </div>
    </nav>
  )
}