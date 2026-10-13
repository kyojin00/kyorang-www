import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

// 카카오톡·SNS 에 링크를 붙였을 때 뜨는 미리보기 그림.
// 한글 글꼴을 따로 싣지 않으려고 글자는 영문만 쓴다.
export const alt = 'KYORANG Web Studio'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  const mark = await readFile(join(process.cwd(), 'public/kyorang-mark.png'))
  const src = `data:image/png;base64,${mark.toString('base64')}`
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background: '#F5F3EE',
          color: '#16181D',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 20,
              background: '#1F4D3A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} width={64} height={64} alt="" />
          </div>
          <div style={{ fontSize: 48, fontWeight: 800, letterSpacing: -1 }}>KYORANG</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.1 }}>
            Websites & software,
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.1, color: '#1F4D3A' }}>
            built right.
          </div>
          <div style={{ fontSize: 32, color: '#5D626A', marginTop: 8 }}>Automation · Business software · Websites · Apps</div>
        </div>
        <div style={{ display: 'flex', height: 10, width: 220, background: '#1F4D3A' }} />
      </div>
    ),
    size
  )
}
