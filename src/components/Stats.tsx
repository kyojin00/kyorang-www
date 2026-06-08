import { Fragment } from 'react'

// 운영 중인 두 앱 소개 바.
// Play 스토어/사이트 링크가 정해지면 각 항목의 href만 채우면 자동으로 링크가 됩니다.
const apps = [
  {
    name: '교랑톡',
    tag: '소셜 메신저',
    desc: '피드로 일상을 나누고, 친구와 실시간으로 대화하는 소셜 공간이에요.',
    href: '', // TODO: Play 스토어 링크
  },
  {
    name: '교랑무드',
    tag: '마음 기록 · AI 비서',
    desc: '마스코트 무디와 대화하며 오늘의 마음을 기록하고 돌아봐요.',
    href: '', // TODO: Play 스토어 링크
  },
]

export default function Stats() {
  return (
    <div className="trust">
      <style>{`
        .svc-bar{
          max-width:1180px;margin:0 auto;padding:48px 28px;
          display:grid;grid-template-columns:1fr 1px 1fr;gap:0 48px;align-items:stretch;
        }
        .svc-bar .divider{background:var(--line);width:1px;}
        .svc-bar-item .head{display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
        .svc-bar-item .nm{font-size:20px;font-weight:800;letter-spacing:-.02em;color:var(--ink);}
        .svc-bar-item .tg{
          font-size:11.5px;font-weight:700;color:var(--coral-deep);
          background:rgba(236,138,110,.12);padding:3px 10px;border-radius:999px;
        }
        .svc-bar-item .ds{font-size:14px;line-height:1.7;color:var(--text-mid);margin:12px 0 16px;}
        .svc-bar-item .lk{
          display:inline-flex;align-items:center;gap:6px;
          font-size:13px;font-weight:700;color:var(--coral-deep);transition:opacity .2s;
        }
        .svc-bar-item a.lk:hover{opacity:.7;}
        .svc-bar-item .lk.muted{color:var(--text-dim);}
        @media(max-width:760px){
          .svc-bar{grid-template-columns:1fr;gap:28px;padding:40px 28px;}
          .svc-bar .divider{width:auto;height:1px;}
        }
      `}</style>

      <div className="svc-bar">
        {apps.map((a, i) => (
          <Fragment key={a.name}>
            {i > 0 && <div className="divider" />}
            <div className="svc-bar-item reveal">
              <div className="head">
                <span className="nm">{a.name}</span>
                <span className="tg">{a.tag}</span>
              </div>
              <p className="ds">{a.desc}</p>
              {a.href ? (
                <a className="lk" href={a.href} target="_blank" rel="noopener noreferrer">
                  <span>Android 앱</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              ) : (
                <span className="lk muted">Android 앱</span>
              )}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}