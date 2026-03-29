export default function Services() {
  const services = [
    {
      name: '교랑이',
      tag: '교랑이에게 털어놓으세요',
      url: 'https://kyorang.ai.kr',
      desc: '말하기 어려운 고민을 교랑이에게 털어놓으세요. 익명으로 안전하게, 교랑이가 진심 어린 답변을 드려요.',
      features: ['완전 익명', '교랑이 상담', '24시간 운영'],
      bg: 'linear-gradient(135deg, #3D2E6B 0%, #7C6BB5 100%)',
      tagColor: 'rgba(255,255,255,0.75)', tagBg: 'rgba(255,255,255,0.15)',
      nameColor: 'white', descColor: 'rgba(255,255,255,0.7)',
      fBg: 'rgba(255,255,255,0.12)', fColor: 'rgba(255,255,255,0.8)',
      btnBg: 'rgba(255,255,255,0.18)', btnColor: 'white', btnBorder: 'rgba(255,255,255,0.3)',
    },
    {
      name: '교랑톡',
      tag: '교랑이와 친구들',
      url: 'https://talk.kyorang.com',
      desc: '교랑이와 함께하는 공간에서 새로운 친구를 만나고 대화해요. 부담 없이 연결되는 따뜻한 소통 공간이에요.',
      features: ['닉네임 사용', '1:1 채팅', '프로필 커스텀'],
      bg: 'linear-gradient(135deg, #F5E6D3 0%, #EDD5BB 100%)',
      tagColor: 'var(--text-mid)', tagBg: 'rgba(61,46,107,0.1)',
      nameColor: 'var(--text-dark)', descColor: 'var(--text-mid)',
      fBg: 'rgba(61,46,107,0.07)', fColor: 'var(--text-mid)',
      btnBg: 'var(--deep-purple)', btnColor: 'white', btnBorder: 'transparent',
    },
    {
      name: '교랑샵',
      tag: '교랑이 소품샵',
      url: 'https://shop.kyorang.com',
      desc: '교랑이 캐릭터를 담은 귀여운 소품들을 만나보세요. 문구, 키링, 엽서 등 다양한 굿즈가 준비되어 있어요.',
      features: ['캐릭터 굿즈', '소품/문구', '빠른 배송'],
      bg: 'linear-gradient(135deg, #FFE4EC 0%, #FFCDE0 100%)',
      tagColor: 'var(--pink)', tagBg: 'rgba(232,98,154,0.12)',
      nameColor: 'var(--text-dark)', descColor: 'var(--text-mid)',
      fBg: 'rgba(232,98,154,0.08)', fColor: 'var(--text-mid)',
      btnBg: 'var(--pink)', btnColor: 'white', btnBorder: 'transparent',
      badge: 'NEW',
    },
  ]

  return (
    <section id="services" style={{ padding: '112px 0', backgroundColor: 'var(--cream)' }}>
      <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 24px' }}>

        {/* 헤더 */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 16px', borderRadius: '999px',
            backgroundColor: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)',
            fontSize: '14px', fontWeight: 500, marginBottom: '24px',
          }}>서비스</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', color: 'var(--text-dark)', marginBottom: '16px' }}>
            교랑이와 함께하는 모든 것
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-mid)', maxWidth: '400px', margin: '0 auto' }}>
            상담부터 소통, 쇼핑까지 — 교랑이가 항상 곁에 있어요
          </p>
        </div>

        {/* 카드 그리드 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {services.map(s => (
            <div key={s.name} className="service-card" style={{
              borderRadius: '24px', padding: '32px',
              display: 'flex', flexDirection: 'column',
              background: s.bg, position: 'relative', overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(61,46,107,0.1)',
            }}>
              {s.badge && (
                <div style={{
                  position: 'absolute', top: '20px', right: '20px',
                  fontSize: '11px', fontWeight: 700, padding: '4px 12px',
                  borderRadius: '999px', backgroundColor: 'var(--pink)', color: 'white',
                }}>{s.badge}</div>
              )}

              <div style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                padding: '6px 12px', borderRadius: '999px',
                backgroundColor: s.tagBg, color: s.tagColor,
                fontSize: '12px', fontWeight: 500, marginBottom: '24px',
              }}>{s.tag}</div>

              <h3 className="font-display" style={{ fontSize: '32px', color: s.nameColor, marginBottom: '12px' }}>
                {s.name}
              </h3>

              <p style={{ fontSize: '14px', lineHeight: 1.7, color: s.descColor, marginBottom: '24px', flex: 1 }}>
                {s.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                {s.features.map(f => (
                  <span key={f} style={{
                    fontSize: '12px', padding: '4px 12px', borderRadius: '999px',
                    backgroundColor: s.fBg, color: s.fColor,
                  }}>{f}</span>
                ))}
              </div>

              <a href={s.url} target="_blank" rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  padding: '12px', borderRadius: '16px', fontSize: '14px', fontWeight: 700,
                  backgroundColor: s.btnBg, color: s.btnColor,
                  border: `1.5px solid ${s.btnBorder}`, textDecoration: 'none',
                }}>
                바로가기
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}