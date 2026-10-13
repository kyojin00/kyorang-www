import Link from 'next/link'
import { listReviews, maskName, ymd } from '@/lib/board'

// 첫 화면 후기: 게시된 후기 중 최근 3개. 하나도 없으면 섹션을 그리지 않는다.
export default async function Reviews() {
  const reviews = (await listReviews(3)).slice(0, 3)
  if (reviews.length === 0) return null
  return (
    <section className="block rv-sec" id="reviews">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="label">고객 후기</p>
          <h2>맡겨주신 분들의 이야기</h2>
        </div>
        <div className="rv-grid">
          {reviews.map((r) => (
            <figure key={r.id} className="rv reveal">
              <span className="bd-stars-read" aria-label={`${r.rating}점`}>
                {'★'.repeat(r.rating)}
                <i>{'★'.repeat(5 - r.rating)}</i>
              </span>
              <blockquote>{r.content}</blockquote>
              <figcaption>
                <b>{maskName(r.name)}</b>
                <span>
                  {r.project} · {ymd(r.created_at)}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="tpl-more reveal">
          <Link href="/reviews" className="btn btn-ghost">
            후기 전체 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
