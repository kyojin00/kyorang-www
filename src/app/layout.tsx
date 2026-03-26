import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '교랑 (KYORANG) - 말하지 못한 마음을 꺼낼 수 있는 곳',
  description: '교랑은 고민을 털어놓을 수 있는 공간을 만들어요. 혼자 들고 다니지 않아도 괜찮아요.',
  openGraph: {
    title: '교랑 (KYORANG)',
    description: '말하지 못한 마음을 꺼낼 수 있는 곳',
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