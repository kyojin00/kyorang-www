import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL } from '@/data/studio'
import SiteAnalytics from '@/components/SiteAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: '교랑',
  // 네이버 서치어드바이저 사이트 소유 확인
  verification: { other: { 'naver-site-verification': '0bc760117c42da54896ae362aea0caa920994d7e' } },
  title: '교랑 (KYORANG) — 자동화 · 프로그램 · 웹사이트 제작',
  description:
    '업무 자동화·매크로, 맞춤 업무 프로그램, 홈페이지·앱을 만들어요. 바로 쓰는 웹사이트 템플릿도 판매해요.',
  openGraph: {
    title: '교랑 (KYORANG) — 자동화 · 프로그램 · 웹사이트 제작',
    description: '손으로 하던 일, 자동으로 바꿔드려요.',
    siteName: 'KYORANG',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="alternate" type="application/rss+xml" title="교랑 Q&amp;A · 고객 후기" href="/rss.xml" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        {children}
        <SiteAnalytics />
      </body>
    </html>
  )
}