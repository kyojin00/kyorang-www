import { NextRequest, NextResponse } from 'next/server'
import { EMAIL_RE, field, mailHtml, send } from '@/lib/mail'
import { insert } from '@/lib/board'

// Q&A 질문 작성. 바로 공개되고, 답변은 관리자가 Supabase 에서 answer 칸에 적는다.
export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => ({}))
  if (field(data.website)) return NextResponse.json({ success: true })

  const name = field(data.name, 20)
  const title = field(data.title, 80)
  const content = field(data.content, 2000)
  const contact = field(data.contact, 100)

  if (!name || title.length < 2 || content.length < 5) {
    return NextResponse.json({ error: '이름, 제목, 내용을 입력해주세요' }, { status: 400 })
  }
  if (contact && !EMAIL_RE.test(contact)) {
    return NextResponse.json({ error: '답변 알림 이메일 주소를 확인해주세요' }, { status: 400 })
  }

  try {
    await insert('www_questions', { name, title, content, contact: contact || null })
  } catch (e) {
    console.error('질문 저장 실패:', e)
    return NextResponse.json({ error: '저장 중 오류가 발생했어요' }, { status: 500 })
  }

  await send({
    to: process.env.GMAIL_USER!,
    replyTo: contact || undefined,
    subject: `[교랑 Q&A] ${title}`,
    html: mailHtml('새 질문', 'Supabase www_questions 의 answer 칸에 답을 적으면 공개돼요', [
      ['이름', name],
      ['제목', title],
      ['알림 메일', contact || '(없음)'],
    ], content),
  }).catch((e) => console.error('질문 알림 메일 실패:', e))

  return NextResponse.json({ success: true })
}
