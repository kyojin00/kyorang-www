import { PROCESS, WORKS } from '@/data/studio'

export default function Works() {
  return (
    <section className="block about" id="works">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow on-dark">
            <span className="dot" />
            직접 만들고 운영하는 것들
          </span>
          <h2>말보다 결과물로 보여드려요</h2>
          <p>외주만 하는 곳이 아니라, 제 서비스를 직접 만들어 스토어에 올리고 운영하고 있어요.</p>
        </div>

        <div className="works-grid">
          {WORKS.map((w) => (
            <div key={w.name} className="value reveal">
              <div className="work-kind">{w.kind}</div>
              <h3>{w.name}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="process-title reveal">진행 과정</h3>
        <ol className="process">
          {PROCESS.map((s, i) => (
            <li key={s.t} className="reveal">
              <span className="pn">{String(i + 1).padStart(2, '0')}</span>
              <b>{s.t}</b>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
