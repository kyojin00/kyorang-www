export default function Stats() {
  return (
    <div className="trust">
      <div className="wrap">
        <div className="stat reveal">
          <div className="num" data-count="2" data-suffix="개">
            2<span className="u">개</span>
          </div>
          <div className="lbl">운영 중인 서비스</div>
        </div>
        <div className="stat reveal">
          <div className="num">24/7</div>
          <div className="lbl">언제나 곁에서</div>
        </div>
        <div className="stat reveal">
          <div className="num" data-count="100" data-suffix="%">
            100<span className="u">%</span>
          </div>
          <div className="lbl">익명·프라이버시 보장</div>
        </div>
        <div className="stat reveal">
          <div className="num" data-count="2026">
            2026
          </div>
          <div className="lbl">함께 시작한 해</div>
        </div>
      </div>
    </div>
  )
}