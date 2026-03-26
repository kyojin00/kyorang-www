import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center" style={{ background: 'var(--deep-purple)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="교랑" width={100} height={36} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
        </div>
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>말하지 못한 마음을 꺼낼 수 있는 곳</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://kyorang.ai.kr" target="_blank" className="text-sm transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>교랑</a>
          <a href="https://talk.kyorang.com" target="_blank" className="text-sm transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>교랑톡</a>
          <a href="mailto:rywls123450@gmail.com" className="text-sm transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.6)' }}>문의</a>
        </div>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>© 2025 KYORANG. All rights reserved.</p>
      </div>
    </footer>
  )
}