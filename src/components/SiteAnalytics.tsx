'use client'

import { Analytics } from '@vercel/analytics/next'

// 방문 통계 (Vercel Web Analytics: 쿠키 없이 익명 집계). 관리자 화면은 세지 않는다.
export default function SiteAnalytics() {
  return <Analytics beforeSend={(e) => (new URL(e.url).pathname.startsWith('/admin') ? null : e)} />
}
