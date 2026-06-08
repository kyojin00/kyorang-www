'use client'

import { useEffect, useRef, useState } from 'react'

// 진입 스플래시: 로고(/kyorang-mark.png)를 점으로 분해해
// 바깥에서부터 하나씩 날아와 로고가 완성되는 인트로.
// 같은 세션에서는 한 번만 표시되고, 탭/브라우저를 닫았다 다시 들어오면 다시 보입니다.
const SEEN_KEY = 'kyorang_splash_seen'

export default function Splash() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hidden, setHidden] = useState(false)
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    // 이미 이번 세션에 봤으면 아예 표시하지 않음
    let seen = false
    try {
      seen = !!sessionStorage.getItem(SEEN_KEY)
    } catch {}
    if (seen) {
      setSkipped(true)
      return
    }
    try {
      sessionStorage.setItem(SEEN_KEY, '1')
    } catch {}

    const reduce = window.matchMedia('(prefers-reduced-motion:reduce)').matches
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const DISPLAY = 380 // 로고 표시 크기(px). 더 크게 원하면 이 숫자만 키우세요.
    const GRID = 58 // 가로 점 개수(촘촘함). 키우면 점이 작고 정밀해져요.
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const colors = ['#EC8A6E', '#D9573A', '#F5C96B']

    const MOVE = reduce ? 1 : 500 // 점 1개가 날아오는 시간
    const SPREAD = reduce ? 0 : 1300 // 점들 사이 시차(전체 채워지는 시간)
    const HOLD = 700 // 완성 후 잠깐 멈춤

    let raf = 0
    let start = 0
    let finishedAt = 0
    let dispW = DISPLAY
    let dispH = DISPLAY
    let dots: {
      sx: number; sy: number; tx: number; ty: number
      delay: number; c: string; r: number
    }[] = []

    // 안전장치: 어떤 이유로든 5초 안에 안 끝나면 강제로 사라지게
    const safety = setTimeout(() => setHidden(true), 5000)
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const img = new Image()
    img.src = '/kyorang-mark.png'
    img.onerror = () => setHidden(true)
    img.onload = () => {
      const ratio = img.height / img.width || 1
      const cols = GRID
      const rows = Math.max(1, Math.round(GRID * ratio))

      const off = document.createElement('canvas')
      off.width = cols
      off.height = rows
      const octx = off.getContext('2d')
      if (!octx) return
      octx.drawImage(img, 0, 0, cols, rows)
      const data = octx.getImageData(0, 0, cols, rows).data

      const cell = DISPLAY / cols
      const dotR = cell * 0.42
      dispW = DISPLAY
      dispH = cell * rows
      const cx = dispW / 2
      const cy = dispH / 2

      const raw: { tx: number; ty: number; dist: number; c: string }[] = []
      let maxDist = 1
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const a = data[(y * cols + x) * 4 + 3]
          if (a > 130) {
            const tx = x * cell + cell / 2
            const ty = y * cell + cell / 2
            const dist = Math.hypot(tx - cx, ty - cy)
            if (dist > maxDist) maxDist = dist
            raw.push({ tx, ty, dist, c: colors[Math.floor(Math.random() * colors.length)] })
          }
        }
      }

      dots = raw.map((p) => {
        // 시작점: 목표를 중심 바깥으로 멀리 밀어낸 위치(+ 약간의 랜덤)
        const ang = Math.atan2(p.ty - cy, p.tx - cx) + (Math.random() - 0.5) * 0.6
        const reach = maxDist * (2.2 + Math.random() * 1.6)
        return {
          sx: cx + Math.cos(ang) * reach,
          sy: cy + Math.sin(ang) * reach,
          tx: p.tx,
          ty: p.ty,
          // 바깥(중심에서 먼) 점일수록 먼저 → 테두리부터 채워짐
          delay: reduce ? 0 : (1 - p.dist / maxDist) * SPREAD,
          c: p.c,
          r: dotR,
        }
      })

      canvas.style.width = dispW + 'px'
      canvas.style.height = dispH + 'px'
      canvas.width = Math.round(dispW * dpr)
      canvas.height = Math.round(dispH * dpr)
      ctx.scale(dpr, dpr)

      start = performance.now()
      raf = requestAnimationFrame(loop)
    }

    const loop = (now: number) => {
      const t = now - start
      ctx.clearRect(0, 0, dispW, dispH)
      let allDone = true
      for (const dot of dots) {
        const p = Math.max(0, Math.min((t - dot.delay) / MOVE, 1))
        if (p < 1) allDone = false
        const e = easeOut(p)
        ctx.globalAlpha = p
        ctx.fillStyle = dot.c
        ctx.beginPath()
        ctx.arc(dot.sx + (dot.tx - dot.sx) * e, dot.sy + (dot.ty - dot.sy) * e, dot.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1

      if (allDone && dots.length) {
        if (!finishedAt) finishedAt = now
        if (now - finishedAt > HOLD) {
          setHidden(true)
          return
        }
      }
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(safety)
    }
  }, [])

  if (skipped) return null

  return (
    <div className={'splash' + (hidden ? ' splash-out' : '')} aria-hidden>
      <style>{`
        .splash{
          position:fixed;inset:0;z-index:9999;
          display:flex;align-items:center;justify-content:center;
          background:var(--cream);
          transition:opacity .6s ease, visibility .6s ease;
        }
        .splash-out{opacity:0;visibility:hidden;pointer-events:none;}
      `}</style>
      <canvas ref={canvasRef} />
    </div>
  )
}