import { SITE_URL } from '@/data/studio'
import { listQuestions, listReviews, maskName } from '@/lib/board'

// 네이버 서치어드바이저 RSS 제출용. 답변이 달린 Q&A 와 공개된 후기를 새 글로 알린다.
// 답변 없는 질문은 내용이 얇아 넣지 않는다.
export const revalidate = 300

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;')

const cut = (s: string, n = 300) => (s.length > n ? s.slice(0, n) + '…' : s)

type Item = { title: string; link: string; description: string; date: string }

export async function GET() {
  const [questions, reviews] = await Promise.all([listQuestions(50), listReviews(50)])

  const items: Item[] = [
    ...questions
      .filter((q) => q.answer)
      .map((q) => ({
        title: `Q. ${q.title}`,
        link: `${SITE_URL}/qna#q-${q.id}`,
        description: `${cut(q.content, 200)}\n\nA. ${cut(q.answer ?? '')}`,
        date: q.answered_at ?? q.created_at,
      })),
    ...reviews.map((r) => ({
      title: `[후기] ${r.project} — ${'★'.repeat(r.rating)}`,
      link: `${SITE_URL}/reviews#r-${r.id}`,
      description: `${cut(r.content)} (${maskName(r.name)})`,
      date: r.created_at,
    })),
  ]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 50)

  const latest = items[0]?.date ?? new Date().toISOString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>교랑 (KYORANG) — Q&amp;A · 고객 후기</title>
<link>${SITE_URL}</link>
<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
<description>업무 자동화·프로그램·웹사이트 제작 교랑의 Q&amp;A 답변과 고객 후기</description>
<language>ko</language>
<lastBuildDate>${new Date(latest).toUTCString()}</lastBuildDate>
${items
  .map(
    (i) => `<item>
<title>${esc(i.title)}</title>
<link>${esc(i.link)}</link>
<guid isPermaLink="true">${esc(i.link)}</guid>
<description>${esc(i.description)}</description>
<pubDate>${new Date(i.date).toUTCString()}</pubDate>
</item>`
  )
  .join('\n')}
</channel>
</rss>
`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } })
}
