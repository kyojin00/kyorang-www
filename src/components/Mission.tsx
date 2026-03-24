export default function Mission() {
  const values = [
    {
      icon: '💬',
      title: '솔직함',
      desc: '판단받을 걱정 없이 진짜 마음을 꺼낼 수 있는 공간이 있다는 것만으로도 많은 게 달라져요.',
    },
    {
      icon: '🤝',
      title: '연결',
      desc: '낯선 누군가와 나눈 짧은 대화가 생각보다 훨씬 큰 위로가 될 수 있어요.',
    },
    {
      icon: '🌱',
      title: '치유',
      desc: '털어놓는 것만으로도 치유는 시작돼요. 교랑은 그 첫 걸음 옆에 있고 싶어요.',
    },
  ]

  return (
    <section id="mission" className="py-28 px-6" style={{ background: 'var(--peach)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase mb-4 font-medium" style={{ color: 'var(--warm-purple)' }}>Our Mission</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Noto Serif KR', color: 'var(--deep-purple)', lineHeight: 1.4 }}>
            혼자 들고 다니지<br />않아도 괜찮아요
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--soft-brown)', fontWeight: 300 }}>
            누구에게나 말 못할 고민이 있어요. 교랑은 그 고민을 꺼낼 수 있는 공간을 만드는 팀이에요. 기술은 그 연결을 돕는 도구일 뿐이에요.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl p-8 transition-transform hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}>
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Noto Serif KR', color: 'var(--deep-purple)' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--soft-brown)' }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}