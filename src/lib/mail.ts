import nodemailer from 'nodemailer'

// 폼에서 들어온 글자는 메일 HTML 에 넣기 전에 반드시 이스케이프한다.
// 안 하면 누군가 <a href=...> 를 넣어 우리 메일함에 가짜 링크를 심을 수 있다.
export function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 문자열만 받고, 앞뒤 공백을 자르고, 너무 긴 건 자른다.
export function field(v: unknown, max = 200) {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

function transporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

// rows: [라벨, 값] — 값은 여기서 이스케이프한다.
export function mailHtml(title: string, sub: string, rows: [string, string][], body?: string) {
  const tr = rows
    .map(
      ([k, v]) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #F2EAE0;font-size:13px;color:#B0A39E;width:96px;vertical-align:top;">${esc(k)}</td>
        <td style="padding:10px 0;border-bottom:1px solid #F2EAE0;font-size:14px;color:#3A2A2E;font-weight:500;">${esc(v)}</td>
      </tr>`
    )
    .join('')
  return `
  <div style="font-family:'Pretendard','Noto Sans KR',sans-serif;max-width:600px;margin:0 auto;padding:40px 24px;background:#FBF5EC;">
    <div style="background:linear-gradient(135deg,#2E2127,#3D2D33);border-radius:16px;padding:32px;margin-bottom:24px;text-align:center;">
      <h1 style="color:#fff;font-size:22px;margin:0;">${esc(title)}</h1>
      <p style="color:rgba(255,255,255,.6);margin:8px 0 0;font-size:14px;">${esc(sub)}</p>
    </div>
    <div style="background:#fff;border-radius:16px;padding:24px;margin-bottom:16px;">
      <table style="width:100%;border-collapse:collapse;">${tr}</table>
    </div>
    ${
      body
        ? `<div style="background:#fff;border-radius:16px;padding:24px;">
             <p style="font-size:14px;color:#3A2A2E;line-height:1.8;margin:0;white-space:pre-wrap;">${esc(body)}</p>
           </div>`
        : ''
    }
    <p style="text-align:center;font-size:12px;color:#B0A39E;margin-top:24px;">© 2026 KYORANG · kyorang.com</p>
  </div>`
}

export async function send(opts: { to: string; subject: string; html: string; replyTo?: string }) {
  await transporter().sendMail({
    from: `"교랑" <${process.env.GMAIL_USER}>`,
    ...opts,
  })
}
