import Link from 'next/link'
import { BUSINESS, CONTACT_EMAIL } from '@/data/studio'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <div className="brand">
              <span className="mark" style={{ background: 'rgba(255,255,255,.1)', boxShadow: 'none' }}>
                <img src="/kyorang-mark.png" alt="교랑 로고" />
              </span>
              <span className="brand-name">KYORANG</span>
            </div>
            <p>
              웹사이트 · 업무 프로그램 · 앱 제작
              <br />
              {CONTACT_EMAIL}
            </p>
          </div>

          <div className="ft-col">
            <h5>제작</h5>
            <Link href="/#packages">제작 패키지</Link>
            <Link href="/templates">템플릿</Link>
            <Link href="/contact">견적 문의</Link>
          </div>

          <div className="ft-col">
            <h5>교랑 앱</h5>
            <span>교랑톡</span>
            <span>교랑무드</span>
            <span>교랑빌리지</span>
          </div>
        </div>

        <div className="ft-info">
          상호 {BUSINESS.name} &nbsp;|&nbsp; 대표 {BUSINESS.ceo} &nbsp;|&nbsp; 사업자등록번호 {BUSINESS.bizNo}
          <br />
          통신판매업 신고번호 {BUSINESS.mailOrderNo} &nbsp;|&nbsp; 주소 {BUSINESS.address}
          <br />
          {BUSINESS.phone ? <>전화 {BUSINESS.phone} &nbsp;|&nbsp; </> : null}이메일 {CONTACT_EMAIL} &nbsp;|&nbsp; 호스팅 {BUSINESS.hosting}
        </div>

        <div className="ft-legal">
          <Link href="/terms">이용약관</Link>
          <Link className="strong" href="/privacy">
            개인정보처리방침
          </Link>
          <Link href="/refund">환불 정책</Link>
          <Link href="/youth">청소년보호정책</Link>
        </div>

        <div className="ft-bottom">
          <p>© 2026 KYORANG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
