export default function Services() {
  const services = [
    {
      tag: 'AI 상담',
      emoji: '🐾',
      name: '교랑AI',
      nameEn: 'KYORANG AI',
      desc: '익명으로 고민을 털어놓으면 교랑이 AI가 따뜻하게 들어드려요. 판단 없이, 언제든지.',
      features: ['익명 보장', 'GPT-4o 기반', '24시간 응답', '고민 분석'],
      cta: '교랑이에게 털어놓기',
      href: 'https://kyorang.ai.kr',
      color: 'var(--deep-purple)',
      bg: '#EDE8F7',
    },
    {
      tag: '익명 SNS',
      emoji: '💬',
      name: '교랑톡',
      nameEn: 'KYORANG TALK',
      desc: '비슷한 고민을 가진 낯선 누군가와 익명으로 대화해보세요. 말만 해도 한결 가벼워져요.',
      features: ['랜덤 매칭', '완전 익명', '실시간 채팅', '자동 닉네임'],
      cta: '익명 채팅 시작하기',
      href: 'https://talk.kyorang.com',
      color: '#B86A4A',
      bg: '#FAF0E8',
    },
  ]

  return (
    <section id="services" className="py-28 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--warm-purple)' }}>Services</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Noto Serif KR', color: 'var(--deep-purple)', lineHeight: 1.4 }}>교랑의 서비스</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.name} className="rounded-3xl p-10 flex flex-col gap-6 transition-transform hover:-translate-y-1" style={{ background: s.bg }}>
              <div>
                <span className="text-xs font-medium px-3 py-1 rounded-full inline-block mb-4" style={{ background: s.color, color: 'white', opacity: 0.85 }}>{s.tag}</span>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{s.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Noto Serif KR', color: s.color }}>{s.name}</h3>
                    <p className="text-xs tracking-widest" style={{ color: s.color, opacity: 0.6 }}>{s.nameEn}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--soft-brown)' }}>{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span key={f} className="text-xs px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.7)', color: s.color }}>{f}</span>
                ))}
              </div>
              <a href={s.href} target="_blank" className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70 mt-auto" style={{ color: s.color }}>{s.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}