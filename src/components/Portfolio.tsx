import { PORTFOLIO } from '@/data/studio'

export default function Portfolio() {
  return (
    <section className="block" id="portfolio">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="label">포트폴리오</p>
          <h2>직접 만들고 운영하는 것들</h2>
          <p>외주 결과물뿐 아니라 제 서비스를 직접 만들어 스토어에 올리고 운영하고 있어요.</p>
        </div>
        <div className="pf-grid">
          {PORTFOLIO.map((w) => {
            const body = (
              <>
                <div className="pf-thumb">
                  {w.image ? <img src={w.image} alt={`${w.title} 화면`} /> : <span>{w.title}</span>}
                </div>
                <div className="pf-info">
                  <div className="pf-kind">{w.kind}</div>
                  <h3>
                    {w.title}
                    {w.link ? <span className="pf-go"> ↗</span> : null}
                  </h3>
                  <p>{w.desc}</p>
                  <div className="pf-tags">
                    {w.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </>
            )
            return w.link ? (
              <a key={w.title} href={w.link} target="_blank" rel="noopener noreferrer" className="pf-card reveal">
                {body}
              </a>
            ) : (
              <div key={w.title} className="pf-card reveal">
                {body}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
