import Link from 'next/link'
import { MAINTENANCE, PACKAGES } from '@/data/studio'

export default function Packages() {
  return (
    <section className="block" id="packages">
      <div className="wrap">
        <div className="sec-head center reveal">
          <p className="label">제작 패키지</p>
          <h2>규모에 맞게 고르세요</h2>
          <p>모든 패키지는 반응형이고 소스 코드를 전부 드려요. 정확한 금액은 상담 후 견적서로 안내해요.</p>
        </div>

        <div className="pkg-grid">
          {PACKAGES.map((p) => (
            <div key={p.id} className={'pkg reveal' + (p.featured ? ' featured' : '')}>
              {p.featured ? <span className="pkg-badge">가장 많이 찾아요</span> : null}
              <h3>{p.name}</h3>
              <p className="pkg-desc">{p.desc}</p>
              <div className="pkg-price">
                {p.price}
                <span>{p.note}</span>
              </div>
              <ul>
                {p.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="pkg-period">기간 {p.period}</div>
              <Link href={`/contact?type=${encodeURIComponent('웹사이트 제작 견적')}&pkg=${p.id}`} className={'btn ' + (p.featured ? 'btn-primary' : 'btn-ghost')}>
                이 패키지로 문의
              </Link>
            </div>
          ))}
        </div>

        <div className="pkg-maint reveal">
          <div>
            <b>유지보수</b> {MAINTENANCE.desc}
          </div>
          <span>{MAINTENANCE.price}</span>
        </div>
      </div>
    </section>
  )
}
