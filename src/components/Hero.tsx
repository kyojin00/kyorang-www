import Link from 'next/link'
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="eyebrow">
            <span className="dot" />
            KYORANG WEB STUDIO
          </span>
          <h1>
            필요한 만큼만,
            <br />
            <span className="grad">제대로 만든</span> 웹사이트
          </h1>
          <p className="lead">
            가게 소개 한 장부터 예약·관리자 기능이 있는 서비스까지. 앱 세 개를 직접 만들고
            운영하는 개발자가 기획부터 오픈까지 맡아요.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              무료 견적 받기
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/templates" className="btn btn-ghost">
              템플릿 둘러보기
            </Link>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="browser">
            <div className="browser-bar">
              <i />
              <i />
              <i />
              <span className="browser-url">your-brand.com</span>
            </div>
            <div className="browser-body">
              <div className="bb-nav">
                <b />
                <span />
                <span />
                <span />
              </div>
              <div className="bb-hero">
                <div className="bb-line w70" />
                <div className="bb-line w50" />
                <div className="bb-btn" />
              </div>
              <div className="bb-cards">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
          <div className="float-card fc-1">
            <div className="ic" style={{ background: 'linear-gradient(135deg,#EC8A6E,#D9573A)' }}>
              <svg className="ico" viewBox="0 0 24 24">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <path d="M11 18h2" />
              </svg>
            </div>
            <div>
              <div className="fl-t">모바일 완벽 대응</div>
              <div className="fl-s">PC · 태블릿 · 폰</div>
            </div>
          </div>
          <div className="float-card fc-2">
            <div className="ic" style={{ background: 'linear-gradient(135deg,#F5C96B,#EC8A6E)' }}>
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </div>
            <div>
              <div className="fl-t">새 문의가 도착했어요</div>
              <div className="fl-s">문의 폼 → 메일 알림</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
