import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { POSTS } from '@/data/posts'

export const metadata: Metadata = {
  title: '블로그 — 교랑(KYORANG)',
  description: '홈페이지 제작 비용, 업무 자동화, 작은 가게 온라인 운영에 관한 글을 올려요.',
  alternates: { canonical: '/blog' },
}

const dot = (d: string) => d.replaceAll('-', '.')

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="page-top">
        <div className="wrap narrow">
          <div className="sec-head">
            <p className="label">블로그</p>
            <h1>만들면서 알게 된 것들</h1>
            <p>홈페이지와 업무 자동화를 고민하는 분들께 도움이 될 이야기를 적어요.</p>
          </div>

          <ul className="post-list">
            {POSTS.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`}>
                  <span className="post-meta">
                    {p.tag} · {dot(p.date)}
                  </span>
                  <b>{p.title}</b>
                  <span className="post-desc">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
