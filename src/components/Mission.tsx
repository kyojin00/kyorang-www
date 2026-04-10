import Image from 'next/image'

export default function Mission() {
  const values = [
    {
      title: '안전한 익명성',
      desc: '누구에게도 말 못한 이야기를 안전하게 꺼낼 수 있는 공간을 만들어요.',
      icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      gradient: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
    },
    {
      title: '따뜻한 연결',
      desc: '혼자 들고 다니지 않아도 돼요. 교랑이 옆에서 함께할게요.',
      icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
      gradient: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
    },
    {
      title: '일상의 기쁨',
      desc: '교랑이 캐릭터와 함께하는 소소한 굿즈로 일상에 작은 행복을 더해요.',
      icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
      gradient: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
    },
  ]

  return (
    <>
      <style>{`
        .value-card-inner {
          border-radius: 20px;
          padding: 22px 24px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), background 0.25s;
        }
        .value-card-inner:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,0.11);
        }
        .mission-logo-float {
          animation: float-slow 5s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>

      <section id="mission" style={{
        padding: '120px 0', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(160deg, #1E1245 0%, #2D1F58 35%, #4A3490 70%, #6251A8 100%)',
      }}>
        {/* 배경 장식 */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,107,181,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,98,154,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        {/* 미세 도트 */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* 왼쪽 */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '7px 16px', borderRadius: '999px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 600,
                marginBottom: '28px', border: '1px solid rgba(255,255,255,0.12)',
                letterSpacing: '0.02em',
              }}>우리의 미션</div>

              <h2 className="font-display" style={{
                fontSize: 'clamp(34px, 4vw, 52px)', color: 'white',
                lineHeight: 1.2, marginBottom: '24px', letterSpacing: '-0.03em',
              }}>
                혼자 들고 다니지<br />않아도 괜찮아요
              </h2>

              <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '380px' }}>
                교랑은 마음속 이야기를 꺼낼 수 있는 안전한 공간을 만들어요.
                익명이라는 자유 속에서, 진심 어린 연결을 경험해보세요.
              </p>

              {/* 교랑이 프로필 */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '16px',
                padding: '16px 24px', borderRadius: '20px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
              }}>
                <div className="mission-logo-float" style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Image src="/logo.png" alt="교랑이" width={36} height={36} />
                </div>
                <div>
                  <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>교랑이</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '2px' }}>언제나 당신 곁에 있을게요</p>
                </div>
              </div>
            </div>

            {/* 오른쪽 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {values.map((v, i) => (
                <div key={i} className="value-card-inner">
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.9)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    {v.icon}
                  </div>
                  <div>
                    <p style={{ color: 'white', fontWeight: 700, marginBottom: '6px', fontSize: '15px' }}>{v.title}</p>
                    <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </div>
              ))}

              {/* 수치 */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginTop: '8px',
              }}>
                {[
                  { num: '4', label: '서비스' },
                  { num: '24/7', label: '운영' },
                  { num: '100%', label: '익명 보장' },
                ].map((s, i) => (
                  <div key={i} style={{
                    textAlign: 'center', padding: '16px',
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <p style={{ fontSize: '24px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>{s.num}</p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}