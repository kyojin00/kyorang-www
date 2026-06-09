import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '교랑무드 계정 삭제 안내 | 교랑',
  description:
    '교랑무드 앱 사용자의 계정 및 관련 데이터 삭제 절차와 정책을 안내합니다.',
};

export default function MoodDeleteAccountPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-2xl px-6 py-16">
        {/* 헤더 */}
        <header className="mb-12">
          <p className="text-sm font-semibold text-neutral-500 mb-2">
            교랑무드 · 계정 관리
          </p>
          <h1 className="text-3xl font-black mb-4">계정 삭제 안내</h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            교랑무드(Kyorang Mood) 앱에서 본인의 계정과 데이터를 직접 삭제할 수
            있도록 안내드립니다. 이 페이지는 앱을 운영하는 <strong>교랑 (KYORANG)</strong>의
            공식 안내문입니다.
          </p>
        </header>

        {/* 1. 삭제 방법 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">앱에서 직접 삭제하기</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            교랑무드 앱 안에서 누구나 본인의 계정을 즉시 삭제할 수 있습니다.
            아래 절차를 따라주세요.
          </p>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-900 text-white text-sm font-bold flex items-center justify-center">
                1
              </span>
              <p className="text-neutral-800 leading-relaxed pt-0.5">
                교랑무드 앱을 실행하고 로그인합니다.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-900 text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <p className="text-neutral-800 leading-relaxed pt-0.5">
                일기장 화면 상단의 <strong>점 세 개(︙) 메뉴</strong>를 눌러
                설정으로 들어갑니다.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-900 text-white text-sm font-bold flex items-center justify-center">
                3
              </span>
              <p className="text-neutral-800 leading-relaxed pt-0.5">
                설정 화면 맨 아래의 <strong>"위험 구역"</strong> 섹션에서{' '}
                <strong>계정 삭제</strong>를 누릅니다.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-neutral-900 text-white text-sm font-bold flex items-center justify-center">
                4
              </span>
              <p className="text-neutral-800 leading-relaxed pt-0.5">
                안내 문구를 읽고 확인란에 <strong>"삭제"</strong>라고 직접 입력한
                뒤 <strong>"계정 영구 삭제"</strong> 버튼을 누르면 즉시 삭제됩니다.
              </p>
            </li>
          </ol>
        </section>

        {/* 2. 이메일로 요청 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">이메일로 요청하기</h2>
          <p className="text-neutral-700 leading-relaxed mb-3">
            앱에 접근할 수 없는 경우, 아래 이메일로 가입하신 이메일 주소를
            기재하여 삭제 요청을 보내실 수 있습니다. 본인 확인 후 영업일 기준
            최대 7일 이내에 처리됩니다.
          </p>
          <a
            href="mailto:kyojin0527@kyorang.com?subject=%5B%EA%B5%90%EB%9E%91%EB%AC%B4%EB%93%9C%5D%20%EA%B3%84%EC%A0%95%20%EC%82%AD%EC%A0%9C%20%EC%9A%94%EC%B2%AD"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 text-white rounded-lg text-sm font-bold hover:bg-neutral-700 transition-colors"
          >
            kyojin0527@kyorang.com 으로 문의하기
          </a>
        </section>

        {/* 3. 삭제되는 데이터 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">삭제되는 데이터</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            계정을 삭제하면 다음 데이터가 <strong>즉시 영구 삭제</strong>되며,
            복구할 수 없습니다.
          </p>
          <ul className="space-y-2">
            {[
              '가입 정보 (이메일, 이름, 비밀번호 또는 구글 연동 정보)',
              '작성한 일기와 기분 기록',
              '무디(AI)와 나눈 대화 기록',
              '챙기는 일정 및 과제 데이터',
              '익명 위로 풀에 띄운 마음 요청',
              '본인이 신고한 기록',
              '앱 사용 통계 (대화 사용량 등)',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-neutral-700 leading-relaxed">
                <span className="text-neutral-400 mt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. 익명화하여 보존되는 데이터 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">익명화하여 보존되는 데이터</h2>
          <p className="text-neutral-700 leading-relaxed mb-4">
            아래 데이터는 다른 사용자의 경험을 보호하기 위해{' '}
            <strong>본인 식별 정보만 제거(익명화)</strong>한 후 콘텐츠는 그대로 유지됩니다.
          </p>
          <ul className="space-y-3">
            <li className="border border-neutral-200 rounded-lg p-4">
              <p className="font-semibold mb-1">익명 위로 풀에 보낸 위로 메시지</p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                다른 사용자가 받은 위로 메시지가 사라지지 않도록, 작성자 식별
                정보(user_id)만 제거합니다. 메시지 내용은 익명 상태로 보존됩니다.
              </p>
            </li>
          </ul>
        </section>

        {/* 5. 보관되는 데이터 / 보관 기간 */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">법적 의무로 보관되는 데이터</h2>
          <p className="text-neutral-700 leading-relaxed mb-3">
            관련 법령(전자상거래법, 통신비밀보호법 등)에 따라 아래 항목은
            계정 삭제 후에도 일정 기간 보관될 수 있습니다.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="text-left px-4 py-2 font-semibold">항목</th>
                  <th className="text-left px-4 py-2 font-semibold">보관 기간</th>
                  <th className="text-left px-4 py-2 font-semibold">근거</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3">결제 및 청구 기록</td>
                  <td className="px-4 py-3">5년</td>
                  <td className="px-4 py-3 text-neutral-600">전자상거래법 제6조</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">소비자 불만·분쟁 처리 기록</td>
                  <td className="px-4 py-3">3년</td>
                  <td className="px-4 py-3 text-neutral-600">전자상거래법 제6조</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">접속 로그</td>
                  <td className="px-4 py-3">3개월</td>
                  <td className="px-4 py-3 text-neutral-600">통신비밀보호법 제15조</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-500 mt-3 leading-relaxed">
            보관 기간이 지나면 자동으로 파기됩니다. 보관되는 항목은 본인 식별이
            가능한 최소한의 정보로 한정되며, 다른 목적으로 이용되지 않습니다.
          </p>
        </section>

        {/* 푸터 */}
        <footer className="border-t border-neutral-200 pt-8 mt-16 text-sm text-neutral-500 space-y-1">
          <p>운영자 · 교진 (KYORANG)</p>
          <p>문의 · kyojin0527@kyorang.com</p>
          <p>최종 업데이트 · 2026년 6월</p>
        </footer>
      </div>
    </main>
  );
}