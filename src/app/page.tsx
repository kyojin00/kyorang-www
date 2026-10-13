import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import Splash from '@/components/Splash'
import SiteEffects from '@/components/SiteEffects'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Packages from '@/components/Packages'
import Templates from '@/components/Templates'
import CaseStudy from '@/components/CaseStudy'
import Reviews from '@/components/Reviews'
import Faq from '@/components/Faq'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import { BUSINESS, CONTACT_EMAIL, SITE_URL } from '@/data/studio'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

// 구글이 사이트 이름·회사 정보를 알아보도록 첫 화면에만 구조화 데이터를 넣는다.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: '교랑',
      alternateName: ['KYORANG', 'kyorang.com'],
      inLanguage: 'ko-KR',
    },
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#org`,
      name: BUSINESS.name,
      alternateName: 'KYORANG',
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: CONTACT_EMAIL,
      ...(BUSINESS.phone ? { telephone: BUSINESS.phone } : {}),
      address: {
        '@type': 'PostalAddress',
        streetAddress: '무선7길 18-6, 202호',
        addressLocality: '여수시',
        addressCountry: 'KR',
      },
    },
  ],
}

interface PageProps {
  searchParams: Promise<{ code?: string; type?: string }>
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams

  // Supabase 이메일 인증 콜백 — ?code=... 있으면 /confirmed로 자동 이동
  // (Site URL이 kyorang.com이라 인증 메일이 일단 여기로 옴)
  if (params.code) {
    redirect(`/confirmed?code=${params.code}`)
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Splash />
      <SiteEffects />
      <Nav />
      <Hero />
      <Packages />
      <CaseStudy />
      <Templates />
      <Reviews />
      <section className="block" id="faq">
        <div className="wrap narrow">
          <div className="sec-head center reveal">
            <p className="label">FAQ</p>
            <h2>자주 묻는 질문</h2>
          </div>
          <Faq />
        </div>
      </section>
      <Cta />
      <Footer />
    </>
  )
}
