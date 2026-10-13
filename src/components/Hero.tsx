import Link from 'next/link'
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="label">KYORANG WEB STUDIO</p>
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
              무료 견적 받기 →
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
        </div>
      </div>
    </header>
  )
}
