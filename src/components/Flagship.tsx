const feats = [
  {
    title: '닉네임으로 가볍게',
    desc: '실명 공개 없이 닉네임만으로 자유롭게 소통해요.',
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
      </>
    ),
  },
  {
    title: '1:1 · 오픈채팅',
    desc: '친한 친구와의 대화부터 관심사로 모이는 오픈채팅까지.',
    icon: (
      <>
        <path d="M4 6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8l-4 3V6Z" />
        <path d="M15 9h3a2 2 0 0 1 2 2v8l-3-2h-4a2 2 0 0 1-2-2" />
      </>
    ),
  },
  {
    title: '놓치지 않는 알림',
    desc: '실시간 메시지와 푸시 알림으로 언제나 빠르게 연결돼요.',
    icon: (
      <>
        <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
        <path d="M10 19a2 2 0 0 0 4 0" />
      </>
    ),
  },
]

export default function Flagship() {
  return (
    <section className="block flagship" id="flagship">
      <div className="wrap">
        <div className="reveal">
          <span className="eyebrow">Flagship · 교랑톡</span>
          <h2
            style={{
              fontSize: 'clamp(28px,3.6vw,42px)',
              fontWeight: 800,
              letterSpacing: '-.035em',
              lineHeight: 1.25,
              color: 'var(--ink)',
            }}
          >
            가장 따뜻한 방식으로
            <br />
            사람과 사람을 잇다
          </h2>
          <p
            style={{
              fontSize: '16.5px',
              lineHeight: 1.85,
              color: 'var(--text-mid)',
              marginTop: '18px',
              maxWidth: '430px',
            }}
          >
            교랑의 대표 서비스, 교랑톡. 실명도 부담도 없이, 닉네임 하나로 새로운
            사람과 따뜻하게 연결되는 메신저예요.
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
            style={{ marginTop: '30px', cursor: 'default' }}
          >
            교랑톡 · 모바일 앱
            <svg className="ico" viewBox="0 0 24 24" stroke="#fff">
              <rect x="7" y="3" width="10" height="18" rx="2.5" />
              <path d="M11 18h2" />
            </svg>
          </span>
        </div>

        <div className="fg-visual reveal">
          <div className="fg-card">
            <div className="fg-head">
              <span className="fg-avatar">
                <svg className="ico" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
                </svg>
              </span>
              <div>
                <div
                  style={{
                    fontSize: '17px',
                    fontWeight: 800,
                    letterSpacing: '-.02em',
                  }}
                >
                  교랑톡
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: 'rgba(231,224,255,.55)',
                    marginTop: '2px',
                  }}
                >
                  오픈채팅 · 마음 나눔방
                </div>
              </div>
            </div>
            <div className="fg-chat">
              <div className="bubble them" style={{ maxWidth: '82%' }}>
                오늘 처음 들어와봤어요
              </div>
              <div
                className="bubble me"
                style={{
                  maxWidth: '82%',
                  background: 'linear-gradient(135deg,#8A78C7,var(--purple-soft))',
                }}
              >
                반가워요! 편하게 이야기해요
              </div>
              <div className="bubble them" style={{ maxWidth: '82%' }}>
                여기 분위기 너무 따뜻하네요
              </div>
              <div
                className="bubble me"
                style={{
                  maxWidth: '82%',
                  background: 'linear-gradient(135deg,#8A78C7,var(--purple-soft))',
                }}
              >
                교랑톡이니까요
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}