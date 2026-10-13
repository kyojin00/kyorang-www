'use client'

import { track } from '@vercel/analytics'
import { BUSINESS } from '@/data/studio'

// 화면 오른쪽 아래 고정 "카톡 상담" 버튼. 채널 주소가 없으면 그리지 않는다.
export default function KakaoButton() {
  if (!BUSINESS.kakao) return null
  return (
    <a
      href={BUSINESS.kakao}
      target="_blank"
      rel="noopener noreferrer"
      className="kakao-fab"
      onClick={() => track('카톡 상담 클릭')}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 2.83 1.84 5.31 4.6 6.73l-.9 3.3c-.08.3.26.54.52.37l3.94-2.6c.6.08 1.21.12 1.84.12 5.52 0 10-3.58 10-8S17.52 3 12 3z" />
      </svg>
      카톡 상담
    </a>
  )
}
