import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '교랑무드 계정 삭제 안내 | 교랑',
  description:
    '교랑무드 앱 사용자의 계정 및 관련 데이터 삭제 절차와 정책을 안내합니다.',
};

export default function MoodDeleteAccountPage() {
  return (
    <>
      {/* 상단 sticky 헤더 */}
      <header className="legal-top">
        <div className="wrap">
          <Link href="/" className="legal-home">
            <span className="mark">
              <img src="/logo.png" alt="교랑" />
            </span>
            <span className="brand-name">교랑</span>
          </Link>
          <Link href="/" className="legal-back">
            ← 홈으로
          </Link>
        </div>
      </header>

      {/* 본문 */}
      <main className="legal-doc">
        <h1>교랑무드 계정 삭제 안내</h1>
        <p className="legal-meta">최종 업데이트 · 2026년 6월</p>
        <p className="legal-intro">
          교랑무드(Kyorang Mood) 앱 사용자의 계정 및 관련 데이터 삭제 절차와 정책을
          안내드립니다. 이 페이지는 앱을 운영하는 <strong>교랑 (KYORANG)</strong>의
          공식 안내문입니다.
        </p>

        {/* 1. 앱에서 직접 삭제 */}
        <h2>1. 앱에서 직접 삭제하기</h2>
        <p>
          교랑무드 앱 안에서 누구나 본인의 계정을 즉시 삭제할 수 있습니다. 아래
          절차를 따라주세요.
        </p>
        <ul>
          <li>
            <strong>1단계 ·</strong> 교랑무드 앱을 실행하고 로그인합니다.
          </li>
          <li>
            <strong>2단계 ·</strong> 일기장 화면 상단의 <strong>점 세 개(︙)
            메뉴</strong>를 눌러 설정으로 들어갑니다.
          </li>
          <li>
            <strong>3단계 ·</strong> 설정 화면 맨 아래의 <strong>"위험 구역"</strong>{' '}
            섹션에서 <strong>계정 삭제</strong>를 누릅니다.
          </li>
          <li>
            <strong>4단계 ·</strong> 안내 문구를 읽고 확인란에{' '}
            <strong>"삭제"</strong>라고 직접 입력한 뒤 <strong>"계정 영구 삭제"</strong>{' '}
            버튼을 누르면 즉시 삭제됩니다.
          </li>
        </ul>

        {/* 2. 이메일로 요청 */}
        <h2>2. 이메일로 요청하기</h2>
        <p>
          앱에 접근할 수 없는 경우, 아래 이메일로 가입하신 이메일 주소를 기재하여
          삭제 요청을 보내실 수 있습니다. 본인 확인 후 영업일 기준 최대 7일 이내에
          처리됩니다.
        </p>
        <p>
          문의 이메일 ·{' '}
          <a
            href="mailto:rywls123450@gmail.com?subject=%5B%EA%B5%90%EB%9E%91%EB%AC%B4%EB%93%9C%5D%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD"
            style={{ color: 'var(--coral-deep)', fontWeight: 700 }}
          >
            rywls123450@gmail.com
          </a>
        </p>

        {/* 3. 삭제되는 데이터 */}
        <h2>3. 삭제되는 데이터</h2>
        <p>
          계정을 삭제하면 다음 데이터가 <strong>즉시 영구 삭제</strong>되며, 복구할
          수 없습니다.
        </p>
        <ul>
          <li>가입 정보 (이메일, 이름, 비밀번호 또는 구글 연동 정보)</li>
          <li>작성한 일기와 기분 기록</li>
          <li>무디(AI)와 나눈 대화 기록</li>
          <li>챙기는 일정 및 과제 데이터</li>
          <li>익명 위로 풀에 띄운 마음 요청</li>
          <li>본인이 신고한 기록</li>
          <li>앱 사용 통계 (대화 사용량 등)</li>
        </ul>

        {/* 4. 익명화 */}
        <h2>4. 익명화하여 보존되는 데이터</h2>
        <p>
          아래 데이터는 다른 사용자의 경험을 보호하기 위해{' '}
          <strong>본인 식별 정보만 제거(익명화)</strong>한 후 콘텐츠는 그대로
          유지됩니다.
        </p>
        <h3>익명 위로 풀에 보낸 위로 메시지</h3>
        <p>
          다른 사용자가 받은 위로 메시지가 사라지지 않도록, 작성자 식별
          정보(user_id)만 제거합니다. 메시지 내용은 익명 상태로 보존되며, 어떤
          방법으로도 작성자를 역추적할 수 없습니다.
        </p>

        {/* 5. 법적 보관 */}
        <h2>5. 법적 의무로 보관되는 데이터</h2>
        <p>
          관련 법령(전자상거래법, 통신비밀보호법 등)에 따라 아래 항목은 계정 삭제
          후에도 일정 기간 보관될 수 있습니다.
        </p>
        <table>
          <thead>
            <tr>
              <th>항목</th>
              <th>보관 기간</th>
              <th>근거 법령</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>결제 및 청구 기록</td>
              <td>5년</td>
              <td>전자상거래법 제6조</td>
            </tr>
            <tr>
              <td>소비자 불만·분쟁 처리 기록</td>
              <td>3년</td>
              <td>전자상거래법 제6조</td>
            </tr>
            <tr>
              <td>접속 로그</td>
              <td>3개월</td>
              <td>통신비밀보호법 제15조</td>
            </tr>
          </tbody>
        </table>

        <div className="legal-note">
          ※ 보관 기간이 지나면 자동으로 파기됩니다. 보관되는 항목은 본인 식별이
          가능한 최소한의 정보로 한정되며, 다른 목적으로 이용되지 않습니다.
        </div>

        {/* 6. 재가입 */}
        <h2>6. 재가입에 대해</h2>
        <p>
          계정 삭제 후에도 동일한 이메일로 언제든 다시 가입하실 수 있습니다. 단,
          이전에 작성한 일기·대화 기록 등은 복구되지 않습니다.
        </p>

        {/* 7. 구독 해지 안내 */}
        <h2>7. 구독을 사용 중이신 경우</h2>
        <p>
          유료 구독 중에 계정을 삭제하더라도 구독은 자동으로 해지되지 않습니다.
          구독 해지는 결제하신 스토어(Google Play 또는 App Store)에서 별도로
          진행해주세요. 계정 삭제 전에 먼저 구독 해지를 완료하시는 것을 권장합니다.
        </p>
      </main>

      <footer className="legal-footer">
        <p>
          운영자 · 교진 (KYORANG) · 문의 · rywls123450@gmail.com
        </p>
      </footer>
    </>
  );
}