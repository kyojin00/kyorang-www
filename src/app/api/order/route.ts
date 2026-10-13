import { NextRequest, NextResponse } from 'next/server'
import { EMAIL_RE, field, mailHtml, send } from '@/lib/mail'
import { findTemplate, won } from '@/data/studio'

// 템플릿 구매 신청. 결제는 계좌이체라 여기서는 주문을 메일로 남기기만 한다.
// 금액은 클라이언트가 보낸 값을 믿지 않고 서버의 상품 목록에서 다시 찾는다.
export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => ({}))
  if (field(data.website)) return NextResponse.json({ success: true, orderNo: '' })

  const tpl = findTemplate(field(data.slug, 60))
  if (!tpl || !tpl.ready) {
    return NextResponse.json({ error: '지금은 구매할 수 없는 상품이에요' }, { status: 400 })
  }

  const name = field(data.name, 50)
  const email = field(data.email, 120)
  const phone = field(data.phone, 30)
  const depositor = field(data.depositor, 50) || name
  const receipt = field(data.receipt, 100)
  const memo = field(data.memo, 2000)

  if (!name || !email || !phone) {
    return NextResponse.json({ error: '이름, 이메일, 연락처를 입력해주세요' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: '이메일 주소를 확인해주세요' }, { status: 400 })
  }
  if (data.agree !== true) {
    return NextResponse.json({ error: '환불 정책과 개인정보 수집에 동의해주세요' }, { status: 400 })
  }

  const now = new Date()
  const ymd = now.toISOString().slice(0, 10).replace(/-/g, '')
  const orderNo = `KR${ymd}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`
  const bank = process.env.BANK_ACCOUNT // 예: "카카오뱅크 3333-00-0000000 (예금주 교진)"

  const rows: [string, string][] = [
    ['주문번호', orderNo],
    ['상품', tpl.name],
    ['금액', won(tpl.price) + ' (VAT 포함)'],
    ['이름', name],
    ['이메일', email],
    ['연락처', phone],
    ['입금자명', depositor],
  ]
  if (receipt) rows.push(['증빙', receipt])

  try {
    await send({
      to: process.env.GMAIL_USER!,
      replyTo: email,
      subject: `[교랑 주문] ${tpl.name} · ${depositor} · ${orderNo}`,
      html: mailHtml('템플릿 구매 신청', '입금 확인 후 파일을 보내주세요', rows, memo || undefined),
    })

    const guide = bank
      ? `아래 계좌로 ${won(tpl.price)}을 입금해 주세요.\n${bank}\n\n입금자명은 "${depositor}"(으)로 해주세요. 입금이 확인되면 영업일 1일 안에 이 메일 주소로 템플릿 파일과 설명서를 보내드려요.\n\n입금 전에는 언제든 취소할 수 있어요. 이 메일에 답장으로 알려주세요.`
      : `주문을 받았어요. 입금 계좌를 영업일 1일 안에 이 메일 주소로 안내해 드릴게요.`
    // 주문은 이미 우리 메일함에 들어갔다. 안내 메일이 실패해도 주문을 실패로 돌리면
    // 손님이 다시 눌러 주문이 두 번 들어가니, 기록만 하고 넘어간다.
    await send({
      to: email,
      replyTo: process.env.GMAIL_USER,
      subject: `[교랑] 주문이 접수됐어요 (${orderNo})`,
      html: mailHtml('주문이 접수됐어요', `${tpl.name} · ${orderNo}`, rows.slice(0, 3), guide),
    }).catch((e) => console.error('구매자 안내 메일 실패:', orderNo, e))

    return NextResponse.json({ success: true, orderNo, bank: bank ?? null, amount: tpl.price })
  } catch (error) {
    console.error('주문 메일 발송 오류:', error)
    return NextResponse.json({ error: '주문 접수 중 오류가 발생했어요' }, { status: 500 })
  }
}
