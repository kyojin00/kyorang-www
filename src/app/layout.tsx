import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL } from '@/data/studio'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: '교랑',
  title: '교랑 (KYORANG) — 웹사이트 · 프로그램 · 앱 제작',
  description:
    '홈페이지부터 웹서비스, 업무 자동화 프로그램, ERP 연동 사내 시스템, 앱까지 맞춤 제작합니다. 바로 쓰는 웹사이트 템플릿도 판매해요.',
  openGraph: {
    title: '교랑 (KYORANG) — 웹사이트 · 프로그램 · 앱 제작',
    description: '사이트도 프로그램도, 제대로 만들어요.',
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
      <body>{children}</body>
    </html>
  )
}