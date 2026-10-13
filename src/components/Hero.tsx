import Link from 'next/link'
export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <p className="label">KYORANG DEV STUDIO</p>
          <h1>
            손으로 하던 일,
            <br />
            <span className="grad">자동으로</span> 바꿔드려요
          </h1>
          <p className="lead">
            반복 업무를 줄이는 자동화·매크로, 회사에 꼭 맞는 업무 프로그램, 홈페이지와 앱까지.
            필요한 걸 말씀해 주시면 기획부터 운영까지 끝까지 맡아요.
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
