import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden" style={{ background: 'var(--cream)' }}>
      <div className="absolute top-32 right-16 w-72 h-72 rounded-full opacity-20 pointer-events-none" style={{ background: 'var(--warm-purple)' }} />
      <div className="absolute bottom-24 left-8 w-48 h-48 rounded-full opacity-15 pointer-events-none" style={{ background: '#F4A88A' }} />

      <div className="relative max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="교랑" width={160} height={60} style={{ objectFit: 'contain' }} />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'Noto Serif KR', color: 'var(--deep-purple)', lineHeight: 1.3 }}>
          말하지 못한 마음을<br />꺼낼 수 있는 곳
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: 'var(--soft-brown)', fontWeight: 300 }}>
          교랑은 고민을 털어놓을 수 있는 공간을 만들어요.<br />혼자 들고 다니지 않아도 괜찮아요.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://kyorang.ai.kr" target="_blank" className="px-8 py-4 rounded-full text-white font-medium transition-transform hover:scale-105" style={{ background: 'var(--deep-purple)', fontSize: '0.95rem' }}>교랑이에게 털어놓기</a>
          <a href="#services" className="px-8 py-4 rounded-full font-medium transition-all hover:scale-105" style={{ background: 'var(--peach)', color: 'var(--deep-purple)', fontSize: '0.95rem' }}>서비스 살펴보기</a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs" style={{ color: 'var(--soft-brown)' }}>scroll</span>
        <div className="w-px h-10 animate-pulse" style={{ background: 'var(--warm-purple)' }} />
      </div>
    </section>
  )
}