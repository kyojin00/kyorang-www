'use server'

import { revalidatePath } from 'next/cache'
import { adminFetch, isAdmin } from '@/lib/admin'
import { EMAIL_RE, mailHtml, send } from '@/lib/mail'

// 모든 동작은 서버에서 관리자 쿠키를 다시 확인한 뒤에만 DB 를 건드린다.
async function guard() {
  if (!(await isAdmin())) throw new Error('관리자 로그인이 필요해요')
}

const id = (f: FormData) => {
  const n = Number(f.get('id'))
  if (!Number.isInteger(n) || n <= 0) throw new Error('잘못된 글 번호')
  return n
}

function refresh() {
  revalidatePath('/admin')
  revalidatePath('/reviews')
  revalidatePath('/qna')
  revalidatePath('/')
}

export async function setReviewApproved(f: FormData) {
  await guard()
  await adminFetch(`www_reviews?id=eq.${id(f)}`, { method: 'PATCH', body: { approved: f.get('approved') === 'true' } })
  refresh()
}

export async function deleteReview(f: FormData) {
  await guard()
  await adminFetch(`www_reviews?id=eq.${id(f)}`, { method: 'DELETE' })
  refresh()
}

export async function answerQuestion(f: FormData) {
  await guard()
  const qid = id(f)
  const answer = String(f.get('answer') ?? '').trim().slice(0, 4000)
  await adminFetch(`www_questions?id=eq.${qid}`, {
    method: 'PATCH',
    body: answer ? { answer, answered_at: new Date().toISOString() } : { answer: null, answered_at: null },
  })

  // 질문자가 알림 메일을 남겼으면 답변 소식을 보낸다. 실패해도 답변 저장은 유지.
  const contact = String(f.get('contact') ?? '')
  const title = String(f.get('title') ?? '')
  if (answer && f.get('notify') === 'on' && EMAIL_RE.test(contact)) {
    await send({
      to: contact,
      replyTo: process.env.GMAIL_USER,
      subject: `[교랑] 질문에 답변이 달렸어요: ${title}`,
      html: mailHtml('답변이 등록됐어요', 'kyorang.com Q&A', [['질문', title]], `${answer}\n\n전체 보기: https://www.kyorang.com/qna`),
    }).catch((e) => console.error('답변 알림 메일 실패:', e))
  }
  refresh()
}

export async function setQuestionHidden(f: FormData) {
  await guard()
  await adminFetch(`www_questions?id=eq.${id(f)}`, { method: 'PATCH', body: { hidden: f.get('hidden') === 'true' } })
  refresh()
}

export async function deleteQuestion(f: FormData) {
  await guard()
  await adminFetch(`www_questions?id=eq.${id(f)}`, { method: 'DELETE' })
  refresh()
}
