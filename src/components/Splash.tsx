// 진입 시 로고 스플래시 인트로.
// JS 없이 CSS 애니메이션만으로 등장 → 약 2.5초 머문 뒤 자동 페이드아웃됩니다.
export default function Splash() {
  return (
    <div className="splash" aria-hidden>
      <style>{`
        .splash{
          position:fixed;inset:0;z-index:9999;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          background:var(--cream);
          animation:splashHide 3.2s ease forwards;
        }
        .splash-logo{
          display:flex;flex-direction:column;align-items:center;gap:18px;
          animation:splashPop .7s cubic-bezier(.22,1.2,.36,1) both;
        }
        .splash-mark{
          width:92px;height:92px;border-radius:26px;
          background:linear-gradient(140deg,var(--coral),var(--coral-deep));
          display:flex;align-items:center;justify-content:center;
          box-shadow:0 18px 40px rgba(217,87,58,.32);
        }
        .splash-mark img{width:72%;height:72%;object-fit:contain;display:block;}
        .splash-name{
          font-size:26px;font-weight:800;letter-spacing:-.03em;color:var(--ink);
          animation:splashFade .6s ease .25s both;
        }
        @keyframes splashPop{
          0%{opacity:0;transform:scale(.6)}
          60%{opacity:1;transform:scale(1.08)}
          100%{opacity:1;transform:scale(1)}
        }
        @keyframes splashFade{
          from{opacity:0;transform:translateY(6px)}
          to{opacity:1;transform:none}
        }
        @keyframes splashHide{
          0%,78%{opacity:1;visibility:visible;}
          100%{opacity:0;visibility:hidden;}
        }
        @media(prefers-reduced-motion:reduce){
          .splash{animation-duration:1s;}
          .splash-logo,.splash-name{animation:none;}
        }
      `}</style>

      <div className="splash-logo">
        <span className="splash-mark">
          <img src="/kyorang-mark.png" alt="" />
        </span>
        <span className="splash-name">KYORANG</span>
      </div>
    </div>
  )
}