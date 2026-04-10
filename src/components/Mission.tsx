'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const services = [
  {
    name: '교랑이',
    tag: 'AI 상담',
    emoji: '🤍',
    desc: '말하기 어려운 고민을 교랑이에게 털어놓으세요. 익명으로 안전하게, 교랑이가 진심 어린 답변을 드려요.',
    features: ['완전 익명', '24시간 운영', '교랑이 상담'],
    url: 'https://kyorang.ai.kr',
    bg: 'linear-gradient(150deg, #2D1F58 0%, #5A4498 100%)',
    orb: 'rgba(124,107,181,0.5)',
    accent: '#A48FD8',
  },
  {
    name: '교랑 스토리',
    tag: '감정 일기 · SNS',
    emoji: '📖',
    desc: '익명으로 감정을 기록하고, 피드에서 일상을 공유해요. 나만의 감정 다이어리부터 SNS까지 하나의 공간에서.',
    features: ['익명 피드', 'SNS 피드', '감정 다이어리'],
    url: 'https://story.kyorang.com',
    bg: 'linear-gradient(150deg, #1A3A5C 0%, #2E6DA4 100%)',
    orb: 'rgba(74,144,196,0.5)',
    accent: '#74BFED',
  },
  {
    name: '교랑톡',
    tag: '메신저',
    emoji: '💬',
    desc: '교랑이와 함께하는 공간에서 새로운 친구를 만나고 대화해요. 부담 없이 연결되는 따뜻한 소통 공간이에요.',
    features: ['닉네임 사용', '1:1 채팅', '오픈채팅'],
    url: 'https://talk.kyorang.com',
    bg: 'linear-gradient(150deg, #3A2800 0%, #8B6914 100%)',
    orb: 'rgba(200,150,60,0.45)',
    accent: '#F0C060',
  },
  {
    name: '교랑샵',
    tag: '캐릭터 굿즈',
    emoji: '🛍️',
    desc: '교랑이 캐릭터를 담은 귀여운 소품들을 만나보세요. 문구, 키링, 엽서 등 다양한 굿즈가 준비되어 있어요.',
    features: ['캐릭터 굿즈', '소품/문구', '빠른 배송'],
    url: 'https://shop.kyorang.com',
    bg: 'linear-gradient(150deg, #4A1030 0%, #B03068 100%)',
    orb: 'rgba(232,98,154,0.5)',
    accent: '#F080B0',
  },
]

const INTERVAL = 5000

export default function Mission() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const tick = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
    }, 30)

    const next = setTimeout(() => {
      setAnimating(true)
      setTimeout(() => {
        setActive(p => (p + 1) % services.length)
        setAnimating(false)
      }, 300)
    }, INTERVAL)

    return () => { clearInterval(tick); clearTimeout(next) }
  }, [active])

  const s = services[active]

  const goTo = (i: number) => {
    if (i === active) return
    setAnimating(true)
    setTimeout(() => {
      setActive(i)
      setAnimating(false)
    }, 250)
  }

  return (
    <>
      <style>{`
        .mission-logo-float { animation: mfloat 5s ease-in-out infinite; }
        @keyframes mfloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .service-card-fade {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .service-card-fade.out {
          opacity: 0;
          transform: translateY(12px);
        }
        .service-card-fade.in {
          opacity: 1;
          transform: translateY(0);
        }
        .dot-btn {
          border: none; cursor: pointer; padding: 0;
          background: none; transition: transform 0.2s;
        }
        .dot-btn:hover { transform: scale(1.2); }
        .mission-link {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 999px;
          font-size: 14px; font-weight: 700; text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.25);
          color: white; background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          transition: background 0.2s, transform 0.2s;
        }
        .mission-link:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }
      `}</style>

      <section id="mission" style={{
        padding: '120px 0', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(160deg, #1E1245 0%, #2D1F58 35%, #4A3490 70%, #6251A8 100%)',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,107,181,0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '320px', height: '320px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,98,154,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>

            {/* 왼쪽 */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '7px 16px', borderRadius: '999px',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 600,
                marginBottom: '28px', border: '1px solid rgba(255,255,255,0.12)',
                letterSpacing: '0.02em',
              }}>우리의 서비스</div>

              <h2 className="font-display" style={{
                fontSize: 'clamp(34px, 4vw, 52px)', color: 'white',
                lineHeight: 1.2, marginBottom: '24px', letterSpacing: '-0.03em',
              }}>
                교랑이와 함께하는<br />모든 공간
              </h2>

              <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '380px' }}>
                상담부터 소통, 기록, 쇼핑까지.<br />
                교랑이 언제나 곁에서 함께할게요.
              </p>

              {/* 교랑이 프로필 */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '16px',
                padding: '16px 24px', borderRadius: '20px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                marginBottom: '40px',
              }}>
                <div className="mission-logo-float" style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: 'rgba(255,255,255,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Image src="/logo.png" alt="교랑이" width={36} height={36} />
                </div>
                <div>
                  <p style={{ color: 'white', fontWeight: 700, fontSize: '16px' }}>교랑이</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '2px' }}>언제나 당신 곁에 있을게요</p>
                </div>
              </div>

              {/* 통계 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
                {[
                  { num: '4', label: '서비스' },
                  { num: '24/7', label: '운영' },
                  { num: '100%', label: '익명 보장' },
                ].map((st, i) => (
                  <div key={i} style={{
                    textAlign: 'center', padding: '16px',
                    background: 'rgba(255,255,255,0.07)',
                    borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)',
                  }}>
                    <p style={{ fontSize: '24px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>{st.num}</p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '4px' }}>{st.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽 — 서비스 카드 캐러셀 */}
            <div>
              {/* 큰 카드 */}
              <div
                className={`service-card-fade ${animating ? 'out' : 'in'}`}
                style={{
                  borderRadius: '28px', padding: '40px',
                  background: s.bg, position: 'relative', overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                  minHeight: '320px', display: 'flex', flexDirection: 'column',
                  marginBottom: '20px',
                }}
              >
                {/* 배경 오브 */}
                <div style={{
                  position: 'absolute', top: '-40px', right: '-40px',
                  width: '200px', height: '200px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${s.orb}, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
                  <div style={{
                    display: 'inline-flex', padding: '5px 14px', borderRadius: '999px',
                    backgroundColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)',
                    fontSize: '12px', fontWeight: 600,
                  }}>{s.tag}</div>
                  <span style={{ fontSize: '32px' }}>{s.emoji}</span>
                </div>

                <h3 className="font-display" style={{
                  fontSize: '40px', color: 'white',
                  marginBottom: '14px', letterSpacing: '-0.03em', lineHeight: 1.1,
                }}>
                  {s.name}
                </h3>

                <p style={{
                  fontSize: '14px', lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.65)', marginBottom: '28px', flex: 1,
                }}>
                  {s.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {s.features.map(f => (
                    <span key={f} style={{
                      fontSize: '12px', padding: '5px 14px', borderRadius: '999px',
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.8)', fontWeight: 500,
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}>{f}</span>
                  ))}
                </div>

                <a href={s.url} target="_blank" rel="noopener noreferrer" className="mission-link">
                  바로가기
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>

                {/* 프로그레스 바 */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '3px', background: 'rgba(255,255,255,0.1)',
                  borderRadius: '0 0 28px 28px',
                }}>
                  <div style={{
                    height: '100%', borderRadius: '0 0 28px 28px',
                    background: s.accent,
                    width: `${progress}%`,
                    transition: 'width 0.03s linear',
                  }} />
                </div>
              </div>

              {/* 도트 + 썸네일 탭 */}
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {services.map((sv, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="dot-btn"
                    style={{
                      width: i === active ? '80px' : '40px',
                      height: '40px', borderRadius: '12px',
                      background: i === active ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)',
                      border: i === active ? '1.5px solid rgba(255,255,255,0.3)' : '1.5px solid rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                      backdropFilter: 'blur(8px)',
                      overflow: 'hidden',
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{sv.emoji}</span>
                    {i === active && (
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'white', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                        {sv.name.replace('교랑 ', '')}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}