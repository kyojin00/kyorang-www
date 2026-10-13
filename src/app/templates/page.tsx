import Link from 'next/link'
import type { Metadata } from 'next'
import SiteEffects from '@/components/SiteEffects'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import TemplateCard from '@/components/TemplateCard'
import { TEMPLATES } from '@/data/studio'

export const metadata: Metadata = {
  title: '웹사이트 템플릿 — 교랑(KYORANG)',
  description: '문구와 사진만 바꾸면 바로 여는 웹사이트 템플릿. 소스 코드 전체와 설명서를 드려요.',
}

export default function TemplatesPage() {
  return (
    <>
      <SiteEffects />
      <Nav />
      <main className="page-top">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">
              <span className="dot" />
              템플릿 상점
            </span>
            <h2>웹사이트 템플릿</h2>
            <p>
              구매 신청 → 계좌 입금 → 메일로 소스 코드와 설명서 전달. 설치나 수정이 어려우면 대행도
              맡기실 수 있어요.
            </p>
          </div>
          <div className="tpl-grid">
            {TEMPLATES.map((t) => (
              <TemplateCard key={t.slug} t={t} />
            ))}
          </div>
          <p className="tpl-foot reveal">
            원하는 템플릿이 없나요? <Link href="/contact">맞춤 제작을 문의</Link>해 주세요.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
