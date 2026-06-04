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
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path
                    d="M12 3.2C6.9 3.2 3 6.5 3 10.6c0 2.5 1.6 4.7 4 6-.2 1-.7 2.2-1.4 3 .1.1.3.2.5.1 1.5-.4 2.7-1.1 3.5-1.7.8.2 1.6.3 2.4.3 5.1 0 9-3.3 9-7.4S17.1 3.2 12 3.2Z"
                    fill="#fff"
                    opacity=".9"
                  />
                </svg>
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
            <a href="#contact">문의하기</a>
            <span>rywls123450@gmail.com</span>
          </div>
        </div>

        <div className="ft-info">
          교랑(KYORANG) &nbsp;|&nbsp; 대표 교진 &nbsp;|&nbsp; 이메일
          rywls123450@gmail.com
          <br />
          사업자등록번호 832-01-02741 &nbsp;|&nbsp; 통신판매업 신고번호
          2023-마산합포-0234
        </div>

        <div className="ft-bottom">
          <p>© 2026 KYORANG. All rights reserved.</p>
          <p>말하지 못한 마음을 꺼낼 수 있는 곳</p>
        </div>
      </div>
    </footer>
  )
}