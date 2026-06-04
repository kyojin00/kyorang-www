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
            교랑은 상담부터 소통, 기록까지 — 사람과 사람의 마음을 따뜻하게
            연결하는 서비스를 만드는 회사입니다.
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
              <div className="ph-top">
                <div className="ph-title">교랑톡</div>
                <div className="ph-sub">교랑이와 함께하는 대화</div>
              </div>
              <div className="ph-body">
                <div className="bubble them">안녕하세요! 오늘 하루는 어떠셨어요?</div>
                <div className="bubble me">조금 지쳤지만 괜찮아요</div>
                <div className="bubble them">충분히 잘하고 계세요. 제가 곁에 있을게요.</div>
                <div className="bubble me">고마워요, 교랑이</div>
              </div>
              <div className="ph-input">
                <span>메시지를 입력하세요…</span>
                <span className="ph-send">
                  <svg
                    className="ico"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="float-card fc-1">
            <span
              className="ic"
              style={{ background: 'linear-gradient(135deg,#8A5BD0,#E0689C)' }}
            >
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M20 13.5A8 8 0 1 1 10.5 4a6.3 6.3 0 0 0 9.5 9.5Z" />
              </svg>
            </span>
            <div>
              <div className="fl-t">교랑 무드</div>
              <div className="fl-s">오늘의 기분을 기록해요</div>
            </div>
          </div>

          <div className="float-card fc-2">
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
              <div className="fl-s">친구와 대화</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}