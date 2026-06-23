import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '교랑빌리지 계정 삭제 안내 | 교랑',
  description:
    '교랑빌리지(Kyorang Village) 계정 및 데이터 삭제를 요청하는 방법을 안내합니다.',
  robots: { index: true, follow: true },
};

const CONTACT_EMAIL = 'rywls123450@gmail.com';
const MAIL_SUBJECT = '교랑빌리지 계정 삭제 요청';
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  MAIL_SUBJECT,
)}`;

// 삭제되는 데이터 목록
const DELETED_DATA = [
  '계정 정보 (휴대폰 번호 기반 로그인 정보)',
  '프로필 (닉네임, 프로필 사진, 소개)',
  '가입한 마을 목록 및 마을 활동 기록',
  '채팅 메시지 (마을 채팅 및 1:1 대화)',
  '게시글, 댓글, 좋아요',
  '챌린지 참여 및 인증 기록 (인증 사진 포함)',
  '친구 관계 및 차단 목록',
];

// 일정 기간 보관 후 파기되는 데이터
const RETAINED_DATA = [
  {
    label: '신고 접수 기록',
    period: '최대 1년',
    reason: '분쟁 처리 및 부정 이용 방지 목적',
  },
  {
    label: '법령상 보존 의무가 있는 기록',
    period: '법정 기간',
    reason: '관계 법령에서 정한 기간 동안 보관',
  },
];

export default function VillageDeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#FBF6EE] text-[#3D3229]">
      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
        {/* 헤더 */}
        <header className="mb-14">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#F2E4D5] px-3 py-1 text-xs font-semibold tracking-wide text-[#C85F38]">
            교랑빌리지 · Kyorang Village
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            계정 삭제 안내
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#8A7D6F]">
            교랑(Kyorang)이 운영하는 모바일 앱{' '}
            <strong className="font-semibold text-[#3D3229]">
              교랑빌리지
            </strong>
            의 계정 및 데이터 삭제 절차를 안내합니다.
          </p>
        </header>

        {/* 삭제 요청 방법 */}
        <Section title="계정 삭제를 요청하는 방법">
          <ol className="space-y-5">
            <Step n={1}>
              아래 버튼을 눌러 계정 삭제 요청 메일을 보내 주세요.
              <a
                href={MAILTO}
                className="mt-3 flex flex-col gap-1 rounded-2xl bg-[#3D3229] px-5 py-4 text-white transition-colors hover:bg-[#2C241D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E07B54] sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm text-[#E8DDCE]">
                  메일로 삭제 요청 보내기
                </span>
                <span className="text-base font-semibold">
                  {CONTACT_EMAIL}
                </span>
              </a>
            </Step>

            <Step n={2}>
              메일 제목에{' '}
              <strong className="font-semibold">
                &ldquo;교랑빌리지 계정 삭제 요청&rdquo;
              </strong>
              을 적고, 본문에 가입한{' '}
              <strong className="font-semibold">휴대폰 번호</strong>를 함께
              보내 주세요. 본인 확인을 위해 해당 번호로 확인 연락을 드릴 수
              있습니다.
            </Step>

            <Step n={3}>
              본인 확인이 완료되면{' '}
              <strong className="font-semibold">영업일 기준 7일 이내</strong>
              에 계정과 데이터가 삭제되며, 완료 후 회신을 드립니다.
            </Step>
          </ol>

          <p className="mt-6 rounded-xl bg-[#F7EEE2] px-4 py-3 text-sm leading-relaxed text-[#8A7D6F]">
            추후 앱 업데이트를 통해 앱 내{' '}
            <strong className="font-semibold text-[#3D3229]">
              [마이 → 회원 탈퇴]
            </strong>{' '}
            메뉴에서 직접 탈퇴할 수 있는 기능이 제공될 예정입니다.
          </p>
        </Section>

        {/* 삭제되는 데이터 */}
        <Section title="삭제되는 데이터">
          <p className="mb-5 leading-relaxed text-[#6B5D4F]">
            계정 삭제 시 아래 데이터가 모두{' '}
            <strong className="font-semibold text-[#3D3229]">영구적으로</strong>{' '}
            삭제되며 복구할 수 없습니다.
          </p>
          <ul className="space-y-3">
            {DELETED_DATA.map((item) => (
              <li key={item} className="flex items-start gap-3 leading-relaxed">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C04B2E]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 보관되는 데이터 */}
        <Section title="일정 기간 보관되는 데이터">
          <p className="mb-5 leading-relaxed text-[#6B5D4F]">
            관련 법령 준수 및 서비스 악용 방지를 위해 아래 데이터는 삭제
            요청일로부터 명시된 기간 동안 분리 보관 후 파기됩니다.
          </p>
          <ul className="space-y-3">
            {RETAINED_DATA.map((item) => (
              <li
                key={item.label}
                className="rounded-2xl border border-[#EDE4D7] bg-[#FDF8F1] px-4 py-3"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold">{item.label}</span>
                  <span className="rounded-full bg-[#F2E4D5] px-2.5 py-0.5 text-xs font-semibold text-[#C85F38]">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#8A7D6F]">{item.reason}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 문의 */}
        <section className="rounded-2xl border border-[#EDE4D7] bg-[#FDF8F1] p-6">
          <h2 className="mb-2 text-lg font-bold">문의</h2>
          <p className="leading-relaxed text-[#8A7D6F]">
            계정 삭제 및 개인정보 처리에 관한 문의는{' '}
            <a
              href={MAILTO}
              className="font-semibold text-[#C85F38] underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            로 연락해 주세요.
          </p>
        </section>

        <p className="mt-12 text-xs text-[#B5A998]">
          최종 업데이트: 2026년 6월 · 운영: 교랑 (Kyorang)
        </p>
      </div>
    </main>
  );
}

// ───────────────────────────────────────────────
// 내부 컴포넌트
// ───────────────────────────────────────────────

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-5 flex items-center gap-3 text-xl font-bold">
        <span aria-hidden className="h-5 w-1 rounded-full bg-[#E07B54]" />
        {title}
      </h2>
      {children}
    </section>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E07B54] text-sm font-bold text-white">
        {n}
      </span>
      <div className="flex-1 pt-1 leading-relaxed">{children}</div>
    </li>
  );
}