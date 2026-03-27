import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: '모든 항목을 입력해주세요' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"교랑 문의" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[교랑 문의] ${name}님의 문의`,
      html: `
        <div style="font-family: 'Noto Sans KR', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #FDF8F3;">
          <div style="background: linear-gradient(135deg, #3D2E6B, #7C6BB5); border-radius: 16px; padding: 32px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: white; font-size: 24px; margin: 0;">교랑 문의</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">kyorang.com 문의 폼</p>
          </div>

          <div style="background: white; border-radius: 16px; padding: 24px; margin-bottom: 16px; box-shadow: 0 2px 12px rgba(61,46,107,0.08);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F5E6D3; font-size: 13px; color: #A89AB8; width: 80px;">이름</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F5E6D3; font-size: 14px; color: #2A2035; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #F5E6D3; font-size: 13px; color: #A89AB8;">이메일</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #F5E6D3; font-size: 14px; color: #2A2035; font-weight: 500;">${email}</td>
              </tr>
            </table>
          </div>

          <div style="background: white; border-radius: 16px; padding: 24px; box-shadow: 0 2px 12px rgba(61,46,107,0.08);">
            <p style="font-size: 13px; color: #A89AB8; margin: 0 0 12px;">메시지</p>
            <p style="font-size: 14px; color: #2A2035; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; margin-top: 24px;">
            <a href="mailto:${email}" style="display: inline-block; padding: 12px 28px; background: linear-gradient(135deg, #7C6BB5, #3D2E6B); color: white; border-radius: 999px; font-size: 14px; font-weight: 600; text-decoration: none;">
              ${name}님께 답장하기
            </a>
          </div>

          <p style="text-align: center; font-size: 12px; color: #A89AB8; margin-top: 24px;">© 2026 KYORANG</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('메일 발송 오류:', error)
    return NextResponse.json({ error: '메일 발송 중 오류가 발생했어요' }, { status: 500 })
  }
}