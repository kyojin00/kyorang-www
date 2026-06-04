import type { ReactNode } from 'react'

export default function LegalPage({
  title,
  effectiveDate,
  intro,
  children,
}: {
  title: string
  effectiveDate: string
  intro?: string
  children: ReactNode
}) {
  return (
    <>
      <header className="legal-top">
        <div className="wrap">
          <a href="/" className="legal-home">
            <span className="mark">
              <img src="/kyorang-mark.png" alt="교랑 로고" />
            </span>
            <span className="brand-name">KYORANG</span>
          </a>
          <a href="/" className="legal-back">
            홈으로 →
          </a>
        </div>
      </header>

      <main className="legal-doc">
        <h1>{title}</h1>
        <p className="legal-meta">시행일 {effectiveDate}</p>
        {intro ? <p className="legal-intro">{intro}</p> : null}
        {children}
        <p className="legal-note">
          본 문서는 교랑(KYORANG)의 정책 문서입니다. 문의 사항은
          rywls123450@gmail.com 으로 연락해 주세요.
        </p>
      </main>

      <footer className="legal-footer">
        © 2026 KYORANG. All rights reserved.
      </footer>
    </>
  )
}