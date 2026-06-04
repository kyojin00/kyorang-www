const feats = [
  {
    title: '대화로 남기는 기분 기록',
    desc: '오늘의 마음을 무디와 이야기하며 기록해요.',
    icon: (
      <>
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3V6Z" />
        <path d="M8 9h8M8 12h5" />
      </>
    ),
  },
  {
    title: '무디의 AI 상담',
    desc: '판단하지 않고, 조용히 마음을 들어줘요.',
    icon: (
      <>
        <path d="M20 13.5A8 8 0 1 1 10.5 4a6.3 6.3 0 0 0 9.5 9.5Z" />
        <path d="m17.5 3.5.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" />
      </>
    ),
  },
  {
    title: '돌아보기 & 맞춤 제안',
    desc: '달력·통계로 마음의 흐름을 되짚어봐요.',
    icon: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="3" />
        <path d="M4 9h16M8 3v3M16 3v3" />
        <circle cx="9" cy="14" r="1.3" />
        <circle cx="15" cy="14" r="1.3" />
      </>
    ),
  },
]

export default function MoodFeature() {
  return (
    <section className="block flagship moodsec" id="mood">
      <div className="wrap">
        <div className="fg-visual reveal">
          <div className="mood-demo">
            <div className="mood-demo-top">
              <span className="mood-demo-cat">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path
                    d="M9 9l4 5h14l4-5-1 9c2 2 3 5 3 8 0 6-5 10-13 10S7 41 7 35c0-3 1-6 3-8L9 9Z"
                    fill="#F2A86A"
                  />
                  <path
                    d="M9 9l4 5-1 4-4-2 1-7ZM31 9l-4 5 1 4 4-2-1-7Z"
                    fill="#E89554"
                  />
                  <circle cx="15.5" cy="22" r="1.6" fill="#5B3A2A" />
                  <circle cx="24.5" cy="22" r="1.6" fill="#5B3A2A" />
                  <path
                    d="M18 26q2 1.6 4 0"
                    stroke="#5B3A2A"
                    strokeWidth="1.3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
            <div className="mood-demo-date">6월 4일 목요일 · 아침</div>
            <div className="mood-demo-card">
              <p className="mc-greet">
                좋은 아침이에요, OO님.
                <br />
                오늘은 어떻게 시작해요?
              </p>
              <p className="mc-user">마음이 가벼운 하루야</p>
              <p className="mc-reply">
                기분이 좋으신 것 같아 다행이에요. 오늘 하루도 즐겁게 보내세요.
              </p>
            </div>
          </div>
        </div>

        <div className="reveal">
          <span className="eyebrow on-dark">교랑무드</span>
          <h2
            style={{
              fontSize: 'clamp(28px,3.6vw,42px)',
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 1.25,
            }}
          >
            내 마음을 들어주는
            <br />
            AI 비서, 무디
          </h2>
          <p
            className="lead"
            style={{
              fontSize: '16.5px',
              lineHeight: 1.85,
              marginTop: '18px',
              maxWidth: '430px',
            }}
          >
            무디와 대화하듯 오늘의 마음을 남기면, AI 비서가 이야기를 들어주고 꼭
            맞는 한마디를 건네요. 쌓인 기록은 돌아보기에서 한눈에 볼 수 있어요.
          </p>

          <div className="fg-feats">
            {feats.map((f) => (
              <div className="fg-feat" key={f.title}>
                <span className="fi">
                  <svg className="ico" viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </span>
                <div>
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <span
            className="btn btn-primary"
            style={{
              marginTop: '30px',
              cursor: 'default',
              background: 'linear-gradient(135deg,#8A5BD0,#E0689C)',
            }}
          >
            교랑무드 · 모바일 앱
            <svg className="ico" viewBox="0 0 24 24" stroke="#fff">
              <rect x="7" y="3" width="10" height="18" rx="2.5" />
              <path d="M11 18h2" />
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}