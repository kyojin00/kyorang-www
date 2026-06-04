export default function Nav() {
  return (
    <nav id="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand">
          <span className="mark">
            <img src="/kyorang-mark.png" alt="교랑 로고" />
          </span>
          <span className="brand-name">KYORANG</span>
        </a>
        <div className="nav-menu">
          <a href="#about" className="nav-link">
            회사소개
          </a>
          <a href="#services" className="nav-link">
            서비스
          </a>
          <a href="#flagship" className="nav-link">
            교랑톡
          </a>
          <a href="#mood" className="nav-link">
            교랑무드
          </a>
          <a href="#contact" className="nav-cta">
            문의하기
          </a>
        </div>
        <button className="burger" aria-label="menu">
          <svg className="ico" width="26" height="26" viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}