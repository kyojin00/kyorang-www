const feats = [
  {
    title: '친구 목록 · 즐겨찾기',
    desc: '자주 연락하는 친구를 한눈에 모아봐요.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
        <path d="M16 5.5a3 3 0 0 1 0 5.5M18 19c0-2-.8-3.6-2-4.6" />
      </>
    ),
  },
  {
    title: '1:1 · 그룹 채팅',
    desc: '단둘이도, 여럿이도 실시간으로 대화해요.',
    icon: (
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
    ),
  },
  {
    title: '프로필 · 상태 메시지',
    desc: '지금의 마음을 한 줄로 표현해요.',
    icon: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <circle cx="9" cy="11" r="2" />
        <path d="M5.5 17c.6-1.8 2-2.6 3.5-2.6s2.9.8 3.5 2.6M14.5 10h3M14.5 13h3" />
      </>
    ),
  },
]

const purpleBubble = {
  maxWidth: '80%',
  background: 'linear-gradient(135deg,#8A78C7,var(--purple-soft))',
} as const

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
            사람과 사람을 잇는
            <br />
            가장 가까운 메신저
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
            친구를 추가하고, 1:1·그룹으로 실시간 대화해요. 매일의 이야기가 편하게
            오가는 교랑의 메신저예요.
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
                  <circle cx="12" cy="9" r="3.2" />
                  <path d="M6 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
                </svg>
              </span>
              <div>
                <div style={{ fontSize: '17px', fontWeight: 800, letterSpacing: '-.02em' }}>
                  익명2
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(231,224,255,.55)', marginTop: '2px' }}>
                  <span className="fg-online" />
                  온라인
                </div>
              </div>
            </div>
            <div className="fg-chat">
              <div className="bubble them" style={{ maxWidth: '80%' }}>
                오늘 점심 뭐 먹었어?
              </div>
              <div className="bubble me" style={purpleBubble}>
                김밥 먹었지
              </div>
              <div className="bubble them" style={{ maxWidth: '80%' }}>
                헐 나도! 우리 통했다
              </div>
              <div className="bubble me" style={purpleBubble}>
                다음엔 같이 먹자
              </div>
            </div>
            <div className="fg-inputbar">
              <span>메시지 입력</span>
              <span className="send">
                <svg className="ico" width="15" height="15" viewBox="0 0 24 24" stroke="#fff">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}