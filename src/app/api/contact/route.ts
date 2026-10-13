import { NextRequest, NextResponse } from 'next/server'
import { EMAIL_RE, field, mailHtml, send } from '@/lib/mail'
import { BUDGETS, INQUIRY_TYPES } from '@/data/studio'

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => ({}))

  // 사람 눈에 안 보이는 칸. 채워져 있으면 봇이다 — 성공한 척만 한다.
  if (field(data.website)) return NextResponse.json({ success: true })

  const name = field(data.name, 50)
  const email = field(data.email, 120)
  const phone = field(data.phone, 30)
  const message = field(data.message, 5000)
  const type = INQUIRY_TYPES.find((t) => t === data.type) ?? '기타'
  const budget = BUDGETS.find((b) => b === data.budget) ?? '미정'
  const deadline = field(data.deadline, 50)

  if (!name || !email || !message) {
    return NextResponse.json({ error: '이름, 이메일, 내용을 입력해주세요' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: '이메일 주소를 확인해주세요' }, { status: 400 })
  }

  const rows: [string, string][] = [
    ['유형', type],
    ['이름', name],
    ['이메일', email],
  ]
  if (phone) rows.push(['연락처', phone])
  if (type === '웹사이트 제작 견적' || type === '프로그램 · 앱 제작 견적') {
    rows.push(['예산', budget])
    if (deadline) rows.push(['희망 일정', deadline])
  }

  try {
    await send({
      to: process.env.GMAIL_USER!,
      replyTo: email,
      subject: `[교랑 문의 · ${type}] ${name}님`,
      html: mailHtml('교랑 문의', `${type} · kyorang.com`, rows, message),
    })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('메일 발송 오류:', error)
    return NextResponse.json({ error: '메일 발송 중 오류가 발생했어요' }, { status: 500 })
  }
}
