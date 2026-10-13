import type { Metadata } from 'next'
import Link from 'next/link'
import SiteEffects from '@/components/SiteEffects'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BoardForm from '@/components/BoardForm'
import { listQuestions, maskName, ymd } from '@/lib/board'

export const revalidate = 30

export const metadata: Metadata = {
  title: 'Q&A — 교랑(KYORANG)',
  description: '자동화·매크로, 프로그램, 웹사이트 제작에 대해 궁금한 점을 묻고 답을 확인하는 공간입니다.',
  alternates: { canonical: '/qna' },
}

export default async function QnaPage() {
  const questions = await listQuestions()

  return (
    <>
      <SiteEffects />
      <Nav />
      <main className="page-top">
        <div className="wrap narrow">
          <div className="sec-head">
            <p className="label">Q&amp;A</p>
            <h1>궁금한 걸 물어보세요</h1>
            <p>
              이런 것도 자동화되나요? 비용은 어느 정도인가요? 무엇이든 괜찮아요. 질문과 답변은 모두에게
              공개돼요. 견적처럼 개인적인 내용은 <Link href="/contact">문의하기</Link>를 이용해 주세요.
            </p>
          </div>

          <BoardForm
            endpoint="/api/questions"
            open="질문하기"
            done="질문이 등록됐어요. 답변이 달리면 이 페이지에서 확인할 수 있어요."
            note="질문은 바로 공개돼요. 이메일은 답변 알림에만 쓰고 공개하지 않아요."
            fields={[
              { key: 'name', label: '이름', required: true, placeholder: '홍길동' },
              { key: 'title', label: '제목', required: true, placeholder: '예: 쇼핑몰 주문을 엑셀로 자동 정리할 수 있나요?' },
              { key: 'content', label: '내용', type: 'textarea', required: true },
              { key: 'contact', label: '답변 알림 이메일 (선택, 비공개)', type: 'email', placeholder: 'hello@email.com' },
            ]}
          />

          <ul className="bd-list">
            {questions.length === 0 ? (
              <li className="bd-empty">아직 질문이 없어요. 첫 질문을 남겨주세요.</li>
            ) : (
              questions.map((q) => (
                <li key={q.id} className="bd-item">
                  <details>
                    <summary>
                      <span className={'bd-badge' + (q.answer ? ' done' : '')}>{q.answer ? '답변 완료' : '답변 대기'}</span>
                      <b>{q.title}</b>
                      <span className="bd-meta">
                        {maskName(q.name)} · {ymd(q.created_at)}
                      </span>
                    </summary>
                    <p className="bd-body">{q.content}</p>
                    {q.answer ? (
                      <div className="bd-answer">
                        <span className="bd-a">교랑 답변{q.answered_at ? ` · ${ymd(q.answered_at)}` : ''}</span>
                        <p>{q.answer}</p>
                      </div>
                    ) : null}
                  </details>
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
