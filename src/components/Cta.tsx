import Link from 'next/link'
export default function Cta() {
  return (
    <section className="block cta" id="contact">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="inner">
            <h2>어떤 사이트가 필요하세요?</h2>
            <p>아직 정리가 안 됐어도 괜찮아요. 하고 싶은 걸 적어 보내주시면 범위와 견적을 같이 잡아드려요.</p>
            <Link href="/contact" className="btn btn-light">
              무료 견적 문의
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
