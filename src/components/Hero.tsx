import Image from 'next/image'

export default function Hero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      backgroundColor: 'var(--cream)', overflow: 'hidden',
    }}>
      {/* 배경 블롭 */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-15%',
        width: '500px', height: '500px', borderRadius: '50%',
        backgroundColor: 'var(--warm-purple)', opacity: 0.2,
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', left: '-10%',
        width: '350px', height: '350px', borderRadius: '50%',
        backgroundColor: 'var(--pink)', opacity: 0.15,
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1152px', margin: '0 auto',
        padding: '96px 24px 64px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '48px', alignItems: 'center', width: '100%',
      }}>

        {/* 텍스트 */}
        <div>
          <div className="anim-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 16px', borderRadius: '999px',
            backgroundColor: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)',
            fontSize: '14px', fontWeight: 500, marginBottom: '32px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--warm-purple)', display: 'inline-block' }} />
            교랑 플랫폼
          </div>

          <h1 className="font-display anim-2" style={{
            fontSize: 'clamp(44px, 6vw, 72px)',
            lineHeight: 1.2, marginBottom: '24px',
            color: 'var(--text-dark)',
          }}>
            말하지 못한<br />
            <span style={{ color: 'var(--deep-purple)' }}>마음을</span><br />
            꺼낼 수 있는 곳
          </h1>

          <p className="anim-3" style={{
            fontSize: '18px', lineHeight: 1.8,
            color: 'var(--text-mid)', maxWidth: '420px', marginBottom: '40px',
          }}>
            교랑이와 함께하는 상담부터 소통,<br />
            그리고 일상의 작은 즐거움까지.
          </p>

          <div className="anim-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="https://kyorang.ai.kr" target="_blank" rel="noopener noreferrer"
              className="btn-hover"
              style={{
                padding: '14px 28px', borderRadius: '999px',
                background: 'linear-gradient(135deg, var(--warm-purple), var(--deep-purple))',
                color: 'white', fontWeight: 500, fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(61,46,107,0.3)',
              }}>
              교랑이에게 털어놓기
            </a>
            <a href="https://shop.kyorang.com" target="_blank" rel="noopener noreferrer"
              className="btn-hover"
              style={{
                padding: '14px 28px', borderRadius: '999px',
                backgroundColor: 'white', color: 'var(--text-dark)',
                fontWeight: 500, fontSize: '15px', textDecoration: 'none',
                border: '1.5px solid var(--peach)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}>
              교랑샵 구경하기
            </a>
          </div>
        </div>

        {/* 로고 + 플로팅 카드 */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '420px' }}>
          <div className="anim-float">
            <div style={{
              width: '208px', height: '208px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--peach), var(--pink-light))',
              boxShadow: '0 24px 64px rgba(124,107,181,0.25)',
            }}>
              <Image src="/logo.png" alt="교랑" width={120} height={120} priority />
            </div>
          </div>

          <div className="anim-4" style={{
            position: 'absolute', top: '32px', left: 0,
            backgroundColor: 'white', borderRadius: '16px', padding: '12px 16px',
            boxShadow: '0 8px 24px rgba(61,46,107,0.12)',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--deep-purple)' }}>교랑이</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>고민 상담</p>
          </div>

          <div className="anim-5" style={{
            position: 'absolute', top: '48px', right: 0,
            backgroundColor: 'white', borderRadius: '16px', padding: '12px 16px',
            boxShadow: '0 8px 24px rgba(232,98,154,0.15)',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--pink)' }}>교랑샵</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>캐릭터 소품샵</p>
          </div>

          <div className="anim-6" style={{
            position: 'absolute', bottom: '64px', left: '16px',
            backgroundColor: 'white', borderRadius: '16px', padding: '12px 16px',
            boxShadow: '0 8px 24px rgba(124,107,181,0.12)',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--warm-purple)' }}>교랑톡</p>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>친구와 대화</p>
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="anim-6" style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
      }}>
        <p style={{ fontSize: '12px', color: 'var(--text-light)' }}>스크롤</p>
        <svg width="16" height="16" fill="none" stroke="var(--text-light)" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  )
}