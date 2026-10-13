import Link from 'next/link'
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="label">KYORANG DEV STUDIO</p>
          <h1>
            사이트도 프로그램도,
            <br />
            <span className="grad">제대로</span> 만들어요
          </h1>
          <p className="lead">
            홈페이지, 예약·관리자 기능이 있는 웹서비스, 업무 자동화 프로그램, 앱까지.
            기획부터 개발, 오픈 뒤 운영까지 한 사람이 끝까지 맡아요.
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
