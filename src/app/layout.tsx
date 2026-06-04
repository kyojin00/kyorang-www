import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '교랑 (KYORANG) — 마음을 잇는 기술',
  description:
    '교랑은 상담부터 소통, 기록까지 — 사람과 사람의 마음을 따뜻하게 연결하는 서비스를 만듭니다.',
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