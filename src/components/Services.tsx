import { SERVICES } from '@/data/studio'

export default function Services() {
  return (
    <section className="svc-sec" aria-label="만드는 것">
      <div className="wrap">
        <ul className="svc-list">
          {SERVICES.map((s, i) => (
            <li key={s.t} className="reveal">
              <span className="svc-n">{String(i + 1).padStart(2, '0')}</span>
              <h2>{s.t}</h2>
              <p>{s.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
