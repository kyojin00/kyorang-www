import Link from 'next/link'
import { won, type Template } from '@/data/studio'

// 실제 스크린샷이 생기기 전까지는 색만 다른 와이어프레임으로 미리보기를 그린다.
export function TemplateThumb({ t }: { t: Template }) {
  return (
    <div
      className="tpl-thumb"
      style={{ background: `linear-gradient(140deg, ${t.palette[0]}, ${t.palette[1]})` }}
      aria-hidden="true"
    >
      <div className="tpl-win">
        <div className="tw-bar" />
        <div className="tw-line w60" />
        <div className="tw-line w40" />
        <div className="tw-grid">
          <i />
          <i />
          <i />
        </div>
      </div>
    </div>
  )
}

export default function TemplateCard({ t }: { t: Template }) {
  return (
    <Link href={`/templates/${t.slug}`} className="tpl-card reveal">
      <TemplateThumb t={t} />
      <div className="tpl-info">
        <div className="tpl-meta">
          <span className="tpl-cat">{t.category}</span>
          {t.ready ? null : <span className="tpl-soon">준비 중</span>}
        </div>
        <h3>{t.name}</h3>
        <p>{t.summary}</p>
        <div className="tpl-price">{won(t.price)}</div>
      </div>
    </Link>
  )
}
