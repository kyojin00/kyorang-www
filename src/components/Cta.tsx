export default function Cta() {
  return (
    <section className="block cta" id="contact">
      <div className="wrap">
        <div className="cta-box reveal">
          <div className="inner">
            <h2>교랑과 함께하고 싶으신가요?</h2>
            <p>제휴·제안·문의 무엇이든 편하게 보내주세요. 빠르게 답변드릴게요.</p>
            <a href="/contact" className="btn btn-light">
              문의하기
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}