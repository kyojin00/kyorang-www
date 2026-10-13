import type { Metadata } from 'next'
import './globals.css'
import { SITE_URL } from '@/data/studio'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '교랑 (KYORANG) — 웹사이트 제작 · 템플릿',
  description:
    '원페이지 랜딩부터 예약·관리자 기능이 있는 웹서비스까지. 맞춤 제작과 바로 쓰는 웹사이트 템플릿을 판매합니다.',
  openGraph: {
    title: '교랑 (KYORANG) — 웹사이트 제작 · 템플릿',
    description: '필요한 만큼만, 제대로 만든 웹사이트.',
    url: SITE_URL,
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