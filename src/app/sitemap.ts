'use client'

import { useEffect } from 'react'

// 페이지 전반의 인터랙션(진행바·스크롤 효과·카운트업·입자·스포트라이트·3D 틸트·패럴랙스)을
// 한곳에서 DOM 기준으로 처리합니다. 각 섹션 컴포넌트는 순수 마크업만 담당합니다.
export default function SiteEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = []
    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    const finePointer = window.matchMedia('(pointer:fine)').matches

    // 네비게이션 스크롤 효과
    const nav = document.getElementById('nav')
    const prog = document.getElementById('progress')
    const onScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 24)
      if (prog) {
        const h = document.documentElement
        const max = h.scrollHeight - h.clientHeight
        prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%'
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    cleanups.push(() => window.removeEventListener('scroll', onScroll))

    // 스크롤 등장 애니메이션
    const revealEls = document.querySelectorAll<HTMLElement>('.reveal:not(.in)')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement
            setTimeout(() => el.classList.add('in'), (i % 4) * 80)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    revealEls.forEach((el) => io.observe(el))
    cleanups.push(() => io.disconnect())

    // 숫자 카운트업
    const animateCount = (el: HTMLElement) => {
      const target = parseInt(el.dataset.count || '', 10)
      const suffix = el.dataset.suffix || ''
      if (isNaN(target)) return
      const dur = 1500
      const start = performance.now()
      const step = (now: number) => {
        const p = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.innerHTML =
          Math.round(target * eased) +
          (suffix ? '<span class="u">' + suffix + '</span>' : '')
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const countObs = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            animateCount(e.target as HTMLElement)
            countObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.6 }
    )
    document
      .querySelectorAll<HTMLElement>('.num[data-count]')
      .forEach((el) => countObs.observe(el))
    cleanups.push(() => countObs.disconnect())

    // 떠오르는 빛 입자
    if (!reduce) {
      document.querySelectorAll<HTMLElement>('.particle-field').forEach((field) => {
        for (let i = 0; i < 18; i++) {
          const p = document.createElement('i')
          const s = 3 + Math.random() * 5
          p.style.left = Math.random() * 100 + '%'
          p.style.width = p.style.height = s + 'px'
          p.style.animationDuration = 9 + Math.random() * 10 + 's'
          p.style.animationDelay = -Math.random() * 16 + 's'
          p.style.opacity = (0.3 + Math.random() * 0.5).toFixed(2)
          field.appendChild(p)
        }
      })
    }

    // 회사소개 커서 스포트라이트
    const about = document.getElementById('about')
    if (about && !reduce && finePointer) {
      const onMove = (e: MouseEvent) => {
        const r = about.getBoundingClientRect()
        about.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%')
        about.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%')
      }
      about.addEventListener('mousemove', onMove)
      cleanups.push(() => about.removeEventListener('mousemove', onMove))
    }

    // 서비스 카드 3D 틸트
    if (!reduce && finePointer) {
      document.querySelectorAll<HTMLElement>('.svc').forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect()
          const x = (e.clientX - r.left) / r.width - 0.5
          const y = (e.clientY - r.top) / r.height - 0.5
          card.style.transform =
            'translateY(-8px) rotateX(' + y * -7 + 'deg) rotateY(' + x * 9 + 'deg)'
        }
        const onLeave = () => {
          card.style.transform = ''
        }
        card.addEventListener('mousemove', onMove)
        card.addEventListener('mouseleave', onLeave)
        cleanups.push(() => {
          card.removeEventListener('mousemove', onMove)
          card.removeEventListener('mouseleave', onLeave)
        })
      })
    }

    // 히어로 폰 마우스 패럴랙스
    const hero = document.querySelector<HTMLElement>('.hero')
    const phone = document.querySelector<HTMLElement>('.phone')
    if (hero && phone && !reduce && finePointer) {
      const onMove = (e: MouseEvent) => {
        const r = hero.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width - 0.5
        const y = (e.clientY - r.top) / r.height - 0.5
        phone.style.transform =
          'translate(' + x * -20 + 'px,' + y * -15 + 'px) rotate(' + x * 1.6 + 'deg)'
      }
      const onLeave = () => {
        phone.style.transform = ''
      }
      hero.addEventListener('mousemove', onMove)
      hero.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        hero.removeEventListener('mousemove', onMove)
        hero.removeEventListener('mouseleave', onLeave)
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }, [])

  return <div id="progress" />
}