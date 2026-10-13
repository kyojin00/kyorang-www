import { NextRequest, NextResponse } from 'next/server'
import { field, mailHtml, send } from '@/lib/mail'
import { insert } from '@/lib/board'

// 리뷰 작성. 바로 공개되지 않고, 관리자가 실제 고객인지 확인한 뒤 approved 를 켠다.
export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => ({}))
  if (field(data.website)) return NextResponse.json({ success: true })

  const name = field(data.name, 20)
  const project = field(data.project, 40)
  const content = field(data.content, 1000)
  const contact = field(data.contact, 100)
  const rating = Number(data.rating)

  if (!name || !project || !contact) {
    return NextResponse.json({ error: '이름, 작업 내용, 연락처를 입력해주세요' }, { status: 400 })
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return NextResponse.json({ error: '별점을 골라주세요' }, { status: 400 })
  }
  if (content.length < 10) {
    return NextResponse.json({ error: '후기는 10자 이상 적어주세요' }, { status: 400 })
  }

  try {
    await insert('www_reviews', { name, project, rating, content, contact })
  } catch (e) {
    console.error('리뷰 저장 실패:', e)
    return NextResponse.json({ error: '저장 중 오류가 발생했어요' }, { status: 500 })
  }

  await send({
    to: process.env.GMAIL_USER!,
    subject: `[교랑 리뷰] ${name}님 · ★${rating} — 승인 대기`,
    html: mailHtml('새 리뷰 (승인 대기)', 'Supabase www_reviews 에서 approved 를 켜면 공개돼요', [
      ['이름', name],
      ['작업', project],
      ['별점', '★'.repeat(rating)],
      ['연락처', contact],
    ], content),
  }).catch((e) => console.error('리뷰 알림 메일 실패:', e))

  return NextResponse.json({ success: true })
}
