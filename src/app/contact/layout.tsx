import type { Metadata } from 'next'

// 문의 페이지는 클라이언트 컴포넌트라 메타데이터를 여기서 정한다.
export const metadata: Metadata = {
  title: '견적 문의 — 교랑(KYORANG)',
  description:
    '자동화·프로그램·웹사이트·앱 제작 견적과 교랑 앱 문의를 받아요. 영업일 1~2일 안에 답변드려요.',
  alternates: { canonical: '/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
