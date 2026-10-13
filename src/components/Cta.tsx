import Link from 'next/link'

export default function Cta() {
  return (
    <section className="block cta" id="contact">
      <div className="wrap">
        <div className="cta-box reveal">
          <div>
            <h2>어떤 사이트가 필요하세요?</h2>
            <p>아직 정리가 안 됐어도 괜찮아요. 하고 싶은 걸 적어 보내주시면 범위와 견적을 같이 잡아드려요.</p>
          </div>
          <Link href="/contact" className="btn btn-light">
            무료 견적 문의 →
          </Link>
        </div>
      </div>
    </section>
  )
}
