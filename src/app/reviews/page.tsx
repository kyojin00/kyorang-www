import type { Metadata } from 'next'
import SiteEffects from '@/components/SiteEffects'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BoardForm from '@/components/BoardForm'
import { listReviews, maskName, ymd } from '@/lib/board'

export const revalidate = 30

export const metadata: Metadata = {
  title: '고객 후기 — 교랑(KYORANG)',
  description: '교랑에 자동화·프로그램·웹사이트 제작을 맡겨주신 분들의 후기입니다.',
  alternates: { canonical: '/reviews' },
}

export default async function ReviewsPage() {
  const reviews = await listReviews()
  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0

  return (
    <>
      <SiteEffects />
      <Nav />
      <main className="page-top">
        <div className="wrap narrow">
          <div className="sec-head">
            <p className="label">고객 후기</p>
            <h1>맡겨주신 분들의 이야기</h1>
            <p>
              실제로 작업을 맡겨주신 분들의 후기만 확인 후 올려요.
              {reviews.length ? ` 지금까지 ${reviews.length}개, 평균 ★${avg.toFixed(1)}` : ''}
            </p>
          </div>

          <BoardForm
            event="후기 작성"
            endpoint="/api/reviews"
            open="후기 남기기"
            done="후기 고마워요! 작업 내역을 확인한 뒤 게시할게요."
            note="연락처는 실제 고객인지 확인하는 데만 쓰고 공개하지 않아요. 이름은 일부 가려서 보여요."
            fields={[
              { key: 'rating', label: '별점', type: 'rating', required: true },
              { key: 'name', label: '이름', required: true, placeholder: '홍길동' },
              { key: 'project', label: '맡기신 작업', required: true, placeholder: '예: 엑셀 자동화 매크로, 카페 홈페이지' },
              { key: 'content', label: '후기', type: 'textarea', required: true, placeholder: '어떤 점이 좋았는지, 아쉬웠는지 편하게 적어주세요.' },
              { key: 'contact', label: '연락처 (비공개)', required: true, placeholder: '문의하신 이메일 또는 전화번호' },
            ]}
          />

          <ul className="bd-list">
            {reviews.length === 0 ? (
              <li className="bd-empty">아직 게시된 후기가 없어요. 첫 후기를 남겨주세요.</li>
            ) : (
              reviews.map((r) => (
                <li key={r.id} id={`r-${r.id}`} className="bd-item">
                  <div className="bd-head">
                    <span className="bd-stars-read" aria-label={`${r.rating}점`}>
                      {'★'.repeat(r.rating)}
                      <i>{'★'.repeat(5 - r.rating)}</i>
                    </span>
                    <span className="bd-meta">
                      {maskName(r.name)} · {r.project} · {ymd(r.created_at)}
                    </span>
                  </div>
                  <p className="bd-body">{r.content}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
