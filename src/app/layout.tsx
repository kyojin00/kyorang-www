import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '교랑 (KYORANG) - 말하지 못한 마음을 꺼낼 수 있는 곳',
  description: '교랑은 상담부터 소통, 쇼핑까지 함께하는 감성 플랫폼이에요.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}