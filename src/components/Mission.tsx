export default function Mission() {
  const values = [
    {
      icon: '💬',
      title: '솔직함',
      desc: '익명이라는 안전한 공간에서 누구든 진짜 마음을 꺼낼 수 있어야 한다고 믿어요.',
    },
    {
      icon: '🤝',
      title: '연결',
      desc: 'AI와 사람, 사람과 사람 사이의 진심 어린 연결을 만드는 것이 우리의 목표예요.',
    },
    {
      icon: '🌱',
      title: '성장',
      desc: '털어놓는 것만으로도 치유가 시작된다고 믿어요. 교랑이 그 첫 걸음이 되고 싶어요.',
    },
  ]

  return (
    <section
      id="mission"
      className="py-28 px-6"
      style={{ background: 'var(--peach)' }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-sm tracking-widest uppercase mb-4 font-medium"
            style={{ color: 'var(--warm-purple)' }}
          >
            Our Mission
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Noto Serif KR', color: 'var(--deep-purple)', lineHeight: 1.4 }}
          >
            고민이 가벼워지는 세상
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--soft-brown)', fontWeight: 300 }}
          >
            무겁게 들고 다니던 고민을 누군가에게 털어놓는 것,
            그 작은 행동이 삶을 바꾼다고 믿습니다.
            교랑은 그 공간을 만드는 팀입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl p-8 transition-transform hover:-translate-y-1"
              style={{ background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(8px)' }}
            >
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: 'Noto Serif KR', color: 'var(--deep-purple)' }}
              >
                {v.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--soft-brown)' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}