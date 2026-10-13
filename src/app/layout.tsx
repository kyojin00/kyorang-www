import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL } from '@/data/studio'
import SiteAnalytics from '@/components/SiteAnalytics'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: '교랑',
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