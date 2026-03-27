import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      {/* 배경 블롭 */}
      <div
        className="absolute top-[-10%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--warm-purple)' }}
      />
      <div
        className="absolute bottom-[-5%] left-[-10%] w-[350px] h-[350px] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: 'var(--pink)' }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">

        {/* 텍스트 */}
        <div>
          <div
            className="animate-fade-up-1 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ backgroundColor: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)' }}
          >
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: 'var(--warm-purple)' }} />
            교랑 플랫폼
          </div>

          <h1
            className="animate-fade-up-2 font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
            style={{ color: 'var(--text-dark)' }}
          >
            말하지 못한<br />
            <span style={{ color: 'var(--deep-purple)' }}>마음을</span><br />
            꺼낼 수 있는 곳
          </h1>

          <p
            className="animate-fade-up-3 text-lg leading-relaxed mb-10"
            style={{ color: 'var(--text-mid)', maxWidth: '420px' }}
          >
            교랑은 교랑이와 함께하는 상담부터 소통, 그리고 일상의 작은 즐거움까지
            함께하는 감성 플랫폼이에요.
          </p>

          <div className="animate-fade-up-4 flex flex-wrap gap-3">
            <a
              href="https://kyorang.ai.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full text-white font-medium transition-all hover:opacity-90 hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, var(--warm-purple), var(--deep-purple))',
                boxShadow: '0 4px 20px rgba(61,46,107,0.3)',
              }}
            >
              교랑이에게 털어놓기
            </a>
            <a
              href="https://shop.kyorang.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full font-medium transition-all hover:shadow-md"
              style={{
                backgroundColor: 'white',
                color: 'var(--text-dark)',
                border: '1.5px solid var(--peach)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}
            >
              교랑샵 구경하기
            </a>
          </div>
        </div>

        {/* 로고 + 플로팅 카드 */}
        <div className="relative flex items-center justify-center h-[420px]">
          {/* 중앙 로고 */}
          <div className="animate-float relative z-10">
            <div
              className="w-52 h-52 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--peach), var(--pink-light))',
                boxShadow: '0 24px 64px rgba(124,107,181,0.25)',
              }}
            >
              <Image src="/logo.png" alt="교랑" width={120} height={120} priority />
            </div>
          </div>

          {/* 플로팅 카드 */}
          <div
            className="animate-fade-up-4 absolute top-8 left-0 bg-white rounded-2xl px-4 py-3"
            style={{ boxShadow: '0 8px 24px rgba(61,46,107,0.12)' }}
          >
            <p className="text-xs font-bold" style={{ color: 'var(--deep-purple)' }}>교랑이</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-light)' }}>고민 상담</p>
          </div>

          <div
            className="animate-fade-up-5 absolute top-12 right-0 bg-white rounded-2xl px-4 py-3"
            style={{ boxShadow: '0 8px 24px rgba(232,98,154,0.15)' }}
          >
            <p className="text-xs font-bold" style={{ color: 'var(--pink)' }}>교랑샵</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-light)' }}>캐릭터 소품샵</p>
          </div>

          <div
            className="animate-fade-up-6 absolute bottom-16 left-4 bg-white rounded-2xl px-4 py-3"
            style={{ boxShadow: '0 8px 24px rgba(124,107,181,0.12)' }}
          >
            <p className="text-xs font-bold" style={{ color: 'var(--warm-purple)' }}>교랑톡</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--text-light)' }}>친구와 대화</p>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="animate-fade-up-6 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-xs" style={{ color: 'var(--text-light)' }}>스크롤</p>
        <svg width="16" height="16" fill="none" stroke="var(--text-light)" strokeWidth="2" viewBox="0 0 24 24" className="animate-bounce">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}