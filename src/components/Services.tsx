import type { CSSProperties, ReactNode } from 'react'

type Service = {
  name: string
  tag: string
  desc: string
  chips: string[]
  badge: { label: string; bg: string }
  icon: ReactNode
  cardStyle: CSSProperties
  orbStyle: CSSProperties
  iconStyle: CSSProperties
  tagStyle: CSSProperties
  titleColor: string
  descColor: string
  chipStyle: CSSProperties
  pillDark?: boolean
}

const services: Service[] = [
  {
    name: '교랑톡',
    tag: '소셜 · SNS',
    desc: '피드로 일상을 나누고, 친구와 메시지로 이어지는 소셜 공간. 사람과 사람을 가볍고 따뜻하게 잇는 교랑의 SNS예요.',
    chips: ['피드 · 일상 공유', '친구 · 팔로우', '실시간 채팅'],
    badge: { label: 'MAIN', bg: 'var(--deep-2)' },
    icon: (
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.4-4A8.3 8.3 0 0 1 12 3.5a8.4 8.4 0 0 1 9 8Z" />
    ),
    cardStyle: {
      background: 'linear-gradient(155deg,#FCF1E6,#F4E2CD)',
      borderColor: 'transparent',
    },
    orbStyle: {
      background: 'radial-gradient(circle,rgba(200,150,90,.28),transparent 70%)',
    },
    iconStyle: { background: 'rgba(58,43,102,.1)', color: 'var(--deep-2)' },
    tagStyle: { color: 'var(--deep-2)', background: 'rgba(58,43,102,.1)' },
    titleColor: 'var(--text)',
    descColor: 'var(--text-mid)',
    chipStyle: { color: 'var(--text-mid)', background: 'rgba(58,43,102,.07)' },
    pillDark: true,
  },
  {
    name: '교랑무드',
    tag: '마음 기록 · AI 비서',
    desc: '마스코트 무디와 대화하며 오늘의 마음을 기록해요. AI 비서가 이야기를 들어주고, 당신에게 꼭 맞는 한마디를 건네요.',
    chips: ['기분 기록', 'AI 상담', '돌아보기'],
    badge: { label: 'NEW', bg: '#FF5C97' },
    icon: (
      <>
        <path d="M20 13.5A8 8 0 1 1 10.5 4a6.3 6.3 0 0 0 9.5 9.5Z" />
        <path d="m17.5 3.5.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" />
      </>
    ),
    cardStyle: {
      background: 'linear-gradient(150deg,#3A2168,#6A3D9E 55%,#B05A9C)',
      borderColor: 'transparent',
    },
    orbStyle: {
      background: 'radial-gradient(circle,rgba(224,104,156,.5),transparent 70%)',
    },
    iconStyle: { background: 'rgba(255,255,255,.12)', color: '#fff' },
    tagStyle: { color: 'rgba(255,255,255,.82)', background: 'rgba(255,255,255,.14)' },
    titleColor: '#fff',
    descColor: 'rgba(255,255,255,.78)',
    chipStyle: { color: 'rgba(255,255,255,.85)', background: 'rgba(255,255,255,.13)' },
  },
]

export default function Services() {
  return (
    <section className="block services" id="services">
      <div className="wrap">
        <div className="sec-head center reveal">
          <span className="eyebrow">Our Services</span>
          <h2>교랑이와 함께하는 두 공간</h2>
          <p>사람과 잇는 SNS, 마음을 돌보는 AI 비서. 교랑이 두 가지 방식으로 곁에 있어요.</p>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <div className="svc reveal" key={s.name} style={s.cardStyle}>
              <span
                className="badge"
                style={{ background: s.badge.bg, color: '#fff' }}
              >
                {s.badge.label}
              </span>
              <div className="orb" style={s.orbStyle} />
              <div className="svc-top">
                <span className="s-ic" style={s.iconStyle}>
                  <svg className="ico" viewBox="0 0 24 24">
                    {s.icon}
                  </svg>
                </span>
                <span className="svc-tag" style={s.tagStyle}>
                  {s.tag}
                </span>
              </div>
              <h3 style={{ color: s.titleColor }}>{s.name}</h3>
              <p style={{ color: s.descColor }}>{s.desc}</p>
              <div className="chips">
                {s.chips.map((c) => (
                  <span className="chip" key={c} style={s.chipStyle}>
                    {c}
                  </span>
                ))}
              </div>
              <span className={'app-pill' + (s.pillDark ? ' app-pill-dark' : '')}>
                <svg
                  className="ico"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  stroke={s.pillDark ? 'var(--deep-2)' : '#fff'}
                >
                  <rect x="7" y="3" width="10" height="18" rx="2.5" />
                  <path d="M11 18h2" />
                </svg>
                모바일 앱
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}