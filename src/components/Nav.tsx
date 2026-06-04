export default function Nav() {
  return (
    <nav id="nav">
      <div className="wrap nav-in">
        <a href="#top" className="brand">
          <span className="mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 3.2C6.9 3.2 3 6.5 3 10.6c0 2.5 1.6 4.7 4 6-.2 1-.7 2.2-1.4 3 .1.1.3.2.5.1 1.5-.4 2.7-1.1 3.5-1.7.8.2 1.6.3 2.4.3 5.1 0 9-3.3 9-7.4S17.1 3.2 12 3.2Z"
                fill="#fff"
              />
              <circle cx="9.2" cy="10.6" r="1.15" fill="#7C6BB5" />
              <circle cx="14.8" cy="10.6" r="1.15" fill="#7C6BB5" />
            </svg>
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