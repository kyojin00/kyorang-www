import Image from 'next/image'

export default function Mission() {
  const values = [
    {
      title: '안전한 익명성',
      desc: '누구에게도 말 못한 이야기를 안전하게 꺼낼 수 있는 공간을 만들어요.',
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    },
    {
      title: '따뜻한 연결',
      desc: '혼자 들고 다니지 않아도 돼요. 교랑이 옆에서 함께할게요.',
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    },
    {
      title: '일상의 기쁨',
      desc: '교랑이 캐릭터와 함께하는 소소한 굿즈로 일상에 작은 행복을 더해요.',
      icon: <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    },
  ]

  return (
    <section id="mission" style={{
      padding: '112px 0', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(160deg, #3D2E6B 0%, #5A4498 50%, #7C6BB5 100%)',
    }}>
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '320px', height: '320px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '64px', alignItems: 'center' }}>

          {/* 왼쪽 */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', borderRadius: '999px',
              backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)',
              fontSize: '14px', fontWeight: 500, marginBottom: '32px',
            }}>우리의 미션</div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 48px)', color: 'white',
              lineHeight: 1.3, marginBottom: '24px',
            }}>
              혼자 들고 다니지<br />않아도 괜찮아요
            </h2>

            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)', marginBottom: '40px' }}>
              교랑은 마음속 이야기를 꺼낼 수 있는 안전한 공간을 만들어요.
              익명이라는 자유 속에서, 진심 어린 연결을 경험해보세요.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div className="anim-float" style={{
                width: '64px', height: '64px', borderRadius: '16px',
                backgroundColor: 'rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Image src="/logo.png" alt="교랑이" width={40} height={40} />
              </div>
              <div>
                <p style={{ color: 'white', fontWeight: 700, fontSize: '17px' }}>교랑이</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', marginTop: '2px' }}>언제나 당신 곁에</p>
              </div>
            </div>
          </div>

          {/* 오른쪽 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {values.map((v, i) => (
              <div key={i} className="value-card" style={{
                borderRadius: '16px', padding: '20px',
                display: 'flex', alignItems: 'flex-start', gap: '16px',
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(8px)',
                transition: 'transform 0.2s ease',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  backgroundColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)',
                }}>
                  {v.icon}
                </div>
                <div>
                  <p style={{ color: 'white', fontWeight: 700, marginBottom: '4px' }}>{v.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}