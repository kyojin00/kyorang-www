import Link from 'next/link'
import { TEMPLATES } from '@/data/studio'
import TemplateCard from './TemplateCard'

export default function Templates() {
  return (
    <section className="block tpl-sec" id="templates">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="label">완성형 템플릿</p>
          <h2>
            빨리, 저렴하게 시작하고 싶다면
          </h2>
          <p>바로 쓸 수 있는 사이트 소스를 판매해요. 문구와 사진만 바꾸면 오늘 열 수 있어요.</p>
        </div>
        <div className="tpl-grid">
          {TEMPLATES.map((t) => (
            <TemplateCard key={t.slug} t={t} />
          ))}
        </div>
        <div className="tpl-more reveal">
          <Link href="/templates" className="btn btn-ghost">
            템플릿 전체 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
