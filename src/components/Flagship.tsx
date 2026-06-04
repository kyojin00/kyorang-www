const feats = [
  {
    title: '피드로 일상 공유',
    desc: '사진과 글로 오늘을 남기고 친구들과 나눠요.',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M4 15l4-4 3 3 5-5 4 4" />
        <circle cx="9" cy="9" r="1.4" />
      </>
    ),
  },
  {
    title: '친구 · 팔로우',
    desc: '관심 가는 사람과 이어지고 소식을 받아봐요.',
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
        <path d="M16 5.5a3 3 0 0 1 0 5.5M18 19c0-2-.8-3.6-2-4.6" />
      </>
    ),
  },
  {
    title: '실시간 채팅',
    desc: '1:1·그룹 메시지로 언제든 가깝게 대화해요.',
    icon: (
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
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
            사람과 사람을 잇는
            <br />
            가장 따뜻한 SNS
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
            교랑톡은 일상을 나누고 마음으로 이어지는 소셜 공간이에요. 피드로 하루를
            공유하고, 친구와 메시지로 가깝게 연결돼요.
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
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
                  <path d="M16 5.5a3 3 0 0 1 0 5.5" />
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
                  소셜 피드
                </div>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                background: 'rgba(255,255,255,.08)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: '18px',
                padding: '18px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '13px',
                }}
              >
                <span
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#8A78C7,#E0689C)',
                    display: 'block',
                  }}
                />
                <div>
                  <div
                    style={{ fontSize: '13.5px', fontWeight: 700, color: '#fff' }}
                  >
                    달빛산책
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(231,224,255,.5)' }}>
                    3분 전
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: '13.5px',
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,.85)',
                  marginBottom: '15px',
                }}
              >
                퇴근길 노을이 예뻐서 한참 올려다봤어요. 오늘 하루도 다들 수고했어요.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'center',
                  color: 'rgba(231,224,255,.6)',
                  fontSize: '12.5px',
                  fontWeight: 600,
                }}
              >
                <span
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <svg
                    className="ico"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke="#E0689C"
                  >
                    <path d="M12 20s-7-4.3-9.2-9C1.5 8 3 4.8 6.2 4.8c2 0 3.2 1.2 3.8 2.4.6-1.2 1.8-2.4 3.8-2.4 3.2 0 4.7 3.2 3.4 6.2C19 15.7 12 20 12 20Z" />
                  </svg>
                  24
                </span>
                <span
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <svg
                    className="ico"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    stroke="rgba(255,255,255,.7)"
                  >
                    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
                  </svg>
                  6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}