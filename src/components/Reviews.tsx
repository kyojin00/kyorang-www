import { REVIEWS } from '@/data/studio'

// 실제 후기가 하나도 없으면 섹션 자체를 그리지 않는다.
export default function Reviews() {
  if (REVIEWS.length === 0) return null
  return (
    <section className="block rv-sec" id="reviews">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="label">고객 후기</p>
          <h2>맡겨주신 분들의 이야기</h2>
        </div>
        <div className="rv-grid">
          {REVIEWS.map((r) => (
            <figure key={r.name + r.date} className="rv reveal">
              <blockquote>{r.text}</blockquote>
              <figcaption>
                <b>{r.name}</b>
                <span>
                  {r.project} · {r.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
