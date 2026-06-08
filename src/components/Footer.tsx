export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="brand">
              <span
                className="mark"
                style={{ background: 'rgba(255,255,255,.1)', boxShadow: 'none' }}
              >
                <img src="/kyorang-mark.png" alt="교랑 로고" />
              </span>
              <span className="brand-name">KYORANG</span>
            </div>
            <p>
              말하지 못한 마음을 꺼낼 수 있는 곳.
              <br />
              교랑이 언제나 곁에 있을게요.
            </p>
          </div>

          <div className="ft-col">
            <h5>서비스</h5>
            <span>
              교랑톡 <em style={{ fontStyle: 'normal', opacity: 0.5 }}>앱</em>
            </span>
            <span>
              교랑무드 <em style={{ fontStyle: 'normal', opacity: 0.5 }}>앱</em>
            </span>
          </div>

          <div className="ft-col">
            <h5>회사</h5>
            <a href="#about">회사소개</a>
            <a href="#services">서비스</a>
            <a href="/contact">문의하기</a>
          </div>
        </div>

        <div className="ft-info">
          교랑(KYORANG) &nbsp;|&nbsp; 대표 교진
          <br />
          사업자등록번호 832-01-02741 &nbsp;|&nbsp; 통신판매업 신고번호
          2023-마산합포-0234
        </div>

        <div className="ft-legal">
          <a href="/terms">이용약관</a>
          <a className="strong" href="/privacy">
            개인정보처리방침
          </a>
          <a href="/youth">청소년보호정책</a>
        </div>

        <div className="ft-bottom">
          <p>© 2026 KYORANG. All rights reserved.</p>
          <p>말하지 못한 마음을 꺼낼 수 있는 곳</p>
        </div>
      </div>
    </footer>
  )
}