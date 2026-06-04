export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="aurora">
        <span className="b1" />
        <span className="b2" />
        <span className="b3" />
      </div>
      <div className="wrap">
        <div className="reveal in">
          <span className="eyebrow">
            <span className="dot" />
            KYORANG Platform
          </span>
          <h1>
            마음을 잇는
            <br />
            <span className="grad">기술</span>을 만듭니다
          </h1>
          <p className="lead">
            교랑은 소통부터 기록, 마음 돌봄까지 — 사람과 사람, 그리고 나의 마음을
            따뜻하게 잇는 서비스를 만드는 회사입니다.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              서비스 둘러보기
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a href="#about" className="btn btn-ghost">
              회사 소개
            </a>
          </div>
        </div>

        <div className="hero-visual reveal in">
          <div className="phone-ring" />
          <div className="phone">
            <div className="phone-screen">
              {/* 교랑무드 화면 */}
              <div className="ph-face mood">
                <div className="md-top">
                  <span className="md-cat">
                    <svg width="34" height="34" viewBox="0 0 40 40">
                      <path
                        d="M9 9l4 5h14l4-5-1 9c2 2 3 5 3 8 0 6-5 10-13 10S7 41 7 35c0-3 1-6 3-8L9 9Z"
                        fill="#F2A86A"
                      />
                      <path
                        d="M9 9l4 5-1 4-4-2 1-7ZM31 9l-4 5 1 4 4-2-1-7Z"
                        fill="#E89554"
                      />
                      <circle cx="15.5" cy="22" r="1.5" fill="#5B3A2A" />
                      <circle cx="24.5" cy="22" r="1.5" fill="#5B3A2A" />
                      <path
                        d="M18 26q2 1.6 4 0"
                        stroke="#5B3A2A"
                        strokeWidth="1.2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="md-more">
                    <svg className="ico" width="18" height="18" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="1.4" />
                      <circle cx="12" cy="12" r="1.4" />
                      <circle cx="12" cy="19" r="1.4" />
                    </svg>
                  </span>
                </div>
                <div className="md-date">6월 4일 목요일 · 아침</div>
                <div className="md-card">
                  <p className="md-greet">
                    좋은 아침이에요, 교진님.
                    <br />
                    오늘은 어떻게 시작해요?
                  </p>
                  <p className="md-user">마음이 가벼운 하루야</p>
                  <p className="md-reply">
                    기분이 좋으신 것 같아 다행이에요. 오늘 하루도 즐겁게 보내세요.
                  </p>
                  <p className="md-faint">오늘의 첫 마음을 두고 가요…</p>
                </div>
                <div className="md-dots">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i className="on" />
                </div>
              </div>

              {/* 교랑톡 화면 */}
              <div className="ph-face talk">
                <div className="tk-head">
                  <span className="tk-title">
                    친구 <b>12</b>
                  </span>
                  <span className="tk-icons">
                    <span>
                      <svg className="ico" viewBox="0 0 24 24">
                        <path d="M16 19c0-3-2-5-5-5s-5 2-5 5" />
                        <circle cx="11" cy="8" r="3.2" />
                        <path d="M18 8v6M21 11h-6" />
                      </svg>
                    </span>
                    <span>
                      <svg className="ico" viewBox="0 0 24 24">
                        <rect x="4" y="6" width="16" height="12" rx="2" />
                        <path d="m4 8 8 5 8-5" />
                      </svg>
                    </span>
                    <span>
                      <svg className="ico" viewBox="0 0 24 24">
                        <circle cx="6" cy="12" r="1.3" />
                        <circle cx="12" cy="12" r="1.3" />
                        <circle cx="18" cy="12" r="1.3" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="tk-me">
                  <span className="tk-av lg">
                    <svg className="ico" width="20" height="20" viewBox="0 0 24 24">
                      <circle cx="12" cy="9" r="3.2" />
                      <path d="M6 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
                    </svg>
                  </span>
                  <div>
                    <div className="tk-name">
                      익명<em>나</em>
                    </div>
                    <div className="tk-status">상태 메시지를 입력해보세요</div>
                  </div>
                  <span className="tk-chev">›</span>
                </div>
                <div className="tk-search">
                  <svg className="ico" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  친구 이름으로 검색
                </div>
                <div className="tk-sec">친구 12</div>
                {['익명1', '익명2', '익명3'].map((name) => (
                  <div className="tk-row" key={name}>
                    <span className="tk-av">
                      <svg className="ico" width="17" height="17" viewBox="0 0 24 24">
                        <circle cx="12" cy="9" r="3.2" />
                        <path d="M6 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
                      </svg>
                    </span>
                    <div className="tk-rname">{name}</div>
                    <span className="tk-chat">
                      <svg className="ico" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
                      </svg>
                    </span>
                  </div>
                ))}
                <div className="tk-tabbar">
                  <span className="tk-tab on">
                    <svg className="ico" viewBox="0 0 24 24">
                      <circle cx="9" cy="8" r="3" />
                      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
                      <path d="M16 5.5a3 3 0 0 1 0 5.5" />
                    </svg>
                    친구
                  </span>
                  <span className="tk-tab">
                    <svg className="ico" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
                    </svg>
                    채팅
                  </span>
                  <span className="tk-tab">
                    <svg className="ico" viewBox="0 0 24 24">
                      <circle cx="8" cy="9" r="2.6" />
                      <circle cx="16" cy="9" r="2.6" />
                      <path d="M3 18c0-2.5 2-4 5-4M21 18c0-2.5-2-4-5-4" />
                    </svg>
                    그룹
                  </span>
                  <span className="tk-tab">
                    <svg className="ico" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
                    </svg>
                    설정
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="float-card fc-1">
            <span
              className="ic"
              style={{ background: 'linear-gradient(135deg,#8A78C7,#3A2B66)' }}
            >
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
              </svg>
            </span>
            <div>
              <div className="fl-t">교랑톡</div>
              <div className="fl-s">친구들과 소통해요</div>
            </div>
          </div>

          <div className="float-card fc-2">
            <span
              className="ic"
              style={{ background: 'linear-gradient(135deg,#8A5BD0,#E0689C)' }}
            >
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M20 13.5A8 8 0 1 1 10.5 4a6.3 6.3 0 0 0 9.5 9.5Z" />
              </svg>
            </span>
            <div>
              <div className="fl-t">교랑무드</div>
              <div className="fl-s">오늘의 마음 기록</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}