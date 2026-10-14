import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteEffects from '@/components/SiteEffects'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { TemplateThumb } from '@/components/TemplateCard'
import OrderForm from '@/components/OrderForm'
import { TEMPLATES, findTemplate, won } from '@/data/studio'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = findTemplate((await params).slug)
  return t ? {
        title: `${t.name} 템플릿 — 교랑(KYORANG)`,
        description: t.summary,
        alternates: { canonical: `/templates/${t.slug}` },
      } : {}
}

export default async function TemplateDetail({ params }: Props) {
  const t = findTemplate((await params).slug)
  if (!t) notFound()

  return (
    <>
      <SiteEffects />
      <Nav />
      <main className="page-top">
        <div className="wrap tpl-detail">
          <div>
            <Link href="/templates" className="back-link">
              ← 템플릿 목록
            </Link>
            <TemplateThumb t={t} />
            {t.demo ? (
              <a className="btn btn-ghost td-demo" href={t.demo} target="_blank" rel="noopener">
                데모 사이트 열어보기 ↗
              </a>
            ) : null}
            <h1>{t.name}</h1>
            <p className="td-summary">{t.summary}</p>
            <h2>포함된 것</h2>
            <ul className="td-list">
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
              <li>소스 코드 전체 · 고치는 방법 설명서</li>
            </ul>
            <h2>기술</h2>
            <p className="td-text">{t.stack} · 파일을 Vercel·Netlify 무료 호스팅에 올리면 바로 열려요. 고칠 곳에는 ✏️ 표시를 해 뒀어요.</p>
          </div>

          <aside className="td-buy">
            <div className="td-price">
              {won(t.price)}
              <span>VAT 포함</span>
            </div>
            {t.ready ? (
              <OrderForm slug={t.slug} price={t.price} />
            ) : (
              <div className="td-soon">
                <b>준비 중인 템플릿이에요</b>
                <p>출시되면 가장 먼저 알려드릴게요. 비슷한 사이트가 지금 필요하면 맞춤 제작도 가능해요.</p>
                <Link
                  className="btn btn-primary"
                  href={`/contact?type=${encodeURIComponent('템플릿 문의')}&tpl=${t.slug}`}
                >
                  출시 알림 · 문의하기
                </Link>
              </div>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  )
}
