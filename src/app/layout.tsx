import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '교랑 (KYORANG) - AI로 연결하는 따뜻한 세상',
  description: '교랑은 AI 기술로 사람들이 더 솔직하게 털어놓고, 더 따뜻하게 연결될 수 있는 세상을 만듭니다.',
  openGraph: {
    title: '교랑 (KYORANG)',
    description: 'AI로 연결하는 따뜻한 세상',
    url: 'https://kyorang.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}