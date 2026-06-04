const values = [
  {
    title: '마음을 먼저',
    desc: '기술은 도구일 뿐, 우리는 사람의 감정과 마음을 가장 먼저 생각합니다.',
    icon: (
      <path d="M12 20s-7-4.3-9.2-9C1.5 8 3 4.8 6.2 4.8c2 0 3.2 1.2 3.8 2.4.6-1.2 1.8-2.4 3.8-2.4 3.2 0 4.7 3.2 3.4 6.2C19 15.7 12 20 12 20Z" />
    ),
  },
  {
    title: '안전한 연결',
    desc: '익명성과 프라이버시를 지키며, 누구나 편안하게 소통할 수 있는 환경을 만듭니다.',
    icon: (
      <>
        <path d="M12 3 5 6v5c0 4.4 3 8.4 7 9.6 4-1.2 7-5.2 7-9.6V6l-7-3Z" />
        <path d="m9.3 12 1.9 1.9 3.6-3.7" />
      </>
    ),
  },
  {
    title: '따뜻한 일상',
    desc: '상담·소통·기록까지, 일상의 모든 순간에 작은 위로를 더합니다.',
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C13 3 19 4 19 4s1 6-2.1 9.2A7 7 0 0 1 11 20Z" />
        <path d="M5 19c2-4 5-6 8-7" />
      </>
    ),
  },
]

export default function About() {
  return (
    <section className="block about" id="about">
      <div className="spotlight" />
      <div className="particle-field" />
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow on-dark">About KYORANG</span>
          <h2>우리는 &lsquo;마음&rsquo;에서 시작합니다</h2>
          <p>
            화려한 기능보다, 사람의 마음을 먼저 생각합니다.
            <br />
            교랑은 누구나 부담 없이 자신의 마음을 꺼낼 수 있는 공간을 만듭니다.
          </p>
        </div>

        <p className="mission-quote reveal">
          &ldquo;말하지 못한 <span className="hl">마음을 꺼낼 수 있는 곳.</span>
          <br />
          교랑이 언제나 당신 곁에 있을게요.&rdquo;
          <span className="by">— 교랑이 추구하는 단 하나의 약속</span>
        </p>

        <div className="values">
          {values.map((v) => (
            <div className="value reveal" key={v.title}>
              <div className="v-ic">
                <svg className="ico" viewBox="0 0 24 24">
                  {v.icon}
                </svg>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}