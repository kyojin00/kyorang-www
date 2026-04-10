export default function Services() {
  const services = [
    {
      name: '교랑이',
      tag: 'AI 상담',
      url: 'https://kyorang.ai.kr',
      desc: '말하기 어려운 고민을 교랑이에게 털어놓으세요. 익명으로 안전하게, 교랑이가 진심 어린 답변을 드려요.',
      features: ['완전 익명', '교랑이 상담', '24시간 운영'],
      emoji: '🤍',
      bg: 'linear-gradient(150deg, #2D1F58 0%, #4A3490 60%, #6B52B0 100%)',
      orb: 'rgba(124,107,181,0.5)',
      tagColor: 'rgba(255,255,255,0.7)', tagBg: 'rgba(255,255,255,0.12)',
      nameColor: 'white', descColor: 'rgba(255,255,255,0.65)',
      fBg: 'rgba(255,255,255,0.1)', fColor: 'rgba(255,255,255,0.75)',
      btnStyle: { background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' },
    },
    {
      name: '교랑 스토리',
      tag: '감정 일기 · SNS',
      url: 'https://story.kyorang.com',
      desc: '익명으로 감정을 기록하고, 피드에서 일상을 공유해요. 나만의 감정 다이어리부터 SNS까지 하나의 공간에서.',
      features: ['익명 피드', 'SNS 피드', '감정 다이어리'],
      emoji: '📖',
      bg: 'linear-gradient(150deg, #1A3A5C 0%, #2A5F8F 60%, #4A90C4 100%)',
      orb: 'rgba(74,144,196,0.5)',
      tagColor: 'rgba(255,255,255,0.7)', tagBg: 'rgba(255,255,255,0.12)',
      nameColor: 'white', descColor: 'rgba(255,255,255,0.65)',
      fBg: 'rgba(255,255,255,0.1)', fColor: 'rgba(255,255,255,0.75)',
      btnStyle: { background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' },
      badge: 'NEW',
    },
    {
      name: '교랑톡',
      tag: '메신저',
      url: 'https://talk.kyorang.com',
      desc: '교랑이와 함께하는 공간에서 새로운 친구를 만나고 대화해요. 부담 없이 연결되는 따뜻한 소통 공간이에요.',
      features: ['닉네임 사용', '1:1 채팅', '오픈채팅'],
      emoji: '💬',
      bg: 'linear-gradient(150deg, #FDF0E3 0%, #F5E0C8 100%)',
      orb: 'rgba(200,150,90,0.25)',
      tagColor: 'var(--warm-purple)', tagBg: 'rgba(61,46,107,0.1)',
      nameColor: 'var(--text-dark)', descColor: 'var(--text-mid)',
      fBg: 'rgba(61,46,107,0.07)', fColor: 'var(--text-mid)',
      btnStyle: { background: 'var(--deep-purple)', color: 'white', border: 'none' },
    },
    {
      name: '교랑샵',
      tag: '캐릭터 굿즈',
      url: 'https://shop.kyorang.com',
      desc: '교랑이 캐릭터를 담은 귀여운 소품들을 만나보세요. 문구, 키링, 엽서 등 다양한 굿즈가 준비되어 있어요.',
      features: ['캐릭터 굿즈', '소품/문구', '빠른 배송'],
      emoji: '🛍️',
      bg: 'linear-gradient(150deg, #FFF0F5 0%, #FFD6E5 100%)',
      orb: 'rgba(232,98,154,0.3)',
      tagColor: 'var(--pink)', tagBg: 'rgba(232,98,154,0.1)',
      nameColor: 'var(--text-dark)', descColor: 'var(--text-mid)',
      fBg: 'rgba(232,98,154,0.08)', fColor: 'var(--text-mid)',
      btnStyle: { background: 'var(--pink)', color: 'white', border: 'none' },
    },
  ]

  return (
    <>
      <style>{`
        .service-card-wrap {
          border-radius: 28px;
          padding: 36px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(61,46,107,0.1);
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s;
          cursor: default;
        }
        .service-card-wrap:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(61,46,107,0.18);
        }
        .service-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
          letter-spacing: 0.01em;
        }
        .service-btn:hover { opacity: 0.88; transform: scale(0.98); }
      `}</style>

      <section id="services" style={{ padding: '120px 0', backgroundColor: 'var(--cream)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>

          {/* 헤더 */}
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '7px 16px', borderRadius: '999px',
              backgroundColor: 'rgba(124,107,181,0.1)',
              color: 'var(--warm-purple)', fontSize: '13px', fontWeight: 600,
              marginBottom: '20px', border: '1px solid rgba(124,107,181,0.15)',
              letterSpacing: '0.02em',
            }}>서비스</div>
            <h2 className="font-display" style={{
              fontSize: 'clamp(34px, 4vw, 52px)', color: 'var(--text-dark)',
              marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.2,
            }}>
              교랑이와 함께하는<br />모든 것
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-mid)', maxWidth: '380px', margin: '0 auto', lineHeight: 1.8 }}>
              상담부터 소통, 기록, 쇼핑까지 — 교랑이가 항상 곁에 있어요
            </p>
          </div>

          {/* 2×2 카드 그리드 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            {services.map(s => (
              <div key={s.name} className="service-card-wrap" style={{ background: s.bg }}>
                {/* 배경 오브 */}
                <div style={{
                  position: 'absolute', top: '-40px', right: '-40px',
                  width: '180px', height: '180px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${s.orb}, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {s.badge && (
                  <div style={{
                    position: 'absolute', top: '24px', right: '24px',
                    fontSize: '10px', fontWeight: 800, padding: '4px 10px',
                    borderRadius: '999px', backgroundColor: '#FF4B8A', color: 'white',
                    letterSpacing: '0.06em',
                  }}>{s.badge}</div>
                )}

                {/* 태그 + 이모지 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <div style={{
                    display: 'inline-flex', padding: '5px 12px', borderRadius: '999px',
                    backgroundColor: s.tagBg, color: s.tagColor,
                    fontSize: '12px', fontWeight: 600,
                  }}>{s.tag}</div>
                  <div style={{ fontSize: '28px' }}>{s.emoji}</div>
                </div>

                <h3 className="font-display" style={{
                  fontSize: '36px', color: s.nameColor,
                  marginBottom: '12px', letterSpacing: '-0.03em', lineHeight: 1.1,
                }}>
                  {s.name}
                </h3>

                <p style={{
                  fontSize: '14px', lineHeight: 1.75, color: s.descColor,
                  marginBottom: '24px', flex: 1,
                }}>
                  {s.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
                  {s.features.map(f => (
                    <span key={f} style={{
                      fontSize: '12px', padding: '5px 12px', borderRadius: '999px',
                      backgroundColor: s.fBg, color: s.fColor, fontWeight: 500,
                    }}>{f}</span>
                  ))}
                </div>

                <a href={s.url} target="_blank" rel="noopener noreferrer" className="service-btn" style={s.btnStyle as React.CSSProperties}>
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
    </>
  )
}