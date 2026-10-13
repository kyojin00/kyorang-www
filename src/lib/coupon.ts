// 카카오톡 채널 쿠폰 확인 (Supabase www_coupons — secret 키로만 읽고 쓴다)
// 문의할 때 쿠폰번호를 넣으면 처음 넣은 사람 이름·이메일로 묶어 둔다.
// 실제 할인 적용(used_at)은 관리자 화면에서 결제 후 표시한다.
import { adminFetch, hasDbKey } from './admin'

export const COUPON_RE = /^\d{12}$/

export type CouponCheck =
  | { ok: true; note: string }
  | { ok: false; error: string }

interface Row {
  code: string
  claimed_email: string | null
  used_at: string | null
}

export async function claimCoupon(code: string, name: string, email: string): Promise<CouponCheck> {
  if (!COUPON_RE.test(code)) return { ok: false, error: '쿠폰번호는 숫자 12자리예요' }
  // 키가 없으면 확인을 못 하니 문의는 받고, 메일에서 직접 확인하게 둔다.
  if (!hasDbKey()) return { ok: true, note: `${code} (자동 확인 안 됨 — 직접 확인 필요)` }

  const rows = (await adminFetch(`www_coupons?code=eq.${code}&select=code,claimed_email,used_at`)) as Row[]
  const row = rows[0]
  if (!row) return { ok: false, error: '없는 쿠폰번호예요. 다시 확인해주세요' }
  if (row.used_at) return { ok: false, error: '이미 사용된 쿠폰이에요' }

  const mine = row.claimed_email?.toLowerCase() === email.toLowerCase()
  if (row.claimed_email && !mine) return { ok: false, error: '다른 분이 먼저 등록한 쿠폰이에요' }

  if (!row.claimed_email) {
    await adminFetch(`www_coupons?code=eq.${code}&claimed_email=is.null`, {
      method: 'PATCH',
      body: { claimed_name: name, claimed_email: email, claimed_at: new Date().toISOString() },
    })
  }
  return { ok: true, note: `${code} · 확인됨 (10% 할인)` }
}
