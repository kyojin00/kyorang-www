// 리뷰·Q&A 게시판 저장소 (Supabase "kyojin" 프로젝트의 www_reviews / www_questions).
// publishable 키는 공개용이라 코드에 둬도 된다. 실제 보호는 DB 의 RLS·열 권한이 한다:
//   - 리뷰는 approved 된 것만, 질문은 hidden 아닌 것만 읽힌다.
//   - contact(연락처)는 읽을 수 없다.
//   - 쓰기는 승인·답변 칸을 건드릴 수 없다.
const BASE = process.env.WWW_SUPABASE_URL ?? 'https://kyadyqbdugpemzimouxr.supabase.co'
const KEY = process.env.WWW_SUPABASE_KEY ?? 'sb_publishable_P4tOhRXDpZJXAU14P7YAsg_ibWnSBCS'

export interface Review {
  id: number
  name: string
  project: string
  rating: number
  content: string
  created_at: string
}

export interface Question {
  id: number
  name: string
  title: string
  content: string
  answer: string | null
  answered_at: string | null
  created_at: string
}

const headers = { apikey: KEY, 'Content-Type': 'application/json' }

async function list<T>(table: string, cols: string, limit: number): Promise<T[]> {
  try {
    const res = await fetch(`${BASE}/rest/v1/${table}?select=${cols}&order=created_at.desc&limit=${limit}`, {
      headers,
      next: { revalidate: 30 },
    })
    if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
    return (await res.json()) as T[]
  } catch (e) {
    // 게시판이 잠깐 안 읽혀도 페이지는 떠야 한다.
    console.error(`게시판 읽기 실패 (${table}):`, e)
    return []
  }
}

export const listReviews = (limit = 50) =>
  list<Review>('www_reviews', 'id,name,project,rating,content,created_at', limit)

export const listQuestions = (limit = 50) =>
  list<Question>('www_questions', 'id,name,title,content,answer,answered_at,created_at', limit)

export async function insert(table: 'www_reviews' | 'www_questions', row: Record<string, unknown>) {
  const res = await fetch(`${BASE}/rest/v1/${table}`, {
    method: 'POST',
    headers: { ...headers, Prefer: 'return=minimal' },
    body: JSON.stringify(row),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`)
}

// "홍길동" → "홍○○". 공개 화면에는 이름을 다 보이지 않는다.
export const maskName = (name: string) => {
  const s = [...name.trim()]
  return s.length <= 1 ? s.join('') : s[0] + '○'.repeat(Math.min(s.length - 1, 3))
}

export const ymd = (iso: string) => {
  const d = new Date(iso)
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`
}
