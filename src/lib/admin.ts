import { createHmac, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

// 관리자 로그인: ADMIN_PASSWORD 하나로 들어오고, 12시간짜리 서명 쿠키를 준다.
// 쿠키 값 = "만료시각.서명". 서명 키가 비밀번호라 비밀번호를 바꾸면 기존 로그인이 모두 풀린다.
export const COOKIE = 'kr_admin'
const TTL = 12 * 60 * 60 * 1000

const secret = () => process.env.ADMIN_PASSWORD ?? ''
const sign = (exp: string) => createHmac('sha256', secret()).update(`kyorang-admin:${exp}`).digest('hex')

const same = (a: string, b: string) => {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

export function checkPassword(input: string) {
  const pw = secret()
  return pw.length >= 8 && same(input, pw)
}

export function makeToken() {
  const exp = String(Date.now() + TTL)
  return { value: `${exp}.${sign(exp)}`, maxAge: TTL / 1000 }
}

export async function isAdmin() {
  if (secret().length < 8) return false
  const raw = (await cookies()).get(COOKIE)?.value ?? ''
  const [exp, sig] = raw.split('.')
  if (!exp || !sig || Number(exp) < Date.now()) return false
  return same(sig, sign(exp))
}

// ── 관리자 전용 DB 접근 (secret 키: RLS 를 통과한다. 절대 브라우저로 보내지 않는다) ──
const BASE = process.env.WWW_SUPABASE_URL ?? 'https://kyadyqbdugpemzimouxr.supabase.co'
const KEY = process.env.SUPABASE_SECRET_KEY ?? ''

export const hasDbKey = () => KEY.length > 0

function headers(extra: Record<string, string> = {}) {
  const h: Record<string, string> = { apikey: KEY, 'Content-Type': 'application/json', ...extra }
  // 예전 형식 service_role 키(JWT)는 Authorization 헤더도 있어야 한다.
  if (KEY.startsWith('ey')) h.Authorization = `Bearer ${KEY}`
  return h
}

export async function adminFetch(path: string, init: { method?: string; body?: unknown } = {}) {
  const res = await fetch(`${BASE}/rest/v1/${path}`, {
    method: init.method ?? 'GET',
    headers: headers(init.method && init.method !== 'GET' ? { Prefer: 'return=minimal' } : {}),
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
  return init.method && init.method !== 'GET' ? null : res.json()
}

export interface AdminReview {
  id: number
  name: string
  project: string
  rating: number
  content: string
  contact: string
  approved: boolean
  created_at: string
}

export interface AdminQuestion {
  id: number
  name: string
  title: string
  content: string
  contact: string | null
  answer: string | null
  answered_at: string | null
  hidden: boolean
  created_at: string
}
