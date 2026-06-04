export default function Cta() {
  return (
    <section className="block cta" id="contact">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="particle-field" />
          <div className="inner">
            <h2>교랑과 함께하고 싶으신가요?</h2>
            <p>제휴·제안·문의 무엇이든 편하게 보내주세요. 빠르게 답변드릴게요.</p>
            <a href="mailto:rywls123450@gmail.com" className="btn btn-light">
              <svg className="ico" viewBox="0 0 24 24" stroke="var(--deep-2)">
                <path d="M4 6h16v12H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              rywls123450@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}