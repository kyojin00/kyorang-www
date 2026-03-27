import Image from 'next/image'

export default function Mission() {
  const values = [
    {
      title: '안전한 익명성',
      desc: '누구에게도 말 못한 이야기를 안전하게 꺼낼 수 있는 공간을 만들어요.',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
    },
    {
      title: '따뜻한 연결',
      desc: '혼자 들고 다니지 않아도 돼요. 교랑이 옆에서 함께할게요.',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      ),
    },
    {
      title: '일상의 기쁨',
      desc: '교랑 캐릭터와 함께하는 소소한 굿즈로 일상에 작은 행복을 더해요.',
      icon: (
        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),
    },
  ]

  return (
    <section
      id="mission"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, var(--deep-purple) 0%, #5A4498 50%, var(--warm-purple) 100%)' }}
    >
      <div className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-60 h-60 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,255,255,0.04)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 왼쪽 */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}
            >
              우리의 미션
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
              혼자 들고 다니지<br />않아도 괜찮아요
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
              교랑은 마음속 이야기를 꺼낼 수 있는 안전한 공간을 만들어요.
              익명이라는 자유 속에서, 진심 어린 연결을 경험해보세요.
            </p>

            <div className="flex items-center gap-4">
              <div className="animate-float">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
                >
                  <Image src="/logo.png" alt="교랑" width={40} height={40} />
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-lg">교랑이</p>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>언제나 당신 곁에</p>
              </div>
            </div>
          </div>

          {/* 오른쪽 가치 카드 */}
          <div className="space-y-4">
            {values.map((value, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 flex items-start gap-4 transition-all hover:scale-[1.02]"
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)' }}
                >
                  {value.icon}
                </div>
                <div>
                  <p className="font-bold text-white mb-1">{value.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}