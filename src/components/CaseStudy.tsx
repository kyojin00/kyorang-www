import { CASE_STUDY as c } from '@/data/studio'

export default function CaseStudy() {
  return (
    <section className="block cs-sec" id="portfolio">
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="label">포트폴리오</p>
          <h2>{c.title}</h2>
          <p>{c.summary}</p>
        </div>

        <div className="cs-meta reveal">
          <span>{c.kind}</span>
          <span>{c.client}</span>
        </div>

        <ol className="cs-flow reveal" aria-label="데이터 흐름">
          {c.flow.map((f, i) => (
            <li key={f.from}>
              <span className="cs-step">{String(i + 1).padStart(2, '0')}</span>
              <b>{f.from}</b>
              <span className="cs-note">{f.note}</span>
            </li>
          ))}
        </ol>

        <div className="cs-grid">
          {c.features.map((f) => (
            <div key={f.t} className="cs-feat reveal">
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </div>
          ))}
        </div>

        <div className="cs-foot reveal">
          <div>
            <p className="cs-sub">설계 원칙</p>
            <ul className="cs-principles">
              {c.principles.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="cs-sub">기술</p>
            <div className="cs-tags">
              {c.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
