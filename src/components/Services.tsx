export default function Services() {
  const services = [
    {
      name: '교랑AI',
      tag: '익명 AI 상담',
      url: 'https://kyorang.ai.kr',
      desc: '말하기 어려운 고민을 교랑이에게 털어놓으세요. 익명으로 안전하게, AI가 진심 어린 답변을 드려요.',
      features: ['완전 익명', 'AI 맞춤 상담', '24시간 운영'],
      gradient: 'linear-gradient(135deg, #3D2E6B 0%, #7C6BB5 100%)',
      tagBg: 'rgba(255,255,255,0.15)',
      btnBg: 'rgba(255,255,255,0.2)',
      btnBorder: 'rgba(255,255,255,0.4)',
      dark: true,
    },
    {
      name: '교랑톡',
      tag: '익명 채팅 SNS',
      url: 'https://talk.kyorang.com',
      desc: '닉네임으로 친구를 만들고 대화해요. 부담 없이 연결되는 따뜻한 익명 소통 공간이에요.',
      features: ['닉네임 사용', '1:1 채팅', '프로필 커스텀'],
      gradient: 'linear-gradient(135deg, #F5E6D3 0%, #EDD5BB 100%)',
      tagBg: 'rgba(61,46,107,0.1)',
      btnBg: 'var(--deep-purple)',
      btnBorder: 'transparent',
      dark: false,
    },
    {
      name: '교랑샵',
      tag: '캐릭터 소품샵',
      url: 'https://shop.kyorang.com',
      desc: '교랑 캐릭터를 담은 귀여운 소품들을 만나보세요. 문구, 키링, 엽서 등 다양한 굿즈가 준비되어 있어요.',
      features: ['캐릭터 굿즈', '소품/문구', '빠른 배송'],
      gradient: 'linear-gradient(135deg, #FFE4EC 0%, #FFCDE0 100%)',
      tagBg: 'rgba(232,98,154,0.15)',
      btnBg: 'var(--pink)',
      btnBorder: 'transparent',
      dark: false,
      badge: 'NEW',
    },
  ]

  return (
    <section id="services" className="py-28 relative" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: 'rgba(124,107,181,0.1)', color: 'var(--warm-purple)' }}
          >
            서비스
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: 'var(--text-dark)' }}>
            교랑의 모든 서비스
          </h2>
          <p className="text-base" style={{ color: 'var(--text-mid)', maxWidth: '400px', margin: '0 auto' }}>
            상담부터 소통, 쇼핑까지 — 교랑과 함께하는 다양한 경험
          </p>
        </div>

        {/* 서비스 카드 그리드 */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.name}
              className="rounded-3xl p-8 flex flex-col relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: service.gradient,
                boxShadow: '0 4px 24px rgba(61,46,107,0.1)',
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {/* NEW 뱃지 */}
              {service.badge && (
                <div
                  className="absolute top-5 right-5 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: 'var(--pink)' }}
                >
                  {service.badge}
                </div>
              )}

              {/* 태그 */}
              <div
                className="inline-flex items-center self-start px-3 py-1.5 rounded-full text-xs font-medium mb-6"
                style={{
                  backgroundColor: service.tagBg,
                  color: service.dark ? 'rgba(255,255,255,0.8)' : 'var(--text-mid)',
                }}
              >
                {service.tag}
              </div>

              {/* 서비스명 */}
              <h3
                className="font-display text-3xl mb-3"
                style={{ color: service.dark ? 'white' : 'var(--text-dark)' }}
              >
                {service.name}
              </h3>

              {/* 설명 */}
              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: service.dark ? 'rgba(255,255,255,0.7)' : 'var(--text-mid)' }}
              >
                {service.desc}
              </p>

              {/* 피처 태그 */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map(f => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: service.dark ? 'rgba(255,255,255,0.12)' : 'rgba(61,46,107,0.07)',
                      color: service.dark ? 'rgba(255,255,255,0.8)' : 'var(--text-mid)',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* 버튼 */}
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold transition-all hover:opacity-90"
                style={{
                  backgroundColor: service.btnBg,
                  border: `1.5px solid ${service.btnBorder}`,
                  color: service.dark ? 'white' : service.btnBg === 'var(--deep-purple)' || service.btnBg === 'var(--pink)' ? 'white' : 'var(--text-dark)',
                  backdropFilter: service.dark ? 'blur(8px)' : 'none',
                }}
              >
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