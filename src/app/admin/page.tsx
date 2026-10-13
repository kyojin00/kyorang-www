import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { adminFetch, hasDbKey, isAdmin, type AdminQuestion, type AdminReview } from '@/lib/admin'
import { ymd } from '@/lib/board'
import ConfirmButton from '@/components/ConfirmButton'
import { answerQuestion, deleteQuestion, deleteReview, setQuestionHidden, setReviewApproved } from './actions'

export const dynamic = 'force-dynamic'
export const metadata: Metadata = { title: '관리자 — 교랑', robots: { index: false, follow: false } }

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ tab?: string }> }) {
  if (!(await isAdmin())) redirect('/admin/login')
  const tab = (await searchParams).tab === 'qna' ? 'qna' : 'reviews'

  let reviews: AdminReview[] = []
  let questions: AdminQuestion[] = []
  let error = ''
  if (!hasDbKey()) {
    error = 'Vercel 환경 변수에 SUPABASE_SECRET_KEY 가 없어요. 등록 후 재배포해 주세요.'
  } else {
    try {
      ;[reviews, questions] = await Promise.all([
        adminFetch('www_reviews?select=*&order=approved.asc,created_at.desc&limit=200') as Promise<AdminReview[]>,
        adminFetch('www_questions?select=*&order=created_at.desc&limit=200') as Promise<AdminQuestion[]>,
      ])
    } catch (e) {
      error = `DB 읽기 실패: ${e instanceof Error ? e.message : String(e)}`
    }
  }
  const pendingReviews = reviews.filter((r) => !r.approved).length
  const openQuestions = questions.filter((q) => !q.answer && !q.hidden).length

  return (
    <main className="adm">
      <header className="adm-top">
        <b>교랑 관리자</b>
        <div className="adm-tabs">
          <a href="/admin" className={tab === 'reviews' ? 'on' : ''}>
            후기 {pendingReviews ? <em>{pendingReviews}</em> : null}
          </a>
          <a href="/admin?tab=qna" className={tab === 'qna' ? 'on' : ''}>
            Q&amp;A {openQuestions ? <em>{openQuestions}</em> : null}
          </a>
        </div>
        <form method="post" action="/api/admin/logout">
          <button className="adm-link">로그아웃</button>
        </form>
      </header>

      {error ? <p className="adm-error">{error}</p> : null}

      {tab === 'reviews' ? (
        <ul className="adm-list">
          {reviews.length === 0 && !error ? <li className="bd-empty">후기가 없어요.</li> : null}
          {reviews.map((r) => (
            <li key={r.id} className={'adm-item' + (r.approved ? '' : ' wait')}>
              <div className="adm-head">
                <span className={'bd-badge' + (r.approved ? ' done' : '')}>{r.approved ? '공개 중' : '승인 대기'}</span>
                <span className="bd-stars-read">{'★'.repeat(r.rating)}<i>{'★'.repeat(5 - r.rating)}</i></span>
                <b>{r.name}</b>
                <span className="bd-meta">{r.project} · {ymd(r.created_at)} · #{r.id}</span>
              </div>
              <p className="bd-body">{r.content}</p>
              <p className="adm-contact">연락처: {r.contact}</p>
              <div className="adm-actions">
                <form action={setReviewApproved}>
                  <input type="hidden" name="id" value={r.id} />
                  <input type="hidden" name="approved" value={r.approved ? 'false' : 'true'} />
                  <button className={'btn ' + (r.approved ? 'btn-ghost' : 'btn-primary')}>{r.approved ? '공개 취소' : '승인해서 공개'}</button>
                </form>
                <form action={deleteReview}>
                  <input type="hidden" name="id" value={r.id} />
                  <ConfirmButton className="adm-del" message="이 글을 삭제할까요? 되돌릴 수 없어요.">삭제</ConfirmButton>
                </form>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="adm-list">
          {questions.length === 0 && !error ? <li className="bd-empty">질문이 없어요.</li> : null}
          {questions.map((q) => (
            <li key={q.id} className={'adm-item' + (!q.answer && !q.hidden ? ' wait' : '')}>
              <div className="adm-head">
                <span className={'bd-badge' + (q.answer ? ' done' : '')}>{q.hidden ? '숨김' : q.answer ? '답변 완료' : '답변 대기'}</span>
                <b>{q.title}</b>
                <span className="bd-meta">{q.name} · {ymd(q.created_at)} · #{q.id}</span>
              </div>
              <p className="bd-body">{q.content}</p>
              {q.contact ? <p className="adm-contact">알림 메일: {q.contact}</p> : null}
              <form action={answerQuestion} className="adm-answer">
                <input type="hidden" name="id" value={q.id} />
                <input type="hidden" name="title" value={q.title} />
                <input type="hidden" name="contact" value={q.contact ?? ''} />
                <textarea className="hf-input" name="answer" rows={4} defaultValue={q.answer ?? ''} placeholder="답변을 적고 저장하면 Q&A 에 공개돼요. 비우고 저장하면 답변이 지워져요." />
                <div className="adm-actions">
                  {q.contact ? (
                    <label className="hf-agree">
                      <input type="checkbox" name="notify" defaultChecked={!q.answer} /> 질문자에게 답변 알림 메일 보내기
                    </label>
                  ) : null}
                  <button className="btn btn-primary">{q.answer ? '답변 수정' : '답변 저장'}</button>
                </div>
              </form>
              <div className="adm-actions">
                <form action={setQuestionHidden}>
                  <input type="hidden" name="id" value={q.id} />
                  <input type="hidden" name="hidden" value={q.hidden ? 'false' : 'true'} />
                  <button className="btn btn-ghost">{q.hidden ? '다시 공개' : '숨기기'}</button>
                </form>
                <form action={deleteQuestion}>
                  <input type="hidden" name="id" value={q.id} />
                  <ConfirmButton className="adm-del" message="이 글을 삭제할까요? 되돌릴 수 없어요.">삭제</ConfirmButton>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
