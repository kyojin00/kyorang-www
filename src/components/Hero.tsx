import Image from 'next/image'

const heroStyles = `
  @keyframes float-slow {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-18px); }
  }
  @keyframes float-card-a {
    0%, 100% { transform: translateY(0px) rotate(-3deg); }
    50% { transform: translateY(-12px) rotate(-2deg); }
  }
  @keyframes float-card-b {
    0%, 100% { transform: translateY(0px) rotate(3deg); }
    50% { transform: translateY(-10px) rotate(2.5deg); }
  }
  @keyframes float-card-c {
    0%, 100% { transform: translateY(0px) rotate(-2deg); }
    60% { transform: translateY(-14px) rotate(-1deg); }
  }
  @keyframes blob-move {
    0%, 100% { transform: translate(0,0) scale(1); }
    33% { transform: translate(30px,-20px) scale(1.05); }
    66% { transform: translate(-20px,20px) scale(0.97); }
  }
  @keyframes fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
  @keyframes scroll-bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(6px); }
  }
  .hero-tag  { animation: fade-up 0.7s 0.1s both; }
  .hero-h1   { animation: fade-up 0.7s 0.2s both; }
  .hero-p    { animation: fade-up 0.7s 0.35s both; }
  .hero-cta  { animation: fade-up 0.7s 0.5s both; }
  .hero-badge{ animation: fade-up 0.7s 0.6s both; }
  .logo-float{ animation: float-slow 5s ease-in-out infinite; }
  .card-a    { animation: float-card-a 4.5s ease-in-out infinite; }
  .card-c    { animation: float-card-c 4s ease-in-out 0.4s infinite; }
  .blob-1    { animation: blob-move 9s ease-in-out infinite; }
  .blob-2    { animation: blob-move 11s ease-in-out infinite reverse; }
  .scroll-ind{ animation: scroll-bounce 2s ease-in-out infinite; }
  .cta-primary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 16px 32px; border-radius: 999px;
    background: linear-gradient(135deg, var(--warm-purple) 0%, var(--deep-purple) 100%);
    color: white; font-weight: 600; font-size: 15px;
    text-decoration: none; letter-spacing: 0.01em;
    box-shadow: 0 8px 32px rgba(61,46,107,0.35);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 40px rgba(61,46,107,0.45); }
  .cta-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 16px 32px; border-radius: 999px;
    background: white; color: var(--text-dark);
    font-weight: 500; font-size: 15px; text-decoration: none;
    border: 1.5px solid rgba(124,107,181,0.2);
    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    transition: transform 0.25s, box-shadow 0.25s;
  }
  .cta-secondary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.12); }
  .stat-chip {
    display: flex; align-items: center; gap: 10px;
    background: white; border-radius: 12px; padding: 10px 16px;
    box-shadow: 0 4px 20px rgba(61,46,107,0.1);
    border: 1px solid rgba(124,107,181,0.08);
  }
`

export default function Hero() {
  const statChips = [
    { icon: '💬', label: '익명 상담', sub: '24/7' },
    { icon: '📖', label: '교랑 스토리', sub: '감정 다이어리' },
  ]

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      backgroundColor: 'var(--cream)', overflow: 'hidden',
    }}>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: heroStyles }} />

      <div className="blob-1" style={{
        position: 'absolute', top: '-15%', right: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,107,181,0.22) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div className="blob-2" style={{
        position: 'absolute', bottom: '-10%', left: '-8%',
        width: '480px', height: '480px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232,98,154,0.18) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(124,107,181,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '100px 32px 80px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '64px', alignItems: 'center', width: '100%',
      }}>
        {/* 텍스트 영역 */}
        <div>
          <div className="hero-tag" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 14px', borderRadius: '999px',
            background: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)',
            fontSize: '13px', fontWeight: 600, marginBottom: '28px',
            border: '1px solid rgba(124,107,181,0.15)', letterSpacing: '0.02em',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              backgroundColor: 'var(--warm-purple)', display: 'inline-block',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }} />
            교랑 플랫폼
          </div>

          <h1 className="font-display hero-h1" style={{
            fontSize: 'clamp(48px, 6vw, 76px)', lineHeight: 1.15,
            marginBottom: '28px', color: 'var(--text-dark)', letterSpacing: '-0.03em',
          }}>
            말하지 못한<br />
            <span style={{
              background: 'linear-gradient(135deg, var(--warm-purple), var(--deep-purple))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>마음을</span><br />
            꺼낼 수 있는 곳
          </h1>

          <p className="hero-p" style={{
            fontSize: '17px', lineHeight: 1.9, color: 'var(--text-mid)',
            maxWidth: '400px', marginBottom: '44px',
          }}>
            교랑이와 함께하는 상담부터 소통,<br />
            그리고 일상의 작은 즐거움까지.
          </p>

          <div className="hero-cta" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a href="https://kyorang.ai.kr" target="_blank" rel="noopener noreferrer" className="cta-primary">
              교랑이에게 털어놓기
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="hero-badge" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {statChips.map((s, i) => (
              <div key={i} className="stat-chip">
                <span style={{ fontSize: '18px' }}>{s.icon}</span>
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1 }}>{s.label}</p>
                  <p style={{ fontSize: '11px', color: 'var(--text-light)', marginTop: '2px' }}>{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 비주얼 영역 */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '480px' }}>
          <div style={{
            position: 'absolute', width: '320px', height: '320px', borderRadius: '50%',
            background: 'linear-gradient(135deg, rgba(124,107,181,0.12), rgba(232,98,154,0.08))',
            border: '1px solid rgba(124,107,181,0.1)',
          }} />
          <div style={{
            position: 'absolute', width: '380px', height: '380px', borderRadius: '50%',
            border: '1px dashed rgba(124,107,181,0.12)',
          }} />

          <div className="logo-float" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              width: '160px', height: '160px', borderRadius: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(150deg, #F5EDF8 0%, #E8D8F0 50%, #D4C2E8 100%)',
              boxShadow: '0 32px 80px rgba(124,107,181,0.3), 0 8px 24px rgba(61,46,107,0.15)',
            }}>
              <Image src="/logo.png" alt="교랑" width={96} height={96} priority />
            </div>
          </div>

          <div className="card-a" style={{
            position: 'absolute', top: '40px', left: '-10px', zIndex: 3,
            background: 'white', borderRadius: '18px', padding: '14px 18px',
            boxShadow: '0 12px 40px rgba(61,46,107,0.14)',
            border: '1px solid rgba(124,107,181,0.08)', minWidth: '130px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #3D2E6B, #7C6BB5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '14px' }}>🤍</span>
              </div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--deep-purple)' }}>교랑이</p>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-light)', lineHeight: 1.5 }}>고민 상담 중이에요</p>
            <div style={{ display: 'flex', gap: '3px', marginTop: '8px' }}>
              {[0.4, 0.6, 0.8].map((op, i) => (
                <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--warm-purple)', opacity: op }} />
              ))}
            </div>
          </div>

          <div className="card-c" style={{
            position: 'absolute', bottom: '72px', left: '0', zIndex: 3,
            background: 'white', borderRadius: '18px', padding: '14px 18px',
            boxShadow: '0 12px 40px rgba(124,107,181,0.14)',
            border: '1px solid rgba(124,107,181,0.08)', minWidth: '140px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #89CFF0, #4A9FD5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '14px' }}>📖</span>
              </div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: '#2271A8' }}>교랑 스토리</p>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>감정을 기록해요</p>
          </div>

          <div style={{
            position: 'absolute', bottom: '80px', right: '-10px', zIndex: 3,
            background: 'white', borderRadius: '18px', padding: '14px 18px',
            boxShadow: '0 12px 40px rgba(61,46,107,0.1)',
            border: '1px solid rgba(124,107,181,0.08)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #F5E6D3, #E8C9A0)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '14px' }}>💬</span>
              </div>
              <div>
                <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--warm-purple)' }}>교랑톡</p>
                <p style={{ fontSize: '11px', color: 'var(--text-light)' }}>친구와 대화</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-ind" style={{
        position: 'absolute', bottom: '36px', left: '50%',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      }}>
        <p style={{ fontSize: '11px', color: 'var(--text-light)', letterSpacing: '0.08em' }}>SCROLL</p>
        <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--text-light), transparent)' }} />
      </div>
    </section>
  )
}