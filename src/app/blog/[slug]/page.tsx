import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { BUSINESS, SITE_URL } from '@/data/studio'
import { POSTS, findPost, type Block } from '@/data/posts'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = findPost((await params).slug)
  if (!post) return {}
  return {
    title: `${post.title} — 교랑(KYORANG)`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date },
  }
}

function render(b: Block, i: number) {
  if ('h' in b) return <h2 key={i}>{b.h}</h2>
  if ('ul' in b)
    return (
      <ul key={i}>
        {b.ul.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    )
  if ('tip' in b) return <p key={i} className="post-tip">{b.tip}</p>
  return <p key={i}>{b.p}</p>
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = findPost((await params).slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: BUSINESS.name, url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  }
  const others = POSTS.filter((p) => p.slug !== post.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main className="page-top">
        <article className="wrap narrow post">
          <Link href="/blog" className="post-back">
            ← 블로그
          </Link>
          <p className="post-meta">
            {post.tag} · {post.date.replaceAll('-', '.')}
          </p>
          <h1>{post.title}</h1>
          {post.body.map(render)}

          <div className="post-cta">
            <b>비슷한 고민이 있으신가요?</b>
            <p>지금 하시는 일이나 만들고 싶은 걸 적어 보내주시면 방법과 견적을 알려드려요.</p>
            <Link href="/contact" className="btn btn-primary">
              무료 견적 문의 →
            </Link>
          </div>

          {others.length ? (
            <div className="post-more">
              <p className="post-meta">다른 글</p>
              {others.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  {p.title}
                </Link>
              ))}
            </div>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  )
}
